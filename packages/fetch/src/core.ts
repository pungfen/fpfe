function serializeBody(body: unknown, serializer?: string): BodyInit | string | null {
  if (body == null) return null
  if (typeof body === 'string') return body
  if (body instanceof FormData || body instanceof URLSearchParams || body instanceof Blob || body instanceof ArrayBuffer) return body
  if (serializer === 'json') return JSON.stringify(body)
  if (serializer === 'form') {
    const params = new URLSearchParams()
    Object.keys(body).forEach((key) => { params.append(key, String((body as Record<string, unknown>)[key])) }) // oxlint-disable-line
    return params.toString()
  }
  return JSON.stringify(body)
}

async function parseResponse(response: Response): Promise<unknown> {
  const ct = response.headers.get('content-type') || ''
  if (ct.includes('application/json')) return response.json()
  if (ct.includes('text/')) return response.text()
  if (ct.includes('image/') || ct.includes('application/octet-stream')) return response.blob()
  return response.text()
}

function buildURL(baseURL: string | undefined, url: string, params?: Record<string, unknown>): string {
  let fullURL = url
  if (baseURL && !url.startsWith('http')) fullURL = baseURL.replace(/\/$/, '') + '/' + url.replace(/^\//, '')
  if (params) {
    const sp = new URLSearchParams()
    Object.entries(params).forEach(([k, v]) => sp.append(k, String(v))) // oxlint-disable-line
    fullURL += (fullURL.includes('?') ? '&' : '?') + sp.toString()
  }
  return fullURL
}

export class FetchClient {
  baseURL = ''
  timeout = 0
  headers: Record<string, string> = {}
  serializer = 'json'
  throwOnError = true

  // oxlint-disable-next-line
  requestInterceptors = { _list: [] as any[], use(f: any, r?: any) { const id = this._list.length; this._list.push({ fulfilled: f, rejected: r }); return id }, eject(id: number) { this._list.splice(id, 1) }, clear() { this._list = [] }, forEach(fn: any) { this._list.forEach(fn) } }
  // oxlint-disable-next-line
  responseInterceptors = { _list: [] as any[], use(f: any, r?: any) { const id = this._list.length; this._list.push({ fulfilled: f, rejected: r }); return id }, eject(id: number) { this._list.splice(id, 1) }, clear() { this._list = [] }, forEach(fn: any) { this._list.forEach(fn) } }

  constructor(options: { baseURL?: string; timeout?: number; headers?: Record<string, string>; serializer?: string; throwOnError?: boolean } = {}) {
    if (options.baseURL) this.baseURL = options.baseURL
    if (options.timeout != null) this.timeout = options.timeout
    if (options.headers) this.headers = options.headers
    if (options.serializer) this.serializer = options.serializer
    if (options.throwOnError != null) this.throwOnError = options.throwOnError
  }

  async request<T = unknown>(url: string, init: RequestInit & { timeout?: number; baseURL?: string; params?: Record<string, unknown>; serializer?: string; throwOnError?: boolean; body?: unknown } = {}): Promise<{ data: T; response: Response; status: number; statusText: string; config: unknown }> {
    const method = (init.method || 'GET').toUpperCase()
    const opts = { ...init, baseURL: init.baseURL || this.baseURL, timeout: init.timeout ?? this.timeout, headers: { ...this.headers, ...init.headers }, serializer: init.serializer || this.serializer, throwOnError: init.throwOnError ?? this.throwOnError } // oxlint-disable-line
    const fullURL = buildURL(opts.baseURL, url, opts.params)
    const config = { method, url, options: opts }

    // request interceptors
    this.requestInterceptors.forEach((i: any) => { if (i.fulfilled) config.method = i.fulfilled(config).method || config.method }) // oxlint-disable-line

    let body: BodyInit | string | null = null
    if (method !== 'GET' && method !== 'HEAD' && opts.body) body = serializeBody(opts.body, opts.serializer)

    const fetchOpts: RequestInit = { method: config.method, headers: opts.headers, body }

    let timeoutId = 0
    if (opts.timeout && opts.timeout > 0) {
      const ctrl = new AbortController()
      timeoutId = window.setTimeout(() => ctrl.abort(), opts.timeout)
      fetchOpts.signal = ctrl.signal
    }

    try {
      const resp = await fetch(fullURL, fetchOpts)
      const data = await parseResponse(resp) as T // oxlint-disable-line
      const result = { data, response: resp, status: resp.status, statusText: resp.statusText, config }

      // response interceptors
      this.responseInterceptors.forEach((i: any) => { if (i.fulfilled) i.fulfilled(result) })

      if (opts.throwOnError && !resp.ok) throw new Error(`Request failed with status ${resp.status}`)
      return result
    } finally {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }

  get<T = unknown>(url: string, init?: any) { return this.request<T>(url, { ...init, method: 'GET' }) } // oxlint-disable-line
  post<T = unknown>(url: string, init?: any) { return this.request<T>(url, { ...init, method: 'POST' }) } // oxlint-disable-line
  put<T = unknown>(url: string, init?: any) { return this.request<T>(url, { ...init, method: 'PUT' }) } // oxlint-disable-line
  delete<T = unknown>(url: string, init?: any) { return this.request<T>(url, { ...init, method: 'DELETE' }) } // oxlint-disable-line
  patch<T = unknown>(url: string, init?: any) { return this.request<T>(url, { ...init, method: 'PATCH' }) } // oxlint-disable-line
}

export function createFetch(options?: any) { // oxlint-disable-line
  return new FetchClient(options)
}
