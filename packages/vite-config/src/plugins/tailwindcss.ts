import { type Plugin } from 'vite'

import { type Arrayable } from '../types'
import { interopDefault } from '../utils'

export const tailwindcss = async (): Promise<Arrayable<Plugin>> => {
  const pluginTailwindcss = await interopDefault(import('@tailwindcss/vite'))
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return pluginTailwindcss() as unknown as Plugin
}
