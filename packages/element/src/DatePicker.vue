<script setup lang="tsx" generic="V extends string">
import { type DatePickerProps, ElDatePicker } from 'element-plus'
import { computed } from 'vue'

export interface XDatePickerProps {
  disabled?: boolean
  disabledDate?: DatePickerProps['disabledDate']
  endPlaceholder?: DatePickerProps['endPlaceholder']
  placeholder?: DatePickerProps['placeholder']
  startPlaceholder?: DatePickerProps['startPlaceholder']
  type?: DatePickerProps['type']
  valueFormat?: DatePickerProps['valueFormat']
}

const {
  endPlaceholder = '结束日期',
  placeholder = '请选择',
  startPlaceholder = '开始日期',
  type = 'date' } = defineProps<XDatePickerProps>()

const model = defineModel<V>()
const start = defineModel<V>('start')
const end = defineModel<V>('end')

const modelValue = computed({
  get() {
    if (type.includes('range') && start.value && end.value) {
      return [start.value, end.value]
    }
    else if (!type.includes('range')) {
      return model.value
    }
    return null
  },
  set(value) {
    if (type.includes('range') && Array.isArray(value)) {
      start.value = value?.[0] as V
      end.value = value?.[1] as V
    }
    else {
      model.value = value as V
    }
  }
})

defineEmits<{
  blur: [e: FocusEvent]
  focus: [e: FocusEvent]
}>()
</script>

<template>
  <ElDatePicker
    v-bind="{ disabled, disabledDate, type, valueFormat, placeholder, startPlaceholder, endPlaceholder }"
    v-model="modelValue"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  />
</template>
