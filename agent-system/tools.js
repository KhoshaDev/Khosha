import fetch from 'node-fetch';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const FILES_DIR = '/var/www/khosha/files';
const KMS_API = 'http://127.0.0.1:5000';

// ── Tool Implementations ────────────────────────────────────────────────────

export async function webSearch(query) {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
    const res = await fetch(url, { timeout: 10000 });
    const data = await res.json();

    const results = [];
    if (data.AbstractText) {
      results.push({ title: data.Heading, snippet: data.AbstractText, url: data.AbstractURL });
    }
    if (data.RelatedTopics) {
      for (const topic of data.RelatedTopics.slice(0, 6)) {
        if (topic.Text) {
          results.push({ title: topic.Text.split(' - ')[0], snippet: topic.Text, url: topic.FirstURL || '' });
        }
      }
    }
    if (data.Results) {
      for (const r of data.Results.slice(0, 4)) {
        results.push({ title: r.Text, snippet: r.Text, url: r.FirstURL || '' });
      }
    }
    return results.length > 0
      ? results
      : [{ snippet: `No instant results for "${query}". Try a more specific query.` }];
  } catch (e) {
    return [{ error: `Search failed: ${e.message}` }];
  }
}

export async function fetchUrl(url) {
  try {
    const res = await fetch(url, { timeout: 12000, headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const text = html
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return { url, content: text.slice(0, 5000), truncated: text.length > 5000 };
  } catch (e) {
    return { error: `Failed to fetch ${url}: ${e.message}` };
  }
}

export function readFile(filePath) {
  try {
    const safe = path.resolve(FILES_DIR, filePath);
    if (!safe.startsWith(FILES_DIR)) return { error: 'Invalid path' };
    const content = fs.readFileSync(safe, 'utf8');
    return { path: filePath, content: content.slice(0, 8000) };
  } catch (e) {
    return { error: `Cannot read file: ${e.message}` };
  }
}

export function writeFile(filePath, content) {
  try {
    const safe = path.resolve(FILES_DIR, filePath);
    if (!safe.startsWith(FILES_DIR)) return { error: 'Invalid path' };
    fs.mkdirSync(path.dirname(safe), { recursive: true });
    fs.writeFileSync(safe, content, 'utf8');
    return { ok: true, path: filePath, bytes: Buffer.byteLength(content) };
  } catch (e) {
    return { error: `Cannot write file: ${e.message}` };
  }
}

export function runCode(code, description = '') {
  const tmpFile = `/tmp/agent_${Date.now()}.js`;
  try {
    fs.writeFileSync(tmpFile, code);
    const output = execSync(`node ${tmpFile}`, { timeout: 15000, encoding: 'utf8' });
    return { output: output.slice(0, 4000), error: null, description };
  } catch (e) {
    return {
      output: e.stdout?.slice(0, 2000) || '',
      error: e.stderr?.slice(0, 2000) || e.message,
      description
    };
  } finally {
    try { fs.unlinkSync(tmpFile); } catch {}
  }
}

export async function kmsApi(method, endpoint, body = null) {
  try {
    const res = await fetch(`${KMS_API}${endpoint}`, {
      method: method.toUpperCase(),
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      timeout: 10000
    });
    const data = await res.json();
    return { status: res.status, data };
  } catch (e) {
    return { error: `KMS API error: ${e.message}` };
  }
}

// ── Tool Schemas for Claude API ─────────────────────────────────────────────

export const TOOL_SCHEMAS = {
  web_search: {
    name: 'web_search',
    description: 'Search the web for information on any topic. Returns a list of results with titles, snippets, and URLs.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'The search query' }
      },
      required: ['query']
    }
  },
  fetch_url: {
    name: 'fetch_url',
    description: 'Fetch and read the text content of any webpage URL.',
    input_schema: {
      type: 'object',
      properties: {
        url: { type: 'string', description: 'Full URL to fetch (must start with http/https)' }
      },
      required: ['url']
    }
  },
  read_file: {
    name: 'read_file',
    description: 'Read a file from the Khosha Files storage.',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Relative file path within the files directory' }
      },
      required: ['path']
    }
  },
  write_file: {
    name: 'write_file',
    description: 'Write content to a file in the Khosha Files storage.',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Relative file path to write to' },
        content: { type: 'string', description: 'Content to write' }
      },
      required: ['path', 'content']
    }
  },
  run_code: {
    name: 'run_code',
    description: 'Execute JavaScript (Node.js) code and return the output. Use console.log() to output results.',
    input_schema: {
      type: 'object',
      properties: {
        code: { type: 'string', description: 'JavaScript code to execute' },
        description: { type: 'string', description: 'Brief description of what this code does' }
      },
      required: ['code']
    }
  },
  kms_api: {
    name: 'kms_api',
    description: 'Call the Khosha KMS API to read or update business data (leads, projects, tasks, proposals, team, infra).',
    input_schema: {
      type: 'object',
      properties: {
        method: { type: 'string', enum: ['GET', 'POST', 'PUT', 'DELETE'], description: 'HTTP method' },
        endpoint: { type: 'string', description: 'API endpoint e.g. /api/leads, /api/tasks, /api/projects' },
        body: { type: 'object', description: 'Request body for POST/PUT requests' }
      },
      required: ['method', 'endpoint']
    }
  }
};

// ── Tools available per role ────────────────────────────────────────────────

export const ROLE_TOOLS = {
  researcher:  ['web_search', 'fetch_url', 'read_file'],
  developer:   ['run_code', 'read_file', 'write_file', 'web_search', 'fetch_url'],
  analyst:     ['kms_api', 'run_code', 'web_search'],
  writer:      ['web_search', 'fetch_url', 'read_file', 'write_file'],
  coordinator: ['kms_api', 'web_search'],
  general:     ['web_search', 'fetch_url', 'read_file', 'write_file', 'run_code', 'kms_api']
};

export function getToolsForRole(role) {
  const keys = ROLE_TOOLS[role] || ROLE_TOOLS.general;
  return keys.map(k => TOOL_SCHEMAS[k]);
}

// ── Execute a tool by name ──────────────────────────────────────────────────

export async function executeTool(name, input) {
  switch (name) {
    case 'web_search':  return webSearch(input.query);
    case 'fetch_url':   return fetchUrl(input.url);
    case 'read_file':   return readFile(input.path);
    case 'write_file':  return writeFile(input.path, input.content);
    case 'run_code':    return runCode(input.code, input.description);
    case 'kms_api':     return kmsApi(input.method, input.endpoint, input.body);
    default:            return { error: `Unknown tool: ${name}` };
  }
}
