import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const layouts = {
  default: () => import('@/layouts/default.vue'),
  element: () => import('@/layouts/element.vue'),
  ui: () => import('@/layouts/ui.vue')
} as const

for (const route of routes) {
  if (route.path.startsWith('/element')) {
    route.meta ??= {}
    route.meta.layout = 'element'
  }
}

const setupLayouts = (routes: RouteRecordRaw[]) => {
  function traverse(_routes: RouteRecordRaw[], root = true) {
    return _routes.map((route) => {
      if (route.children && route.children.length > 0) {
        route.children = traverse(route.children, false)
      }

      if (root) {
        const skipLayout =
          !route.component &&
          route.children?.some(
            (child) =>
              (child.path === '' || child.path === '/') && child.meta?.isLayout
          )
        if (skipLayout) {
          return route
        }

        if (route.meta?.isLayout !== false) {
          return {
            children:
              route.path === '/'
                ? [route]
                : [
                    {
                      ...route,
                      path: ''
                    }
                  ],
            component: layouts[route.meta?.layout ?? 'default'],
            meta: { isLayout: true },
            path: route.path
          }
        }
      }

      if (route.meta?.isLayout) {
        return {
          children: [
            {
              ...route,
              path: ''
            }
          ],
          component: layouts[route.meta?.layout ?? 'default'],
          meta: { isLayout: true },
          path: route.path
        }
      }

      return route
    })
  }
  return traverse(routes)
}

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes)
})
