import { resolve } from 'path'
import { type ConfigEnv, defineConfig as dc, type LibraryFormats, type UserConfig } from 'vite'
import Dts from 'vite-plugin-dts'

import { vue } from './plugins'

interface Config {
  autoComponents?: boolean
  autoImport?: boolean
  elementPlus?: boolean
  entry: string
  externals?: string[]
  formats?: LibraryFormats[]
  mode?: string
  name?: string
  resolve?: UserConfig['resolve']
  root: string
  tailwindcss?: boolean
  type?: 'app' | 'lib'
  unocss?: boolean
  vue?: boolean
  vueJsx?: boolean
}

export const defineConfig = (config: ((env: ConfigEnv) => Config) | Config) => {
  return dc(async env => {
    let userConfig: Config | undefined
    if (typeof config === 'function') {
      userConfig = config(env)
    }
    else {
      userConfig = config
    }

    const { entry, externals = [], formats = ['es'], name, root, type, vue: enableVue } = userConfig

    const vc: UserConfig = {}

    if (type === 'lib') {
      vc.root = root

      vc.build = {
        lib: {
          entry,
          fileName: name,
          formats
        },
        rollupOptions: { external: externals }
      }

      vc.plugins = [Dts({ rollupTypes: true })]
    }
    else if (type === 'app') {
      vc.plugins = []

      if (enableVue) {
        vc.plugins.push(await vue())
      }

      vc.resolve = { alias: { '@': resolve(entry, 'src') } }
    }

    return vc
  })
}
