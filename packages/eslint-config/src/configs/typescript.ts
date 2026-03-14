import { defineConfig } from 'eslint/config'
import type { Config } from "../types"

import tslint from 'typescript-eslint'
import { GLOB_TS, GLOB_TSX } from '../globs'

export const typescriptCore: Config[] = defineConfig({
  extends: [...tslint.configs.recommended],
  files: [GLOB_TS, GLOB_TSX],
  name: 'fpfe/typescript',
  rules: {}
})

export const typescript = (): Config[] => {
  return [
    ...typescriptCore
  ]
}
