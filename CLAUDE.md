# CLAUDE.md — NextLoom website

Guidance for Claude (and humans) working in this repo.

## What this is
Marketing website for **NextLoom**, an AI-first IT services & IT consulting startup founded by Dr. Bushra.
Positioning: **AI agents, workflow automation, ML/data science, LLM/RAG apps, AI strategy.**
Automation and AI agents are the headline offering, so keep them emphasized.

## Stack
- **Next.js (App Router) + React + TypeScript** (strict).
- Styling: one global stylesheet, `app/globals.css`, using plain CSS with design tokens in `:root`. No Tailwind, no CSS-in-JS.
- Fonts: `next/font/google` (Inter + Space Grotesk), exposed as CSS vars `--font-inter` / `--font-space`.
- Single page, fully static (prerendered). No backend or API routes.

## Commands
```
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (run this to verify changes)
npm run lint    # TypeScript type-check (tsc --noEmit)
```

## Structure
```
app/
  layout.tsx          Root layout: fonts, metadata, sets html.js class
  page.tsx            Composes the sections in order
  globals.css         All styles. Tokens at top, responsive rules at bottom
  icon.svg            Favicon (auto-picked up by Next)
components/
  Header.tsx          (client) sticky nav + mobile menu
  Footer.tsx, Logo.tsx
  HeroCanvas.tsx      (client) animated "loom" thread background
  ContactForm.tsx     (client) validation + submit (endpoint or mailto fallback)
  RevealObserver.tsx  (client) adds .visible to .reveal elements on scroll
  sections/           Server components, one per page section
lib/content.ts        ALL copy & data: services, process, testimonials, contact email
public/logo.svg
```
Section order/ids: Hero → TechStrip → `#services` → `#automation` → `#process` → `#testimonials` → `#why` → `#contact` → Footer.

## Conventions
- **Content goes in `lib/content.ts`.** Components render data and shouldn't hard-code copy that may change.
- Default to Server Components. Add `"use client"` only for interactivity (state, effects, browser APIs).
- Reuse CSS variables from `:root`. Don't hard-code new colors.
- Scroll animation: add the `reveal` class. It's hidden only when `html.js` is set, so content never stays invisible without JS.
- Keep semantic HTML and `aria-*`, and respect `prefers-reduced-motion`.
- Breakpoints: 980px and 760px. Check both.
- Tone: confident, clear, business-first. No hype words like "revolutionary" or "cutting-edge".
- Keep dependencies minimal. Ask before adding UI libraries, Tailwind, etc.

## Testimonials, important
- `testimonials` in `lib/content.ts` are **real client reviews** from Dr. Bushra's freelance profile.
  Only light spelling fixes/trimming were applied. **Never invent, embellish, or add fake testimonials.**
- When adding new ones, copy text faithfully and keep meaning intact.

## Content rules
- Don't fabricate stats, client logos, or company names.
- Placeholders to replace before launch:
  - `site.email` in `lib/content.ts` (`hello@nextloom.ai`)
  - `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local` (see `.env.example`). Empty means the form opens a `mailto:` link.
  - Domain, `metadataBase`, OG image, social links.

## Backlog
- Case Studies section (AI agent workflow, metadata auto-classifier, NLP sentiment dashboard).
- About/Team section with Dr. Bushra's bio and photo.
- Link testimonials to the original review profile for verification.
- `app/sitemap.ts`, `app/robots.ts`, `opengraph-image` once a domain is set.
