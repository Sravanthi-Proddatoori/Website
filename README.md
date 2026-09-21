# Sravanthi Proddatoori — Portfolio

Built with React + Vite + Tailwind CSS + Framer Motion.

## Before you publish

Two things in [src/data/resumeData.js](src/data/resumeData.js) are placeholders — replace them with your real URLs:

```js
linkedin: 'https://linkedin.com/in/your-handle',
scholar: 'https://scholar.google.com/citations?user=your-id',
```

The downloadable resume lives at `public/resume.pdf`. Swap in a different file (same name) any time you update your resume.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173. Edit any file in `src/` and it hot-reloads.

## Build for production

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally to sanity-check it
```

## Deploy (free, ~5 minutes) — Vercel

1. Push this folder to a new GitHub repo (see commands below).
2. Go to https://vercel.com, sign in with GitHub.
3. Click **Add New → Project**, select this repo.
4. Vercel auto-detects Vite — leave settings as-is, click **Deploy**.
5. You get a live URL like `sravanthi-portfolio.vercel.app` immediately. Every push to `main` auto-redeploys.
6. Optional: add a custom domain under Project → Settings → Domains.

### Push to GitHub first

```bash
git remote add origin https://github.com/<your-username>/portfolio.git
git branch -M main
git push -u origin main
```

(Create the empty repo on github.com first, or with `gh repo create portfolio --public --source=. --push` if you have the GitHub CLI installed.)

## Alternative hosts

- **Netlify** — same flow as Vercel: connect the GitHub repo at netlify.com, build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — free but needs a small Vite `base` config tweak; better suited to a repo you won't rename often.
