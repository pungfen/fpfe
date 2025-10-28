import type { Awaitable } from './types'

export const interopDefault = async <T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> => {
  const resolved = await m

  return (resolved as any).default ?? resolved
}
