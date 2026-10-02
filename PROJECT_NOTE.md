# Project Notes

## Project

Recruiter-facing static CV website built with Astro.

## Architecture

* Astro + TypeScript, static generation.
* JSON is the source of truth for structured CV content.
* MDX is reserved for project case studies.
* No backend, database, CMS, auth, or analytics backend.
* Homepage: single-page CV with anchor navigation.
* Desktop: two-column profile sidebar + main content.
* Mobile/tablet: single-column layout.
* `/projects` contains all projects; homepage shows featured projects.
* Optional `/projects/[slug]` pages for projects with case-study content.

## Design Direction

* Classic Academic CV / document-first.
* Clean, restrained, whitespace-driven.
* Minimal decoration and animation.
* Avoid dashboard, glassmorphism, gradients, excessive cards/shadows.
* Inter + system fallbacks.
* CSS custom properties and plain CSS.
* Accessible semantic HTML, visible focus, reduced-motion support.

## Phase Status

| Phase                    | Status    | Result                                              |
| ------------------------ | --------- | --------------------------------------------------- |
| 1. Foundation            | Completed | Minimal Astro foundation                            |
| 2. Structure             | Completed | Project directories established                     |
| 3. Types                 | Completed | TypeScript content schema                           |
| 4. JSON Content          | Completed | CV data separated into JSON                         |
| 5. Layout Foundation     | Completed | Data layer, layouts, global CSS                     |
| 6. Reusable Components   | Completed | UI/layout components                                |
| 7. Sections              | Completed | CV section components                               |
| 8. Responsive Behavior   | Completed | Responsive layout and component behavior            |
| 9. Projects              | Completed | Homepage featured projects and `/projects` listing  |
| 10. Project Details      | Skipped   | No genuine case-study content currently requires MDX|
| 11. Accessibility & QA   | Completed | Accessibility, responsive, and build review         |
| 12. Visual Redesign      | Next      | Implement the revised v2.0 design contract          |
| 13. Deploy               | Planned   | Production deployment                               |

## Current State

* `DESIGN-CONTRACT.md` is the design/product source of truth.
* `AGENTS.md` defines implementation workflow and Git restrictions.
* `src/types/index.ts` contains the approved content interfaces.
* `src/data/*.json` contains the CV content.
* `src/lib/data.ts` provides typed data access and project helpers.
* `BaseLayout.astro` and `PageLayout.astro` provide the shared layout foundation.
* `global.css` contains the shared design tokens and base styles.
* Reusable UI, layout, and section components are implemented.
* Homepage renders featured projects; `/projects` renders the full project collection.
* Accessibility, landmark semantics, heading hierarchy, readable link labels, and responsive behavior are verified.
* Build/check currently pass.

## Important Decisions

* Keep content separate from presentation.
* Do not invent missing CV information or URLs.
* Avoid unnecessary abstractions and dependencies.
* Repeated content uses arrays.
* Project links remain intentionally minimal.
* Git write operations remain manual; Agent only performs read-only Git inspection.
* Each phase should remain within its defined scope.
* Case-study existence is not stored in `ProjectList` or `ProjectCard`; the page assembly layer supplies `hasCaseStudy` when detail pages are confirmed.
* Section components receive data through props; data fetching is the responsibility of the page assembly layer.

## Next

Phase 12: Visual Redesign — Implement the revised v2.0 design contract.

After each phase, update this file only with the new status/current state and important decisions. Detailed implementation history belongs in `PROJECT_LOG.md`.
