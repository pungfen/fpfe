<script setup lang="tsx">
export interface XInputProps {
  disabled?: boolean;
}

const { disabled = false } = defineProps<XInputProps>();
</script>

<template>
  <ElButton :disabled="disabled">
    <slot></slot>
  </ElButton>
</template>