# Gardesh

Temporary landing page for the new **Gardesh** platform at [gardeshonline.com](https://gardeshonline.com).

The public page is intentionally minimal while the new product is being prepared. It currently shows the official Gardesh symbol and a short “Coming Soon” message.

## Current purpose

This repository currently serves only the public pre-launch landing page for Gardesh. It is not the application repository for the full Gardesh platform and contains no backend, database, authentication, media services, or product features.

## Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Static hosting on GitHub Pages

## Brand assets

The landing uses the official Gardesh symbol in `logo.png` / `public/logo.png`.

The favicon is generated directly from that same logo asset so the browser icon stays consistent with the Gardesh identity.

Current landing colors:

- Page background: `#090A0B`
- Logo surface: `#0E1310`
- Primary accent: `#D8F46C`
- Primary text: `#F5F5F1`
- Muted text: `#8D9095`

## Local development

Node.js 20+ is recommended.

```bash
npm install
npm run dev
```

The development server runs on:

```text
http://localhost:8080
```

## Build

```bash
npm run build
npm run preview
```

Production output is written to `dist/`.

## Hosting

The custom domain is:

```text
https://gardeshonline.com
```

GitHub Pages serves the repository on the custom domain. `CNAME` is kept in both the repository root and `public/` so the domain is preserved for both direct Pages serving and Vite build output.

The root `index.html` is kept deployable as a standalone static landing page, while `src/` contains the React/Vite version of the same experience.

## Repository status

This is a temporary pre-launch surface. The page can be replaced when the full Gardesh product is ready for public release.
