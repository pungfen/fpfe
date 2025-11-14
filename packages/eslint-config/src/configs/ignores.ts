import { GLOB_EXCLUDE } from '../globs'
import { TypedFlatConfigItem } from '../types'

export const ignores = (): TypedFlatConfigItem[] => {
  return [
    {
      ignores: GLOB_EXCLUDE
    }
  ]
}
