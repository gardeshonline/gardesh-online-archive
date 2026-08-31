# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Static build & GitHub Pages

This site is a single static page — no database, auth, server functions, or API routes.

```sh
npm run build
```

The static output is written to `dist/` (client assets). To deploy on GitHub Pages:

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **GitHub Actions** (or deploy the built folder to the `gh-pages` branch).
3. If serving from a project path (`https://user.github.io/repo/`), set the Vite `base` option to `/repo/` in `vite.config.ts` before building. For a custom domain at the root, leave `base` as the default and add a `CNAME` file in `public/`.

Because the site is one page with no client-side routes, no server fallback rewrite is required.
