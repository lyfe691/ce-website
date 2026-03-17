# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 landing page/website using shadcn/ui (Base UI style), Tailwind CSS v4, and React Bits Pro components. Built with TypeScript strict mode and pnpm.

## Commands

```bash
pnpm dev              # Dev server with Turbopack
pnpm build            # Production build
pnpm start            # Run production server
pnpm lint             # ESLint
pnpm format           # Prettier (all .ts/.tsx files)
pnpm typecheck        # TypeScript check (tsc --noEmit)
```

No test framework is configured.

## Architecture

- **App Router** with RSC enabled. Only interactive components use `"use client"`.
- **Single layout** (`app/layout.tsx`) wraps everything with ThemeProvider (next-themes) and fonts (Inter + Geist Mono).
- **Theme toggle**: Press `d` key to switch dark/light mode (handled in `components/theme-provider.tsx`).
- **Path aliases**: `@/*` maps to project root. Specific aliases: `@/ui` → `components/ui`, `@/utils` → `lib/utils`.

## Styling

- **Tailwind CSS v4** with `@import` syntax in `app/globals.css`.
- **OKLCh color space** for theme colors defined as CSS variables in `:root` / `.dark`.
- **`cn()` utility** (`lib/utils.ts`): clsx + tailwind-merge for class composition.
- **CVA** (class-variance-authority) for component variants.
- **Prettier** sorts Tailwind classes and recognizes `cn` and `cva` as class functions.

## Component System

- **shadcn/ui** configured with `base-maia` style and `olive` base color (`components.json`).
- **UI primitives** go in `components/ui/` — built on @base-ui/react.
- **React Bits Pro** registries configured in `components.json`:
  - `@reactbits-starter`: 88 animated UI components → install to `components/react-bits/`
  - `@reactbits-pro`: 120+ page blocks → install to `components/blocks/`
  - Auth via `REACTBITS_LICENSE_KEY` in `.env.local`
  - All React Bits components are client-only (`"use client"`).
  - See `skills/SKILL.md` for full component catalog and usage guide.

## Conventions

- Hyphen-case filenames, PascalCase component names.
- Double quotes, no semicolons, 2-space indent, trailing commas ES5 (`.prettierrc`).
