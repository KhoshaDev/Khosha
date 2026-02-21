import http from 'http';
import crypto from 'crypto';
import { URL } from 'url';

const PIN = '4446';
const PORT = 4001;
const COOKIE_NAME = 'khosha_files_token';
const SECRET = crypto.randomBytes(32).toString('hex');
const tokens = new Set();

function sign(token) {
  return crypto.createHmac('sha256', SECRET).update(token).digest('hex');
}

function createToken() {
  const token = crypto.randomBytes(16).toString('hex');
  const sig = sign(token);
  const signed = `${token}.${sig}`;
  tokens.add(signed);
  return signed;
}

function verifyToken(signed) {
  if (!signed) return false;
  const [token, sig] = signed.split('.');
  if (!token || !sig) return false;
  const expected = sign(token);
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected)) && tokens.has(signed);
}

function getCookie(req, name) {
  const header = req.headers['cookie'] || '';
  const match = header.split(';').map(s => s.trim()).find(s => s.startsWith(name + '='));
  return match ? match.slice(name.length + 1) : null;
}

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://khosha.cloud');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  cors(res);
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Verify cookie — used by nginx auth_request
  if (url.pathname === '/verify' && req.method === 'GET') {
    const token = getCookie(req, COOKIE_NAME);
    if (verifyToken(token)) {
      res.writeHead(200); res.end('ok');
    } else {
      res.writeHead(401); res.end('unauthorized');
    }
    return;
  }

  // Login — validate PIN and set cookie
  if (url.pathname === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { pin } = JSON.parse(body);
        if (pin === PIN) {
          const token = createToken();
          res.setHeader('Set-Cookie', `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: false }));
        }
      } catch {
        res.writeHead(400); res.end('bad request');
      }
    });
    return;
  }

  res.writeHead(404); res.end('not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Files auth server running on http://127.0.0.1:${PORT}`);
});
