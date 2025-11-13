<template>
  <EButton>
    <slot></slot>
  </EButton>
</template>

<script setup lang="tsx">
import EButton from '../basic/EButton.vue'

import type { EButtonProps } from '../basic'

defineProps<EButtonProps>()


const E = () => (

)

</script>