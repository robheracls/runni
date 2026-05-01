# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**runni** is a personal running & training dashboard for logging runs and visualizing progress, built as a portfolio project to showcase modern fullstack development. It is structured as a Turborepo monorepo containing multiple Next.js applications and shared packages, using Bun as the package manager and Turborepo for orchestrating build tasks across the workspace.

### Structure

```
runni/
├── apps/
│   ├── web/              # Next.js app (port 3000) - main web application
│   └── docs/             # Next.js app (port 3001) - documentation site
├── packages/
│   ├── ui/               # Shared React component library (@repo/ui)
│   ├── eslint-config/    # Shared ESLint configuration
│   └── typescript-config/# Shared TypeScript configuration
├── .claude/skills/       # Custom Claude Code skills
└── turbo.json            # Turborepo configuration
```

### Key Technologies

- **Turborepo**: Task orchestration and monorepo management
- **Next.js 16**: Framework for both `web` and `docs` apps (App Router)
- **React 19**: UI library
- **TypeScript 5.9**: Type checking (strict mode)
- **Bun 1.3.13**: Package manager
- **ESLint 9 + Prettier 3**: Code quality and formatting

## Commands

### Setup

```bash
bun install   # Install all workspace dependencies
```

### Development

| Command | Behavior |
|---------|----------|
| `bun dev` or `turbo dev` | Start all Next.js apps in dev mode (web on 3000, docs on 3001) |
| `turbo dev --filter=web` | Run only the web app |
| `turbo dev --filter=docs` | Run only the docs app |

### Building & Quality

| Command | Behavior |
|---------|----------|
| `turbo build` | Build all apps and packages (outputs to `.next/`) |
| `turbo check-types` | Type check all packages (runs `next typegen && tsc --noEmit`) |
| `turbo lint` | Run ESLint on all packages (zero-warning enforcement) |
| `bun format` | Format all `.ts`, `.tsx`, and `.md` files with Prettier |

### Component Generation

```bash
turbo gen react-component   # Interactive generator for new @repo/ui components
```

## Architecture Notes

### Workspace Dependencies

- **@repo/ui** — imported by both apps via file-based exports: `@repo/ui/*` resolves to `packages/ui/src/*.tsx`. All components must include the `"use client"` directive because they use browser APIs.
- **@repo/eslint-config** — provides shared linting rules (`base`, `next`, `react-internal` presets)
- **@repo/typescript-config** — provides shared `tsconfig` bases (`base.json`, `nextjs.json`, `react-library.json`)

### Task Dependencies (turbo.json)

- `build` and `lint` depend on `^build` / `^lint` — workspace dependencies are processed first
- `check-types` depends on `^check-types`
- `dev` is persistent and uncached
- Build outputs cached in `.next/` (`.next/cache/` excluded)

### Next.js Apps

Both `web` and `docs` are `create-next-app` scaffolds sharing the same structure. They use the App Router, import from `@repo/ui`, and enforce zero ESLint warnings.

## Filtering

```bash
turbo build --filter=web        # Single workspace
turbo build --filter=web...     # Workspace + its dependencies
turbo lint --filter={apps/*}    # All apps
```

## Commit Convention

All commits must follow the Conventional Commits format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Common types: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `style`, `perf`.

Example: `feat(web): add weekly mileage chart`

## Troubleshooting

**Port conflicts**: Ports 3000/3001 in use will break `dev`. Kill conflicting processes or update the `dev` scripts in the app's `package.json`.

**Type errors**: Run `turbo check-types` before committing. TypeScript errors will fail CI.

**ESLint warnings**: `--max-warnings 0` is enforced — any warning fails the lint task.
