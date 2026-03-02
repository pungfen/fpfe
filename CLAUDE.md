# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **pnpm monorepo** project (`fpfe`) containing multiple packages for a Vue 3 ecosystem tooling framework.

## Commands

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test              # Run all tests
pnpm test -- packages/oxlint-config  # Run tests for specific package

# Lint
pnpm lint              # Run oxlint on all packages
pnpm lint:fix          # Fix lint issues automatically
```

## Package Structure

| Package | Path | Description |
|---------|------|-------------|
| `@fpfe/doc2html` | packages/doc2html | Convert docs to HTML |
| `@fp/element` | packages/element | Vue 3 + Element Plus integration |
| `@fp/generator` | packages/generator | Code generator |
| `@fp/oxc` | packages/oxc | Oxc integration |
| `@fp/oxlint-config` | packages/oxlint-config | Shared oxlint configuration |
| `@fpfe/packer` | packages/packer | Packer tool using rolldown |
| `@fpfe/pnpm` | packages/pnpm | pnpm workspace utilities |
| `@fpfe/ui` | packages/ui | Vue 3 UI components with Tailwind CSS |
| `@fpfe/vite` | packages/vite | Vite (rolldown-vite) integration |

## Editor Configuration

The project uses **oxc** ecosystem for linting and formatting:

- **VSCode extension**: `oxc.oxc-vscode`
- **Formatter**: oxfmt (configured as default)
- **Lint on save**: `source.fixAll.oxc` auto-fix enabled
- **Type checking**: oxc with type-aware mode enabled
- **tsgo**: TypeScript Go-style imports (optional, in settings.json)

VSCode settings are in [.vscode/settings.json](.vscode/settings.json).

## Architecture

- **Monorepo**: pnpm workspaces (`packages/*` and `npm/*`)
- **Testing**: Vitest (configured in root and packages/oxlint-config)
- **Linting**: oxlint with TypeScript support
- **Build**: rolldown for bundling
- **UI Framework**: Vue 3 with Composition API
- **CSS**: Tailwind CSS v4 (in @fpfe/ui)
- **Element UI**: Element Plus integration

## Key Patterns

1. Each package has its own `oxlint.config.ts` extending `@fp/oxlint-config`
2. Package scripts usually include `lint` and `lint:fix`
3. Use `tsx` for running TypeScript files directly
4. Workspace dependencies use `workspace:*` protocol
