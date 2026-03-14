<script setup lang="tsx">
interface Dto {
  age?: number
  name?: string
}
const data = ref([
  { age: 18, name: 'xx' },
  { age: 19, name: 'yy' },
  { age: 20, name: 'zz' }
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
    content: ({ row }: { row: Dto }) => `I am ${row.age}`,
    label: '年龄'
  }
]

const XTableJsx = () => (
  <XTable
    columns={[
      { label: '序号', type: 'index' }
    ]}
    data={data.value}
  />
)
</script>

<template>
  <XTable :data="data" :columns="columns" />

  <XTableJsx />
</template>
