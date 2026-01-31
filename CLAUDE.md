# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Polar bear conservation awareness website (ホッキョクグマ保護サイト) built with Next.js 14. This is in **MVP phase** - prioritize speed over perfection.

## Development Commands

All commands must be run from the `/polarbear` directory:

```bash
cd polarbear
npm install        # Install dependencies
npm run dev        # Development server at http://localhost:3000
npm run build      # Production build
npm run start      # Run production server
npm run lint       # ESLint
```

Requires Node.js 18+.

## Architecture

```
polarbear/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (fonts, theme)
│   │   ├── page.tsx            # Home page (composes sections)
│   │   └── theme.ts            # MUI theme configuration
│   ├── components/
│   │   ├── Header.tsx          # Navigation with mobile drawer
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx   # MUI + Emotion setup
│   │   └── sections/           # Page section components
│   └── lib/
│       └── emotion-cache.tsx   # Emotion SSR cache
└── public/images/              # Image assets
```

The homepage is a composition of sections: Hero → About → Threat → Data → Importance → Action → CTA.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Material-UI (MUI) for components
- Emotion for styling (via MUI)
- Vercel for deployment

## Key Constraints

- **No Tailwind** - use MUI + Emotion only
- **No class components** - functional components only
- **No new libraries** without approval
- **No folder structure changes**
- **docs/ is read-only** - human-managed documentation

## Naming Conventions

- Files: `kebab-case` (e.g., `polar-bear-info.tsx`)
- Components: `PascalCase` (e.g., `Header.tsx`)
- Functions/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

## Where to Add Code

- Components: `src/components/`
- Utilities: `src/lib/`
- Images: `public/images/`

## Working Guidelines

- Treat `docs/*.md` files as the source of truth
- Ask before making breaking changes
- No redundant explanations or sample code
- Ask clarifying questions before implementing if unclear
