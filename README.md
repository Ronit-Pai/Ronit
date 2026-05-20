# Portfolio

Monorepo-style layout for Ronit Pai's portfolio projects.

| Folder | Stack | Description |
|--------|--------|-------------|
| [`v1/`](./v1/) | Vite + React | Original portfolio (archived) |
| [`v2/`](./v2/) | Next.js + Tailwind + Framer Motion | Current portfolio |

## Development

**Current site (v2):**

```bash
cd v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Legacy site (v1):**

```bash
cd v1
npm install
npm run dev
```

## Adding to a new repository

This repo root can stay as-is. To publish only the new project, use the `v2/` folder as the app root (copy or set it as the deploy root in Vercel/Netlify).
