# RetailerOS - Task Tracker

> This file tracks all tasks for the RetailerOS project. Updated every session.
> **Branch:** `dev-working`
> **Netlify:** https://gorgeous-raindrop-78b58d.netlify.app/
> **Last Updated:** 2026-02-06

---

## Completed Tasks

- [x] Clone repo and set up local environment
- [x] Create `dev-working` branch (protect main)
- [x] Set up task tracking (this file)

---

## In Progress

- [ ] Set up Netlify CLI deployment
- [ ] Run local dev server for previewing changes

---

## Upcoming / Backlog

- [ ] Fix expired external DB auth token (Turso)
- [ ] Implement real OTP service integration (Twilio/AWS SNS)
- [ ] Build retailer dashboard view for registered retailers
- [ ] Add bulk import for approved retailers
- [ ] Admin approval workflow panel
- [ ] Mark retailers as registered in external DB after onboarding
- [ ] General UI/UX improvements
- [ ] Performance optimization

---

## Notes

- External DB token is expired; use `node enable_dev_mode.js` for testing with mock data
- Test mobile numbers (when token is active): `9762394014`, `9896020040`
- Unique retailer code format: `ROS-YYYYMMDD-XXXX`
