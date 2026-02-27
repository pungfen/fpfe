<script setup lang="tsx">
export interface XButtonProps {
  disabled?: boolean;
}

const { disabled = false } = defineProps<XButtonProps>();
</script>

<template>
  <ElButton :disabled="disabled">
    <slot></slot>
  </ElButton>
</template>