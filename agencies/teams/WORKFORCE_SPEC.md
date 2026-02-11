# Workforce 2.0 Technical Specification

**Version:** 1.0.0  
**Status:** Active / Single Source of Truth  
**Last Updated:** 2026-02-11  
**Project Manager:** Ishaan  

## 1. Overview
The 'Workforce 2.0' interface is a centralized dashboard designed to manage and interact with specialized agents. This document defines the UI/UX requirements and technical architecture for the workforce management page.

## 2. Interface Requirements

### 2.1 Agent Profile Component
Each agent card must display:
- **Real Name:** Indian names (e.g., Aryan, Kavya, Ishaan, Meera).
- **Role Title:** Specific functional designation (e.g., Senior Developer, AI Architect).
- **Profile Photo:** High-resolution avatar placeholder or dynamic image.

### 2.2 Stats Dashboard
A real-time metrics panel per agent:
- **Total Projects:** Count of assigned active/archived projects.
- **Tasks:** Breakdown of **Completed** vs. **Pending** tasks.
- **Real-time Status:** Active indicators (e.g., "Online", "Processing", "Idle", "In a Meeting").

### 2.3 Chat Interface
- **Dedicated Input:** Each agent card/section includes a direct message input field.
- **Functionality:** Sends messages directly to the specific agent's session context.

---

## 3. Technical Architecture (AI Integration)
*Contribution by Kavya (AI Architect)*

### 3.1 Chat Integration Strategy
The Workforce 2.0 dashboard will utilize a **Hybrid MCP/Local Session** approach:
- **Local Session:** Primary for high-frequency, low-latency task updates and immediate state management.
- **MCP (Model Context Protocol):** Used for cross-agent tool discovery and standardized communication between the dashboard and various agent backends. This ensures that the "Chat" input can trigger tool-use across different environments seamlessly.

---

## 4. Scaling Plan: 4 New Hires
*Contribution by Kavya (AI Architect)*

To maintain performance and reliability as the workforce grows by 4 new agents:

1.  **Orchestration Layer:** Implement a load-balancing layer for MCP servers to prevent bottlenecks as concurrent chat sessions increase.
2.  **Resource Allocation:** Each new hire will be assigned a dedicated containerized environment to ensure process isolation and prevent dependency conflicts during task execution.
3.  **Context Sharding:** Use vector-based context retrieval for long-term agent memory to keep session tokens within optimal limits during extended project lifecycles.
4.  **Onboarding Automation:** Standardized `AGENT_BOOTSTRAP` scripts will be updated to auto-register new hires into the Workforce 2.0 metadata registry upon deployment.

---

## 5. Developer Implementation Notes (Aryan)
- **Single Source of Truth:** All UI updates must map directly to the definitions in this file.
- **Future Builds:** Any changes to dashboard logic or agent attributes must be reflected here first.
