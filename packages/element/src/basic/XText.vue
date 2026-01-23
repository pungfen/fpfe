<script setup lang="ts">
import type { TextProps } from 'element-plus'

export interface XTextProps extends Partial<TextProps> {}

const props = defineProps<XTextProps>()
</script>

<template>
  <ElText v-bind="props">
    <slot></slot>
  </ElText>
</template>
