import { computed, ref } from 'vue'

import { useFetch } from '@vueuse/core'

export interface paths {}


type ResolveInitFromOperation<T> = ResolveInitData<>

export const useRequest = <U extends keyof paths, M extends keyof paths[U], I extends ResolveInitFromOperation<paths[U][M]>>(url: U, method: M, init: I) => {
  const isFetching = ref(false)
  const isFinished = ref(false)

  const nu = computed(() => {
    let res = 
  })

  const {} = useFetch()

  const shell = { isFetching, isFinished }

  return {
    ...shell
  }
}