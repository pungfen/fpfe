import { tv, type VariantProps } from '../tailwind'

export const input = tv({
  slots: {
    wrapper: 'inline-flex w-full items-center'
  },
  variants: {
    color: {
      primary: '',
      success: '',
      warning: '',
      danger: ''
    },
    disabled: {
      true: ''
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      class: 'focus-within:ring-primary-400 focus-within:ring-2'
    }
  ]
})

export type InputVariants = VariantProps<typeof input>
export type InputSlots = keyof ReturnType<typeof input>
