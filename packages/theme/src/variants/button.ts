import { tv, type VariantProps } from '../shared/tv'

export const button = tv({
  base: 'inline-flex cursor-pointer items-center gap-2 rounded px-3 py-1 transition delay-100',
  variants: {
    color: {
      primary: '',
      success: '',
      warning: '',
      danger: ''
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50'
    },
    type: {
      solid: 'text-white',
      ring: 'ring-1 ring-current ring-inset',
      text: ''
    }
  },
  compoundVariants: [
    {
      type: 'solid',
      color: 'primary',
      class: 'bg-cyan-500 hover:bg-cyan-600'
    },
    {
      type: 'solid',
      color: 'success',
      class: 'bg-green-500 hover:bg-green-600'
    },
    {
      type: 'solid',
      color: 'warning',
      class: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      type: 'solid',
      color: 'danger',
      class: 'bg-red-500 hover:bg-red-600'
    },
    {
      type: 'ring',
      color: 'primary',
      class: 'text-cyan-700 ring-cyan-500 hover:ring-cyan-600'
    },
    {
      type: 'ring',
      color: 'success',
      class: 'text-green-700 ring-green-500 hover:ring-green-600'
    },
    {
      type: 'ring',
      color: 'warning',
      class: 'text-yellow-700 ring-yellow-500 hover:ring-yellow-600'
    },
    {
      type: 'ring',
      color: 'danger',
      class: 'text-red-700 ring-red-500 hover:ring-red-600'
    },
    {
      type: 'text',
      color: 'primary',
      class: 'text-cyan-700 hover:bg-cyan-100'
    },
    {
      type: 'text',
      color: 'success',
      class: 'text-green-700 hover:bg-green-100'
    },
    {
      type: 'text',
      color: 'warning',
      class: 'text-yellow-700 hover:bg-yellow-100'
    },
    {
      type: 'text',
      color: 'danger',
      class: 'text-red-700 hover:bg-red-100'
    }
  ]
})

export type ButtonVariants = VariantProps<typeof button>
