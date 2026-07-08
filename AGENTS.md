# AGENTS.md

## Project

This is William Scott's software engineering portfolio: a static React single-page app deployed to GitHub Pages. The site presents portfolio projects, resume access, an about page, and an EmailJS-backed contact form.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router with `HashRouter`
- `react-icons`
- EmailJS for the contact form
- pnpm for package management

Use pnpm for all package and script commands:

```bash
pnpm install
pnpm run build
pnpm run lint
pnpm run dev
```

## Content Management

Most editable portfolio content belongs in:

```text
src/content/portfolio.ts
```

Prefer editing that file for:

- Name/title/profile metadata
- Homepage text
- About page paragraphs
- Contact intro/social links
- Project titles, descriptions, statuses, stacks, logos, screenshots, GitHub links, live links, CTAs, and video embeds

Only edit route/component files when changing behavior, layout, or presentation.

## Structure

- `src/routes/`: page-level route components.
- `src/components/`: reusable UI components.
- `src/content/`: structured editable content.
- `src/assets/`: bundled assets imported by React, including the resume PDF and profile/collage images.
- `public/`: static assets referenced by URL, especially project screenshots and project logos.
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.
- `dist/`: generated build output. Do not edit manually.

## Development Guidelines

- Prefer simple, maintainable changes over new abstractions.
- Keep existing visual style unless explicitly asked to redesign.
- Use TypeScript types for shared data shapes.
- Use Tailwind utility classes for styling.
- Avoid adding new dependencies unless they clearly reduce complexity.
- Keep content changes separate from behavior changes when practical.
- Do not commit `.env`; use `.env.example` and GitHub repository variables for deployed Vite values.

## Deployment

Deployment runs automatically on pushes to `main` through GitHub Actions.

The workflow:

- installs pnpm from `package.json`'s `packageManager`
- runs `pnpm install --frozen-lockfile`
- runs `pnpm run build`
- uploads `dist`
- deploys to GitHub Pages

Required GitHub repository variables:

- `VITE_EJS_PUBLIC_KEY`
- `VITE_EJS_TEMPLATE_ID`
- `VITE_EJS_SERVICE_ID`

Do not use or expose an EmailJS private key in this frontend app.

## Verification

Before finalizing accepted code changes or preparing a commit-ready handoff, run:

```bash
pnpm run build
pnpm run lint
```

During rapid visual iteration, do not run build and lint after every minor class, copy, spacing, color, or font tweak. Make the requested UI change and wait for the user to accept the batch before running full verification.

Run build and lint immediately when a change could plausibly create a compile or runtime issue, including changes to logic, imports, component structure, routing, TypeScript types, package/config files, or dependency usage.

If dependency changes are made, also run:

```bash
pnpm audit --audit-level moderate
```

If a local build modifies `dist/`, restore it before finalizing unless the user explicitly wants generated build artifacts committed.

## Known Notes

- `HashRouter` is intentional for static GitHub Pages routing.
- Resume asset: `src/assets/William_Scott_76.pdf`.
- Some older unused assets/components may exist; remove only when clearly unrelated to the user's current request.
- Keep project demo media lightweight enough for GitHub Pages.
- StockTower uses `public/stocktower/stocktower.svg`, Rubik font text, a live-site link, and an invite-code CTA to `#/contact`.
- Mars Rover Terrain Risk Classifier is listed under Maritime Assign and currently uses only a GitHub link.
