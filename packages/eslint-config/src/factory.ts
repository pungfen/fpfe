import { FlatConfigComposer } from 'eslint-flat-config-utils'

import type { ConfigNames } from './typegen'
import type { Config } from './types'

import { javascript,stylistic, ignore, importer, jsonc, formatterPackageJson, formatterTsconfig, formatterPerfectionist,vue } from './configs'

export interface Options {
  vue?: boolean
  typescript?: boolean
}

export const factory = async (options: Options = {}): Promise<FlatConfigComposer<Config, ConfigNames>> => {
  const {
    vue: enableVue,
    typescript: enableTypescript
  } = options

  const configs: Config[] = [
    ...ignore(),
    ...await javascript(),
    ...importer(),
    ...stylistic(),
    ...jsonc(),
    ...formatterPackageJson(),
    ...formatterTsconfig(),
    ...formatterPerfectionist()
  ]

  if (enableTypescript) {
    configs.push()
  }

  if (enableVue) {
    configs.push(...await vue())
  }

  const composer = new FlatConfigComposer<Config, ConfigNames>(...configs)

  composer.append({ rules: { 'vue/valid-v-for': 'off' } })

  return composer
}
