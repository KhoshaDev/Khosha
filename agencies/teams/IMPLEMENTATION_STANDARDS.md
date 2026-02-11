# Protocol: Design Freeze & Implementation Standards (Mission Control)
**Date:** 2026-02-11
**Issued by:** Ishaan (Project Manager)
**Status:** MANDATORY

## 1. Design Freeze
The UI/UX design of the **Mission Control Dashboard** (currently V7.1 Light Theme) is officially **FROZEN**. 
- No further stylistic changes, layout shifts, or theme modifications are permitted without explicit approval from Ankit.
- All future features must be built *into* the existing layout.

## 2. Implementation Rules for Developers (Aryan & Kavya)
To maintain consistency and data integrity, all development must follow these rules:

- **Approved Schema Only:** Any new functionality requiring data must first have its schema defined and approved.
- **Database-First Development:** We will no longer rely on dummy `state` objects in JavaScript. All new agent tasks, project progress, and chat messages must be stored in the **Turso/libSQL** database.
- **Data Persistence:** If a new piece of data is required (e.g., agent skill tags, real chat history), the developer must:
    1. Update the Turso schema.
    2. Update the API/Backend to serve that data.
    3. Update the frontend to fetch and render it.

## 3. The "Standard of Truth"
The current version of `agencies/teams/dashboard/index.html` is the "Standard." Any agent working on this repository is bound by this protocol.

**Next Immediate Goal:** Transitioning the dashboard from a static state to a dynamic one powered by our Turso database connection.
