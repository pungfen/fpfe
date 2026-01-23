<script setup lang="ts">
import type { TagProps } from 'element-plus'

export interface XTagProps extends Partial<TagProps> {}

const props = defineProps<XTagProps>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <ElTag v-bind="props" @close="$emit('close')">
    <slot></slot>
  </ElTag>
</template>
