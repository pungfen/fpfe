interface ResolveInitData<D> {
  data?: CouldBeArray<D>
}
type ResolveInitPath<PT> = IfNever<PT, object, { path: PT }>
type ResolveInitQuery<QR> = IfNever<
  QR,
  object,
  AreAllPropertiesOptional<QR> extends true ? { query?: QR } : { query: QR }
>
type ResolveInitPayload<PD> = IfNever<PD, object, { payload: CouldBeArray<PD> }>

type ResolveInitFromOperation<T> = ResolveInitData<
  ResolveDataFromOperation<T>
> &
  ResolveInitPath<ResolvePathFromOperation<T>> &
  ResolveInitQuery<ResolveQueryFromOperation<T>> &
  ResolveInitPayload<ResolvePayloadFromOperation<T>> & { immedidate?: boolean }

const encode = (key: string, value: unknown) =>
  `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
const queryString = (params: object | null): string => {
  const qs: string[] = []

  for (const [key, value] of Object.entries(params ?? {})) {
    if (value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) => qs.push(encode(key, v)))
      } else if (typeof value !== 'undefined') {
        qs.push(encode(key, value))
      }
    }
  }

  return qs.length > 0 ? `?${qs.join('&')}` : ''
}

const request = async <
  U extends keyof paths,
  M extends HttpMethod & NonOptionalKeys<paths[U]>
>(
  url: U,
  method: M,
  params: ResolveInitFromOperation<paths[U][M]>
) => {
  let nu = url as string
  let body: string | undefined

  if ('path' in params && typeof params.path === 'object') {
    nu = nu.replace(
      /\{(.+?)\}/g,
      (_, key: string) => (params.path as Record<string, string>)[key] ?? ''
    )
  }

  if ('query' in params && typeof params.query === 'object') {
    nu += queryString(params.query)
  }

  if ('payload' in params && typeof params.payload === 'object') {
    body = JSON.stringify({
      data: ([] as ResolvePayloadFromOperation<paths[U][M]>[]).concat(
        params.payload
      )
    })
  }

  const controller = new AbortController()
  const response = await fetch(nu, {
    headers: { 'Content-Type': 'application/json' },
    body,
    method,
    signal: controller.signal
  })

  const json = (await response.json()) as ResolveResponseFromOperation<
    paths[U][M]
  >

  if (!response.ok) {
    return Promise.reject(json)
  }

  return { json, controller, response }
}

export const useRequest = <
  U extends keyof paths,
  M extends HttpMethod & NonOptionalKeys<paths[U]>,
  I extends ResolveInitFromOperation<paths[U][M]>
>(
  url: U,
  method: M,
  init: I
) => {
  type PT = ResolvePathFromOperation<paths[U][M]>
  const path = ref('path' in init ? init.path : {}) as Ref<PT>

  type QR = ResolveQueryFromOperation<paths[U][M]>
  const query = ref('query' in init ? init.query : undefined) as Ref<QR>

  type P = ResolvePayloadFromOperation<paths[U][M]>
  const payload = ref('payload' in init ? init.payload : undefined) as Ref<P>

  type D = ResolveDataFromOperation<paths[U][M]>
  type Data = 'data' extends keyof I ? (I['data'] extends D[] ? D[] : D) : D[]
  const data = ref('data' in init ? init.data : []) as Ref<Data>
  const list = ref([]) as Ref<D[]>

  const paging = ref({
    itemCount: 0,
    pageCount: 1,
    pageIndex: 1,
    pageSize: 20
  }) as Ref<Paging>
  const isFetching = ref(false)
  const isFinished = ref(false)

  const error = shallowRef<any>(null)

  const execute = async () => {
    error.value = null
    isFetching.value = true
    isFinished.value = false
    const { response, json } = await request(url, method, {
      path: path.value,
      query: query.value,
      payload: payload.value
    })
    if (response.ok) {
      if (typeof json === 'object' && json) {
        if ('data' in json) {
          const jsonData = json.data as D[]
          list.value = [...jsonData]
          data.value = (
            Array.isArray(data.value) ? jsonData : jsonData[0]
          ) as Data
        }
        if ('meta' in json) {
          const meta = json.meta as {
            paging?: {
              itemCount: number
              pageCount: number
              pageIndex: number
              pageSize: number
            }
          }
          if (meta.paging) {
            paging.value = meta.paging
          }
        }
      }
    } else {
      error.value = response.statusText
    }

    isFetching.value = false
    isFinished.value = true
  }

  const shell = {
    data,
    paging,
    path,
    payload,
    query,
    url,
    execute,
    isFetching,
    list
  }

  const waitUntilFinished = () =>
    new Promise((resolve, reject) =>
      until(isFinished)
        .toBe(true)
        .then(() => resolve(shell))
        .catch(reject)
    )

  const promise: PromiseLike<typeof shell> = {
    then: (onFulfilled, onRejected) => {
      return waitUntilFinished()
        .then(() =>
          error.value ? Promise.reject(shell) : Promise.resolve(shell)
        )
        .then(onFulfilled, onRejected)
    }
  }

  const immedidate = init.immedidate ?? true
  immedidate && Promise.resolve().then(() => execute())

  return { ...shell, ...promise }
}
