<script setup lang="tsx">
import { ElButton } from 'element-plus'

export interface XButtonProps {
  disabled?: boolean
  text?: boolean
  link?: boolean
  type?: 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text' | ''
}

const { disabled = false } = defineProps<XButtonProps>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()
</script>

<template>
  <ElButton v-bind="{ type, text, link, disabled }" @click="emit('click', $event)">
    <slot></slot>
  </ElButton>
</template>