import type { TypedFlatConfigItem } from '../types'

export const ignores = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      name: 'fp/ignores',
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/bun.lockb',

        '**/output',
        '**/coverage',
        '**/temp',
        '**/.temp',
        '**/tmp',
        '**/.tmp',
        '**/.history',
        '**/.vitepress/cache',
        '**/.nuxt',
        '**/.next',
        '**/.svelte-kit',
        '**/.vercel',
        '**/.changeset',
        '**/.idea',
        '**/.cache',
        '**/.output',
        '**/.vite-inspect',
        '**/.yarn',
        '**/vite.config.*.timestamp-*',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
      ],
    },
  ]
}
