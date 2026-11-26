# NextLoom

Website for **NextLoom**, AI-first IT services & consulting: AI agents, workflow automation, ML & data science.

Built with Next.js (App Router) + TypeScript.

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Edit content
Nearly all text (services, process steps, testimonials, contact email) lives in `lib/content.ts`.

## Deploy
Easiest: push to GitHub and import the repo on [Vercel](https://vercel.com/new). Netlify and Cloudflare Pages also work.

## Before going live
- [ ] Replace `hello@nextloom.ai` in `lib/content.ts`
- [ ] Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. Formspree) for real form submissions
- [ ] Add domain, OG image, social links

See `CLAUDE.md` for project conventions.
