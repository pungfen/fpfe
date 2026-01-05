import { defineConfig } from "eslint/config";

import js from "@eslint/js"
import vue from 'eslint-plugin-vue'

import globals from 'globals'


import { ignores } from './configs'

console.log('fpfe eslint running...')

export default defineConfig(
  {
    files: [
      ['packages/*', 'ui/**/*.{ts,vue}']
    ],
    rules: {
      semi: 'error'
    },
    plugins: {

    },
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: ''
    }
  }
)

export const defineWorkspaceConfig = (configs: { workspace?: string, vue?: boolean, typescript?: boolean }[]) => {

  console.log(configs)

  return defineConfig(
    ignores,

    {
      files: ['eslint.config.ts']
    }
  )
}