import type { Awaitable } from '@fpfe/shared'
import type { Plugin } from 'vite'

type InteropModuleDefault<T> = T extends { default: infer U } ? U : T

/**
 * resolve module with interop default
 * @param mod - a module
 * @returns resolved module
 */
export const interopDefault = async <T>(mod: Awaitable<T>): Promise<InteropModuleDefault<T>> => {
  const resolved = await mod
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  return (resolved as any).default ?? resolved
}

export const loadPlugin = async <T>(name: string): Promise<T> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const mod = await import(name).catch(error => {
    console.error(error)
    throw new Error(`Failed to load eslint plugin '${name}'. Please install it!`)
  })
  return interopDefault(mod) as Promise<T>
}

export const vue = async (): Promise<Plugin> => {
  const vuePlugin = await loadPlugin('@vitejs/plugin-vue')
  console.log(vuePlugin)
  return vuePlugin
}

export const vueJsx = async () => {

}
