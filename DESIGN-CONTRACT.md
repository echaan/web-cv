# Design Contract: Portfolio/CV Website

**Version:** 1.0  
**Status:** Final  
**Last Updated:** 2026-09-27

---

## Product Definition

This is a **professional CV presented as a responsive website**.

The website must feel like an excellent professional CV/document presented on the web, NOT like a typical flashy developer portfolio.

### Primary Goals
- Readability
- Recruiter scanning efficiency
- Clear information hierarchy
- Professional credibility
- Content clarity
- Responsive usability

---

## Technical Architecture

### Framework & Output
- **Framework:** Astro
- **Output:** Static site generation
- **No backend, no database, no CMS, no authentication**
- **Minimal client-side JavaScript** (navigation only)

### Content Management
- **Structured content:** JSON files
- **Extended content:** Markdown/MDX only for project case studies that need detailed documentation
- **Content location:** `src/data/*.json`
- **Principle:** Content separated from presentation

---

## Site Structure

### Routes
| Route | Purpose |
|---|---|
| `/` | Single-page CV with all sections |
| `/projects` | Complete project listing |
| `/projects/[slug]` | Optional project detail page (only when case study exists) |
| `/404` | Static not-found page |

### Homepage Sections (in order)
1. About
2. Education
3. Experience
4. Bootcamp
5. Projects (featured only)
6. Organization
7. Certifications
8. Skills
9. Contact

### Global Navigation
- **Items:** About, Education, Experience, Projects, Contact
- **Mechanism:** Anchor links to homepage sections
- **Desktop:** Horizontal navigation bar at top
- **Mobile:** Hamburger menu
- **Note:** Navigation is conceptually separate from profile/sidebar

---

## Layout System

### Desktop (`≥1024px`)
- **Structure:** Two-column layout
- **Left column:** Profile/sidebar (~320px)
- **Right column:** Main CV content (~720px max readable width)
- **Column ratio:** Approximately 1:2
- **Column gap:** ~64px
- **Max container width:** 1200px
- **Sidebar behavior:** Non-sticky, flows with document
- **Sidebar appearance:** Same background as page, no card/panel styling

### Mobile/Tablet (`<1024px`)
- **Structure:** Single-column layout
- **Profile:** Flows to top of page above main content
- **Navigation:** Hamburger menu
- **No horizontal scrolling**

### Profile/Sidebar Content (in order)
1. Photo
2. Name
3. Professional title
4. Location
5. Email
6. LinkedIn
7. GitHub
8. Download CV button

---

## Visual Design System

### Visual Language
- **Foundation:** Classic Academic CV aesthetic
- **Approach:** Document-first, restrained, typography-driven, whitespace-driven
- **Most sections:** Flat document-like presentation
- **Projects only:** Slightly stronger visual treatment (subtle bordered blocks)

### Avoid
- Gradients, glassmorphism, excessive cards
- Dashboard-like UI, decorative illustrations
- Excessive shadows, excessive animation
- Unnecessary visual effects

---

## Typography

### Font Family
```css
Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

### Type Scale
| Element | Size | Weight | Line Height |
|---|---|---|---|
| Name | 32px (2rem) | 700 | 1.2 |
| Professional title | 18px (1.125rem) | 400 | 1.4 |
| Navigation links | 14px (0.875rem) | 500 | 1.5 |
| Section title (h2) | 24px (1.5rem) | 600 | 1.3 |
| Entry title (h3) | 18px (1.125rem) | 600 | 1.4 |
| Body/metadata | 16px (1rem) | 400 | 1.6 |
| Small/caption | 14px (0.875rem) | 400 | 1.5 |
| Tags | 12px (0.75rem) | 500 | 1.4 |

---

## Color System

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#f8f9fa` | Project cards, tag backgrounds |
| `--color-text-primary` | `#111827` | Headings, primary text |
| `--color-text-secondary` | `#4b5563` | Metadata, captions |
| `--color-text-muted` | `#6b7280` | Tertiary text |
| `--color-border` | `#e5e7eb` | Borders, dividers |
| `--color-accent` | `#1d4ed8` | Links, buttons, active nav |
| `--color-accent-hover` | `#1e40af` | Hover states |

**Principle:** Use accent color sparingly for interactive elements only.

---

## Spacing System

**Base unit:** 4px

### Scale
- 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px

### Key Spacing
- **Between major sections:** ~48px (desktop), ~40px (mobile)
- **Between entries within section:** ~24px to 32px
- **Project card padding:** ~16px to 24px

---

## Visual Elements

### Borders & Radius
- **Default border:** `1px solid #e5e7eb`
- **Project cards:** 1px border, no shadow
- **Tags:** Small rounded radius (~4px)
- **Buttons:** 6px radius
- **Profile photo:** 8px radius
- **No shadows** on cards, sidebar, or sections

### Profile Photo
- **Shape:** Square or slightly rounded square
- **Size:** 120px (desktop), 100px (mobile)
- **Radius:** ~8px
- **No shadow, no decorative frame, no circular crop**

### Buttons & Links
- **Download CV:** Filled accent button, white text, 6px radius
- **Secondary actions:** Text links, no unnecessary button styling
- **All links:** Accent color, clear hover/focus state

---

## Content Sections

### Projects
- **Homepage:** Display only projects with `featured: true`
- **`/projects` page:** Display all projects
- **Project block contains:**
  1. Title (h3)
  2. Role (secondary text)
  3. Short description (2-4 lines)
  4. Tags (inline pills)
  5. Documentation link (optional)
  6. Case study link (optional, only if detail page exists)
- **Styling:** Subtle bordered blocks, restrained padding, no shadow, subtle hover state
- **No project images on homepage**

### Experience
- **Presentation:** Flat document-like entries
- **Fields:** Role, organization, period, contribution bullets
- **NOT cards**

### Education
- **Presentation:** Flat document-like entry
- **Fields:** University, degree/major, period, GPA, relevant coursework, publication (if applicable)

### Bootcamp
- **Presentation:** Flat document-like entries
- **Fields:** Organization, role, period, description, final project/test, tags
- **NOT cards**

### Organization
- **Presentation:** Flat document-like entries
- **Fields:** Organization, period, contribution

### Certifications
- **Presentation:** Flat document-like entries
- **Fields:** Certificate, issuer, date, credential link

### Skills
- **Groups:** Data / ML, Programming, Tools
- **Presentation:** Compact inline tags
- **Do NOT use:** Progress bars, percentages, skill ratings

### Contact
- **Location:** Dedicated section at bottom
- **Contains:** Email, LinkedIn, GitHub, Download CV
- **Purpose:** Provides mobile users with contact access without scrolling back

---

## Responsive Breakpoints

| Breakpoint | Value | Layout Change |
|---|---|---|
| `sm` | 640px | — |
| `md` | 768px | Mobile navigation threshold |
| `lg` | 1024px | Two-column layout threshold |

- **≥1024px:** Two-column layout
- **<1024px:** Single-column layout
- **<768px:** Mobile navigation (hamburger)
- **Touch targets:** Minimum 44px

---

## Accessibility Requirements

### Semantic HTML
- Proper element usage: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Correct heading hierarchy: one `<h1>` (name), `<h2>` per section, `<h3>` for entries

### Keyboard & Screen Reader Support
- Skip-to-content link
- Visible keyboard focus states on all interactive elements
- Descriptive image alt text
- Mobile menu: `aria-expanded`, `aria-controls`

### Visual Accessibility
- Sufficient color contrast (WCAG AA minimum)
- Text remains readable without custom fonts

### Motion Sensitivity
- Respect `prefers-reduced-motion` for all animations/transitions

---

## Motion & Interaction

### Allowed (Minimal Only)
- Smooth anchor scrolling (respecting reduced-motion preference)
- Subtle hover/focus states (color/underline changes)
- Short transitions (~150-200ms)

### Avoid
- Entrance animations
- Parallax effects
- Scroll-triggered animations
- Decorative motion

---

## Content Data Structures

### Required Entities
- Profile (single)
- About (single)
- Education (single)
- Experience (array)
- Bootcamp (array)
- Project (array)
- Organization (array)
- Certification (array)
- SkillGroup (array)

### Data Principles
- **Arrays for repeated fields:** contributions, coursework, tags, skills
- **JSON is source of truth** for structured content
- **TypeScript defines types/interfaces** but does NOT duplicate content
- **MDX only** for project case studies needing long-form documentation
- **Do not create unnecessary fields**

---

## Component Architecture Principles

### Conceptual Components
- BaseLayout
- Nav (global navigation, separate from sidebar)
- Sidebar (profile/identity block)
- PageLayout (two-column responsive wrapper)
- Section components (one per content section)
- ProjectCard (reusable for homepage and `/projects`)
- Reusable UI primitives (only where genuinely useful)

### Principles
- Prefer reusable components
- Avoid duplicated markup
- Avoid unnecessary abstraction
- Avoid unnecessary fragmentation
- Profile/sidebar is a layout component, not a dashboard widget

---

## CSS Approach

- **Use plain CSS with custom properties**
- **Do NOT introduce:** Tailwind, CSS-in-JS, or other styling frameworks (unless explicitly requested)
- **Define tokens** in `:root` for colors, spacing, typography
- **Keep styles maintainable and understandable**

---

## Implementation Rules

### Must Do
1. Keep content separate from presentation
2. Use JSON for structured content
3. Use Astro components for reusability
4. Follow the visual design system exactly
5. Implement accessibility requirements
6. Test responsive behavior at all breakpoints
7. Verify all routes generate correctly
8. Honor `prefers-reduced-motion`

### Must NOT Do
- Introduce backend/database/CMS/authentication
- Invent features outside this specification
- Use flashy portfolio conventions
- Add unnecessary dependencies
- Duplicate content between JSON and TypeScript
- Over-engineer the architecture
- Replace established patterns without reason

---

## Build & Deployment

- **Build command:** `astro build`
- **Output:** Static files in `dist/`
- **Deployment:** Any static hosting (Vercel, Netlify, Cloudflare Pages, GitHub Pages)
- **No server-side requirements**

---

## Notes

This contract represents the finalized product and design decisions. Any deviation requires explicit approval and contract update.
