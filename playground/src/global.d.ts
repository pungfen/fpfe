export {}

declare module 'vue-router' {
  interface RouteMeta {
    isLayout: boolean
    layout?: 'default' | 'element' | 'ui'
  }
}
