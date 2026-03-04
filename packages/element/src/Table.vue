<script lang="tsx">
export interface TableColumnProps<D> {
  label?: string
  width?: number
  fixed?: 'left' | 'right'
  content?: (scope: { index: number; row: D }) => VNodeChild
  type?: 'default' | 'selection'
}

export const TableColumn = defineComponent((props: TableColumnProps<D>) => {
  return () => <ElTableColumn></ElTableColumn>
}, {
  props: ['label', 'width', 'fixed', 'type', 'content']
})
</script>

<script setup lang="tsx" generic="D">
import { ElTable, ElTableColumn, type TableInstance, type TableColumnCtx } from 'element-plus'
import { useTemplateRef, type VNodeChild, ref, defineComponent } from 'vue'

export interface TableProps<D> {
  data?: D[]
  columns?: TableColumnProps<D>[]
  height?: number
}

const { columns, data } = defineProps<TableProps<D>>()

const emit = defineEmits<{
  rowClick: [row: D]
  selectionChange: [rows: D[]]
  headerDragend: [newWidth: number, oldWidth: number, column: TableColumnCtx]
}>()

const table = useTemplateRef('table')
</script>

<template>
  <ElTable ref="table" :data="data">
    <ElTableColumn v-for="column of columns" :label="column.label">
      <template></template>
    </ElTableColumn>
  </ElTable>
</template>