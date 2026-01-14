import type { InlineConfig, Plugin } from 'vite'

type ViteConfig = Omit<InlineConfig, 'plugins'> & { plugins?: Plugin[] }

export interface Config {
  name: string
  autoImport?: boolean
  components?: boolean
  icons?: boolean
  tailwindcss?: boolean
  vue?: boolean
  vueRouter?: boolean
}

