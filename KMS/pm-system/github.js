const GITHUB_API = 'https://api.github.com';

function getAuthToken(tokenEnvVar) {
  if (!tokenEnvVar) {
    throw new Error('GitHub token env var name is required');
  }
  const token = process.env[tokenEnvVar];
  if (!token) {
    throw new Error(`Missing GitHub token in environment variable: ${tokenEnvVar}`);
  }
  return token;
}

async function githubRequest(tokenEnvVar, method, path, body) {
  const token = getAuthToken(tokenEnvVar);
  const response = await fetch(`${GITHUB_API}${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub API ${method} ${path} failed (${response.status}): ${detail}`);
  }

  return response.json();
}

export async function createIssue({ owner, repo, tokenEnvVar, title, body }) {
  return githubRequest(tokenEnvVar, 'POST', `/repos/${owner}/${repo}/issues`, { title, body });
}

export async function listIssues({ owner, repo, tokenEnvVar, state = 'all', perPage = 100 }) {
  return githubRequest(tokenEnvVar, 'GET', `/repos/${owner}/${repo}/issues?state=${state}&per_page=${perPage}`);
}
