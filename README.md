# VibeTerminal (React)

A lightweight React + Vite landing page showcasing useful crypto services.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. In repository settings, go to **Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` or `work` to trigger deployment.

The workflow installs dependencies with `npm install`, builds the Vite app, and publishes the `dist` folder to GitHub Pages.

## Why Pages works for repository sites

`vite.config.js` sets `base` automatically in GitHub Actions using the repository name, so asset URLs are generated correctly for `https://<user>.github.io/<repo>/`.
