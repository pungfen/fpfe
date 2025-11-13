<template>
  <el-input v-model="model"></el-input>
</template>

<script setup lang="ts" generic="MV extends string | number">
const model = defineModel<MV>()
</script>