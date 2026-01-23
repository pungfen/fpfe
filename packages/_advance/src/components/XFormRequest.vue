<script setup lang="tsx" generic="U, PT, QR, D extends object">
import type { XFormProps } from '@/components/basic/XForm.vue'

export interface XFormRequestProps<U, PT, QR, D> extends Omit<
  XFormProps<D>,
  'data' | 'disabled'
> {
  request: () => {
    data: Ref<D>
    execute: () => PromiseLike<unknown>
    path: Ref<PT>
    query: Ref<QR>
    url: U
    isFetching: Ref<boolean>
  }
  disabled?: ((scope: { data: D }) => boolean) | boolean
}

const {
  request,
  content,
  inline,
  labelPosition,
  labelWidth = 'auto',
  disabled
} = defineProps<XFormRequestProps<U, PT, QR, D>>()

const emit = defineEmits<{
  prepare: [parameters: { path: PT; query: QR }]
  init: [data: D]
}>()

const { data, isFetching, execute, path, query } = request()

const search = useDebounceFn(async () => {
  emit('prepare', { path: path.value, query: query.value })
  await execute()
})

const _disabled = computed(() =>
  typeof disabled === 'function' ? disabled({ data: data.value }) : disabled
)

const form = ref<ComponentExposed<typeof XForm> | null>()

const validate = () => form.value?.validate()
const resetFields = () => form.value?.resetFields()

const _init = JSON.stringify(data.value)
const reset = () => {
  data.value = JSON.parse(_init) as D
  resetFields()
}

const init = () => {
  emit('init', data.value)
}

defineExpose({ data, search, validate, resetFields, reset, init })

const _content = () => content?.({ data: data.value })
</script>

<template>
  <XForm
    ref="form"
    v-loading="isFetching"
    v-bind="{
      inline,
      labelWidth,
      labelPosition,
      data,
      disabled: _disabled,
      content: _content
    }"
    class="flex flex-1 flex-col overflow-hidden"
  />
</template>
