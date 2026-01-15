export {}
declare module 'vue' {
  export interface GlobalComponents {
    XButton: (typeof import('@fpfe/ui'))['XButton']
    XInput: (typeof import('@fpfe/ui'))['XInput']
  }
}
