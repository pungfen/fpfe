<script setup lang="tsx">
const me = useMeStore()
</script>

<template>
  <div class="text-2xl font-bold">
    {{ me.data.name }}
  </div>
</template>
