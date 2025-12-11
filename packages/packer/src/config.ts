import type { InlineConfig, Plugin } from 'vite'

type ViteConfig = Omit<InlineConfig, 'plugins'> & { plugins?: Plugin[] }

export interface Config {
  apps: AppConfig[]

  vite?: ViteConfig
}

export interface AppConfig {
  name: string
  predicate: (pathname: string) => boolean
  vue?: boolean
}
