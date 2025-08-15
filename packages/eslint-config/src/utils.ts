import type { Awaitable } from '@fp/shared'
import type { TypedFlatConfigItem } from './types'

export const combine = async (
  ...configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): Promise<TypedFlatConfigItem[]> => {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}
