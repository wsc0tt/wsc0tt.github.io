# Project Summary

## Overview

This repository contains William Scott's personal portfolio website. It is a static React single-page application that presents a short professional introduction, project case studies, a resume viewer/download page, an about page, and contact options.

The site content positions William Scott as a software engineer focused on embedded systems, AI/ML, full-stack development, and systems-level programming. The copy says he recently graduated from Sacramento State with a B.S. in Computer Science and is seeking software engineer roles for 2026.

## Framework and Libraries

- **Application framework:** React 19 with TypeScript.
- **Build tool:** Vite 6 using `@vitejs/plugin-react-swc`.
- **Routing:** `react-router-dom` 7 with `HashRouter`.
- **Styling:** Tailwind CSS 3, PostCSS, Autoprefixer, and a small amount of global CSS.
- **Icons:** `react-icons`, mainly Font Awesome 6 icons.
- **Contact form:** `@emailjs/browser`.
- **Carousel:** Custom local carousel component. `react-slick` and `slick-carousel` are installed but not currently used in the inspected source.
- **Package manager:** pnpm, declared as `pnpm@9.12.0` in `package.json`.
- **Tooling:** TypeScript, ESLint 10, `typescript-eslint`, React hooks/refresh ESLint plugins.

## Folder Structure

```text
.
├── .github/workflows/deploy.yml
├── dist/
├── public/
│   ├── gol/
│   ├── ma/
│   ├── mma/
│   ├── sa/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── William_Scott_Resume.pdf
│   │   ├── baker.avif
│   │   ├── collage.jpg
│   │   ├── pallette.txt
│   │   ├── self.jpg
│   │   └── self2.jpg
│   ├── components/
│   ├── routes/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
└── vite.config.ts
```

`dist/` is a generated production build directory and should generally be treated as build output. `node_modules/` is also present locally but is not part of the project source.

## Routes and Pages

Routes are declared in `src/App.tsx` inside a shared layout with `Header` and `Navbar`.

- `/` -> `Home`
  - Introductory landing content.
  - Describes William as a software engineer specializing in embedded systems, AI/ML, and full-stack development.
  - States he is actively seeking software engineer positions for 2026.

- `/projects` -> `Projects`
  - Lists portfolio projects from `src/components/projectList.tsx`.
  - Renders each project with title, description, technology stack, image carousel or YouTube embed, and GitHub link.

- `/resume` -> `Resume`
  - Displays a PDF viewer via `PdfView`.
  - Provides a resume download button.

- `/about` -> `About`
  - Shows a collage image and personal story.
  - Covers the transition from construction/general engineering into software development and Sacramento State studies.

- `/contact` -> `Contact`
  - Provides LinkedIn and Discord buttons.
  - Includes an EmailJS-backed contact form with name, email, and message fields.

The router uses `HashRouter`, so deployed URLs are hash-based. This avoids server-side rewrite requirements on static hosts such as GitHub Pages.

## Reusable Components

- `Header`
  - Displays profile image, name, and "software engineer" title.

- `Navbar`
  - Responsive navigation.
  - Uses text links on wider screens and icon-only links below 450px.
  - Highlights the active mobile route using the custom `spring` color.

- `ImageCarousel`
  - Local state-based carousel for project screenshots.
  - Supports public-folder image paths via `imagesDir`.
  - Includes previous/next controls and dot indicators.

- `SocialButton`
  - Reusable icon + text external link button.

- `DownloadButton`
  - Reusable PDF download link/button.

- `PdfView`
  - Embeds the resume PDF using an `<object>` element.

- `ImageWide`
  - Thin wrapper around an image element.

- `Dropdown`
  - Generic dropdown component. It appears unused in the current routed pages.

- `TextBox`
  - Generic text container. It appears unused in the current routed pages.

## Styling Approach

Styling is primarily done with Tailwind utility classes directly in JSX. Global CSS in `src/index.css` defines base document styles, form styles, icon sizing, paragraph styles, and reusable `.box` and `.form` classes.

The Tailwind config extends:

- Fonts:
  - `sans`: SUSE
  - `serif`: Young Serif

- Colors:
  - `spring`: `#04F16B`
  - `jet`: `#2d2e2e`
  - `night`: `#0B090A`
  - `battle`: `#8A897C`
  - `ice`: `#758BFD`

The visual design uses a dark background, blue gradients, rounded containers, large shadows, white text, and green accent icons.

Fonts are imported from Google Fonts in `index.html` through an inline `@import`.

## Deployment Method

Deployment is handled through GitHub Actions:

- `.github/workflows/deploy.yml`
- Runs on pushes to `main` or manual dispatch.
- Installs Node 20 and pnpm 9.12.0.
- Runs `pnpm install --frozen-lockfile` and `pnpm run build`.
- Reads `VITE_EJS_PUBLIC_KEY`, `VITE_EJS_TEMPLATE_ID`, and `VITE_EJS_SERVICE_ID` from GitHub repository variables during the build.
- Uploads `./dist` using `actions/upload-pages-artifact`.
- Deploys with `actions/deploy-pages`.

The app uses `vite.config.ts` with `base: '/'`, which fits a user/organization GitHub Pages site at the domain root. The `HashRouter` also reduces static-host routing problems.

## Project Content and Resume Data

### Portfolio Identity

- Name: William Scott.
- Title: Software Engineer.
- Education/career copy:
  - Recently graduated from Sacramento State with a B.S. in Computer Science.
  - Focus on systems-level programming.
  - Interested in embedded systems, AI/ML, and full-stack development.
  - Open to software engineering roles in 2026.

### Projects

1. **Maritime Assign**
   - Web-based job management platform for the Marine Engineers' Beneficial Association.
   - Replaces a Google Sheets-based job board.
   - Supports job listings, dispatch workflows, role-based access, and real-time visibility.
   - Stack listed: React, Node.js, Vite, Docker, Supabase, JavaScript, PostgreSQL, TailwindCSS, React Testing Library, Jest, Vitest, Formik, Cloudflare.
   - GitHub: `https://github.com/Maritime-Assign/MEBA`
   - Public link exists in data: `https://meba.pages.dev/`
   - Video embed exists.

2. **Sun Armor Ai**
   - Skin lesion classification web app using convolutional neural networks.
   - Mentions PyTorch, TensorFlow, ONNX, TensorFlow.js, HuggingFace, React, TypeScript, Python, and client-side inference.
   - GitHub: `https://github.com/wsc0tt/SunArmorAi`
   - Public link exists in data: `https://wsc0tt.github.io/SunArmorAi/`

3. **Mobile Medical App**
   - Full-stack/mobile project for a medical organization.
   - William led a team of six other computer science students.
   - Completed in six two-week sprints with evolving client requirements.
   - Stack listed: React Native, Node.js, Supabase, Expo, JavaScript, TypeScript.
   - GitHub: `https://github.com/DreamTeam131/Medical-App`

4. **Conway's Game of Life - Java OpenGL**
   - Real-time cellular automaton simulation.
   - Built with Java and LWJGL/OpenGL.
   - Supports adjustable speed, grid dimensions, and color themes.
   - Stack listed: Java, OpenGL, Swing, LWJGL, GLSL.
   - GitHub: `https://github.com/wsc0tt/GameOfLife`
   - Video embed exists.

### Resume Asset

- Resume file present: `src/assets/William_Scott_Resume.pdf`
- PDF metadata title: `William_Scott_Resume_C`
- The download page imports this file in `src/routes/resume.tsx`.
- The embedded viewer and download button now use the same resume asset.
- Because `pdftotext` is not installed in the local environment, the PDF body text was not extracted during this analysis.

## Technical Debt

- **Unused components/assets exist.**
  - `Dropdown` and `TextBox` are not referenced by the current route tree.
  - `baker.avif`, `self.jpg`, and `pallette.txt` appear unused in the inspected source.

- **Project link data is partially unused.**
  - Some project objects include a `link` field, but the `Project` interface and render logic do not expose live project links.

- **EmailJS environment variables are runtime-critical.**
  - Contact form depends on `VITE_EJS_PUBLIC_KEY`, `VITE_EJS_SERVICE_ID`, and `VITE_EJS_TEMPLATE_ID`.
  - `.env` is no longer tracked; `.env.example` documents the required local keys.
  - The previously tracked EmailJS private key should be rotated outside the repo.

- **Accessibility gaps.**
  - Icon-only mobile nav links do not expose labels.
  - Carousel buttons do not have accessible labels.
  - Project carousel images do not include meaningful `alt` text.
  - The PDF viewer fallback is minimal.

- **Global browser access during initial render.**
  - `Navbar` initializes state with `window.innerWidth`, which is acceptable for client-only Vite rendering but would break if server rendering were introduced.

- **Generated output is present in the repo workspace.**
  - `dist/` exists locally. If committed, it can drift from source and duplicate deployment artifacts.

- **Outdated browser compatibility data.**
  - The build emitted a Browserslist warning that `caniuse-lite` is 13 months old.

## Recommended Improvements

1. Add visible links for project demos when a project object includes `link`.

2. Remove unused components/assets or mark them as intentional future work.

3. Improve accessibility:
   - Add `aria-label` values for icon-only navigation and carousel buttons.
   - Add descriptive `alt` text for carousel screenshots.
   - Consider visible focus states for interactive controls.

4. Update favicon and metadata:
   - Replace the default Vite favicon.
   - Add description and social preview metadata for portfolio sharing.

5. Add lightweight verification:
   - Keep `pnpm run build` passing.
   - Add a small route/component smoke test if the project grows.
   - Run `pnpm run lint` in CI alongside the build.

6. Consider moving portfolio content into structured data.
    - Project descriptions, stacks, links, and media could live in a typed data file separate from components.
    - This would make future content edits safer and reduce route/component churn.
