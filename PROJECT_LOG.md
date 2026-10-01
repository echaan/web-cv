
# Project Notes

## Phase 1 — Project Foundation

### Status

Completed

### Objective

Establish a clean and minimal Astro project foundation for the CV website, without implementing any actual CV functionality or final visual design.

### Implementation

The project was initialized as an Astro static site with TypeScript support.

Created/configured:

- `package.json`
  - Astro project configuration
  - Required Astro/TypeScript dependencies

- `astro.config.mjs`
  - Astro configuration
  - Static site generation foundation

- `tsconfig.json`
  - TypeScript configuration
  - Strict mode enabled

- `src/pages/index.astro`
  - Minimal valid entry page
  - Contains only the minimum HTML required for the project to build
  - No final CV content or visual design

- `src/styles/global.css`
  - Reduced to a minimal CSS foundation/reset
  - Only basic box-sizing, margin, and padding normalization
  - No final design tokens or visual styling

- `src/env.d.ts`
  - Astro-generated environment/type declaration

Created directories:

- `src/pages/`
- `src/styles/`
- `public/`

### Scope Decisions

Phase 1 intentionally did **not** implement:

- CV content
- JSON data files
- TypeScript content interfaces
- Data helper functions
- CV components
- Sidebar
- Navigation
- CV sections
- Project cards
- Homepage composition
- Projects page
- Project detail pages
- Responsive layout
- Mobile navigation
- Final typography
- Final color system
- Final spacing system
- Final visual design system
- Profile assets
- CV PDF
- Project case studies / MDX
- Full accessibility implementation
- 404 page

The initial implementation temporarily included the final design tokens and Inter font loading. These were identified as outside Phase 1 scope and removed during the scope review.

The final Phase 1 state contains only the minimal foundation required for Astro to run and build successfully.

### Verification

Commands run:

```bash
npx astro check
npm run build
````

Results:

* `astro check`: 0 errors, 0 warnings, 0 hints
* `astro build`: successful
* Static output generated successfully at `dist/index.html`

### Git Workflow

Git operations are handled manually by the user.

The Agent did not perform Git write operations such as:

* `git add`
* `git commit`
* `git push`
* Branch creation
* Merge
* Reset
* Checkout/switch

The Phase 1 implementation was performed in an isolated Agent worktree:

`D:\Project\Web CV.worktrees\read-design-contract-md-and-agents-md-in`

Branch:

`agents/read-design-contract-md-and-agents-md-in`

After implementation, the user is responsible for reviewing, committing, and integrating the phase into `main`.

### Lessons / Decisions Carried Forward

1. Keep implementation incremental and phase-based.
2. Do not implement future-phase features early.
3. `DESIGN-CONTRACT.md` remains the authoritative product/design specification.
4. `AGENTS.md` remains the implementation workflow guide.
5. Keep Git operations under manual user control.
6. Keep the project foundation minimal so later phases can introduce the actual design system and CV components deliberately.
7. When an Agent adds functionality belonging to a later phase, explicitly scope it back before proceeding.

### Next Phase

Phase 2 should build only the project structure required by the established architecture, without prematurely implementing CV content, components, or page composition.




## Phase 2 — Create Project Structure

### Status

Completed

### Objective

Establish the directory structure required by the approved Astro architecture so that later implementation phases have predictable locations for components, data, layouts, utilities, types, project content, and public assets.

Phase 2 intentionally contains structure only and does not implement any CV functionality.

### Implementation

Created the following source directories:

- `src/components/layout/`
  - Reserved for shared layout-related components

- `src/components/sections/`
  - Reserved for CV section components

- `src/components/ui/`
  - Reserved for reusable UI components

- `src/data/`
  - Reserved for structured JSON content files

- `src/layouts/`
  - Reserved for Astro layout files

- `src/lib/`
  - Reserved for data helpers and supporting utilities

- `src/types/`
  - Reserved for TypeScript content types and interfaces

- `src/content/projects/`
  - Reserved for optional project case-study content

Created the following public asset directories:

- `public/assets/images/`
  - Reserved for profile and project images

- `public/assets/files/`
  - Reserved for downloadable files such as the CV PDF

All newly created directories were intentionally left empty. No `.gitkeep` files or other placeholder files were introduced.

### Scope Decisions

Phase 2 intentionally did **not** implement:

- TypeScript content types or schemas
- `src/types/index.ts`
- JSON content files
- `src/data/*.json`
- Data helper implementations
- CV content
- Placeholder CV content
- Components
- `BaseLayout`
- `PageLayout`
- Navigation
- Sidebar
- Section components
- UI components
- Project cards
- Homepage implementation
- CV section implementation
- `/projects`
- `/projects/[slug]`
- `404.astro`
- Project case studies
- MDX content
- Responsive behavior
- Mobile navigation
- Final visual design system
- Design tokens
- Typography system
- Color system
- Layout styling
- Additional accessibility implementation
- New application dependencies

The existing Phase 1 files and their behavior were preserved.

### Verification

Verification performed:

```bash
npx astro check
npm run build
git status
````

Results:

* `astro check`: successful with 0 errors, 0 warnings, and 0 hints
* `astro build`: successful
* Static output generated successfully at `dist/index.html`
* Newly created structural directories contain no unintended implementation files
* No Phase 3+ implementation was introduced

### Generated / Modified Files

The Phase 2 directory creation itself did not require modifying the existing Phase 1 source files.

The verification process generated or modified:

* `.astro/types.d.ts`

  * Auto-generated by Astro

* `package-lock.json`

  * Updated as a result of dependency installation required by the verification environment

These generated/dependency changes are incidental to the Phase 2 structure work and should be reviewed before the user's manual Git commit.

### Git Workflow

Git operations are handled manually by the user.

The Agent did not create or modify Git history.

No commit was created for Phase 2.

The user is responsible for reviewing the working tree and creating the Phase 2 commit manually.

### Lessons / Decisions Carried Forward

1. Keep implementation incremental and phase-based.
2. Establish structure before implementing content and components.
3. Do not populate empty directories with placeholder CV data.
4. Avoid `.gitkeep` files unless there is a genuine repository-level need.
5. `DESIGN-CONTRACT.md` remains the authoritative product/design specification.
6. `AGENTS.md` remains the implementation workflow guide.
7. Keep the project structure simple, predictable, and compatible with Astro static generation.
8. Do not make decisions belonging to later implementation phases prematurely.
9. Keep Git history under manual user control.

### Next Phase

Phase 3 should implement the TypeScript content types/schema in `src/types/index.ts` based on the approved data structures.

Phase 3 should not yet implement:

* JSON content
* Data helpers
* UI components
* CV page composition
* Final visual implementation


## Phase 3 — Create Types / Schema

### Status

Completed

### Objective

Define the TypeScript content types required by the approved CV website architecture.

The purpose of this phase was to establish a compile-time schema for the structured content that will be populated through JSON files in Phase 4.

No CV content or UI implementation was introduced.

### Implementation

Created:

- `src/types/index.ts`

The schema defines the following core content entities:

- `Profile`
- `About`
- `Education`
- `Experience`
- `Bootcamp`
- `Project`
- `Organization`
- `Certification`
- `SkillGroup`

The types are designed to be:

- Simple
- Explicit
- Predictable
- Reusable
- JSON-compatible
- Compatible with Astro static generation
- Suitable for the JSON content layer planned for Phase 4

The schema contains no functions, classes, runtime validation, or external schema libraries.

### Content Types

#### Profile

Represents the primary profile and contact information.

Fields include:

- `name`
- `title`
- `location`
- `email`
- `linkedin`
- `github`
- `photo`
- `cvFile`

No phone field is included because the approved Profile/Sidebar architecture does not define it.

#### About

Represents the About section content.

Fields:

- `content`

#### Education

Represents the education section.

Fields include:

- `university`
- `degree`
- `major`
- `period`
- `gpa`
- `coursework`
- `publication`

`publication` remains part of the Education schema because it is explicitly supported by the design contract.

#### Experience

Represents work experience entries.

Fields:

- `role`
- `organization`
- `period`
- `contributions`

#### Bootcamp

Represents bootcamp/training experience.

Fields:

- `organization`
- `role`
- `period`
- `description`
- `finalProject`
- `tags`

`tags` is retained because the approved architecture explicitly defines tags for Bootcamp entries and includes tags among repeated JSON fields.

#### Project

Represents portfolio projects.

Fields include:

- `slug`
- `title`
- `role`
- `description`
- `tags`
- `documentationUrl`
- `featured`

Project links were intentionally kept minimal.

The schema does not introduce generic GitHub, live-demo, or other link types because they are not part of the approved project data structure.

Case-study existence is not represented by a separate boolean such as `hasCaseStudy`. Optional project detail content will determine whether a case-study page exists.

#### Organization

Represents organization involvement.

Fields:

- `name`
- `period`
- `contributions`

#### Certification

Represents certification records.

Fields:

- `certificate`
- `issuer`
- `date`
- `credentialUrl`

#### SkillGroup

Represents grouped skills.

Fields:

- `category`
- `skills`

### Schema Review Corrections

After the initial Phase 3 implementation, the schema was reviewed against `DESIGN-CONTRACT.md` and `AGENTS.md`.

The following corrections were made:

1. Removed the generic `ProjectLink` abstraction.
2. Removed `Project.links`.
3. Added `Project.documentationUrl?: string` as the supported optional documentation link.
4. Removed `Project.hasCaseStudy?: boolean`.
5. Confirmed that `Profile` does not contain `phone`.
6. Confirmed that `Education.publication` remains supported.
7. Confirmed that `Bootcamp.tags` remains supported.

No other schema changes were made during the correction pass.

### Scope Decisions

Phase 3 intentionally did **not** implement:

- JSON content files
- `src/data/*.json`
- Real CV content
- Placeholder CV content
- Data helper implementations
- `src/lib/data.ts`
- Components
- Layouts
- `BaseLayout`
- `PageLayout`
- Navigation
- Sidebar
- Section components
- UI components
- Homepage implementation
- CV section implementation
- `/projects`
- `/projects/[slug]`
- `404.astro`
- Project case studies
- MDX content
- Responsive behavior
- Mobile navigation
- Final visual styling
- Design tokens
- Typography system
- Color system
- Layout system
- Runtime validation
- New dependencies

### Files Created

- `src/types/index.ts`

### Files Modified

- `src/types/index.ts`

No other project files were intentionally modified during the correction pass.

The correction pass did not run `npm install`.

### Verification

Commands run after the corrections:

```bash
npx astro check
npm run build
git status
````

Results:

* `astro check`: 0 errors, 0 warnings, 0 hints
* `astro build`: successful
* Static build generated successfully
* Git status confirmed the corrected `src/types/index.ts` as the Phase 3 change
* No Phase 4+ content or implementation was created

### Git Workflow

Git operations are handled manually by the user.

No commit was created during Phase 3.

The Agent did not perform Git history modifications.

The user is responsible for reviewing the changes and creating the Phase 3 commit manually.

### Lessons / Decisions Carried Forward

1. TypeScript interfaces define the compile-time structure for the JSON content layer.
2. Keep content types JSON-compatible and free of runtime behavior.
3. Avoid generic abstractions when the approved data architecture already defines a simpler structure.
4. Do not introduce fields that are not supported by the design contract.
5. Do not duplicate information when the existence of optional content already represents that state.
6. Keep the schema simple so Phase 4 JSON content can map directly to it.
7. `DESIGN-CONTRACT.md` remains the authoritative product/design specification.
8. `AGENTS.md` remains the implementation workflow guide.
9. Continue implementation incrementally and keep later-phase decisions out of the current phase.

### Next Phase

Phase 4 should create the structured JSON content files under:

`src/data/`

The JSON should populate the entities defined by the Phase 3 TypeScript schema.

Phase 4 should not yet implement:

* Data helper functions
* Components
* Layouts
* Page composition
* Responsive behavior
* UI implementation
* Project case-study pages


## Phase 4 — Create JSON Content

### Status

Completed

### Objective

Create the initial structured CV content as JSON files under `src/data/`, using only the information provided in the approved CV source.

The purpose of this phase was to separate CV content from presentation so that later Astro components can consume the data without embedding content directly into UI components or TypeScript files.

### Implementation

Created the following JSON content files:

- `src/data/profile.json`
  - Name
  - Professional title
  - Location
  - Email
  - LinkedIn
  - Profile asset reference fields where supported by the schema

- `src/data/about.json`
  - Professional summary

- `src/data/education.json`
  - University
  - Degree
  - Major
  - Period
  - GPA
  - Relevant coursework
  - Thesis

- `src/data/experience.json`
  - Work experience
  - Role
  - Organization
  - Period
  - Contributions

- `src/data/bootcamps.json`
  - Coding Camp experience
  - Organization
  - Role
  - Period
  - Description
  - Final project
  - Relevant tags/coursework
  - Reported achievements and metrics from the source CV

- `src/data/projects.json`
  - SweetAware
  - Bike Sharing Analysis
  - Project roles
  - Descriptions
  - Tags
  - Featured status
  - Supported documentation links where available

- `src/data/organizations.json`
  - ISNC Research
  - Period
  - Contributions

- `src/data/certifications.json`
  - Machine Learning Engineer certification
  - EnglishScore Core Skills certification
  - Issuer
  - Date

- `src/data/skills.json`
  - Programming Languages
  - Data Analytics
  - Tools
  - Soft Skills
  - Languages

### Content Principles

The JSON content was created using the supplied CV source as the sole content source.

The implementation follows these principles:

1. Preserve factual information from the source.
2. Do not invent missing information.
3. Do not fabricate URLs.
4. Do not add achievements, metrics, dates, technologies, or project details that were not provided.
5. Use arrays for repeated content.
6. Keep structured content separate from presentation.
7. Omit optional fields when the source does not provide the required value.
8. Preserve incomplete information rather than replacing it with assumptions.
9. Keep the JSON structure compatible with the Phase 3 TypeScript types.

### Missing / Unrepresented Information

Several source entries contained labels indicating that a link exists in the original CV, but the actual destination URL was not provided.

These were intentionally not fabricated.

Affected information includes:

- Direct GitHub profile URL
- Repository URL for the information management system
- Repository URL for SweetAware
- Repository URL for Bike Sharing Analysis
- Demo URL for Bike Sharing Analysis
- Certificates collection URL
- Thesis publication URL

The source's labels such as `Repository`, `Demo`, and `Certificates` were not treated as URLs.

Optional URL fields were therefore omitted when no actual destination was available.

### Content Integrity

The following information was preserved from the source:

- Education period and GPA
- Relevant coursework
- Thesis title
- Internship organization, role, period, and contributions
- Coding Camp period and role
- GPA 95.6/100
- Distinction and reported ranking/engagement achievements
- Coding Camp coursework
- SweetAware project reference
- Bike Sharing Analysis project
- Organization involvement and contribution
- Certification names, issuers, and dates
- Programming, data, tools, soft skills, and language information

No unsupported achievements or project claims were introduced.

### Scope Decisions

Phase 4 intentionally did **not** implement:

- Data helper functions
- `src/lib/data.ts`
- Astro components
- Layout components
- Sidebar
- Navigation
- CV sections
- Project cards
- Homepage implementation
- `/projects`
- `/projects/[slug]`
- `404.astro`
- Project case-study MDX files
- Responsive behavior
- Mobile navigation
- Final visual styling
- Design system implementation
- Runtime validation
- Additional dependencies

No CV content was written directly into Astro components or TypeScript files.

### Files Created

```text
src/data/
├── profile.json
├── about.json
├── education.json
├── experience.json
├── bootcamps.json
├── projects.json
├── organizations.json
├── certifications.json
└── skills.json
````

### Files Modified

No files outside the Phase 4 content scope were intentionally modified.

### Validation

Each JSON file was parsed and validated successfully.

Validation confirmed:

* Valid JSON syntax
* Expected object/array structures
* Consistent field naming
* Compatibility with the Phase 3 TypeScript content architecture
* No unintended non-JSON content files
* No fabricated URLs

### Git Workflow

Git operations are handled manually by the user.

No Git write operations were performed during Phase 4.

No commit was created.

The user is responsible for reviewing the changes and creating the Phase 4 commit manually.

### Lessons / Decisions Carried Forward

1. JSON files are the source of truth for structured CV content.
2. Presentation should consume the JSON rather than duplicate its content.
3. Optional fields should be omitted when source information is unavailable.
4. Never fabricate URLs for repositories, demos, certificates, profiles, or publications.
5. Preserve incomplete source information so it can be completed later.
6. Keep data structures aligned with the Phase 3 TypeScript schema.
7. Avoid adding fields solely for future possibilities.
8. `DESIGN-CONTRACT.md` remains the authoritative product/design specification.
9. `AGENTS.md` remains the implementation workflow guide.
10. Continue implementation incrementally without introducing later-phase UI or architecture prematurely.

### Next Phase

Phase 5 should implement the shared layout foundation required by the approved architecture.

This includes the shared layout/data foundation needed before reusable components and page sections are assembled.

Phase 5 should not yet implement the complete CV page, individual CV sections, or the `/projects` page.



## Phase 5 — Create Shared Layout Foundation

### Status

Completed

### Objective

Implement the shared foundation required by the CV website before reusable components and page sections are assembled.

This phase establishes:

- The JSON data access layer
- The document-level Astro layout
- The shared page/container layout
- The global CSS design foundation

The implementation uses the existing Phase 3 TypeScript interfaces and Phase 4 JSON content without duplicating CV content.

### Implementation

#### Data Layer

Created:

- `src/lib/data.ts`

The data helper:

- Imports the existing JSON content files from `src/data/`
- Uses the existing TypeScript interfaces from `src/types/index.ts`
- Exposes typed content collections for:
  - Profile
  - About
  - Education
  - Experience
  - Bootcamp
  - Projects
  - Organizations
  - Certifications
  - Skills
- Provides project-related helper functions:
  - `getFeaturedProjects()`
  - `getProjectBySlug()`

No CV content is duplicated in the data helper.

#### Base Layout

Created:

- `src/layouts/BaseLayout.astro`

Provides the document-level HTML structure:

- `<!doctype html>`
- `<html lang="en">`
- Charset metadata
- Viewport metadata
- Configurable page title
- Global stylesheet loading
- Inter font family with the documented system fallbacks

The layout does not introduce:

- SEO systems
- Analytics
- Backend services
- External application dependencies
- Additional application functionality

#### Page Layout

Created:

- `src/components/layout/PageLayout.astro`

Provides the shared page/container foundation with:

- Centered maximum-width container
- Sidebar slot
- Main content slot
- Desktop two-column layout
- Sidebar width based on the design contract
- Main content width foundation
- Responsive single-column layout below the desktop breakpoint

No actual Sidebar or Navigation UI was implemented.

#### Global CSS

Updated:

- `src/styles/global.css`

Established the global visual foundation defined by the design contract.

Includes:

- CSS custom properties for documented colors
- Spacing scale
- Typography scale
- Layout dimensions
- Border and radius tokens
- Transition tokens
- Basic CSS reset
- Base typography
- Heading hierarchy
- Link styling
- Visible keyboard focus styles
- Skip-link foundation
- Reduced-motion handling
- Document-level layout foundations

The CSS intentionally avoids:

- Gradients
- Glassmorphism
- Decorative effects
- Excessive shadows
- Excessive animation
- Dashboard-style styling

### Scope Decisions

Phase 5 intentionally did **not** implement:

- Sidebar component
- Navigation component
- Mobile navigation component
- CV section components
- UI components
- Project cards
- Homepage composition
- `/projects`
- `/projects/[slug]`
- `404.astro`
- Project case-study content
- MDX files
- Final page content presentation
- Section-specific UI
- Project detail pages
- Additional application dependencies beyond the existing foundation

Phase 5 establishes the foundation only. Actual reusable components are deferred to Phase 6.

### Files Created

```text
src/
├── lib/
│   └── data.ts
├── layouts/
│   └── BaseLayout.astro
└── components/
    └── layout/
        └── PageLayout.astro
````

### Files Modified

* `src/styles/global.css`

No JSON content was modified.

No TypeScript content types were modified.

### Verification

Commands performed:

```bash
npx astro check
npm run build
git status --short
```

Results:

* `astro check`: 0 errors, 0 warnings, 0 hints
* `astro build`: successful
* Static site generated successfully
* Changes were reviewed against the Phase 5 scope
* No Sidebar, Navigation, section, or project UI components were introduced

### Incidental Verification Changes

The verification environment resulted in changes to generated/dependency files:

* `.astro/types.d.ts`
* `package-lock.json`

These are not part of the intended Phase 5 implementation and should be reviewed before committing.

If they contain only generated or dependency-installation changes unrelated to the Phase 5 source implementation, restore them before the manual Git commit.

### Git Workflow

Git operations are handled manually by the user.

No Git history was modified during Phase 5.

No commit, merge, rebase, reset, or push was performed by the Agent.

The user is responsible for:

1. Reviewing the Phase 5 diff.
2. Restoring incidental generated/dependency changes if appropriate.
3. Creating the Phase 5 commit manually.
4. Integrating the phase into `main`.

### Lessons / Decisions Carried Forward

1. JSON remains the source of truth for structured CV content.
2. TypeScript interfaces remain the compile-time schema for the JSON layer.
3. Shared layouts should consume data through the data helper rather than duplicate content.
4. Global CSS provides the shared visual foundation; component-specific styling should build on it rather than introduce another styling system.
5. Keep the implementation document-focused and restrained.
6. Avoid unnecessary dependencies and abstractions.
7. Keep Git history under manual user control.
8. Continue implementing the website incrementally according to the approved roadmap.
9. `DESIGN-CONTRACT.md` remains the authoritative product/design specification.
10. `AGENTS.md` remains the implementation workflow guide.

### Next Phase

Phase 6 should create the reusable Astro components required by the architecture.

This includes the reusable:

* Sidebar
* Navigation
* Mobile navigation
* Section title
* Entry structure
* Project card/list
* Skill group
* Tag
* Icon link
* Section component foundations as defined by the approved architecture

Phase 6 should prepare reusable components for later page and section assembly without implementing the complete homepage or `/projects` page.



## Phase 6 — Reusable Components

### Status

Completed

### Objective

Implement the reusable Astro UI and layout component primitives required by the approved architecture.

This phase creates the building blocks used by the section components in Phase 7 and the page assembly in later phases.

No CV section composition or page assembly was performed.

### Implementation

#### UI Components

Created under `src/components/ui/`:

- `Tag.astro`
  - Compact inline pill for skill and project tags
  - Uses `--color-surface` background and `--border-radius-sm`

- `IconLink.astro`
  - Accessible link for profile, contact, and social entries
  - Accepts `href`, `label` (aria), `text` (display), and `external` props
  - Applies `rel="noopener noreferrer"` and `target="_blank"` for external links

- `SectionTitle.astro`
  - Reusable `<h2>` with `title` and `id` props
  - Renders a bottom border divider using the `--color-border` token

- `EntryCard.astro`
  - Flat document-like structural entry for Experience, Education, Bootcamp, Organization, and Certification entries
  - Uses named slots: `header`, `meta`, and default body
  - Applies a bottom border between entries; last entry has no border

- `SkillGroup.astro`
  - Renders a skill category label (`<dt>`) and inline skill `Tag` components (`<dd>`) inside a `<div>` for use within a `<dl>`
  - No progress bars, ratings, or proficiency indicators

- `ProjectCard.astro`
  - Bordered project block matching the design contract
  - Renders: title (`h3`), role, description, tag list, optional documentation link, optional case-study link
  - Accepts `project: Project` and `hasCaseStudy?: boolean`
  - Uses `Tag` and `IconLink` for tags and links

- `ProjectList.astro`
  - Renders a list of `ProjectCard` components
  - Accepts `projects: Project[]` and `hasCaseStudy?: boolean`
  - The caller decides `hasCaseStudy`; `ProjectList` does not maintain a separate slug set

- `MobileNav.astro`
  - Hamburger menu toggle with `aria-expanded` and `aria-controls`
  - Keyboard-accessible: closes on Escape, closes when a nav link is activated
  - Minimal inline JavaScript only; no JavaScript framework

#### Section Layout Components

Created under `src/components/sections/`:

- `Nav.astro`
  - Desktop horizontal navigation bar (visible at `≥768px`) with anchor links to About, Education, Experience, Projects, and Contact
  - Renders `MobileNav` for narrower viewports

- `Sidebar.astro`
  - Profile identity block accepting a `Profile` prop
  - Renders: photo, name (`h1`), professional title, location, email, LinkedIn, GitHub, and Download CV button
  - Uses `IconLink` for contact links
  - Photo size: 100px mobile, 120px desktop

### Scope Decisions

Phase 6 intentionally did **not** implement:

- CV section components
- Homepage composition
- `/projects` page
- Project detail pages
- Project case-study MDX files
- New application dependencies

### Design Decision: ProjectList and hasCaseStudy

The initial `ProjectList` implementation accepted a `caseStudySlugs?: string[]` prop and derived `hasCaseStudy` per card internally using a `Set`.

This was corrected because maintaining a slug list inside `ProjectList` created a second source of truth for case-study existence. Case-study existence is a build-time fact that only the page assembly layer can know.

The corrected API accepts a single `hasCaseStudy?: boolean` prop. The caller passes `true` when it has confirmed that detail pages exist, or omits it (defaults `false`) otherwise. `ProjectCard` is unchanged.

### Files Created

```text
src/components/
├── ui/
│   ├── Tag.astro
│   ├── IconLink.astro
│   ├── SectionTitle.astro
│   ├── EntryCard.astro
│   ├── SkillGroup.astro
│   ├── ProjectCard.astro
│   ├── ProjectList.astro
│   └── MobileNav.astro
└── sections/
    ├── Nav.astro
    └── Sidebar.astro
```

### Files Modified

- `src/components/ui/ProjectList.astro`
  - Corrected the `caseStudySlugs` prop to `hasCaseStudy?: boolean` after the initial implementation

### Incidental Verification Changes

- `.astro/types.d.ts` — auto-regenerated by `astro check`
- `package-lock.json` — updated by `npm install` required to restore the verification environment; no new dependencies were added to `package.json`

### Verification

Commands run:

```bash
npx astro check
npx astro build
git status --short
```

Results:

* `astro check`: 0 errors, 0 warnings, 0 hints (17 files)
* `astro build`: successful
* Git status confirmed only Phase 6 component files as new untracked entries

### Git Workflow

Git operations are handled manually by the user.

No Git write operations were performed during Phase 6.

The user is responsible for reviewing the changes and creating the Phase 6 commit manually.

### Lessons / Decisions Carried Forward

1. The page assembly layer — not individual list components — is responsible for deciding whether case-study detail pages exist.
2. Reusable components should receive decisions through props rather than derive them from secondary data lists.
3. Sidebar is a layout component, not a dashboard widget; it receives typed `Profile` data through props.
4. Mobile nav requires only minimal JavaScript; no framework or library is needed.
5. `DESIGN-CONTRACT.md` remains the authoritative product/design specification.
6. `AGENTS.md` remains the implementation workflow guide.

### Next Phase

Phase 7 should implement the nine CV section components using the Phase 6 reusable components as building blocks.

Phase 7 should not assemble the complete homepage or implement the `/projects` page.



## Phase 7 — Sections

### Status

Completed

### Objective

Implement the nine CV section components that compose the Phase 6 reusable primitives and render the structured JSON content.

Each section component accepts typed data through props, delegates data fetching to the page assembly layer, and uses the existing `SectionTitle`, `EntryCard`, `Tag`, `IconLink`, `SkillGroup`, `ProjectCard`, and `ProjectList` components as appropriate.

No page assembly or `/projects` implementation was performed.

### Implementation

Created under `src/components/sections/`:

- `AboutSection.astro`
  - Renders `About.content` as a paragraph
  - Composes `SectionTitle`

- `EducationSection.astro`
  - Renders a single education entry: university, degree, major, period, GPA, relevant coursework, and publication
  - Coursework is presented as an inline dot-separated list
  - Publication renders as a link when `publication.url` is present, plain text otherwise
  - Composes `SectionTitle`

- `ExperienceSection.astro`
  - Renders all experience entries: role, organization, period, and contribution bullets
  - Uses `list-style: disc` for contribution bullets
  - Composes `SectionTitle` and `EntryCard`

- `BootcampSection.astro`
  - Renders all bootcamp entries: role, organization, period, description, optional final project, and optional tags
  - Composes `SectionTitle`, `EntryCard`, and `Tag`

- `ProjectsSection.astro`
  - Renders featured projects supplied by the caller via the `projects` prop
  - Caller is responsible for passing `getFeaturedProjects()` output
  - `hasCaseStudy` defaults to `false`; the page assembly layer sets it when case-study pages are confirmed
  - Composes `SectionTitle` and `ProjectList`

- `OrganizationsSection.astro`
  - Renders all organization entries: name, period, and contribution bullets
  - Composes `SectionTitle` and `EntryCard`

- `CertificationsSection.astro`
  - Renders all certification entries: certificate, issuer, date, and optional credential link
  - Certificate name renders as a link when `credentialUrl` is present
  - Composes `SectionTitle`

- `SkillsSection.astro`
  - Renders all skill groups using the existing `SkillGroup` component
  - Groups are presented inside a `<dl>`
  - No progress bars, ratings, or proficiency indicators
  - Composes `SectionTitle` and `SkillGroup`

- `ContactSection.astro`
  - Renders email, LinkedIn, GitHub, and Download CV from the `Profile` prop
  - Each contact item has a short label aligned with the link
  - Composes `SectionTitle` and `IconLink`

### Scope Decisions

Phase 7 intentionally did **not** implement:

- Homepage composition (`src/pages/index.astro`)
- `/projects` page
- Project detail pages
- Project case-study MDX files
- New application dependencies
- New UI primitives beyond what Phase 6 already provides

### Data Architecture

Section components receive data through props. They do not import from `src/lib/data.ts` directly.

The page assembly layer (Phase 8) is responsible for importing data and passing it to section components. This keeps the sections pure presentational components and avoids coupling them to a specific data source.

### Files Created

```text
src/components/sections/
├── AboutSection.astro
├── EducationSection.astro
├── ExperienceSection.astro
├── BootcampSection.astro
├── ProjectsSection.astro
├── OrganizationsSection.astro
├── CertificationsSection.astro
├── SkillsSection.astro
└── ContactSection.astro
```

### Files Modified

None. No existing files were modified during Phase 7.

### Incidental Verification Changes

- `.astro/types.d.ts` — auto-regenerated by `astro check`

### Verification

Commands run:

```bash
npx astro check
npx astro build
git status --short
```

Results:

* `astro check`: 0 errors, 0 warnings, 0 hints (26 files)
* `astro build`: successful
* Git status confirmed only the nine new section component files as untracked entries, plus the auto-regenerated `.astro/types.d.ts`

### Git Workflow

Git operations are handled manually by the user.

No Git write operations were performed during Phase 7.

The user is responsible for reviewing the changes and creating the Phase 7 commit manually.

### Lessons / Decisions Carried Forward

1. Section components are pure presentational components; they do not fetch their own data.
2. The page assembly layer supplies data to section components through props.
3. `ProjectsSection` does not call `getFeaturedProjects()` internally; the caller supplies the filtered list.
4. `hasCaseStudy` remains the responsibility of the page assembly layer, not `ProjectsSection` or `ProjectList`.
5. Navigation anchor IDs used by sections: `#about`, `#education`, `#experience`, `#bootcamp`, `#projects`, `#organization`, `#certifications`, `#skills`, `#contact`.
6. Phase 8 homepage assembly should confirm these anchor IDs align with the `Nav` component's link targets.
7. `DESIGN-CONTRACT.md` remains the authoritative product/design specification.
8. `AGENTS.md` remains the implementation workflow guide.

### Next Phase

Phase 8 should implement responsive behavior across layouts and components, then assemble the homepage using the Phase 6 and Phase 7 components.