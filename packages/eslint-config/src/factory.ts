import { type Arrayable, type Awaitable,
  type FlatConfigComposer } from 'eslint-flat-config-utils'

import type { ConfigNames } from './typegen'
import type { Config } from './types'

import { hasVue } from './env'

export interface Options {
  vue?: boolean
}

export const presetJavaScript = (): Config[] => [
  ...ignores(),
  ...javascript(),
  ...comments(),
  ...imports(),
  ...unicorn(),
  ...node(),
  ...jsdoc(),
  ...regexp(),
  ...deMorgan()
]

export const presetBasic = (): Config[] => [
  ...presetJavaScript(),
  ...typescript(),
  ...sortImports()
]

export const factory = (options: Options = {}): FlatConfigComposer<Config, ConfigNames> => {
  const {
    vue: enableVue = hasVue()
  } = options

  const configs: Awaitable<Config[]>[] = [presetBasic(), yml(), presetJsonc()]
}
