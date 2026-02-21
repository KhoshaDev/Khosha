import http from 'http';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const FILES_DIR = '/var/www/khosha/files';
const PORT = 4000;

function getMime(file) {
  if (file.endsWith('.md')) return 'text/plain; charset=utf-8';
  if (file.endsWith('.json')) return 'application/json';
  if (file.endsWith('.html')) return 'text/html';
  if (file.endsWith('.css')) return 'text/css';
  return 'text/plain';
}

function listFiles(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const result = [];
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const rel = base ? `${base}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      result.push({ type: 'dir', name: e.name, path: rel, children: listFiles(full, rel) });
    } else {
      const stat = fs.statSync(full);
      result.push({ type: 'file', name: e.name, path: rel, size: stat.size, mtime: stat.mtime });
    }
  }
  return result;
}

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function json(res, data, status = 200) {
  cors(res);
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function safePath(p) {
  const resolved = path.resolve(FILES_DIR, p);
  if (!resolved.startsWith(FILES_DIR)) throw new Error('Invalid path');
  return resolved;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost`);
  const pathname = url.pathname;

  cors(res);
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // API routes
  if (pathname === '/files/api/list' && req.method === 'GET') {
    try {
      json(res, listFiles(FILES_DIR));
    } catch (e) {
      json(res, { error: e.message }, 500);
    }
    return;
  }

  if (pathname === '/files/api/read' && req.method === 'GET') {
    const p = url.searchParams.get('path');
    if (!p) return json(res, { error: 'missing path' }, 400);
    try {
      const full = safePath(p);
      const content = fs.readFileSync(full, 'utf8');
      cors(res);
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(content);
    } catch (e) {
      json(res, { error: e.message }, 404);
    }
    return;
  }

  if (pathname === '/files/api/save' && req.method === 'POST') {
    const p = url.searchParams.get('path');
    if (!p) return json(res, { error: 'missing path' }, 400);
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const full = safePath(p);
        fs.mkdirSync(path.dirname(full), { recursive: true });
        fs.writeFileSync(full, body, 'utf8');
        json(res, { ok: true });
      } catch (e) {
        json(res, { error: e.message }, 500);
      }
    });
    return;
  }

  if (pathname === '/files/api/download' && req.method === 'GET') {
    const p = url.searchParams.get('path');
    if (!p) return json(res, { error: 'missing path' }, 400);
    try {
      const full = safePath(p);
      const content = fs.readFileSync(full);
      const name = path.basename(full);
      cors(res);
      res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${name}"`
      });
      res.end(content);
    } catch (e) {
      json(res, { error: e.message }, 404);
    }
    return;
  }

  // Serve index.html for /files and /files/
  if (pathname === '/files' || pathname === '/files/' || pathname === '/files/index.html') {
    try {
      const html = fs.readFileSync('/var/www/khosha/files/index.html', 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } catch (e) {
      res.writeHead(404); res.end('Not found');
    }
    return;
  }

  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Files server running on http://127.0.0.1:${PORT}`);
});
