# CEO Agent v2 Playbook (SaaS-first)

## What changed from v1
- Dynamic workforce model added (`config/workforce-v2.json`)
- Kanban PM dashboard added (`data/kanban.sample.json` + dashboard updates)
- Employee/agent directory added (`EMPLOYEES.md`)

## Delegation protocol
1. Intake task
2. Classify complexity + risk using tier0 model
3. Assign owner department + specialist agent
4. Add card to Kanban lane
5. Track blocker/ETA/model tier
6. Escalate to tier2/tier3 only when justified

CEO Agent Name: **Keith Anderson**

## Cost protocol
- tier0 for preprocessing/classification
- tier1 for normal execution
- tier2 for strategy/multi-step architecture
- tier3 only for critical/high-stakes outputs

## Project backlog generation (when GitHub access is provided)
For each repo:
1. Parse current architecture
2. Identify missing SaaS capabilities:
   - auth, onboarding, billing, analytics, error handling, observability
3. Build backlog buckets:
   - P0 foundations (must-have)
   - P1 growth and reliability
   - P2 optimization and scale
4. Create sprint plan with estimates and dependencies
5. Surface ROI-ranked roadmap to CEO dashboard

## SaaS quality bar (world-class)
- Fast onboarding to first value
- Clear retention loops
- Strong observability + reliability
- Measurable growth metrics
- Automated quality checks and release discipline
