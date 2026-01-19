import { tv, type VariantProps } from '../shared/tv'

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
    }
  }
})

export type InputVariants = VariantProps<typeof input>
export type InputSlots = keyof ReturnType<typeof input>
