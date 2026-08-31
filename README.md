# گردش آنلاین — Archive Page

A single, fully static page that records the end of activity of **GardeshOnline**
(«گردش آنلاین»), a Persian travel-content publishing project.

Built with Vite + React + TypeScript + Tailwind CSS v4. No backend, no database,
no server functions — the build output is plain static files.

## Local development

Requires Node.js 20+.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Build

```sh
npm run build      # type-check + build into dist/
npm run preview    # preview the production build locally
```

## Base path / hosting

The Vite `base` is configurable:

- **Dev** always serves from `/`.
- **Build** defaults to `/site/`, matching the GitHub Pages project URL
  `https://<owner>.github.io/site/`.
- For a custom domain or root hosting, build with:

  ```sh
  BASE_PATH=/ npm run build
  ```

  and add a `CNAME` file containing your domain to `public/`.

## GitHub Pages deployment

`.github/workflows/pages.yml` builds and deploys with the official GitHub Pages
actions on every push to `main`, and on manual `workflow_dispatch`.

One-time setup in the repository:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main`. The workflow installs dependencies with `npm ci`, runs
   `npm run build` with `BASE_PATH=/site/`, uploads `dist/`, and deploys it.

To switch to a custom domain later, change `BASE_PATH` in the workflow to `/`
and configure the domain under Settings → Pages.

Since the site is a single page with no client-side router, no SPA fallback
rewrite is needed.
