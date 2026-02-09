# PM System API

Lightweight SQLite + Express API for projects, tasks, comments, resources, and dashboard sync.

## Run

```bash
cd ceo-agent/pm-system
npm install
npm start
```

Server runs on `http://127.0.0.1:8787` by default (`PM_PORT` to override).

## GitHub Integration (Phase 3)

This integration creates issues from approved tasks and syncs issue status back to tasks.

### 1) Set a token in environment

Use a GitHub token with repo issue permissions:

```bash
export GITHUB_TOKEN=ghp_xxx
```

> Security default: token values are **not** stored in DB. Only the env var key name (example: `GITHUB_TOKEN`) is saved.

### 2) Configure integration

```bash
curl -X POST http://127.0.0.1:8787/integrations/github/config \
  -H 'Content-Type: application/json' \
  -d '{"owner":"your-org","repo":"your-repo","token_env_var":"GITHUB_TOKEN"}'
```

### 3) Export approved tasks to GitHub issues

```bash
curl -X POST http://127.0.0.1:8787/sync/github/export-approved
```

For each approved task without `github_issue_number`, API creates a GitHub issue and stores:
- `github_issue_number`
- `github_issue_url`

### 4) Import issue status back into tasks

```bash
curl -X POST http://127.0.0.1:8787/sync/github/import-status
```

Current mapping:
- GitHub issue `closed` → task status `done`
- open issues keep current task status

### 5) Suggest assignee from discussion

```bash
curl -X POST http://127.0.0.1:8787/tasks/<TASK_ID>/suggest-assignee
```

Heuristic uses keywords in task title + task comments and matches them against resource role/job description.
