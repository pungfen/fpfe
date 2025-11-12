<template>
  <UI/>
</template>

<script setup lang="tsx">
import { cva, cx } from 'class-variance-authority'

export type UiButtonColors = Extract<Colors, 'cyan' | 'gray' | 'green' | 'red' | 'yellow'>

export interface UiButtonProps extends /* @vue-ignore */ UIProps<string> {
  color?: UiButtonColors
  disabled?: boolean
  type?: 'default' | 'plain' | 'text'
}

const { type = 'default', disabled, color, ui } = defineProps<UiButtonProps>()

const _ui = cva('inline-flex items-center gap-2', {
  compoundVariants: [
    {
      class: 'text-red-500 hover:text-red-600',
      color: 'red',
      type: 'default'
    }
  ],
  variants: {
    color: {
      cyan: '',
      gray: '',
      green: '',
      red: '',
      yellow: ''
    },
    type: {
      default: 'rounded-md px-3 py-1 text-white',
      plain: 'rounded-md px-3 py-1 ring-1 ring-inset ring-current',
      text: ''
    }
  }
})

const UI = () => (
  <button class={cx(_ui({ type, color }), ui)} disabled={disabled}></button>
)
</script>