<script setup lang="tsx">
import { ElButton } from 'element-plus'

export interface ButtonProps {
  disabled?: boolean
  text?: boolean
  link?: boolean
  type?: 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text' | ''
}

const { disabled = false } = defineProps<ButtonProps>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()
</script>

<template>
  <ElButton v-bind="{ ...$props, disabled }" @click="emit('click', $event)">
    <slot></slot>
  </ElButton>
</template>