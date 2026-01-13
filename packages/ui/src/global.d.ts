import colors from 'tailwindcss/colors'

declare global {
  import('tailwind-variants')
  export type { VariantProps } from 'tailwind-variants'

  export type Colors = keyof typeof colors

  export interface UIProps<T> {
    ui?: T
  }
}

export {}
