<script setup lang="tsx" generic="V extends number">
export interface XRateProps {
  disabled?: boolean
  max?: number
  showScore?: boolean
  showText?: boolean
  scoreTemplate?: string
  lowThreshold?: number
  highThreshold?: number
  texts?: string[]
}

const props = withDefaults(defineProps<XRateProps>(), { disabled: undefined })
const model = defineModel<V>()
</script>

<template>
  <ElRate v-bind="props" v-model="model" />
</template>
