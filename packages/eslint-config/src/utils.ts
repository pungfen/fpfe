import type { Awaitable } from './types'

export const interopDefault = async <T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> => {
  const resolved = await m
  return (resolved as any).default || resolved
}

export const pascalize = (value: string): string => {
  return value.replaceAll(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
}
