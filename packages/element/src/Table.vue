<script lang="tsx">
  export interface XTableColumnProps<D> {
    label?: string
    width?: number
    fixed?: 'left' | 'right'
    content?: (scope: { index: number; row: D }) => VNodeChild
    type?: 'default' | 'selection'
  }

  export const XTableColumn = defineComponent((props: XTableColumnProps<D>) => {
    provide(X_ELEMENT_IN_X_TABLE_COLUMN, true)
    return () => <ElTableColumn></ElTableColumn>
  }, {
    props: ['label', 'width', 'fixed', 'type', 'content']
  })
</script>

<script setup lang="tsx" generic="D extends Record<string, unknown>">
  import { ElTable, ElTableColumn, type TableInstance, type TableColumnCtx } from 'element-plus'
  import { useTemplateRef, type VNodeChild, ref, defineComponent, provide } from 'vue'
  import { X_ELEMENT_IN_X_TABLE, X_ELEMENT_IN_X_TABLE_COLUMN } from './constants'

  export interface TableProps<D> {
    data?: D[]
    columns?: XTableColumnProps<D>[]
    height?: number
  }

  const { columns, data } = defineProps<TableProps<D>>()

  const emit = defineEmits<{
    rowClick: [row: D]
    selectionChange: [rows: D[]]
    headerDragend: [newWidth: number, oldWidth: number, column: TableColumnCtx]
  }>()

  const table = useTemplateRef('table')

  defineExpose({
    toggleRowSelection: (row: D, selected?: boolean, ignoreSelectable?: boolean) =>
      table.value?.toggleRowSelection(row, selected, ignoreSelectable)
  })


  const XTableColumn = () => <ElTableColumn></ElTableColumn>
</script>

<template>
  <ElTable ref="table" :data="data">
    <XTableColumn v-for="column of columns" :label="column.label" />
  </ElTable>
</template>