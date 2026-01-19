import { tv as _tv, type VariantProps, type TV } from 'tailwind-variants'

export const tv: TV = (options, config) =>
  _tv(options, {
    ...config
  })

export type { VariantProps }
