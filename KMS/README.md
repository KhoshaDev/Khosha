# CEO Agent v1 (Cost-Optimized)

This is a practical starter system for your **CEO Agent**.

## What this v1 includes

- Cost-first model routing policy
- Agent roles and delegation flow
- Prompt templates for each role
- A lightweight dashboard UI (static) for task + progress tracking
- Netlify-ready deployment config

## Business context encoded

- Website design services
- Digital marketing services
- Product: **Retailer OS**

## Folder structure

- `config/model-routing.json` → strict model tier policy
- `config/agent-roles.json` → CEO + specialist responsibilities
- `data/tasks.sample.json` → sample tasks/events for dashboard
- `prompts/*.md` → prompts for CEO + specialist agents
- `dashboard/` → static UI

## Cost policy summary

- Tier 0 (free/local): classification, tags, formatting, reminders
- Tier 1 (cheap): drafts, summaries, simple task planning
- Tier 2 (mid): strategic decomposition, campaign planning
- Tier 3 (best): only high-stakes/complex tasks

## Run dashboard locally

```bash
cd ceo-agent/dashboard
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to Netlify

### Option A: Drag-and-drop
1. Open Netlify dashboard
2. Create new site from drag-and-drop
3. Upload the `ceo-agent/dashboard` folder

### Option B: Netlify CLI
```bash
npm i -g netlify-cli
cd ceo-agent/dashboard
netlify deploy --prod
```

## Next step (recommended)

Connect this dashboard to a live task source (Google Sheet, Airtable, Notion, or local JSON API) and log every action with:

- task id
- assigned agent
- model tier
- estimated token cost
- status
- outcome
