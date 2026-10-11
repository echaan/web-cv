# Web CV — Personal Portfolio Website

A recruiter-facing personal CV and portfolio website. Built with Astro, TypeScript,
and Tailwind CSS as a fully static site — no backend, no database, no CMS.

## Features

- Single-page CV with anchor navigation, plus a dedicated `/projects` page
- Card-based sections: About, Education, Experience, Bootcamp, Projects,
  Organizations, Certifications, Skills, Contact
- Project cards with documentation links and optional case-study pages
- Data-driven: all CV content lives in `src/data/*.json`, typed via `src/types/index.ts`
- Responsive from mobile (~390px) to large desktop; accessible (semantic HTML,
  keyboard navigation, visible focus states, reduced-motion support)

## Tech Stack

- [Astro](https://astro.build/) 7 — static site generation
- [TypeScript](https://www.typescriptlang.org/) — strict mode
- [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`)

## Getting Started

Prerequisites: Node.js 18+.

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Type-check (`astro check`) and build |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Type-check without building          |

## Project Structure

```
src/
├── components/
│   ├── layout/      # Page-level layout components
│   ├── sections/    # CV section components (About, Projects, ...)
│   └── ui/          # Reusable UI primitives (cards, tags, icons)
├── data/            # CV content as JSON — the source of truth
├── layouts/         # Base HTML document shell
├── lib/             # Data loading helpers
├── pages/           # Routes: /, /projects, /404 (+ optional /projects/[slug])
├── styles/          # Global styles
└── types/           # TypeScript interfaces for the JSON content
public/              # Static assets (favicon, images, CV pdf)
```

## Updating Content

Edit the JSON files in `src/data/` — no component changes needed for content
updates. The interfaces in `src/types/index.ts` define the schema.

## Working with AI Agents

- `AGENTS.md` defines the agent workflow — read before making changes.
- `DESIGN-CONTRACT.md` is the authoritative design and product contract.
- `PROJECT_NOTE.md` / `PROJECT_LOG.md` track architecture notes and phase history.

## Deployment

The site builds to static files in `dist/`. Deploy to any static host — e.g.
Vercel: import the repository, keep the defaults (`npm run build` → `dist/`),
and deploy.
