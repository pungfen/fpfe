import { type UserConfig } from 'vite'

import {
  autoImport,
  unocss,
  vue,
  type AutoImportOptions,
  type UnocssOptions,
  type VueOptions
} from './configs'

export interface Options {
  vue?: boolean | VueOptions
  vueJsx?: boolean
  unocss?: boolean | UnocssOptions
  autoImport?: boolean | AutoImportOptions
  icons?: boolean
  components?: boolean
}

export const fp = (options: Options = {}): UserConfig => {
  const {
    autoImport: enableAutoImport,
    vue: enableVue,
    unocss: enableUnocss
  } = options

  const config = {
    plugins: []
  } as UserConfig & Required<Pick<UserConfig, 'plugins'>>

  if (enableVue) {
    config.plugins.push(typeof enableVue === 'object' ? vue(enableVue) : vue())
  }

  if (enableUnocss) {
    config.plugins.push(
      typeof enableUnocss === 'object' ? unocss(enableUnocss) : unocss()
    )
  }

  if (enableAutoImport) {
    config.plugins.push(
      typeof enableAutoImport === 'object'
        ? autoImport(enableAutoImport)
        : autoImport({ imports: enableVue ? ['vue'] : [] })
    )
  }

  return config
}
