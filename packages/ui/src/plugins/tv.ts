import { tv as _tv } from 'tailwind-variants'
import type { TV } from 'tailwind-variants'

const COMMON_SIZES = ['sm', 'md', 'lg']

export const tv: TV = (options, config) =>
  _tv(options, {
    ...config
  })
