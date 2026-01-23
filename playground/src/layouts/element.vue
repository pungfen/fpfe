<script setup lang="ts">
import ILucideSun from '~icons/lucide/sun'
import ILucideMoon from '~icons/lucide/moon'

const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const darkMode = computed({
  get: () => isDark.value,
  set: (value) => {
    if (value !== isDark.value) {
      toggleDark()
    }
  }
})

const componentMenus: Menu[] = [
  {
    name: 'Basic 基础组件',
    index: 'basic',
    children: [
      { name: 'Button', index: '/element/button' },
      { name: 'Input', index: '/element/input' },
      { name: 'Table', index: '/element/table' }
    ]
  }
]
</script>

<template>
  <ElContainer class="overflow-hidden">
    <ElHeader
      class="flex items-center justify-end border-b border-(--el-border-color)"
    >
      <ElSpace>
        <ElSwitch
          v-model="darkMode"
          :inactive-action-icon="ILucideSun"
          :active-action-icon="ILucideMoon"
        ></ElSwitch>
        <ElLink href="https://github.com/pungfen/fpfe" target="_blank">
          <ILucideGithub />
        </ElLink>
      </ElSpace>
    </ElHeader>

    <ElContainer class="overflow-hidden">
      <ElAside class="outline outline-(--el-border-color)">
        <ElScrollbar>
          <ElMenu
            router
            :default-active="router.currentRoute.value.path"
            class="border-0!"
          >
            <ElSubMenu v-for="item of componentMenus" :index="item.index">
              <template #title>
                <ElSpace>
                  <ILucideComponent />
                  <ElText>{{ item.name }}</ElText>
                </ElSpace>
              </template>
              <ElMenuItem v-for="child of item.children" :index="child.index">
                {{ child.name }}
              </ElMenuItem>
            </ElSubMenu>
          </ElMenu>
        </ElScrollbar>
      </ElAside>

      <ElMain>
        <RouterView />
      </ElMain>

      <ElAside class="outline outline-(--el-border-color)"></ElAside>
    </ElContainer>
  </ElContainer>
</template>
