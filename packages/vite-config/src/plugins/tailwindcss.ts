import type { Plugin } from 'vite'

import { interopDefault } from '@enocboot/shared'

export const tailwindcss = async (): Promise<Plugin> => {
  const [pluginTailwindcss] = await Promise.all(
    [
      interopDefault(import('@tailwindcss/vite'))
    ]
  )

  return pluginTailwindcss() as unknown as Plugin
}
