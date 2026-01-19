<script setup lang="tsx" generic="V extends string">
import { type InputVariants, input as ui } from '@fpfe/theme'
import { useId, type Component, ref } from 'vue'

export interface InputProps {
  disabled?: InputVariants['disabled']
  color?: InputVariants['color']
  placeholder?: string
}

const {
  disabled = undefined,
  placeholder = '请输入内容',
  color = 'primary'
} = defineProps<InputProps>()

const model = defineModel<V>()

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const { append, prepend } = defineSlots<{
  append(): Component
  prepend(): Component
}>()

const id = useId()
const el = ref<HTMLInputElement | null>(null)

const blur = () => {
  emit('blur')
}
const focus = () => {
  emit('focus')
}

defineExpose({ blur, focus })

const X = () => (
  <div class={ui({ color, disabled })}>
    {prepend?.()}
    <input
      ref={el}
      id={`x-input-${id}`}
      v-bind={placeholder}
      value={model.value}
      onInput={(e) => {
        const v = (e.target as HTMLInputElement).value as V
        model.value = v
      }}
      class="ml-1 flex-1 border-none first:ml-0"
    />
    {append?.()}
  </div>
)
</script>

<template>
  <X />
</template>
