import { tv, type VariantProps } from '../shared/tv'

export const input = tv({
  base: 'inline-flex w-full items-center rounded px-3 py-1 ring-1 transition delay-100 ring-inset',
  variants: {
    color: {
      primary: ''
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50'
    },
    type: {}
  },
  compoundVariants: [
    {
      color: 'primary',
      class: 'ring-cyan-500 focus-within:ring-cyan-600'
    }
  ]
})

export type InputVariants = VariantProps<typeof input>
