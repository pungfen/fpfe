declare global {
  interface Window {
    ur?: Runtime
  }
}

export interface Runtime {
  register: (name: string, predicate: App['predicate'], load: App['load']) => void
  start: () => Promise<any>
  load: (mn: string) => Promise<any>
  unload: (mn: string) => void
}

export interface UserApp {
  mount: () => Promise<any>
  unmount: () => Promise<any>
}

enum AppStatus {
  NOT_LOADED,
  NOT_MOUNTED,
  MOUNTED
}

interface BaseApp {
  name: string
  predicate: (pathname: string) => boolean
  load: () => Promise<any>
  status: AppStatus
}

type App = BaseApp & Partial<UserApp>

const getDeps = () => {
  let deps: string = []

  return deps
}

const apps: App[] = []
const ur = (window.ur = window.ur ?? {} as Runtime)
ur.register = (name, predicate, load) => {
  apps.push({
    name,
    predicate,
    load,
    status: AppStatus.NOT_LOADED
  })
}

ur.start = async () => {
  await route()
}
ur.load = async (mn) => {}

ur.unload = () => {}

const route = async () => {
  const toBeMounted: App[] = []
  const toBeUnmounted: App[] = []

  apps.forEach(
    (app) => {
      const shouldBeActive = app.predicate(location.pathname)
      switch (app.status) {
        case AppStatus.NOT_LOADED:
        case AppStatus.NOT_MOUNTED:
          shouldBeActive && toBeMounted.push(app)
          break
        case AppStatus.MOUNTED:
          shouldBeActive || toBeUnmounted.push(app)
      }
    }
  )

  // await Promise.all(
  //   toBeUnmounted.map(
  //     async (app) => {
  //       await app.unmount!()
  //       return ur.unload(app.name)
  //     }
  //   )
  // )

  await Promise.all(
    toBeMounted.map(
      async (app) => {
        if (app.status === AppStatus.NOT_LOADED) {
          Object.assign(app, await app.load().then(m => m.default))
          app.status = AppStatus.NOT_MOUNTED
        }
        await app.mount!()
        app.status = AppStatus.MOUNTED
      }
    )
  )
}
