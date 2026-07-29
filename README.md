# Omar Ahmed Elsayed — Portfolio

Portfolio site for Omar Ahmed Elsayed — Data Engineer. Built with Vite + React 18, plain JSX and plain CSS. Static site, no backend.

## Prerequisites

- [Bun](https://bun.sh) (or Node.js + npm)

## Getting started

```bash
bun install      # install dependencies
bun run dev      # start the dev server (Vite)
```

## Build

```bash
bun run build    # production build -> dist/
bun run preview  # preview the production build locally
```

## Deploy (GitHub Pages)

The site deploys to GitHub Pages at the custom domain `omarx.uk` (see `public/CNAME`). Vite is configured with `base: './'` for Pages compatibility.

```bash
bun run deploy   # builds are published from dist/ via gh-pages
```

> Note: run `bun run build` first if `dist/` is out of date — the deploy script publishes whatever is in `dist/`.

All scripts are npm-compatible, so `npm install` / `npm run dev` etc. work too.

## Project structure

```
.
├── index.html            # meta, og tags, root element
├── vite.config.js        # React plugin, base './'
├── public/
│   ├── CNAME             # omarx.uk
│   └── resume.pdf        # linked from the hero ("Download resume")
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── content.js        # ALL site content lives here
    ├── sections/         # one component per page section
    │   ├── Nav.jsx
    │   ├── Hero.jsx
    │   ├── Stats.jsx
    │   ├── Experience.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── Education.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/           # global.css (design tokens) + per-section CSS
        ├── global.css
        ├── nav.css
        ├── hero.css
        ├── stats.css
        ├── experience.css
        ├── projects.css
        ├── skills.css
        ├── education.css
        ├── contact.css
        └── footer.css
```

## Editing content

All copy, links, experience, projects, skills, education, and certifications live in `src/content.js`. Components render from that single object — edit the data, not the markup.

## Styling

Styling is intentionally minimal/structural. Design tokens (colors, typography, spacing) are CSS custom properties defined in `:root` in `src/styles/global.css` — redefine them there to restyle the whole site.
