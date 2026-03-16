<script setup lang="tsx">
const router = useRouter()

const menus = ref([
  {
    index: '/element/button',
    label: 'Button'
  },
  {
    index: '/element/table',
    label: 'Table'
  },
  {
    index: '/element/form',
    label: 'Form'
  }
])
</script>

<template>
  <ElContainer class="h-full">
    <ElAside>
      <ElMenu router :default-active="router.currentRoute.value.name">
        <ElMenuItem v-for="item of menus" :index="item.index">
          {{ item.label }}
        </ElMenuItem>
      </ElMenu>
    </ElAside>
    <ElMain>
      <RouterView />
    </ElMain>
  </ElContainer>
</template>
