import type { TypedFlatConfigItem } from '../types'

export const sortPackageJson = async(): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      files: ['**/package.json'],

      name: 'fp/sort/package-json',

      rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$',
        },
      ],
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'name',
            'version',
            'private',
            'packageManager',
            'description',
            'type',
            'keywords',
            'license',
            'homepage',
            'bugs',
            'repository',
            'author',
            'contributors',
            'funding',
            'files',
            'main',
            'module',
            'types',
            'exports',
            'typesVersions',
            'sideEffects',
            'unpkg',
            'jsdelivr',
            'browser',
            'bin',
            'man',
            'directories',
            'publishConfig',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'optionalDependencies',
            'dependencies',
            'devDependencies',
            'engines',
            'config',
            'pnpm',
            'overrides',
            'resolutions',
            'husky',
            'simple-git-hooks',
            'lint-staged',
            'eslintConfig',
            'prettier',
          ],
          pathPattern: '^$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
        },
        {
          order: ['types', 'require', 'import', 'default'],
          pathPattern: '^exports.*$',
        },
        {
          order: { type: 'asc' },
          pathPattern: String.raw`^(?:resolutions|overrides|pnpm\.overrides)$`,
        },
        {
            order: [
              // client hooks only
              'pre-commit',
              'prepare-commit-msg',
              'commit-msg',
              'post-commit',
              'pre-rebase',
              'post-rewrite',
              'post-checkout',
              'post-merge',
              'pre-push',
              'pre-auto-gc',
            ],
            pathPattern: '^(?:gitHooks|husky|simple-git-hooks)$',
          },
      ],
    },
    }
  ]
}