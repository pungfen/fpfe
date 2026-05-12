import type { PluginOption } from 'vite'

export function BasePlugin(options: {
  base?: string
  proxy?: Record<string, string>
} = {}): PluginOption[] {
  const { base = '/' } = options

  return [
    {
      name: 'fpfe:vite/base',
      config: () => ({
        base,
        resolve: {
          alias: {
            '@': './src'
          }
        }
      })
    }
  ]
}
