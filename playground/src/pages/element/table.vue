<script setup lang="tsx">
  interface Dto {
    name?: string
    age?: number
  }
  const data = ref([
    { name: 'xx', age: 18 },
    { name: 'yy', age: 19 },
    { name: 'zz', age: 20 }
  ])

  const columns = [
    {
      label: '序号',
      type: 'index' as 'index' | 'selection',
      width: 120
    },
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '年龄',
      content: ({ row }: { row: Dto }) => `I am ${row.age}`
    }
  ]

  const XTableJsx = () => <XTable data={data.value} columns={[
    { label: '序号', type: 'index' }
  ]} />
</script>

<template>
  <XTable :data="data" :columns="columns" />

  <XTableJsx />
</template>