import { GLOB_EXCLUDE } from '../globs'
import { TypedFlatConfigItem } from '../types'

export const ignores = async (): Promise<TypedFlatConfigItem[]> => {
  return [
    {
      ignores: GLOB_EXCLUDE
    }
  ]
}
