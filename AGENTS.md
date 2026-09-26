# Agent Workflow Guide

**Version:** 1.0  
**Last Updated:** 2026-09-27

---

## Purpose

This document provides guidance for AI coding agents working on this portfolio/CV website project.

**Before making any changes, read `DESIGN-CONTRACT.md` first.** It is the authoritative specification.

---

## Mandatory Pre-Work

### 1. Read the Design Contract
- Open and read `DESIGN-CONTRACT.md` in full
- Understand the product goals, visual design system, and technical architecture
- Treat it as the source of truth for all implementation decisions

### 2. Inspect the Workspace
- Check existing file structure before creating/modifying files
- Identify what has already been implemented
- Understand the current state before making changes
- Preserve relevant existing work

### 3. Understand the Context
- This is a professional CV website, not a flashy portfolio
- The design is intentionally restrained and document-focused
- Every visual decision serves readability and professional credibility

---

## Core Principles

### Content Separation
- **JSON files** in `src/data/*.json` contain all structured content
- **TypeScript** defines types/interfaces and helper functions but does NOT duplicate content
- **Astro components** handle presentation only
- **MDX files** only for project case studies needing long-form documentation

### Component Reusability
- Prefer reusable components over duplicated markup
- Extract shared patterns into components when they appear 2+ times
- Avoid unnecessary abstraction—only componentize what genuinely benefits from it

### Minimal Dependencies
- Keep `package.json` lean
- Only add dependencies that solve concrete problems
- Avoid introducing unnecessary libraries

### No Feature Creep
- Do not add features outside `DESIGN-CONTRACT.md`
- Do not "improve" the design without explicit instruction
- Do not introduce backend/database/CMS/authentication
- Do not add typical portfolio features (blog, admin panel, animations library, etc.)

---

## Implementation Workflow

### Step 1: Plan
- Identify which files need to be created or modified
- Check if those files already exist
- Plan the order of implementation (data → types → components → pages)

### Step 2: Implement Incrementally
- Make small, verifiable changes
- Implement one section or component at a time
- Test after each meaningful change

### Step 3: Verify
- Run `npm run dev` or equivalent to check the site locally
- Run `astro build` to verify static generation works
- Check responsive behavior at key breakpoints (mobile, tablet, desktop)
- Verify all routes generate correctly

### Step 4: Report
- Clearly state what was implemented
- Note any deviations from the plan
- Flag any unresolved issues or ambiguities

---

## File Structure Reference

Expected structure (create as needed):

```
src/
  data/
    profile.json
    about.json
    education.json
    experience.json
    bootcamps.json
    projects.json
    organizations.json
    certifications.json
    skills.json
  types/
    index.ts
  lib/
    data.ts
  components/
    layout/
      BaseLayout.astro
      PageLayout.astro
    sections/
      Sidebar.astro
      Nav.astro
      AboutSection.astro
      EducationSection.astro
      ExperienceSection.astro
      BootcampSection.astro
      ProjectsSection.astro
      OrganizationsSection.astro
      CertificationsSection.astro
      SkillsSection.astro
      ContactSection.astro
    ui/
      SectionTitle.astro
      EntryCard.astro
      ProjectCard.astro
      ProjectList.astro
      SkillGroup.astro
      Tag.astro
      IconLink.astro
      MobileNav.astro
  layouts/
    ProjectDetailLayout.astro
  pages/
    index.astro
    projects.astro
    projects/
      [slug].astro
    404.astro
  styles/
    global.css
  content/
    projects/
      [slug].md or [slug].mdx (optional project case studies)

public/
  assets/
    images/
      profile-photo.jpg
      projects/
        ...
    files/
      cv.pdf
```

---

## Data Implementation

### JSON Files
- One JSON file per content entity in `src/data/`
- Use the schemas defined in `DESIGN-CONTRACT.md`
- Use placeholder content clearly marked for replacement if real content is unavailable
- Arrays for repeated fields (contributions, coursework, tags, skills)

### TypeScript Types
- Define interfaces matching JSON schemas in `src/types/index.ts`
- Keep types aligned with actual JSON structure
- Export all types for use in components

### Data Helpers
- Create `src/lib/data.ts` to import and expose JSON data
- Provide helper functions for filtering (e.g., featured projects)
- Keep helpers simple and focused

---

## Component Implementation

### Layout Components
- **BaseLayout.astro**: HTML shell, metadata, font loading, global styles
- **PageLayout.astro**: Two-column responsive wrapper for sidebar + main content
- **Nav.astro**: Global navigation (separate from sidebar)
- **Sidebar.astro**: Profile/identity block

### Section Components
- One component per homepage section
- Each receives typed data via props
- Render semantic HTML with proper heading hierarchy
- No client-side JavaScript except for mobile nav

### UI Components
- Extract truly reusable patterns only
- Keep components simple and focused
- Avoid over-abstraction

### Project Cards
- **ProjectCard.astro**: Reusable for homepage and `/projects` page
- Show title, role, description, tags, links
- Apply subtle border styling per design contract
- Conditionally show case study link if detail page exists

---

## Styling Implementation

### Global Styles (`src/styles/global.css`)
- Define CSS custom properties for design tokens
- Include CSS reset/normalization
- Define base typography
- Define reusable utility patterns if needed

### Design Tokens
Define these tokens in `:root`:

```css
/* Colors */
--color-bg: #ffffff;
--color-surface: #f8f9fa;
--color-text-primary: #111827;
--color-text-secondary: #4b5563;
--color-text-muted: #6b7280;
--color-border: #e5e7eb;
--color-accent: #1d4ed8;
--color-accent-hover: #1e40af;

/* Spacing (base 4px) */
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-10: 2.5rem;
--space-12: 3rem;
--space-16: 4rem;

/* Typography */
--font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Layout */
--container-max-width: 1200px;
--sidebar-width: 320px;
--main-content-max-width: 720px;
--column-gap: 4rem;

/* Borders */
--border-width: 1px;
--border-color: var(--color-border);
--border-radius-sm: 0.25rem;
--border-radius-md: 0.375rem;
--border-radius-lg: 0.5rem;

/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
```

### Component Styles
- Use scoped styles in `.astro` files when appropriate
- Reference design tokens from global CSS
- Keep styles maintainable and understandable
- **Do NOT introduce Tailwind or CSS-in-JS** unless explicitly requested

---

## Responsive Implementation

### Breakpoints
```css
/* Mobile: < 768px (default) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { ... }

/* Desktop: ≥ 1024px */
@media (min-width: 1024px) { ... }
```

### Layout Behavior
- **Mobile:** Single column, profile flows to top, hamburger nav
- **Tablet:** Single column, may keep horizontal nav if space permits
- **Desktop:** Two-column layout activates at 1024px

### Testing
- Verify layout at 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large desktop)
- Ensure no horizontal scrolling at any width
- Verify touch targets are minimum 44px on mobile

---

## Accessibility Implementation

### Semantic HTML
```html
<header>...</header>
<nav>...</nav>
<main>
  <section id="about">
    <h2>About</h2>
    ...
  </section>
</main>
```

### Heading Hierarchy
- One `<h1>`: Name in profile
- `<h2>`: Section titles
- `<h3>`: Entry titles (job title, project title, etc.)

### Skip Link
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Focus States
- All interactive elements must have visible focus outline
- Use `:focus-visible` for better UX

### Mobile Nav
```html
<button aria-expanded="false" aria-controls="mobile-menu">
  Menu
</button>
<nav id="mobile-menu" hidden>...</nav>
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Routing & Static Generation

### Homepage (`src/pages/index.astro`)
- Single-page CV with all sections
- Featured projects only (filter by `featured: true`)
- Anchor navigation

### Projects Page (`src/pages/projects.astro`)
- Complete project listing (all projects)
- Same ProjectCard component as homepage

### Project Detail Pages (`src/pages/projects/[slug].astro`)
- Generate static paths only for projects with MDX files
- Use `getStaticPaths()` to check for matching content
- Render project metadata + MDX body content

### 404 Page (`src/pages/404.astro`)
- Simple static not-found page

---

## Common Pitfalls to Avoid

### ❌ Don't
- Redesign the site without explicit instruction
- Add features outside the design contract
- Introduce backend/database/CMS
- Over-engineer simple patterns
- Duplicate content between JSON and TypeScript
- Use flashy portfolio conventions (hero sections, fancy animations, etc.)
- Add unnecessary dependencies
- Replace working code without clear justification

### ✅ Do
- Follow the design contract exactly
- Keep content separate from presentation
- Use semantic HTML
- Implement accessibility requirements
- Test responsive behavior
- Make incremental, verifiable changes
- Preserve existing work when possible
- Ask for clarification if specifications are ambiguous

---

## Quality Checklist

Before considering work complete, verify:

- [ ] All JSON data files created with proper structure
- [ ] TypeScript types defined and aligned with JSON
- [ ] All Astro components implemented
- [ ] Global CSS with design tokens applied
- [ ] Homepage renders all sections correctly
- [ ] Projects page shows all projects
- [ ] Project detail pages generate correctly (if applicable)
- [ ] Navigation works (anchor links, mobile menu)
- [ ] Responsive layout works at all breakpoints
- [ ] No horizontal scrolling at any width
- [ ] Accessibility requirements met (semantic HTML, heading hierarchy, focus states, skip link)
- [ ] `astro build` completes successfully
- [ ] No console errors or warnings
- [ ] Visual design matches the contract (typography, spacing, colors)
- [ ] Featured projects filter works correctly
- [ ] All links functional
- [ ] Profile photo displays correctly
- [ ] Download CV link works

---

## When to Ask for Clarification

Ask the user if:
- The design contract seems to contradict itself
- A required feature is not specified in detail
- You need actual content (if placeholder content is insufficient)
- A technical decision requires choosing between equivalent alternatives
- The existing codebase conflicts with the design contract

Do NOT ask:
- Whether to add features outside the contract
- Whether to change the visual design
- Whether to introduce additional dependencies "just in case"
- Whether to over-engineer simple patterns

---

## Reporting Completed Work

When reporting what was implemented, include:

1. **Files created/modified** (list with brief description)
2. **What works** (features implemented and verified)
3. **What's next** (logical next step, if applicable)
4. **Issues encountered** (if any, with proposed solutions)
5. **Deviations from plan** (if any, with justification)

Keep reports clear, concise, and actionable.

---

## Final Reminder

This project has a clear, finalized design. Your role is to implement it faithfully, not to improve or redesign it.

**When in doubt, refer to `DESIGN-CONTRACT.md` and follow it exactly.**
