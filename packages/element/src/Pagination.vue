<script setup lang="tsx">
  import { ElPagination } from 'element-plus'
  import type { XComponentSize } from './types'

  export interface XPaginationProps {
    size?: XComponentSize
    total?: number
    pageSizes?: number[]
  }

  defineProps<XPaginationProps>()

  const currentPage = defineModel<number>('currentPage')
  const pageSize = defineModel<number>('pageSize')
</script>

<template>
  <ElPagination
    v-bind="{ size, total, pageSizes }"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
  >
    <slot></slot>
  </ElPagination>
</template>