<script setup lang="tsx">
import { tv } from 'tailwind-variants'

export type ButtonVariants = VariantProps<typeof ui>

export interface ButtonProps extends /* @vue-ignore */ ButtonVariants {
  type?: 'default' | 'plain' | 'text'
  disabled?: boolean
}

const { type = 'default' } = defineProps<ButtonProps>()

const ui = tv({
  base: '',
  defaultVariants: {
    type: 'default'
  },
  variants: {
    type: {
      default: '',
      plain: '',
      text: ''
    }
  }
})
</script>

<template>
  <button :class="ui({ type })">
    <slot />
  </button>
</template>
