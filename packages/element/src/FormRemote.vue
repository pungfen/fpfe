<script setup lang="tsx" generic="U, PT, QR, D extends object">
import type { XFormProps } from './Form.vue'
import { useDebounceFn } from '@vueuse/core'

import { computed, type Ref, ref, type VNode } from 'vue'

import XForm from './Form.vue'

export interface XFormRemoteProps<U, PT, QR, D> extends Omit<XFormProps<D>, 'content' | 'data' | 'disabled'> {
  content?(scope: { data: D, isFetching: boolean, path: PT, query: QR, url: U }): VNode
  disabled?: ((scope: { data: D, isFetching: boolean, path: PT, query: QR, url: U }) => boolean) | boolean
  request: () => {
    data: Ref<D>
    execute(): PromiseLike<unknown> | unknown
    isFetching: Ref<boolean>
    path: Ref<PT>
    query: Ref<QR>
    url: U
  }
}

const { content, disabled, request } = defineProps<XFormRemoteProps<U, PT, QR, D>>()

const emit = defineEmits<{
  prepare: [parameters: { path: PT, query: QR }]
}>()

const { data, execute, isFetching, path, query, url } = request()
const init = JSON.stringify(data.value)

const _disabled = computed(() => typeof disabled === 'function'
  ? disabled({ data: data.value, isFetching: isFetching.value, path: path.value, query: query.value, url })
  : disabled)

const form = ref()

const X = () => (
  <XForm
    content={() => content?.({ data: data.value, isFetching: isFetching.value, path: path.value, query: query.value, url })}
    data={data.value}
    disabled={_disabled.value}
    ref={form}
  />
)

const search = useDebounceFn(async () => {
  emit('prepare', { path: path.value, query: query.value })
  await execute()
})

const validate = () => form.value?.validate()
const reset = () => {
  form.value?.reset()
  data.value = JSON.parse(init) as D
}

defineExpose({ reset, search, validate })
</script>

<template>
  <X />
</template>
