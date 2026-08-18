# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About this repo

Freshly scaffolded `create-next-app` project (App Router). At present the only app code is the default template (`app/layout.tsx`, `app/page.tsx`). There is no test framework configured yet.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (flat config, eslint.config.mjs)
```

There is no test script — no test framework is installed. If asked to add tests, check `package.json` first; don't assume Jest/Vitest/Playwright are present.

## Important: this is Next.js 16, not the Next.js in your training data

`AGENTS.md` (auto-generated/maintained by `next dev`, do not remove) mandates reading `node_modules/next/dist/docs/` before writing Next.js code, because this version has breaking changes vs. what most training data assumes. Concretely, in this repo:

- **Typed routes are on by default.** `next-env.d.ts` imports generated `.next/types/routes.d.ts` and `.next/types/root-params.d.ts`. Route props use the generated global helper types `LayoutProps<"/...">` and `PageProps<"/...">` instead of hand-written `{ children: React.ReactNode }` / `{ params }` prop types — see `app/layout.tsx` for the pattern (`LayoutProps<"/">`). Use these generated types for new layouts/pages rather than writing your own prop interfaces.
- **Cache Components model exists but is not enabled** (`next.config.ts` has no `cacheComponents: true`). Default caching/revalidation behavior applies. If a task asks for `"use cache"`, `cacheLife`, or similar, first check whether `cacheComponents: true` needs to be added to `next.config.ts` — read `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` before implementing, since the caching model differs materially from pre-16 Next.js and from the "previous model" guide (`app/guides/caching-without-cache-components`).
- When in doubt about any App Router API (route handlers, `generateStaticParams`, metadata, config options), check the matching file under `node_modules/next/dist/docs/01-app/` rather than relying on prior knowledge — the docs tree is namespaced (`01-getting-started`, `02-guides`, `03-api-reference/...`) and mirrors nextjs.org/docs.

## Stack

- Next.js 16.3.1 (App Router only, no `pages/` directory), React 19.2.8
- Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.*` file — v4 is CSS-first, configured in `app/globals.css`)
- TypeScript, strict mode, path alias `@/*` → repo root
- ESLint flat config extending `eslint-config-next` (`core-web-vitals` + `typescript`)
