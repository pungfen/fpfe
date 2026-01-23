<script setup lang="tsx">
import type { SpaceProps } from 'element-plus'

export interface XSpaceProps extends Partial<SpaceProps> {}

const props = defineProps<XSpaceProps>()
</script>

<template>
  <ElSpace v-bind="props">
    <slot></slot>
  </ElSpace>
</template>
