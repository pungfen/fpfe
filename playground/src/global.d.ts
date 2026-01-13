export {}

declare global {
  export interface Menu {
    name: string
    index: string
    description?: string
    children?: Menu[]
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    isLayout?: boolean
    layout?: 'default' | 'element' | 'ui'
  }
}
