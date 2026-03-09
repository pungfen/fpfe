// 请求配置类型
export interface FetchRequestInit extends RequestInit {
  /** 超时时间（毫秒），0 表示不限制 */
  timeout?: number
  /** 请求前缀 */
  baseURL?: string
  /** URL 参数 */
  params?: Record<string, string | number | boolean>
  /** 请求头 */
  headers?: HeadersInit & Record<string, string>
  /** 请求体序列化方式 */
  serializer?: 'json' | 'form' | 'text' | 'blob' | 'arrayBuffer' | 'formData'
  /** 是否在非 2xx 状态时抛出错误 */
  throwOnError?: boolean
}

// 响应类型
export interface FetchResponse<T = unknown> {
  /** 响应数据 */
  data: T
  /** 原始响应对象 */
  response: Response
  /** 状态码 */
  status: number
  /** 状态文本 */
  statusText: string
  /** 请求配置 */
  config: FetchConfig
}

// 内部使用的配置类型
export interface FetchConfig {
  method: string
  url: string
  options: FetchRequestInit
}

// 拦截器类型
export interface FetchInterceptor<T> {
  /** 拦截器ID */
  id: number
  /** 拦截器函数 */
  fulfilled: (value: T) => T | Promise<T>
  /** 错误处理函数 */
  rejected?: (error: unknown) => unknown
}

// 拦截器管理器
export interface InterceptorManager<T> {
  /** 添加拦截器 */
  use(fulfilled: (value: T) => T | Promise<T>, rejected?: (error: unknown) => unknown): number
  /** 移除拦截器 */
  eject(id: number): void
  /** 清除所有拦截器 */
  clear(): void
  /** 遍历拦截器 */
  forEach(fn: (interceptor: FetchInterceptor<T>) => void): void
}

// 错误类型
export class FetchError extends Error {
  /** 错误类型 */
  type: 'timeout' | 'network' | 'http' | 'unknown'
  /** 原始错误 */
  cause?: Error
  /** 请求配置 */
  config?: FetchConfig
  /** 响应对象（HTTP错误时） */
  response?: Response

  constructor(
    message: string,
    type: FetchError['type'],
    options?: {
      cause?: Error
      config?: FetchConfig
      response?: Response
    },
  ) {
    super(message)
    this.name = 'FetchError'
    this.type = type
    this.cause = options?.cause
    this.config = options?.config
    this.response = options?.response
  }
}

// 客户端配置
export interface FetchClientOptions {
  /** 默认基础URL */
  baseURL?: string
  /** 默认超时时间 */
  timeout?: number
  /** 默认请求头 */
  headers?: Record<string, string>
  /** 默认序列化方式 */
  serializer?: 'json' | 'form' | 'text' | 'blob' | 'arrayBuffer' | 'formData'
  /** 默认 throwOnError */
  throwOnError?: boolean
}

// HTTP 方法类型
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'
