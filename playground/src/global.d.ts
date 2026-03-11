export {}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: 'default' | 'element'
    isLayout?: boolean
  }
}

declare global {}