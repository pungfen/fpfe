import type { Linter } from 'eslint'

import jsonc from 'eslint-plugin-jsonc'

import { loadPlugin } from '../utils'

export const sortPackageJson = async (): Promise<Linter.Config[]> => {
  const json = await loadPlugin<typeof import('@eslint/json')['default']>('@eslint/json')

  return [
    {
      plugins: {
        json,
        jsonc
      }
    },
    {

      files: ['**/package.json'],
      language: 'json/json',
      rules: {
        'jsonc/sort-keys': [
          'error',
          [
            {
              order: ['publisher', 'name', 'displayName', 'type', 'version', 'private', 'packageManager', 'description', 'author', 'contributors', 'license', 'funding', 'homepage', 'repository', 'bugs', 'keywords', 'categories', 'sideEffects', 'imports', 'exports', 'main', 'module', 'unpkg', 'jsdelivr', 'types', 'typesVersions', 'bin', 'icon', 'files', 'engines', 'activationEvents', 'contributes', 'scripts', 'peerDependencies', 'peerDependenciesMeta', 'dependencies', 'optionalDependencies', 'devDependencies', 'pnpm', 'overrides', 'resolutions', 'husky', 'simple-git-hooks', 'lint-staged', 'eslintConfig'],
              pathPattern: '^$'
            }
          ]
        ]
      }
    }
  ]
}

export const sortTsconfig = (): Linter.Config[] => {
  return [
    {
      files: ['**/[jt]sconfig.json', '**/[jt]sconfig.*.json'],
      rules: {}
    }
  ]
}
