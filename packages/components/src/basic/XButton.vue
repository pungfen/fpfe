<template>
  <button @click="emit('click')"><slot></slot></button>
</template>

<script setup lang="ts">
export interface XButtonProps {
  size?: 'large' | 'default' | 'small'
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  text?: boolean
  link?: boolean
  loading?: boolean
  disabled?: boolean
  color?: string
}

const props = defineProps<XButtonProps>()
const emit = defineEmits<{ click: [] }>()
</script>
