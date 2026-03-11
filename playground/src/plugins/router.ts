import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const layouts = {
  default: () => import('@/layouts/default.vue'),
  element: () => import('@/layouts/element.vue')
} as const

const setupLayouts = (routes: RouteRecordRaw[], root = true) =>
  routes.map((route) => {
    if (route.children && route.children.length > 0) {
      route.children = setupLayouts(route.children, false)
    }

    if (root) {
      const skipLayout =
        !route.component &&
        route.children?.find(
          (child) => (child.path === '' || child.path === '/') && child.meta?.isLayout
        )
      if (skipLayout) {
        return route
      }

      if (route.meta?.isLayout !== false) {
        return {
          children: route.path === '/' ? [route] : [{ ...route, path: '' }],
          component: layouts[route.meta?.layout ?? 'default'],
          meta: {
            layout: route.meta?.layout ?? 'default',
            isLayout: true
          },
          path: route.path
        }
      }
    }

    if (route.meta?.isLayout) {
      return {
        children: [{ ...route, path: '' }],
        component: layouts[route.meta.layout ?? 'default'],
        meta: {
          layout: route.meta?.layout ?? 'default',
          isLayout: true
        },
        path: route.path
      }
    }

    return route
  })

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts([...routes], true)
})

if (import.meta.hot) {
  handleHotUpdate(router)
}