<template>
  <ElDivider content-position="left">
    <ElText size="large">基础用法</ElText>
  </ElDivider>

  <XTable
    height="500"
    :border="true"
    :data="data"
    :columns="[
      {
        label: 'name',
        content: ({ row }) => row.name
      },
      {
        label: 'age',
        content: ({ row }) => row.age
      },
      {
        label: 'address',
        content: ({ row }) => row.address
      }
    ]"
  ></XTable>
</template>

<script setup lang="ts">
const data = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  name: `Name ${index + 1}`,
  age: 20 + (index % 10),
  address: `Address ${index + 1}`
}))
</script>
