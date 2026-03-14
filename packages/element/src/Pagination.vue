<script setup lang="tsx">
import type { XComponentSize } from './types'

import { ElPagination } from 'element-plus'

export interface XPaginationProps {
  pageSizes?: number[]
  size?: XComponentSize
  total?: number
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
    <slot />
  </ElPagination>
</template>
