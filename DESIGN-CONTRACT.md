# DESIGN CONTRACT

**Project:** Personal CV / Portfolio Website
**Version:** 2.0
**Status:** Final
**Updated:** 2026-10-02

---

## 1. Purpose

This document is the authoritative design and implementation contract for the personal CV website.

It defines:

* visual direction
* layout structure
* responsive behavior
* navigation behavior
* profile presentation
* section/card presentation
* typography
* spacing
* icon usage
* interaction and motion
* content presentation
* component architecture
* styling technology
* accessibility requirements
* content/data boundaries

Any implementation must follow this contract.

If an implementation decision conflicts with this document, this document takes precedence unless the deviation is explicitly approved and this contract is updated.

---

# 2. Product Direction

The website is a professional recruiter-facing CV/portfolio website.

The primary goal is to present the candidate's:

* identity
* education
* experience
* bootcamp/training
* projects
* organizations
* certifications
* skills
* contact information

The design should feel like a **modern professional CV presented through a structured card-based interface**.

It must not feel like:

* an admin dashboard
* a SaaS landing page
* a social media profile
* a heavily decorative portfolio
* a generic template with excessive visual effects

The visual hierarchy must prioritize readability, information scanning, and professional presentation.

---

# 3. Technology

## Required

* Astro
* TypeScript
* Tailwind CSS

## Static Architecture

The website remains statically generated.

There is:

* no backend
* no database
* no CMS
* no authentication
* no server-side application logic
* no analytics backend

Content remains separated from presentation.

JSON remains the source of truth for structured CV content.

MDX remains optional and is only introduced when a project genuinely requires a long-form case study.

---

# 4. Routes

Required routes:

```text
/
 /projects
 /404
```

Optional:

```text
/projects/[slug]
```

Project detail pages must only exist when there is actual case-study content.

Do not create empty or placeholder MDX case-study pages.

---

# 5. Global Layout

## 5.1 Desktop Layout

Desktop begins at:

```text
>= 1024px
```

The page uses a fixed top navigation and a two-column application-like viewport.

Conceptually:

```text
┌─────────────────────────────────────────────────────────────┐
│ Logo / Brand       Navigation links                         │
├──────────────────────┬──────────────────────────────────────┤
│                      │                                      │
│   PROFILE COLUMN     │        SCROLLABLE CONTENT             │
│                      │                                      │
│   Profile Card       │        Section Card                   │
│                      │                                      │
│                      │        Section Card                   │
│                      │                                      │
│                      │        Section Card                   │
│                      │                                      │
└──────────────────────┴──────────────────────────────────────┘
```

The profile column is stationary while the content column is independently scrollable.

The profile column must not move with the right-side content during normal page scrolling.

The main content area should be vertically centered within the visible page area where practical, while still allowing the content column to scroll independently when content exceeds the viewport.

Do not allow the profile column to become an independently scrolling content area.

## 5.2 Desktop Navigation

The navigation is positioned at the top of the viewport.

It must remain visible while the user scrolls.

The navigation must not be positioned as a left-side navigation rail.

The navigation contains:

* brand/logo area on the left
* navigation links on the right or centered navigation group

The logo/brand area must visually occupy the same left-side column alignment as the profile column below it.

The logo may initially use a placeholder.

Do not invent a final personal logo design.

Example structure:

```text
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                 About Education Experience Projects  │
└─────────────────────────────────────────────────────────────┘
```

Navigation links:

* About
* Education
* Experience
* Projects
* Contact

The navigation must provide clear active/hover/focus states.

---

# 6. Profile Column

## 6.1 Desktop

The profile is presented as a dedicated card.

The profile card contains:

1. profile image
2. name
3. professional title
4. location
5. social links
6. Download CV button

The profile card remains stationary while the right-side content scrolls.

The profile image must have a reusable image container/frame so the actual image can be replaced later without changing the component structure.

Until the real profile image is available, use a visually appropriate placeholder.

Do not invent a fake personal photograph.

## 6.2 Profile Icons

Use icons consistently for relevant profile information.

Examples:

* location → location icon
* LinkedIn → LinkedIn icon
* GitHub → GitHub icon
* Download CV → download icon

Social links should primarily be represented as recognizable icons rather than long visible URLs.

Social icons should have:

* accessible labels
* hover state
* focus state
* subtle color transition
* subtle motion

Do not use excessive animation.

## 6.3 Download CV

The Download CV action is a visually prominent button.

It includes a download icon before the label.

The button must have:

* clear contrast
* hover color transition
* subtle movement or visual feedback
* visible keyboard focus
* accessible text

---

# 7. Card System

The primary visual structure is card-based.

Each major CV section on the right side should be presented as a card.

Examples:

```text
┌────────────────────────────────────────────┐
│ [icon] About                               │
│                                            │
│ Content...                                 │
└────────────────────────────────────────────┘
```

```text
┌────────────────────────────────────────────┐
│ [icon] Education                           │
│                                            │
│ University              Period             │
│ Degree                  GPA                │
│                                            │
│ Publication...                             │
│ Coursework [tag] [tag] [tag]               │
└────────────────────────────────────────────┘
```

Cards should use:

* clear border
* restrained radius
* restrained shadow if needed
* consistent internal padding
* consistent vertical spacing
* strong heading hierarchy

Avoid:

* excessive shadows
* glassmorphism
* gradients
* decorative backgrounds
* excessive nested cards

The goal is structured information, not a dashboard.

---

# 8. Section Headers

Every major section card has:

* section icon
* section title

Example:

```text
[icon] Education
```

The icon must be visually aligned with the section title.

Recommended icon concepts:

| Section        | Icon           |
| -------------- | -------------- |
| About          | User           |
| Education      | Graduation cap |
| Experience     | Briefcase      |
| Bootcamp       | Code / Laptop  |
| Projects       | Folder / Code  |
| Organization   | Users          |
| Certifications | Badge / Award  |
| Skills         | Code / Tools   |
| Contact        | Mail           |

Use one consistent icon library rather than mixing unrelated icon styles.

Lucide Icons is the preferred default icon system.

Brand-specific icons such as GitHub and LinkedIn may use an appropriate brand icon source when necessary.

---

# 9. Date / Period Placement

Date and period placement must be consistent across all sections.

For desktop layouts where sufficient width exists, periods should appear on the right side of the corresponding entry.

Example:

```text
Software Engineer Intern                         Jul 2024 – Sep 2024
Organization Name
Contribution...
```

The same visual convention should be used for:

* Education
* Experience
* Bootcamp
* Organization
* Certifications where applicable

Do not arbitrarily place dates below entries in one section and beside entries in another when the available width allows a consistent right-aligned treatment.

On narrow screens, dates may move below the primary entry information when necessary to prevent overflow.

---

# 10. About Section

The About section is a standard content card.

Structure:

```text
[icon] About

Short professional introduction.
```

Keep the presentation readable and concise.

Do not create unnecessary decorative elements.

---

# 11. Education Section

Education entries should present information in this order:

1. university
2. degree / major
3. period and academic information
4. publication
5. relevant coursework

Example:

```text
University Name                              Jul 2022 – Jun 2026
Bachelor's Degree
Information Systems
GPA: 3.88 / 4.00

[publication icon] Thesis / Publication Title

Relevant Coursework
[Data Analysis] [Database Systems] [Data Mining]
[Artificial Intelligence] [Machine Learning]
```

## Publication

Publication/thesis information must include an icon before the title.

If a real repository/publication URL is not yet available, use an explicitly defined placeholder rather than inventing a real URL.

When the real URL becomes available, the same UI should be able to link directly to it.

## Relevant Coursework

Relevant coursework appears **after the publication**.

Coursework is displayed as tags/chips.

Tags must have:

* bordered or filled visual treatment
* consistent padding
* rounded corners
* subtle hover transition
* subtle color/border change on hover

Do not use progress bars or ratings.

---

# 12. Experience Section

Experience entries are displayed as structured entries inside the section card.

Desktop:

```text
Role / Position                               Period
Organization
• Contribution
• Contribution
```

The period is right-aligned.

Contributions should use readable bullet points.

Do not turn each contribution into a separate card.

---

# 13. Bootcamp Section

Bootcamp entries follow the same date placement convention.

Structure:

```text
Bootcamp / Role                                Period
Organization

• Description / achievement
• Description / achievement
• Description / achievement

[icon] Capstone Project
Capstone Project Title
```

The previous label `Final Project` is replaced with:

```text
Capstone Project
```

The capstone project title must support a link to its repository/project URL.

If the real URL is unavailable, use the project's explicitly defined placeholder mechanism rather than inventing a repository URL.

Capstone project links should include a relevant icon.

Descriptions must be presented as bullet points rather than one large paragraph.

---

# 14. Project Section

The homepage displays featured projects only.

The `/projects` route displays all projects.

Projects remain sourced from the existing project data structure.

Each project presentation includes:

* project title
* role
* description
* tags
* documentation/repository action

The documentation/repository action should appear toward the right side of the project header where space allows.

Example:

```text
Project Name                                  [document icon]
Role
Description...

[tag] [tag] [tag]
```

The documentation icon must be clearly recognizable and accessible.

It should link to the project's documentation/repository URL.

If no real URL exists yet, use an explicitly defined placeholder mechanism and do not invent a real repository.

Tags use the shared tag system defined below.

Do not add project images to the homepage unless explicitly approved.

---

# 15. Shared Tag / Chip System

Tags are a shared UI pattern and must use the same visual treatment across:

* projects
* coursework
* skills
* other appropriate metadata

Do not independently style tags in each section.

Base appearance:

* compact padding
* rounded corners
* subtle border
* readable text
* consistent font size

Hover behavior:

* subtle accent color transition
* subtle border/background change
* optional very small translate or scale effect
* transition approximately 150–200ms

Do not use large or distracting animations.

All tag interactions must respect:

```text
prefers-reduced-motion
```

---

# 16. Organization Section

Organization entries follow the same general entry structure.

Desktop:

```text
Organization / Position                       Period

• Contribution
• Contribution
```

The period is positioned consistently on the right.

Do not introduce a separate visual pattern only for organizations.

---

# 17. Certifications Section

Certification entries remain compact and scannable.

The section must include a:

```text
View all certificates
```

action.

The action should link to the certificate collection when the real URL is available.

Until the real Drive URL is available, use the explicitly defined placeholder mechanism.

The action should include a suitable icon where appropriate.

Do not display an invented Drive URL.

---

# 18. Skills Section

Skills are grouped by category.

Categories appear **above** their corresponding skills.

Example:

```text
Data & Machine Learning

[Python] [SQL] [Pandas] [Scikit-learn]

Programming

[Python] [JavaScript] [TypeScript]

Tools

[Git] [GitHub] [VS Code]
```

The category itself must be visually prominent enough to establish hierarchy.

Skills use the shared tag/chip system.

Do not use:

* progress bars
* percentages
* star ratings
* skill meters
* artificial proficiency scores

---

# 19. Contact Section

The Contact section should be slightly more engaging than the other sections while remaining professional.

Use concise, inviting copy that encourages the visitor to make contact.

Social/contact actions should use icons where appropriate.

Example actions may include:

* email
* LinkedIn
* GitHub

Buttons/links should have:

* clear icons
* accessible labels
* hover color transition
* subtle motion
* visible focus state

Avoid excessive decorative effects.

---

# 20. Responsive Design

The website must be designed intentionally for:

* desktop
* tablet
* mobile

Do not treat responsive design as an afterthought.

---

## 20.1 Desktop

Breakpoint:

```text
>= 1024px
```

Layout:

* fixed top navigation
* two-column layout
* profile column stationary
* right content column independently scrollable
* profile vertically positioned within the visible viewport
* content cards have consistent spacing
* dates are right-aligned where space allows

---

## 20.2 Tablet / iPad

Approximate range:

```text
768px – 1023px
```

The desktop two-column layout changes to a single content flow.

Navigation remains at the top and is centered.

The profile becomes a horizontal profile layout:

```text
┌──────────────────────────────────────────────┐
│ [PHOTO]   Name                               │
│           Role                               │
│           Location                           │
│           Social icons                       │
│           Download CV                        │
└──────────────────────────────────────────────┘
```

Photo appears on the left.

Profile information appears on the right.

The main content cards appear below the profile.

The page must have generous horizontal padding so content does not sit directly against the viewport edges.

---

## 20.3 Mobile

Below:

```text
768px
```

Use a single-column layout.

Profile becomes vertically stacked:

```text
[PHOTO]

Name
Role
Location

Social icons

Download CV
```

Profile content is center-aligned.

Social icons are displayed horizontally in one row when space permits.

Navigation is centered and must remain usable on small screens.

The page must maintain comfortable horizontal padding.

Do not allow text or cards to touch the viewport edges.

Typography must scale down appropriately from desktop.

Mobile should feel intentionally designed rather than being a compressed desktop layout.

---

# 21. Responsive Spacing

All responsive layouts must maintain visible horizontal breathing room.

The page must not place cards directly against the viewport edges.

Use progressively appropriate horizontal padding at:

```text
mobile
tablet
desktop
```

Avoid excessive whitespace that causes important content to become unnecessarily difficult to scan.

Spacing must be consistent through the Tailwind spacing system.

Do not introduce arbitrary one-off pixel values unless genuinely required.

---

# 22. Typography

Typography must prioritize readability and hierarchy.

Use a clean sans-serif typeface.

Recommended default:

```text
Inter
```

with appropriate system fallbacks.

Hierarchy:

```text
H1 → candidate name
H2 → section titles
H3 → entry/project titles
```

Body text should remain compact enough for CV scanning.

Mobile typography must be smaller than desktop where appropriate.

Avoid oversized headings that dominate the viewport.

---

# 23. Color System

Use a restrained professional palette.

Required semantic roles:

* page background
* card background
* primary text
* secondary text
* border
* accent
* accent hover
* focus state

Do not use:

* excessive gradients
* neon colors
* decorative multicolor palettes
* glassmorphism

Accent colors may be used for:

* links
* icons
* tag hover states
* active navigation
* buttons
* focus indicators

The color system must remain consistent across components.

---

# 24. Interaction and Motion

Interaction should provide feedback without becoming decorative noise.

Allowed:

* color transitions
* border transitions
* subtle background transitions
* small translate/scale effects
* subtle icon movement

Recommended duration:

```text
150ms – 200ms
```

Avoid:

* large transforms
* bouncing
* continuous animation
* parallax
* scroll-triggered decorative animation

Respect:

```css
prefers-reduced-motion: reduce
```

and disable or minimize non-essential motion when requested by the user.

---

# 25. Navigation Behavior

The top navigation must:

* remain visible while scrolling
* provide clear active/hover/focus states
* support mobile navigation
* use semantic navigation markup
* have accessible controls
* maintain a consistent position across pages

The logo/brand area occupies the left side of the desktop navigation and is centered/appropriately aligned on smaller layouts.

---

# 26. Accessibility

Required:

* semantic HTML
* one primary H1 per page
* logical heading hierarchy
* accessible navigation
* visible keyboard focus
* sufficient color contrast
* meaningful image alt text
* accessible icon buttons/links
* minimum 44px touch targets where practical
* accessible mobile navigation
* reduced-motion support
* skip-to-content mechanism

Icons must never be the only accessible indication of an action.

Icon-only buttons/links require accessible labels.

---

# 27. Component Architecture

Reusable components should remain separated by responsibility.

Expected structure:

```text
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
```

Components should be reused rather than duplicating equivalent markup and styling.

Do not create abstractions without a real reuse case.

---

# 28. Styling Architecture

Tailwind CSS is the required styling system.

Do not maintain the previous plain-CSS design system as a parallel styling architecture.

Use:

* Tailwind utility classes
* Tailwind responsive variants
* shared component classes/variants where genuinely useful
* CSS only when required for behavior that Tailwind cannot reasonably express

Do not introduce another styling framework.

Do not recreate an entire custom CSS utility system on top of Tailwind.

Repeated visual patterns must be implemented through reusable components rather than copy-pasted class strings where practical.

---

# 29. Data Architecture

JSON remains the source of truth for structured CV content.

Types remain in:

```text
src/types/index.ts
```

Data access/helpers remain in:

```text
src/lib/data.ts
```

Do not duplicate the same content in components.

Do not invent missing information.

Optional URLs should remain optional until real URLs are available.

Placeholder links must be explicitly identifiable and must never pretend to be real repositories, certificates, or social profiles.

---

# 30. Content Model Adjustments

The existing content model may be adjusted only where required by this contract.

In particular:

### Bootcamp

Bootcamp content must support:

* bullet-point descriptions
* capstone project title
* optional capstone URL

The UI label must be:

```text
Capstone Project
```

not:

```text
Final Project
```

### Projects

Projects continue to support an optional documentation/repository URL.

### Education

Publication remains optional.

Relevant coursework remains an array and is rendered after publication.

### Certifications

Certification collection link remains separate from individual certification data.

Do not add unnecessary fields.

---

# 31. Placeholder Content and Links

When a real image or URL is not yet available:

* use a clearly identifiable placeholder
* do not invent realistic personal URLs
* do not invent repository URLs
* do not invent certificate URLs
* do not invent social accounts

The placeholder must be easy to replace later without changing component architecture.

Placeholder image:

```text
public/assets/images/profile-placeholder.*
```

may be used until the real profile image is provided.

---

# 32. Homepage Project Behavior

Homepage:

```text
/
```

shows featured projects only.

Projects page:

```text
/projects
```

shows all projects.

Use:

```ts
getFeaturedProjects()
```

for homepage selection.

Do not maintain a second list of featured projects inside components.

---

# 33. Project Detail Pages

Project detail pages are optional.

Only create:

```text
/projects/[slug]
```

when a project has genuine long-form case-study content.

Do not add MDX infrastructure merely because the architecture supports it.

The absence of a case study must not produce a broken or empty case-study link.

---

# 34. Visual Consistency Rules

The following patterns must remain consistent across the entire site:

* section card structure
* section title + icon placement
* date/period placement
* tag/chip styling
* border treatment
* card radius
* card padding
* typography hierarchy
* icon style
* hover behavior
* focus behavior
* spacing rhythm

Do not create a new visual pattern for an individual section when an existing shared pattern already applies.

---

# 35. What the Design Must Avoid

Do not introduce:

* dashboard-style grids
* excessive cards within cards
* large decorative illustrations
* gradient-heavy backgrounds
* glassmorphism
* excessive shadows
* oversized typography
* progress bars for skills
* star ratings
* animated backgrounds
* unnecessary badges
* excessive motion
* unrelated UI widgets
* blog functionality
* comments
* authentication
* CMS functionality
* backend functionality

---

# 36. Verification Requirements

Before considering the redesign complete, verify:

### Type checking

```text
npx astro check
```

Must produce:

```text
0 errors
0 warnings
0 hints
```

### Production build

```text
npm run build
```

Must complete successfully.

### Routes

Verify:

```text
/
/projects
/404
```

and any intentionally implemented project detail pages.

### Responsive review

Manually inspect at minimum:

```text
1280px desktop
1024px desktop breakpoint
768px tablet
~390px mobile
```

Also verify that there is no unintended horizontal overflow.

### Accessibility

Verify:

* keyboard navigation
* focus states
* mobile navigation
* image alt text
* heading hierarchy
* link/button labels
* reduced motion

---

# 37. Implementation Principles

When implementing this contract:

1. Preserve existing content unless explicitly changed.
2. Preserve existing route architecture unless required.
3. Prefer reusable components.
4. Prefer shared UI patterns over section-specific duplication.
5. Keep the implementation simple.
6. Do not introduce dependencies without justification.
7. Do not invent missing content.
8. Do not redesign unrelated functionality.
9. Do not add features outside this contract.
10. Treat visual consistency as a system rather than a collection of isolated fixes.

---

# 38. Contract Status

This document supersedes **DESIGN-CONTRACT.md v1.0**.

Version 2.0 introduces the approved visual redesign:

```text
Classic CV
     ↓
Modern Card-Based CV
```

The major approved changes are:

* fixed top navigation
* desktop two-column layout
* stationary desktop profile column
* independently scrollable right content column
* card-based content sections
* tablet horizontal profile
* mobile centered vertical profile
* consistent right-aligned periods
* shared icon system
* shared tag/chip system
* subtle hover interactions
* Tailwind CSS styling
* revised Bootcamp, Education, Projects, Certifications, Skills, and Contact presentation

All other existing architectural requirements remain valid unless explicitly changed by this version.
