<script setup lang="tsx">
import { type InputUiVariants, inputUi } from '@ui/theme/input'

export interface InputProps {
  color?: InputUiVariants['color']
  size?: InputUiVariants['size']
  disabled?: boolean
}

const { color, size, disabled } = defineProps<InputProps>()

defineSlots<{
  default(): Component
}>()
</script>

<template>
  <input :class="inputUi({ color, size })" />
</template>
