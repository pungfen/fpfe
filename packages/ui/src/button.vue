<script setup lang="tsx">
import { cva, cx } from 'class-variance-authority'

export interface ButtonProps extends /* @vue-ignore */ UIProps<string> {
  type?: 'default' | 'plain' | 'text'
  disabled?: boolean
}

const { type = 'default' } = defineProps<ButtonProps>()

const ui = cva('inline-flex items-center gap-2', {
  compoundVariants: [
    { type: 'default', class: 'bg-cyan-500 hover:bg-cyan-500' }
  ],
  variants: {
    color: { cyan: '', grey: '', green: '', red: '', yellow: '' },
    type: {
      default: 'rounded-md px-3 py-1 text-white',
      plain: '',
      text: ''
    }
  }
})
</script>

<template>
  <button :class="cx(ui({ type }))">
    <slot />
  </button>
</template>
