import {
  FlatConfigComposer,
  type Arrayable,
  type Awaitable,
} from 'eslint-flat-config-utils'
import type { Config } from 'typescript-eslint'

export interface Options {
  prettier?: boolean
  typescript?: boolean
}

export const fp = (
  options: Options = {},
): FlatConfigComposer<Config, ConfigNames> => {
  const { prettier: enablePrettier, typescript: enableTypescript } = options

  const configs = []
}
