import {
  FlatConfigComposer,
  type Arrayable,
  type Awaitable,
} from 'eslint-flat-config-utils'

import { ignores, javascript } from './configs'

import type { TypedFlatConfigItem, ConfigNames } from './types'

export interface Options {
  prettier?: boolean
  typescript?: boolean
}

export const fp = (
  options: Options = {},
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> => {
  const { prettier: enablePrettier, typescript: enableTypescript } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = [ignores(), javascript()]

  let composer = new FlatConfigComposer(...configs)

  return composer
}
