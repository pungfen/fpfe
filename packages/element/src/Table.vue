<script setup lang="tsx" generic="D extends Record<string, unknown>">
  import { ElTable, ElTableColumn, type TableColumnCtx } from 'element-plus'
  import { type CSSProperties, type FunctionalComponent, type VNodeChild, provide, useTemplateRef } from 'vue'
  import { X_ELEMENT_IN_X_TABLE } from './constants'
  import type { XComponentSize } from './types'

  export interface XTableColumnProps<D> {
    label?: string
    prop?: string
    width?: number
    fixed?: 'left' | 'right'
    content?: (scope: { index: number; row: D }) => VNodeChild
    header?: (scope: { column: XTableColumnProps<D> }) => VNodeChild
    selectable?: (row: D, index: number) => boolean
    type?: 'index' | 'selection'
  }

  export interface TableProps<D> {
    data?: D[]
    columns?: XTableColumnProps<D>[]
    height?: number
    size?: XComponentSize
    fit?: boolean
    rowClassName?: string | ((scope: { row: D, rowIndex: number }) => string)
    rowStyle?: CSSProperties| ((scope: { row: D, rowIndex: number }) => CSSProperties)
    cellClassName?: string | ((scope: { row: D, rowIndex: number, column: TableColumnCtx, columnIndex: number }) => string)
    cellStyle?: CSSProperties | ((scope: { row: D, rowIndex: number, column: TableColumnCtx, columnIndex: number }) => CSSProperties)
    showSummary?: boolean
    showOverflowTooltip?: boolean
    spanMethod?: (scope: { row: D, column: TableColumnCtx, rowIndex: number, columnIndex: number }) => number[] | { rowspan: number, colspan: number } | undefined
  }

  const { columns, data, showOverflowTooltip = true } = defineProps<TableProps<D>>()

  const emit = defineEmits<{
    rowClick: [row: D]
    selectionChange: [rows: D[]]
    headerDragend: [newWidth: number, oldWidth: number, column: TableColumnCtx]
  }>()

  const table = useTemplateRef('table')

  defineExpose({
    clearSelection: () => table.value?.clearSelection(),
    toggleRowSelection: (row: D, selected?: boolean, ignoreSelectable?: boolean) =>
      table.value?.toggleRowSelection(row, selected, ignoreSelectable),
  })

  provide(X_ELEMENT_IN_X_TABLE, true)

  const XTableColumn: FunctionalComponent<XTableColumnProps<D>> = (props) => (
    <ElTableColumn label={props.label} prop={props.prop} width={props.width} fixed={props.fixed} type={props.type}>
      {{
        default: ({ $index, row }: { $index: number, row: D }) => props.content?.({ index: $index, row }),
        header: () => props.header?.({ column: { ...props } })
      }}
    </ElTableColumn>
  )
</script>

<template>
  <ElTable
    ref="table"
    v-bind="{
      data,
      height,
      size,
      fit,
      rowClassName,
      rowStyle,
      cellClassName,
      cellStyle,
      showSummary,
      showOverflowTooltip,
      spanMethod
    }"
    @row-click="(row: D) => $emit('rowClick', row)"
    @selection-change="(rows: D[]) => $emit('selectionChange', rows)"
    @header-dragend="
      (newWidth, oldWidth, column) => $emit('headerDragend', newWidth, oldWidth, column)
    "
  >
    <XTableColumn v-for="column of columns" v-bind="column" />
  </ElTable>
</template>