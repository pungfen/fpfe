import type { Awaitable } from '@fp/shared'
import type { Config } from './types'

export const combine = async (
  ...configs: Awaitable<Config | Config[]>[]
): Promise<Config[]> => {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}
