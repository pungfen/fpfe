<script setup lang="tsx">
import { type ButtonUiVariants, buttonUi } from '@/theme/button'

export interface ButtonProps {
  color?: ButtonUiVariants['color']
  size?: ButtonUiVariants['size']
  disabled?: boolean
}

const { color, size, disabled } = defineProps<ButtonProps>()

defineSlots<{
  default(): Component
}>()
</script>

<template>
  <button :class="buttonUi({ color, size })">
    <slot />
  </button>
</template>
