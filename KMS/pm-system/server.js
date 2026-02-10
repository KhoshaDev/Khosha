import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createIssue, listIssues } from './github.js';
import { createClient } from '@libsql/client';

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, 'data');
fs.mkdirSync(dataDir, { recursive: true });
const db = new Database(path.join(dataDir, 'keith_pm.db'));
db.exec(fs.readFileSync(path.resolve(__dirname, 'schema.sql'), 'utf8'));

const tursoUrl = process.env.TURSO_DATABASE_URL || process.env.TURSO_URL;
const tursoToken = process.env.TURSO_AUTH_TOKEN;
const turso = (tursoUrl && tursoToken) ? createClient({ url: tursoUrl, authToken: tursoToken }) : null;

const TABLE_SYNC_PLAN = {
  projects: ['id', 'name', 'status', 'owner', 'description', 'scope_summary', 'dependencies', 'ceo_owner', 'created_at', 'updated_at'],
  tasks: ['id', 'project_id', 'title', 'status', 'assignee', 'approved', 'github_issue_number', 'github_issue_url', 'start_date', 'due_date', 'depends_on', 'idle_reason', 'created_at', 'updated_at'],
  subtasks: ['id', 'task_id', 'title', 'done', 'created_at'],
  comments: ['id', 'project_id', 'task_id', 'author', 'body', 'created_at'],
  chats: ['id', 'agent', 'message', 'created_at'],
  resources: ['id', 'name', 'role', 'type', 'start_date', 'job_description'],
  documents: ['id', 'title', 'path', 'created_at'],
  credentials_registry: ['id', 'key_alias', 'status', 'location'],
  integrations_github: ['id', 'repo', 'owner', 'token_env_var', 'enabled']
};

async function ensureTursoSchemaAndSeed() {
  if (!turso) return;
  try {
    const rawSchema = fs.readFileSync(path.resolve(__dirname, 'schema.sql'), 'utf8');
    const statements = rawSchema
      .split(';')
      .map((s) => s.trim())
      .filter((s) => s && !/^PRAGMA\s+/i.test(s));

    for (const stmt of statements) {
      await turso.execute(stmt);
    }

    const tursoMigrations = [
      'ALTER TABLE projects ADD COLUMN description TEXT',
      'ALTER TABLE projects ADD COLUMN scope_summary TEXT',
      'ALTER TABLE projects ADD COLUMN dependencies TEXT',
      "ALTER TABLE projects ADD COLUMN ceo_owner TEXT DEFAULT 'Keith Anderson'",
      'ALTER TABLE tasks ADD COLUMN github_issue_number INTEGER',
      'ALTER TABLE tasks ADD COLUMN github_issue_url TEXT',
      'ALTER TABLE tasks ADD COLUMN start_date TEXT',
      'ALTER TABLE tasks ADD COLUMN due_date TEXT',
      'ALTER TABLE tasks ADD COLUMN depends_on TEXT',
      'ALTER TABLE tasks ADD COLUMN idle_reason TEXT'
    ];

    for (const mig of tursoMigrations) {
      try { await turso.execute(mig); } catch (_) { /* ignore already-exists */ }
    }

    for (const [table, cols] of Object.entries(TABLE_SYNC_PLAN)) {
      const rows = db.prepare(`SELECT ${cols.join(', ')} FROM ${table}`).all();
      if (!rows.length) continue;
      const placeholders = cols.map(() => '?').join(', ');
      const upsertSql = `INSERT OR REPLACE INTO ${table} (${cols.join(', ')}) VALUES (${placeholders})`;
      for (const row of rows) {
        const args = cols.map((c) => row[c]);
        await turso.execute({ sql: upsertSql, args });
      }
    }

    console.log('[Turso] schema ensured and seed sync complete');
  } catch (err) {
    console.error('[Turso] bootstrap failed:', err?.message || err);
  }
}

await ensureTursoSchemaAndSeed();

// Lightweight migrations for existing DBs.
const taskColumns = db.prepare('PRAGMA table_info(tasks)').all().map((c) => c.name);
if (!taskColumns.includes('github_issue_number')) {
  db.exec('ALTER TABLE tasks ADD COLUMN github_issue_number INTEGER');
}
if (!taskColumns.includes('github_issue_url')) {
  db.exec('ALTER TABLE tasks ADD COLUMN github_issue_url TEXT');
}
if (!taskColumns.includes('start_date')) {
  db.exec('ALTER TABLE tasks ADD COLUMN start_date TEXT');
}
if (!taskColumns.includes('due_date')) {
  db.exec('ALTER TABLE tasks ADD COLUMN due_date TEXT');
}
if (!taskColumns.includes('depends_on')) {
  db.exec('ALTER TABLE tasks ADD COLUMN depends_on TEXT');
}
if (!taskColumns.includes('idle_reason')) {
  db.exec('ALTER TABLE tasks ADD COLUMN idle_reason TEXT');
}

const projectColumns = db.prepare('PRAGMA table_info(projects)').all().map((c) => c.name);
if (!projectColumns.includes('description')) {
  db.exec('ALTER TABLE projects ADD COLUMN description TEXT');
}
if (!projectColumns.includes('scope_summary')) {
  db.exec('ALTER TABLE projects ADD COLUMN scope_summary TEXT');
}
if (!projectColumns.includes('dependencies')) {
  db.exec('ALTER TABLE projects ADD COLUMN dependencies TEXT');
}
if (!projectColumns.includes('ceo_owner')) {
  db.exec("ALTER TABLE projects ADD COLUMN ceo_owner TEXT DEFAULT 'Keith Anderson'");
}

const now = () => new Date().toISOString();
const id = (p) => `${p}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

function getGithubConfig() {
  return db.prepare('SELECT * FROM integrations_github WHERE enabled=1 ORDER BY rowid DESC LIMIT 1').get();
}

function keywordSet(text) {
  return new Set((text || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
}

app.get('/health', (_req, res) => res.json({ ok: true, tursoConfigured: Boolean(turso) }));

app.get('/turso/health', async (_req, res) => {
  try {
    if (!turso) return res.status(400).json({ ok: false, error: 'Turso not configured (TURSO_DATABASE_URL/TURSO_AUTH_TOKEN)' });
    const ping = await turso.execute('SELECT 1 as ok');
    return res.json({ ok: true, rows: ping.rows });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
});

app.post('/turso/sync', async (_req, res) => {
  try {
    if (!turso) return res.status(400).json({ ok: false, error: 'Turso not configured (TURSO_DATABASE_URL/TURSO_AUTH_TOKEN)' });
    await ensureTursoSchemaAndSeed();
    return res.json({ ok: true, message: 'Turso schema + seed sync completed' });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
});

app.get('/projects', (_req, res) => res.json(db.prepare('SELECT * FROM projects ORDER BY updated_at DESC').all()));
app.post('/projects', (req, res) => {
  const x = {
    id: id('proj'),
    name: req.body.name,
    status: req.body.status || 'planning',
    owner: req.body.owner || 'Keith Anderson',
    description: req.body.description || null,
    scope_summary: req.body.scope_summary || null,
    dependencies: req.body.dependencies || null,
    ceo_owner: req.body.ceo_owner || 'Keith Anderson',
    created_at: now(),
    updated_at: now()
  };
  db.prepare('INSERT INTO projects (id,name,status,owner,description,scope_summary,dependencies,ceo_owner,created_at,updated_at) VALUES (@id,@name,@status,@owner,@description,@scope_summary,@dependencies,@ceo_owner,@created_at,@updated_at)').run(x);
  res.json(x);
});

app.post('/projects/:projectId/bootstrap-ceo', (req, res) => {
  const project = db.prepare('SELECT * FROM projects WHERE id=?').get(req.params.projectId);
  if (!project) return res.status(404).json({ error: 'Project not found' });

  const body = req.body || {};
  const scope = body.scope_summary || project.scope_summary || 'MVP delivery with clear milestones';
  const owner = body.ceo_owner || project.ceo_owner || 'Keith Anderson';

  db.prepare('UPDATE projects SET scope_summary=?, ceo_owner=?, updated_at=? WHERE id=?').run(scope, owner, now(), project.id);

  const taskTemplates = [
    `CEO kickoff: define success metrics for ${project.name}`,
    `Research & planning: break ${project.name} into phases`,
    `Build phase: implement MVP scoped to "${scope}"`,
    `QA & integration: verify modules and data connections`,
    `Launch & review: deploy and collect feedback`
  ];

  const insertTask = db.prepare(`INSERT INTO tasks (
    id, project_id, title, status, assignee, approved,
    github_issue_number, github_issue_url, start_date, due_date, depends_on, idle_reason, created_at, updated_at
  ) VALUES (
    @id, @project_id, @title, @status, @assignee, @approved,
    @github_issue_number, @github_issue_url, @start_date, @due_date, @depends_on, @idle_reason, @created_at, @updated_at
  )`);

  const created = [];
  for (const title of taskTemplates) {
    const t = {
      id: id('task'),
      project_id: project.id,
      title,
      status: 'todo',
      assignee: owner,
      approved: 0,
      github_issue_number: null,
      github_issue_url: null,
      start_date: null,
      due_date: null,
      depends_on: null,
      idle_reason: null,
      created_at: now(),
      updated_at: now()
    };
    insertTask.run(t);
    created.push(t);
  }

  res.json({ ok: true, project_id: project.id, ceo_owner: owner, scope_summary: scope, created_tasks: created });
});

app.get('/projects/:projectId/tasks', (req, res) => res.json(db.prepare('SELECT * FROM tasks WHERE project_id=? ORDER BY updated_at DESC').all(req.params.projectId)));
app.post('/projects/:projectId/tasks', (req, res) => {
  const t = {
    id: id('task'),
    project_id: req.params.projectId,
    title: req.body.title,
    status: req.body.status || 'todo',
    assignee: req.body.assignee || null,
    approved: 0,
    github_issue_number: null,
    github_issue_url: null,
    start_date: req.body.start_date || null,
    due_date: req.body.due_date || null,
    depends_on: req.body.depends_on || null,
    idle_reason: req.body.idle_reason || null,
    created_at: now(),
    updated_at: now()
  };
  db.prepare(`INSERT INTO tasks (
    id, project_id, title, status, assignee, approved,
    github_issue_number, github_issue_url, start_date, due_date, depends_on, idle_reason, created_at, updated_at
  ) VALUES (
    @id, @project_id, @title, @status, @assignee, @approved,
    @github_issue_number, @github_issue_url, @start_date, @due_date, @depends_on, @idle_reason, @created_at, @updated_at
  )`).run(t);
  res.json(t);
});
app.post('/tasks/:taskId/approve', (req, res) => {
  db.prepare('UPDATE tasks SET approved=1, updated_at=? WHERE id=?').run(now(), req.params.taskId);
  res.json({ ok: true });
});
app.post('/tasks/:taskId/assign', (req, res) => {
  db.prepare('UPDATE tasks SET assignee=?, updated_at=? WHERE id=?').run(req.body.assignee || null, now(), req.params.taskId);
  res.json({ ok: true });
});
app.post('/tasks/:taskId/status', (req, res) => {
  db.prepare('UPDATE tasks SET status=?, updated_at=? WHERE id=?').run(req.body.status || 'todo', now(), req.params.taskId);
  res.json({ ok: true });
});

app.get('/tasks/:taskId/subtasks', (req, res) => res.json(db.prepare('SELECT * FROM subtasks WHERE task_id=?').all(req.params.taskId)));
app.post('/tasks/:taskId/subtasks', (req, res) => {
  const s = { id: id('sub'), task_id: req.params.taskId, title: req.body.title, done: 0, created_at: now() };
  db.prepare('INSERT INTO subtasks VALUES (@id,@task_id,@title,@done,@created_at)').run(s);
  res.json(s);
});

app.get('/comments', (req, res) => res.json(db.prepare('SELECT * FROM comments ORDER BY created_at DESC LIMIT 300').all()));
app.post('/comments', (req, res) => {
  const c = { id: id('com'), project_id: req.body.project_id || null, task_id: req.body.task_id || null, author: req.body.author || 'Agent', body: req.body.body, created_at: now() };
  db.prepare('INSERT INTO comments VALUES (@id,@project_id,@task_id,@author,@body,@created_at)').run(c);
  res.json(c);
});

app.get('/chat', (req, res) => res.json(db.prepare('SELECT * FROM chats ORDER BY created_at DESC LIMIT 300').all()));
app.post('/chat', (req, res) => {
  const c = { id: id('chat'), agent: req.body.agent || 'Keith Anderson', message: req.body.message, created_at: now() };
  db.prepare('INSERT INTO chats VALUES (@id,@agent,@message,@created_at)').run(c);
  res.json(c);
});

app.get('/resources', (_req, res) => res.json(db.prepare('SELECT * FROM resources').all()));
app.post('/resources', (req, res) => {
  const r = { id: id('res'), name: req.body.name, role: req.body.role, type: req.body.type || 'agent', start_date: req.body.start_date || null, job_description: req.body.job_description || null };
  db.prepare('INSERT INTO resources VALUES (@id,@name,@role,@type,@start_date,@job_description)').run(r);
  res.json(r);
});

app.get('/documents', (_req, res) => res.json(db.prepare('SELECT * FROM documents').all()));
app.post('/documents', (req, res) => {
  const d = { id: id('doc'), title: req.body.title, path: req.body.path, created_at: now() };
  db.prepare('INSERT INTO documents VALUES (@id,@title,@path,@created_at)').run(d);
  res.json(d);
});

app.post('/integrations/github/config', (req, res) => {
  const { owner, repo, token_env_var } = req.body || {};
  if (!owner || !repo || !token_env_var) {
    return res.status(400).json({ error: 'owner, repo, and token_env_var are required' });
  }
  db.prepare('UPDATE integrations_github SET enabled=0').run();
  const cfg = { id: id('gh'), owner, repo, token_env_var, enabled: 1 };
  db.prepare('INSERT INTO integrations_github (id, owner, repo, token_env_var, enabled) VALUES (@id,@owner,@repo,@token_env_var,@enabled)').run(cfg);
  return res.json({ ok: true, config: { owner, repo, token_env_var, enabled: 1 } });
});

app.post('/sync/github/export-approved', async (_req, res) => {
  try {
    const cfg = getGithubConfig();
    if (!cfg) {
      return res.status(400).json({ error: 'GitHub integration not configured' });
    }

    const tasks = db.prepare(`SELECT t.*, p.name as project_name
      FROM tasks t
      JOIN projects p ON p.id = t.project_id
      WHERE t.approved=1 AND t.github_issue_number IS NULL
      ORDER BY t.updated_at DESC`).all();

    const updateStmt = db.prepare('UPDATE tasks SET github_issue_number=?, github_issue_url=?, updated_at=? WHERE id=?');
    const created = [];

    for (const t of tasks) {
      const issue = await createIssue({
        owner: cfg.owner,
        repo: cfg.repo,
        tokenEnvVar: cfg.token_env_var,
        title: t.title,
        body: `PM Task ID: ${t.id}\nProject: ${t.project_name}\nStatus: ${t.status}`
      });
      updateStmt.run(issue.number, issue.html_url, now(), t.id);
      created.push({ task_id: t.id, issue_number: issue.number, issue_url: issue.html_url });
    }

    return res.json({ ok: true, exported_count: created.length, created });
  } catch (error) {
    return res.status(500).json({ error: String(error.message || error) });
  }
});

app.post('/sync/github/import-status', async (_req, res) => {
  try {
    const cfg = getGithubConfig();
    if (!cfg) {
      return res.status(400).json({ error: 'GitHub integration not configured' });
    }

    const issues = await listIssues({ owner: cfg.owner, repo: cfg.repo, tokenEnvVar: cfg.token_env_var, state: 'all' });
    const issueMap = new Map(issues.filter((i) => !i.pull_request).map((i) => [i.number, i]));

    const linkedTasks = db.prepare('SELECT id, status, github_issue_number FROM tasks WHERE github_issue_number IS NOT NULL').all();
    const updateStatus = db.prepare('UPDATE tasks SET status=?, updated_at=? WHERE id=?');
    let updatedCount = 0;

    for (const task of linkedTasks) {
      const issue = issueMap.get(task.github_issue_number);
      if (!issue) continue;
      const nextStatus = issue.state === 'closed' ? 'done' : task.status;
      if (nextStatus !== task.status) {
        updateStatus.run(nextStatus, now(), task.id);
        updatedCount += 1;
      }
    }

    return res.json({ ok: true, checked: linkedTasks.length, updated: updatedCount });
  } catch (error) {
    return res.status(500).json({ error: String(error.message || error) });
  }
});

app.post('/tasks/:taskId/suggest-assignee', (req, res) => {
  const task = db.prepare('SELECT * FROM tasks WHERE id=?').get(req.params.taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const comments = db.prepare('SELECT body FROM comments WHERE task_id=? ORDER BY created_at DESC LIMIT 50').all(task.id);
  const text = `${task.title} ${(comments || []).map((c) => c.body).join(' ')}`.toLowerCase();
  const textKeywords = keywordSet(text);

  const resources = db.prepare('SELECT * FROM resources').all();
  if (!resources.length) {
    return res.json({ ok: true, suggested_assignee: null, reason: 'No resources available' });
  }

  let best = null;
  for (const resource of resources) {
    const roleText = `${resource.role || ''} ${resource.job_description || ''}`.toLowerCase();
    const roleKeywords = keywordSet(roleText);
    let score = 0;

    for (const kw of roleKeywords) {
      if (textKeywords.has(kw)) score += 1;
    }

    if (text.includes((resource.name || '').toLowerCase())) score += 2;

    if (!best || score > best.score) {
      best = { resource, score };
    }
  }

  if (!best || best.score === 0) {
    return res.json({ ok: true, suggested_assignee: null, reason: 'No clear keyword match found' });
  }

  return res.json({
    ok: true,
    task_id: task.id,
    suggested_assignee: best.resource.name,
    score: best.score,
    reason: `Matched task/discussion keywords with role: ${best.resource.role}`
  });
});

// ---- KMS v2 operational endpoints ----
app.get('/dashboard/summary', (_req, res) => {
  const projects = db.prepare('SELECT COUNT(*) as c FROM projects').get().c;
  const tasks = db.prepare('SELECT COUNT(*) as c FROM tasks').get().c;
  const resources = db.prepare("SELECT COUNT(*) as c FROM resources WHERE type='agent'").get().c;
  const humans = db.prepare("SELECT COUNT(*) as c FROM resources WHERE type='human'").get().c;
  res.json({ projects, tasks, resources, humans });
});

app.get('/projects/:projectId/overview', (req, res) => {
  const project = db.prepare('SELECT * FROM projects WHERE id=?').get(req.params.projectId);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  const tasks = db.prepare('SELECT * FROM tasks WHERE project_id=? ORDER BY updated_at DESC').all(req.params.projectId);
  const taskIds = tasks.map(t => t.id);
  let subtasks = [];
  if (taskIds.length) {
    const q = taskIds.map(() => '?').join(',');
    subtasks = db.prepare(`SELECT * FROM subtasks WHERE task_id IN (${q})`).all(...taskIds);
  }
  const people = [...new Set(tasks.map(t => t.assignee).filter(Boolean))];
  const progress = {
    total: tasks.length,
    done: tasks.filter(t => t.status === 'done').length,
    in_progress: tasks.filter(t => t.status === 'in_progress').length,
    todo: tasks.filter(t => t.status === 'todo').length,
    blocked: tasks.filter(t => t.status === 'blocked').length
  };
  res.json({ project, tasks, subtasks, people, progress });
});

app.put('/projects/:projectId', (req, res) => {
  const p = db.prepare('SELECT * FROM projects WHERE id=?').get(req.params.projectId);
  if (!p) return res.status(404).json({ error: 'Project not found' });
  const next = {
    ...p,
    name: req.body.name ?? p.name,
    status: req.body.status ?? p.status,
    owner: req.body.owner ?? p.owner,
    description: req.body.description ?? p.description,
    scope_summary: req.body.scope_summary ?? p.scope_summary,
    dependencies: req.body.dependencies ?? p.dependencies,
    ceo_owner: req.body.ceo_owner ?? p.ceo_owner,
    updated_at: now()
  };
  db.prepare('UPDATE projects SET name=@name,status=@status,owner=@owner,description=@description,scope_summary=@scope_summary,dependencies=@dependencies,ceo_owner=@ceo_owner,updated_at=@updated_at WHERE id=@id').run(next);
  res.json(next);
});

app.delete('/projects/:projectId', (req, res) => {
  db.prepare('DELETE FROM subtasks WHERE task_id IN (SELECT id FROM tasks WHERE project_id=?)').run(req.params.projectId);
  db.prepare('DELETE FROM tasks WHERE project_id=?').run(req.params.projectId);
  db.prepare('DELETE FROM comments WHERE project_id=?').run(req.params.projectId);
  db.prepare('DELETE FROM projects WHERE id=?').run(req.params.projectId);
  res.json({ ok: true });
});

app.put('/tasks/:taskId', (req, res) => {
  const t = db.prepare('SELECT * FROM tasks WHERE id=?').get(req.params.taskId);
  if (!t) return res.status(404).json({ error: 'Task not found' });
  const next = {
    ...t,
    title: req.body.title ?? t.title,
    status: req.body.status ?? t.status,
    assignee: req.body.assignee ?? t.assignee,
    start_date: req.body.start_date ?? t.start_date,
    due_date: req.body.due_date ?? t.due_date,
    depends_on: req.body.depends_on ?? t.depends_on,
    idle_reason: req.body.idle_reason ?? t.idle_reason,
    updated_at: now()
  };
  db.prepare('UPDATE tasks SET title=@title,status=@status,assignee=@assignee,start_date=@start_date,due_date=@due_date,depends_on=@depends_on,idle_reason=@idle_reason,updated_at=@updated_at WHERE id=@id').run(next);
  res.json(next);
});

app.delete('/tasks/:taskId', (req, res) => {
  db.prepare('DELETE FROM subtasks WHERE task_id=?').run(req.params.taskId);
  db.prepare('DELETE FROM comments WHERE task_id=?').run(req.params.taskId);
  db.prepare('DELETE FROM tasks WHERE id=?').run(req.params.taskId);
  res.json({ ok: true });
});

app.get('/agents/overview', (_req, res) => {
  const resources = db.prepare('SELECT * FROM resources ORDER BY name').all();
  const out = resources.map(r => {
    const tasks = db.prepare('SELECT * FROM tasks WHERE assignee=? ORDER BY updated_at DESC').all(r.name);
    const inProgress = tasks.filter(t => t.status === 'in_progress');
    const todo = tasks.filter(t => t.status === 'todo');
    const done = tasks.filter(t => t.status === 'done');
    let idle_reason = null;
    if (inProgress.length === 0) {
      if (todo.length > 0) idle_reason = 'Has pending tasks, waiting for auto-pick/start';
      else idle_reason = 'No assigned tasks';
    }
    return { ...r, tasks, stats: { total: tasks.length, in_progress: inProgress.length, todo: todo.length, done: done.length }, idle_reason };
  });
  res.json(out);
});

app.post('/agents/auto-pick', (_req, res) => {
  const agents = db.prepare("SELECT name FROM resources WHERE type='agent'").all();
  let picked = 0;
  for (const a of agents) {
    const active = db.prepare("SELECT id FROM tasks WHERE assignee=? AND status='in_progress' LIMIT 1").get(a.name);
    if (active) continue;
    const next = db.prepare("SELECT id FROM tasks WHERE assignee=? AND status='todo' ORDER BY created_at ASC LIMIT 1").get(a.name);
    if (next) {
      db.prepare("UPDATE tasks SET status='in_progress', start_date=?, idle_reason=NULL, updated_at=? WHERE id=?").run(now(), now(), next.id);
      picked += 1;
    }
  }
  res.json({ ok: true, picked });
});

const port = process.env.PM_PORT || 8787;
app.listen(port, () => console.log(`Keith PM API running on :${port}`));
