<script setup lang="tsx">
import { type ButtonVariant, button as ui } from '../variants/button'
import { type Component, ref } from 'vue'
import { useFocus } from '@vueuse/core'

export interface ButtonProps {
  type?: ButtonVariant['type']
  color?: ButtonVariant['color']
  disabled?: boolean
}

const {
  color = 'primary',
  disabled = undefined,
  type = 'solid'
} = defineProps<ButtonProps>()

const { default: _default } = defineSlots<{
  default(): Component
}>()

const el = ref<HTMLButtonElement | null>()

const { focused } = useFocus(el)
</script>

<template>
  <button ref="el" :class="ui({ color, disabled, type })">
    <slot></slot>
  </button>
</template>
