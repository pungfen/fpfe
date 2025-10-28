import type { Awaitable } from '@fpfe/shared'

type InteropModuleDefault<T> = T extends { default: infer U } ? U : T

/**
 * resolve module with interop default
 * @param mod - a module
 * @returns resolved module
 */
export const interopDefault = async <T>(mod: Awaitable<T>): Promise<InteropModuleDefault<T>> => {
  const resolved = await mod
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (resolved as any).default ?? resolved
}

export const loadPlugin = async <T>(name: string): Promise<T> => {
  const mod = await import(name).catch(error => {
    console.error(error)
    throw new Error(`Failed to load eslint plugin '${name}'. Please install it!`)
  })
  return interopDefault(mod) as Promise<T>
}

export const pascalize = (value: string): string => {
  return value.replaceAll(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
}
