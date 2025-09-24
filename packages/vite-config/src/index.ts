import { resolve } from 'node:path'
import { InlineConfig, type LibraryFormats, type Plugin } from 'vite'

import type { Arrayable, Awaitable } from './types'

import { autoImport, autoImportComponents, vue, vueJsx, vueRouter } from './plugins'

const combine = async (...ps: Awaitable<Arrayable<Plugin>>[]): Promise<Plugin[]> => {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const resolved = await Promise.all(ps)
  return resolved.flat()
}

export const defineConfig = async (config: {
  elementPlus?: boolean
  entry?: string
  formats?: LibraryFormats[]
  mode?: 'build' | 'serve'
  name?: string
  resolve?: InlineConfig['resolve']
  root?: string
  tailwindcss?: boolean
  type?: 'app' | 'lib'
  unocss?: boolean
  vue?: boolean
  vueJsx?: boolean
} = {}) => {
  const { elementPlus: enableElementPlus, entry, formats = ['es'], name, root = process.cwd(), type = 'app', vue: enableVue, vueJsx: enableVueJsx } = config

  const plugins: Plugin[] = []

  if (enableVue || enableVueJsx) {
    plugins.push(...await combine(vueRouter(), autoImport({ elementPlusResolver: enableElementPlus }), autoImportComponents({ elementPlusResolver: enableElementPlus })))
  }

  if (enableVue) {
    plugins.push(...await combine(vue()))
  }

  if (enableVueJsx) {
    plugins.push(...await combine(vueJsx()))
  }

  const inlineConfig: InlineConfig = {
    plugins,
    resolve: config.resolve
  }

  if (type === 'lib') {
    inlineConfig.build = {
      lib: {
        entry: resolve(root, entry ?? 'src/index.ts'),
        formats,
        name
      }
    }
  }

  return inlineConfig
}
