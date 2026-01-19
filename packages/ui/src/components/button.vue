<script setup lang="tsx">
import { type ButtonVariants, button as ui } from '@fpfe/theme'
import { type Component, ref } from 'vue'
import { useFocus } from '@vueuse/core'

export interface ButtonProps {
  type?: ButtonVariants['type']
  color?: ButtonVariants['color']
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

const X = () => (
  <button ref={el} class={ui({ color, disabled, type })}>
    {_default?.()}
  </button>
)
</script>

<template>
  <X />
</template>
