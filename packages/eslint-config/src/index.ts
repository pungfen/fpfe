import type { ConfigWithExtendsArray } from '@eslint/config-helpers'
import type { Linter } from 'eslint'

import jsonc from 'eslint-plugin-jsonc'
import { defineConfig as eslint } from 'eslint/config'

import { typescript, vue } from './configs'

type ConfigTypescript = Override
type ConfigVue = Override
type Override = Pick<Linter.Config, 'files'>

export const defineConfig = async (config: {
  ignores?: string[]
  tsconfigRootDir?: string
  typescript?: boolean | ConfigTypescript
  vue?: boolean | ConfigVue
} = {}) => {
  const { ignores = [], tsconfigRootDir, typescript: enableTypescript, vue: enableVue } = config

  console.log('eslint running...:', tsconfigRootDir)

  const configs: ConfigWithExtendsArray = [
    {
      ignores: ['**/dist', '**/node_modules', ...ignores]
    }
  ]

  if (enableVue) {
    configs.push(await vue({ files: typeof enableVue === 'boolean' ? [] : enableVue.files, tsconfigRootDir }))
  }
  else if (enableTypescript) {
    configs.push(await typescript({ files: typeof enableTypescript === 'boolean' ? [] : enableTypescript.files, tsconfigRootDir }))
  }

  configs.push({
    extends: [jsonc.configs['flat/recommended-with-jsonc']],
    files: ['**/package.json'],
    rules: {
      'jsonc/indent': ['error', 2],
      'jsonc/sort-keys': [
        'error',
        {
          order: ['name', 'version', 'type', 'main', 'scripts', 'dependencies', 'devDependencies'],
          pathPattern: '^$'
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$'
        }
      ]
    }
  })

  configs.push({
    extends: [jsonc.configs['flat/recommended-with-jsonc']],
    files: ['**/tsconfig.json', 'tsconfig.*.json'],
    rules: {
      'jsonc/indent': ['error', 2],
      'jsonc/sort-keys': [
        'error',
        {
          order: ['extends', 'compilerOptions', 'references', 'main', 'files', 'include', 'exclude'],
          pathPattern: '^$'
        }
      ]
    }
  })

  return eslint(configs)
}
