# TechLegal AI Demo

A frontend-only demo pack for an English-facing Hong Kong legal AI experience.

This project contains two separate UI directions:

- `general-public-demo/`: a warmer, guidance-first interface for individuals and SMEs
- `professional-demo/`: a more structured workspace for legal teams, in-house counsel, and enterprise review
- `index.html`: a simple selector page that links to both demos

## Preview

### Demo selector

![Demo selector](assets/screenshots/demo-selector.png)

### General public concept

![General public concept](assets/screenshots/general-public-demo.png)

### Professional concept

![Professional concept](assets/screenshots/professional-demo.png)

## Why this exists

This repository is intended for design review and developer handoff.
It does not include backend integration in the current stage.

The current demo focuses on:

- Hong Kong-facing English UI direction
- UI/UX comparison between public and professional audience types
- Static frontend patterns that can later be wired to a real backend
- Clear handoff structure so another development team can review quickly

## Reference basis

This demo pack was prepared with reference to the existing repository `Ackeseu/TechLegal-Demo`.
That reference repo helped shape:

- lightweight static-project packaging
- frontend-only handoff documentation
- backend adapter expectations for later integration
- repository readiness guidance for GitHub publishing

## Project structure

- `index.html`: root selector page
- `general-public-demo/index.html`: public-facing concept
- `general-public-demo/styles.css`: public-facing visual system
- `general-public-demo/script.js`: public-facing micro-interactions
- `professional-demo/index.html`: professional workspace concept
- `professional-demo/styles.css`: professional visual system
- `professional-demo/script.js`: professional navigation and sample content states
- `docs/PROJECT_DOCUMENTATION.md`: implementation and handoff notes
- `docs/REPOSITORY_READINESS.md`: publish and handoff checklist

## Run locally

No build step is required.

1. Open `index.html` in a browser.
2. Choose either the General Public or Professional demo.
3. Review the UI states and interactive sample content.

## Backend integration note

This repository is intentionally frontend-only.

Recommended future integration approach:

1. Keep the current UI structure and replace the mock/demo content logic in the JavaScript files.
2. Connect prompt submission flows to your real API or orchestration layer.
3. Return normalized response objects that include:
   - summary or assistant text
   - recommendations or actions
   - trust metadata such as jurisdiction or confidence
   - document or source references where applicable
   - escalation flags for legal review

## Suggested GitHub repository name

Recommended new repository name:

- `TechLegal-AI-Demo`

## Demo disclaimer

This repository is a UI demonstration only.
It should not be treated as legal advice, legal representation, or production-ready legal workflow software.