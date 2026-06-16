# TechLegal AI Demo - Project Documentation

## 1. Purpose

This project is a frontend demonstration for a Hong Kong-facing legal AI interface.
It is designed to help stakeholders compare two UX directions before backend implementation:

- a general-public version
- a professional legal workspace version

## 2. Scope of current demo

Included:

- static responsive UI in plain HTML, CSS, and JavaScript
- separate subfolders for each design direction
- selector landing page for easy review
- deeper professional sidebar navigation with sub-menu states
- interactive sample content switching in the professional demo

Not included:

- live backend connectivity
- authentication
- persistence or saved conversations
- real document processing
- production observability, logging, or analytics

## 3. Audience framing

### 3.1 General Public Demo

Goal:

- reduce legal anxiety
- use plainer language
- guide users through common Hong Kong scenarios

Target users:

- individuals
- families
- freelancers
- SMEs

### 3.2 Professional Demo

Goal:

- feel credible to legal and business teams
- show stronger matter structure and jurisdiction context
- support deeper workflow storytelling for demos

Target users:

- law firms
- in-house legal teams
- compliance teams
- enterprise procurement and business stakeholders

## 4. File structure

- `index.html`: root selector page
- `general-public-demo/index.html`: public demo markup
- `general-public-demo/styles.css`: public demo design system
- `general-public-demo/script.js`: public demo interactions
- `professional-demo/index.html`: professional demo markup
- `professional-demo/styles.css`: professional demo design system
- `professional-demo/script.js`: professional demo interactions and dynamic content switching
- `README.md`: overview and local run instructions
- `docs/REPOSITORY_READINESS.md`: repository publishing notes

## 5. Interaction design

### 5.1 General Public Demo

Current behavior:

- mode pills adjust placeholder guidance
- scenario suggestion buttons prefill the textarea
- trust messaging stays visible near the prompt area

Design intention:

- keep first-screen choices limited
- frame tasks in everyday language rather than tool language
- make the interface feel supportive rather than technical

### 5.2 Professional Demo

Current behavior:

- top-level nav groups and sub-menu items are interactive
- selecting a section updates:
  - headline copy
  - summary text
  - panel labels
  - prompt placeholder
  - action buttons
  - content tags
  - metrics
  - lower content panels
- task tabs still adjust prompt framing inside the active workspace

Design intention:

- make the product feel like a matter-oriented workspace
- demonstrate content depth across research, search, drafting, review, and matter views
- help stakeholders imagine how backend outputs would slot into a stable UI shell

## 6. Layout decisions

The professional demo was adjusted to improve alignment by:

- using a clearer masthead grid instead of a loose flex row
- constraining headline width for more stable line breaks
- grouping jurisdiction and output cards into a tighter control block
- matching panel widths more consistently across the upper sections

## 7. Reference repository influence

The repository `Ackeseu/TechLegal-Demo` was used as a packaging and handoff reference.

Useful patterns taken from that project:

- no-build static frontend approach
- lightweight documentation-first repository setup
- explicit future backend adapter guidance
- repository readiness notes for publishing and team handoff

This project does not copy that implementation structure directly, but it follows the same practical handoff mindset.

## 8. Suggested backend integration approach

When backend work begins:

1. Keep the current page structure stable.
2. Replace the demo content switching logic with real API calls where appropriate.
3. Standardize response contracts so frontend rendering remains simple.

Suggested response contract for future workflows:

- `title`: string
- `summary`: string
- `actions`: string[]
- `references`: string[]
- `riskLevel`: string
- `jurisdiction`: string
- `escalationRecommended`: boolean

For document workflows, likely additions:

- `issues`: array of issue objects
- `suggestedDrafting`: array of clause suggestions
- `bilingualDiffs`: array of comparison notes

## 9. Quality checks completed

- static HTML/CSS/JS pages render locally
- no file errors reported for current demo files
- professional menu/sub-menu state switching verified in browser
- responsive layout rules are present for smaller screens

## 10. Recommended next steps

1. Add post-query result screens for both demos.
2. Add brand-specific copy, color system, and logo treatment.
3. Decide whether the publish target should be public or private.
4. Create the new GitHub repository and push the first version.