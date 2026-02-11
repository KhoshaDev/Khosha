# KMS Brand Language v2

## Direction
KMS v2 should feel **modern, focused, and mobile-first**. The UI must reduce noise, increase clarity, and make execution status obvious in under 3 seconds.

## Core Brand Principles
1. **Action-first**: Every screen should answer "what should I do next?"
2. **Status clarity**: Task/project state is always visible and color-consistent.
3. **Mobile-native rhythm**: Card-based layouts, thumb-friendly controls, short scannable blocks.
4. **Human + agent collaboration**: UI makes it explicit which work is by Keith vs hired agents.
5. **Operational calm**: Dense data, low visual stress.

## Visual Language

### Palette (slate + signal accents)
- Primary Ink: `#0F172A`
- Background Soft: `#E2E8F0`
- Surface: `#FFFFFF`
- Surface Alt: `#F8FAFC`
- Border: `#E2E8F0`
- Text Muted: `#64748B`
- Success: `#16A34A`
- Warning: `#D97706`
- Danger: `#DC2626`
- Info: `#2563EB`

### Typography
- Family: **Plus Jakarta Sans**
- Scale:
  - H1: 28/34, 800
  - H2: 20/28, 700
  - H3: 16/24, 700
  - Body: 14/22, 500
  - Meta: 12/18, 600

### Shape + Spacing
- Card radius: `20px`
- Inputs/buttons radius: `10–12px`
- Main spacing scale: `8, 12, 16, 24, 32`
- Card padding: `14–18px`

### Components
- **Project Card**: name, owner, status chip, scope summary, dependency count, next action CTA.
- **Task Row**: title, assignee, status, eta, blocker flag.
- **Dependency Pill**: `Pending`, `Need Input`, `Cleared`, `Blocked`.
- **Agent Badge**: role icon + skill-pack tag + current load indicator.

## UX Standards

### Navigation
- Bottom/tab nav on mobile for top modules.
- Sticky context header per module (project, assignee, state).
- One-tap return to active project workspace.

### Pipeline states
Each task must visually flow through:
- `todo` → `in_progress` → `review` → `done`
- optional: `blocked`

### Interaction rules
- Primary action always visible above fold.
- Use progressive disclosure for advanced details.
- System prompts for missing dependencies before execution.

## Agent Operating Model in UI
- Keith and Ankit can both hire from Hiring module.
- New hires receive role-based **ready skill packs**.
- Feedback from Ankit/Keith becomes training backlog.
- Idle agents auto-pull learning tasks when no active delivery tasks.

## Immediate Implementation Priorities (Wave 1)
1. Apply design tokens globally (colors/typography/radius/spacing)
2. Upgrade Projects module to full brief/scope/dependency-first layout
3. Add task state pipeline chips + visual progress bars
4. Add dependency board and blocker workflow
5. Add agent role badge system in workforce/project views

## Done Criteria for this document
- Brand language is concrete and implementable.
- Colors, type, spacing, and interaction principles are specified.
- Directly usable by UI/UX and engineering tasks.
