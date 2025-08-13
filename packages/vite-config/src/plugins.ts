export {
  default as pluginVue,
  type Options as PluginVueOptions
} from '@vitejs/plugin-vue'
export { default as pluginVueJsx } from '@vitejs/plugin-vue-jsx'

export { default as pluginComponents } from 'unplugin-vue-components/vite'
export {
  default as pluginUnocss,
  type VitePluginConfig as PluginUnocssOptions
} from 'unocss/vite'
export { default as pluginAutoImport } from 'unplugin-auto-import/vite'
export { type Options as PluinAutoImportOptions } from 'unplugin-auto-import/types'

export {
  ElementPlusResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
export { default as IconsResolver } from 'unplugin-icons/resolver'
