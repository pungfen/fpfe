<script setup lang="tsx" generic="D, V, MV extends V | V[]">
import { ElSelect, ElOption } from 'element-plus'
import { computed, ref, type Ref, watch } from 'vue'
import { useArrayMap } from '@vueuse/core'

export interface SelectOptionProps<V> {
  disabled?: boolean
  label?: number | string
  value: V
}

export interface SelectProps<D, V> {
  disabled?: boolean
  data?: D[]
  identify?: (value: V) => number | string
  factory: (option: D) => SelectOptionProps<V>
  supplement?: (lacks: V[]) => D[] | PromiseLike<D[]>

  multiple?: boolean
  filterable?: boolean
  remote?: boolean
  collapseTags?: boolean
  allowCreate?: boolean

  remoteMethod?: (query: string) => void
  loading?: boolean
}

const {
  disabled = false,
  allowCreate,
  identify,
  data,
  factory,
  supplement
} = defineProps<SelectProps<D, V>>()

const model = defineModel<MV>()

const supplements = ref([]) as Ref<D[]>
const init = useArrayMap(() => data ?? [], factory)
const options = computed(() => [...useArrayMap(supplements, factory).value, ...init.value])

const emit = defineEmits<{
  blur: []
  focus: []
  change: [value: MV]
}>()

const forward = (value: V) => {
  if (typeof value === 'object') {
    if (identify) {
      return identify(value)
    } else {
      throw new Error("`identify` is required when value's type extends `object` or `object[]`")
    }
  } else {
    return value as number | string
  }
}
const backward = (key: number | string) =>
  options.value.map((item) => item.value).find((item) => forward(item) === key)

let no = 0
watch(
  [model, init],
  async () => {
    no++
    if (model.value) {
      const lacks = ([] as V[])
        .concat(model.value)
        .filter((item) => !init.value.map((it) => forward(it.value)).includes(forward(item)))
      const _no = no
      const _data = await supplement?.(lacks)
      if (_no === no && _data) {
        supplements.value = _data
      }
    } else {
      supplements.value = []
    }
  },
  { immediate: true }
)

const localOptions = computed(() =>
  options.value.map((item) => {
    const key = forward(item.value)
    return { disabled: item.disabled, label: item.label, key, value: key }
  })
)

const localModel = computed({
  get: () =>
    model.value &&
    (Array.isArray(model.value) ? model.value.map(forward) : forward(model.value as V)),
  set: (value) => {
    if (Array.isArray(value)) {
      model.value = value.map((item) => backward(item)!) as MV
    } else {
      model.value =
        value === undefined
          ? undefined
          : ((backward(value) || (allowCreate ? value : undefined)) as MV)
    }
  }
})
</script>

<template>
  <ElSelect v-bind="{ ...$props, disabled }" v-model="localModel">
    <ElOption
      v-for="option of localOptions"
      :key="option.key"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    >
      {{ option.label }}
    </ElOption>
  </ElSelect>
</template>