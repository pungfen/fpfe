import { defineConfig as eslintConfig } from 'eslint/config'

import { findWorkspacePackages } from '@fpfe/pnpm'

import js from '@eslint/js'
import vue from 'eslint-plugin-vue'

import globals from 'globals'

import { ignores } from './configs'

console.log('fpfe eslint running...')

export const defineConfig = () => {
  return eslintConfig({
    files: [['packages/*', 'ui/**/*.{ts,vue}']],
    rules: {
      semi: 'error'
    },
    plugins: {},
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: ''
    }
  })
}

export const defineWorkspaceConfig = async (options: {
  root?: string
  workspace?: { name?: string; vue?: boolean; typescript?: boolean }[]
}) => {
  const { root = process.cwd() } = options
  console.log(root)

  console.log((await findWorkspacePackages(root)).map((it) => it.manifest.name))

  return eslintConfig(
    ignores,

    {
      files: ['eslint.config.ts']
    }
  )
}
