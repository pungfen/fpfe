import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  base: 'rounded font-medium active:opacity-80',
  variants: {
    color: {
      amber: 'bg-amber-500 text-white',
      blue: 'bg-blue-500 text-white',
      cyan: 'bg-cyan-500 text-white',
      gray: 'bg-gray-500 text-white',
      neutral: 'bg-neutral-500 text-white',
      red: 'bg-red-500 text-white'
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50'
    },
    plain: {},
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md'
  }
})

export type ButtonVariants = VariantProps<typeof button>
