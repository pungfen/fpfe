<script setup lang="tsx">
export interface ButtonProps {
  disabled?: boolean
  text?: boolean
  link?: boolean
  type?: 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text' | ''
}

const { disabled = false, type } = defineProps<ButtonProps>()

const obj = {
  b: 2,
  a: 1,
}
</script>

<template>
  <ElButton v-bind="{ disabled, type, text, link }">
    <slot></slot>
  </ElButton>
</template>