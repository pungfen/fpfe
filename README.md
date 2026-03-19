# fpfe

Personal Frontend Tech Stack Toolkit (fp = name initials, fe = frontend)

## Introduction

A pnpm workspace-based monorepo project for managing and packaging frontend tools and components commonly used in daily work.

## Tech Stack

- **Monorepo**: pnpm workspaces
- **Bundler**: rolldown
- **Linting**: oxlint
- **Testing**: Vitest
- **UI Framework**: Vue 3 + Composition API
- **Component Library**: Element Plus

## Packages

### packages/ (In Development)

| Package | Description |
|---------|-------------|
| `@fp/composable` | Vue 3 Composable utilities, similar to VueUse, wrapping commonly used Composition APIs in work |
| `@fp/element` | Vue 3 + Element Plus component library, secondary wrapper for Element Plus |
| `@fp/fetch` | Wrapper for browser Fetch API |
| `@fpfe/doc2html` | Document to HTML converter (based on mammoth.js) |
| `@fpfe/eslint-config` | Personal ESLint Flat Config |
| `@fpfe/packer` | Vite wrapper providing minimal config to run dev/build |
| `@fpfe/pnpm` | pnpm workspace utilities, e.g., getting all packages in workspace |
| `@fpfe/prettier-config` | Prettier shared config |
| `@fpfe/tsconfig` | Shared TypeScript config, similar to @vue/tsconfig |

## Getting Started

```bash
# Install dependencies
pnpm install

# Lint code
pnpm lint

# Format code
pnpm format

# Run tests
pnpm test

# Build all packages
pnpm build
```

## Package Details

### @fp/composable

A VueUse-like utility library wrapping commonly used Vue 3 Composition APIs.

### @fp/element

Secondary wrapper for Element Plus, providing component usage more aligned with personal development habits.

### @fp/fetch

Wrapper for browser native Fetch API with more convenient request handling.

### @fpfe/doc2html

Converts .doc documents to HTML, based on [mammoth.js](https://github.com/mwilliamson/mammoth.js).

### @fpfe/eslint-config

Personal ESLint Flat Config, similar to @antfu/eslint-config style.

### @fpfe/packer

Vite wrapper that solves the problem of increasingly complex vite.config.ts in real projects, providing minimal config to run dev and build.

### @fpfe/pnpm

pnpm workspace utility functions, including common features like getting all packages in the workspace.

### @fpfe/prettier-config

Prettier shared configuration.

### @fpfe/tsconfig

Shared TypeScript configuration package, similar to @vue/tsconfig.

## License

MIT
