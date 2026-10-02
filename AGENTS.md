# Agent Workflow Guide

**Version:** 2.0
**Last Updated:** 2026-10-02

---

## Purpose

This document defines how AI coding agents should work on this portfolio/CV website.

**Before making any changes, read `DESIGN-CONTRACT.md` first.**

`DESIGN-CONTRACT.md` is the authoritative source for the website's product direction, visual design, layout behavior, component architecture, styling approach, responsive behavior, accessibility requirements, and content presentation.

This document defines the **agent's working rules and implementation workflow**. It does not replace or duplicate the design contract.

---

## Source of Truth

The project has two complementary documents:

### `DESIGN-CONTRACT.md`

Defines:

* Product and visual direction
* Layout behavior
* Responsive behavior
* Typography
* Colors
* Cards
* Icons
* Tags/chips
* Navigation
* Profile presentation
* Section presentation
* Accessibility requirements
* Component architecture
* Styling approach
* Content architecture
* Routes
* Placeholder rules
* Visual consistency rules

### `AGENTS.md`

Defines:

* Git restrictions
* Mandatory pre-work
* Implementation workflow
* Coding principles
* Verification requirements
* Reporting requirements
* Agent behavior

If these documents appear to conflict, follow `DESIGN-CONTRACT.md` for design and implementation requirements, and ask for clarification if the conflict cannot be resolved safely.

---

# Git Policy

Git operations are controlled by the user.

The agent MUST NOT perform Git write or destructive operations unless explicitly instructed by the user.

## Forbidden Git Operations

Do NOT perform:

* `git add`
* `git commit`
* `git push`
* `git pull`
* `git reset`
* `git checkout`
* `git switch`
* `git merge`
* `git rebase`
* branch creation or deletion
* commit amendment
* force push
* any other Git operation that modifies repository history, branches, or tracked files

The agent must never:

* Automatically create commits
* Automatically push changes
* Automatically switch branches
* Automatically create or delete branches
* Modify Git history
* Modify repository state through Git commands

## Allowed Git Operations

Read-only inspection is allowed:

* `git status`
* `git diff`
* `git log`
* `git branch`
* `git remote -v`
* Other read-only Git inspection commands when necessary

All Git write operations are performed manually by the user.

---

# Mandatory Pre-Work

Before modifying the project:

## 1. Read the Design Contract

Read `DESIGN-CONTRACT.md` in full.

Do not begin implementation based only on the user's prompt or previous implementation.

Understand:

* Current visual system
* Layout model
* Responsive behavior
* Component responsibilities
* Styling system
* Content architecture
* Accessibility requirements
* Explicit exclusions

The current design contract is authoritative.

---

## 2. Inspect the Existing Project

Inspect the current repository before creating or replacing files.

At minimum:

* Check the current file structure
* Inspect relevant existing components
* Inspect `package.json`
* Inspect existing data files
* Inspect existing types
* Inspect relevant pages
* Check current Git status using read-only commands

Do not assume that a file from the expected structure is missing until the workspace has been inspected.

---

## 3. Understand Existing Work

The project may already contain partial implementations from previous phases.

Preserve working functionality unless the current design contract explicitly requires changing it.

When the contract has changed, refactor existing implementation to conform to the current contract rather than preserving obsolete implementation merely because it already exists.

---

## 4. Check Dependencies Before Adding New Ones

Inspect the existing `package.json` before installing anything.

Do not add a dependency if the existing project already provides an appropriate solution.

Any new dependency must:

* Solve a concrete requirement
* Be compatible with the current Astro version
* Be necessary for the requested implementation
* Not duplicate existing functionality

For styling, use the styling system specified by `DESIGN-CONTRACT.md`.

Do not introduce another CSS framework or styling system alongside the existing one.

---

# Core Principles

## 1. Contract First

Implementation decisions must follow `DESIGN-CONTRACT.md`.

Do not independently redesign the interface.

Do not introduce visual patterns simply because they are common in other portfolios.

If something is not specified but a reasonable implementation choice is required, choose the simplest solution that remains consistent with the contract.

Ask for clarification when the choice materially affects the architecture or user-visible behavior.

---

## 2. Content and Presentation Must Remain Separate

Structured CV content belongs in:

```text
src/data/*.json
```

TypeScript defines the data structures and helpers.

Astro components handle presentation.

Do not hard-code personal CV content inside reusable components.

Do not duplicate the same content across JSON files, components, and pages.

---

## 3. Reuse Components Appropriately

Prefer reusable components for repeated UI patterns.

Examples include:

* Section headers
* Entry layouts
* Project cards
* Tags/chips
* Social links
* Icon links
* Profile elements
* Navigation elements

Avoid both extremes:

* Duplicating the same markup repeatedly
* Creating abstractions for one-off elements that do not benefit from reuse

Componentize when it improves consistency, maintainability, or reuse.

---

## 4. Avoid Feature Creep

Only implement features required by:

* The design contract
* The current user request
* Existing project functionality that must remain working

Do not add:

* Backend services
* Databases
* CMS
* Authentication
* Admin panels
* Blog systems
* Comments
* Analytics backends
* Unrequested portfolio features
* Unrequested animation systems
* Unrequested interactive applications

---

## 5. Avoid Inventing Personal Information

Never invent:

* Personal URLs
* Repository URLs
* LinkedIn URLs
* GitHub URLs
* Certificate URLs
* Project documentation URLs
* Personal descriptions
* Credentials
* Dates
* Organizations
* Employment details

If the contract explicitly permits a placeholder, use an obvious placeholder that can easily be replaced later.

Do not make a placeholder look like a real personal URL.

---

# Styling Rules

The styling system is defined by `DESIGN-CONTRACT.md`.

The current project uses **Tailwind CSS** as the primary styling approach.

## Tailwind

Use Tailwind utility classes for component styling and layout.

Prefer:

* Existing project conventions
* Reusable component classes/patterns where appropriate
* Consistent spacing
* Semantic HTML
* Responsive utilities
* Existing design tokens/theme configuration when available

Do not introduce:

* A second CSS framework
* CSS-in-JS
* Another utility framework
* A parallel styling system
* Large amounts of custom CSS that duplicate Tailwind functionality

Use regular CSS only when there is a concrete case where Tailwind is insufficient or when required by the existing project architecture.

Do not recreate the old v1 CSS-token system merely for compatibility.

---

# Component Architecture

Follow the structure defined in `DESIGN-CONTRACT.md`.

The existing project may contain components from previous phases. Reuse or refactor them where appropriate.

Typical responsibilities include:

### Layout Components

* `BaseLayout.astro`

  * HTML document shell
  * metadata
  * global document configuration

* `PageLayout.astro`

  * overall page layout
  * responsive layout behavior
  * relationship between profile and main content

### Navigation / Profile

* `Nav.astro`

  * global navigation
  * desktop navigation
  * mobile navigation behavior

* `MobileNav.astro`

  * mobile navigation interaction when required

* `Sidebar.astro`

  * profile presentation component if retained by the implementation
  * should not be treated as a requirement for a literal sidebar layout

### Section Components

Section components should remain responsible for rendering their own content presentation while receiving data through props.

Examples:

* `AboutSection.astro`
* `EducationSection.astro`
* `ExperienceSection.astro`
* `BootcampSection.astro`
* `ProjectsSection.astro`
* `OrganizationsSection.astro`
* `CertificationsSection.astro`
* `SkillsSection.astro`
* `ContactSection.astro`

### UI Components

Reusable UI components may include:

* `SectionTitle.astro`
* `EntryCard.astro`
* `ProjectCard.astro`
* `ProjectList.astro`
* `SkillGroup.astro`
* `Tag.astro`
* `IconLink.astro`

Only retain or create components that provide genuine reuse.

---

# Data Implementation

## JSON

Structured content belongs in:

```text
src/data/
```

Use the schemas defined by the current project types and `DESIGN-CONTRACT.md`.

Repeated content should use arrays.

Examples:

* Contributions
* Coursework
* Project tags
* Skills
* Certifications

## TypeScript

Keep interfaces in:

```text
src/types/index.ts
```

Types must reflect the actual JSON structure.

Do not use TypeScript types as a second source of CV content.

## Data Helpers

Use:

```text
src/lib/data.ts
```

for importing and exposing structured data and simple helper functions.

Keep helpers focused.

Do not build unnecessary data-management infrastructure.

---

# Pages and Routing

## Homepage

```text
src/pages/index.astro
```

The homepage is the main CV page.

It should:

* Render the sections defined by the design contract
* Show featured projects only
* Support anchor navigation
* Preserve the intended CV reading flow

## Projects Page

```text
src/pages/projects.astro
```

This page shows the complete project collection.

Use the same project data and reusable project presentation components as the homepage.

Do not duplicate project content.

## Project Detail Pages

```text
src/pages/projects/[slug].astro
```

Project detail pages are optional.

Only create a project detail page when a genuine case study or long-form project document exists.

Do not create empty or artificial case studies merely to populate the route.

## 404

```text
src/pages/404.astro
```

Keep the not-found page simple and consistent with the rest of the site.

---

# Responsive Implementation

Follow the responsive behavior defined in `DESIGN-CONTRACT.md`.

At minimum, verify:

* Mobile: approximately 390px
* Tablet: approximately 768px
* Desktop: approximately 1024px
* Large desktop: approximately 1280px or wider

Also consider intermediate widths when layout behavior changes.

Verify:

* No horizontal overflow
* No clipped content
* Navigation remains usable
* Profile layout behaves correctly
* Content cards remain readable
* Period/date placement remains consistent
* Tags wrap naturally
* Interactive controls remain usable
* Touch targets remain accessible

Do not introduce breakpoint behavior that contradicts the design contract.

---

# Accessibility

Accessibility is a required part of implementation, not a later optional step.

## Semantic HTML

Use appropriate semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Use semantic structure where it improves document meaning.

## Heading Hierarchy

Maintain a logical hierarchy.

The homepage should have one primary `<h1>`.

Section titles should use `<h2>`.

Entry titles should normally use `<h3>` where appropriate.

Do not introduce heading levels merely for visual sizing.

## Keyboard Accessibility

All interactive elements must be keyboard accessible.

Provide visible `:focus-visible` states.

Do not remove browser focus indicators without providing an equivalent accessible replacement.

## Navigation

Mobile navigation must expose appropriate state to assistive technologies.

For example:

```html
<button
  aria-expanded="false"
  aria-controls="mobile-menu"
>
  Menu
</button>
```

Use appropriate labels for icon-only controls.

## Images

Provide meaningful `alt` text for informative images.

Decorative images should use appropriate empty alt text.

## Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Do not rely on animation to communicate essential information.

---

# Implementation Workflow

## Step 1 — Inspect

Before editing:

1. Read `DESIGN-CONTRACT.md`
2. Inspect relevant existing files
3. Inspect `package.json`
4. Inspect current data/types/components
5. Check Git status
6. Identify exactly what the current task requires

---

## Step 2 — Plan

Determine:

* Which files need modification
* Which existing components can be reused
* Which components genuinely need to be created
* Whether data/types need modification
* Whether dependencies are actually necessary

Do not modify unrelated parts of the project.

---

## Step 3 — Implement

Implement incrementally.

Prefer small, coherent changes over a large uncontrolled rewrite.

When refactoring an existing component:

* Preserve its required functionality
* Remove obsolete implementation
* Avoid leaving two competing implementations behind

Do not keep old styling/layout code merely because it might be useful later.

---

## Step 4 — Verify

After meaningful implementation work, run the project's validation commands.

At minimum:

```powershell
npx astro check
npm run build
```

If the task changes visual behavior, also inspect the result with the development server:

```powershell
npm run dev
```

Verify relevant routes and responsive widths.

---

## Step 5 — Review the Diff

Use read-only Git inspection:

```powershell
git status
git diff
```

Check that:

* Only intended files changed
* No generated files were accidentally modified
* No personal information was invented
* No obsolete implementation remains unnecessarily
* No unrelated dependency changes were introduced

Do not stage or commit the changes.

---

## Step 6 — Report

Report:

1. Files created/modified
2. What was implemented
3. Verification performed
4. Any issues encountered
5. Any deviations from the design contract
6. Any follow-up work that is genuinely required

Keep the report concise and actionable.

---

# Verification Checklist

Before considering a task complete:

### Architecture

* [ ] Existing architecture was inspected before modification
* [ ] No unnecessary dependencies were added
* [ ] Data remains separated from presentation
* [ ] Reusable components are used where appropriate
* [ ] No duplicate content sources were introduced

### Design

* [ ] Implementation follows `DESIGN-CONTRACT.md`
* [ ] Current design system is used consistently
* [ ] Responsive behavior follows the contract
* [ ] No unrequested visual patterns were introduced
* [ ] No obsolete v1 layout/styling remains where it conflicts with v2

### Content

* [ ] No personal information was invented
* [ ] Placeholder content is clearly identifiable
* [ ] JSON remains the source of truth
* [ ] Project data is not duplicated between pages

### Accessibility

* [ ] Semantic HTML is used
* [ ] Heading hierarchy is valid
* [ ] Keyboard interaction works
* [ ] Focus states are visible
* [ ] Images have appropriate alt text
* [ ] Icon-only controls have accessible labels
* [ ] Reduced-motion behavior is respected
* [ ] Touch targets remain usable

### Responsive

* [ ] Approximately 390px checked
* [ ] Approximately 768px checked
* [ ] Approximately 1024px checked
* [ ] Large desktop checked
* [ ] No horizontal overflow
* [ ] Content remains readable at all required widths

### Build

* [ ] `npx astro check` passes
* [ ] `npm run build` passes
* [ ] Relevant routes render correctly
* [ ] No new console errors or warnings were introduced

### Git

* [ ] No Git write operations were performed
* [ ] No commit was created
* [ ] No branch was created or switched
* [ ] User retains full control over Git changes

---

# When to Ask for Clarification

Ask the user when:

* The design contract contains a genuine contradiction
* The requested behavior is architecturally ambiguous
* Required real content is unavailable and a placeholder is not permitted
* A dependency decision materially affects the project
* Two technically valid approaches have significantly different consequences
* Existing implementation conflicts with the contract in a way that cannot be resolved safely

Do not ask unnecessary questions when the design contract already provides the answer.

Do not ask whether to implement requirements that are already explicitly specified in the contract.

Do not add features merely because they could be useful.

---

# Final Reminder

The agent's job is to **implement the current contract faithfully**.

`DESIGN-CONTRACT.md` defines what the website should be.

`AGENTS.md` defines how the agent should work.

Do not redesign the product independently.

Do not expand the scope without instruction.

Do not invent personal content.

Do not perform Git write operations.

When in doubt:

1. Read `DESIGN-CONTRACT.md`
2. Inspect the existing implementation
3. Prefer the simplest contract-compliant solution
4. Ask the user only when the ambiguity materially affects the implementation
