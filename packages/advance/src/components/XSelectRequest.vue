<script setup lang="tsx" generic="U, PT, QR, D, V, MV extends V | V[]">
import type { XSelectProps } from '@fpfe/element'

export interface XSelectRequestProps<U, PT, QR, D, V> extends Omit<
  XSelectProps<D, V>,
  'data' | 'supplement'
> {
  request: () => {
    data: Ref<D[]>
    execute: () => PromiseLike<unknown>
    path: Ref<PT>
    query: Ref<QR>
    url: U
    isFetching: Ref<boolean>
  }
  supplement?: (lacks: V[], url: U) => D[] | PromiseLike<D[]>
}

const props = withDefaults(
  defineProps<XSelectRequestProps<U, PT, QR, D, V>>(),
  { disabled: undefined, remote: undefined, filterable: undefined }
)
const emit = defineEmits<{
  prepare: [parameters: { path: PT; query: QR }, input?: string]
}>()
const model = defineModel<MV>()

const { data, isFetching, path, query, url, execute } = props.request()

const _supplement =
  props.supplement && ((lacks: V[]) => props.supplement!(lacks, url))

const search = (input?: string) => {
  emit('prepare', { path: path.value, query: query.value }, input)
  execute()
}

defineExpose({ search })
</script>

<template>
  <XSelect
    v-bind="{
      ...props,
      data,
      supplement: _supplement,
      remoteMethod: search,
      loading: isFetching,
      filterable: remote || filterable
    }"
    v-model="model"
  />
</template>
