<script setup lang="tsx">
import { type ButtonVariants, button as ui } from '@fpfe/theme'

export interface ButtonProps {
  color?: ButtonVariants['color']
  size?: ButtonVariants['size']
  disabled?: boolean
  text?: boolean
}

const { color, size, disabled } = defineProps<ButtonProps>()

defineSlots<{
  default(): Component
}>()
</script>

<template>
  <button :class="ui({ color, size, disabled })">
    <slot />
  </button>
</template>
