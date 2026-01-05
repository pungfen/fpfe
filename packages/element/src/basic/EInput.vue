<script setup lang="ts" generic="MV extends string | number">
const model = defineModel<MV>()
</script>

<template>
  <el-input v-model="model" />
</template>
