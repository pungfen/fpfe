// 类型定义

export interface OpenAPIDocument {
  openapi: string
  info: {
    title: string
    description: string
    version: string
  }
  servers?: { url: string; description?: string }[]
  tags?: { name: string; description?: string }[]
  paths: Record<string, PathItem>
  components: {
    schemas: Record<string, Schema>
  }
}

export interface PathItem {
  get?: Operation
  post?: Operation
  put?: Operation
  delete?: Operation
  parameters?: Parameter[]
}

export interface Operation {
  tags?: string[]
  summary?: string
  operationId?: string
  parameters?: Parameter[]
  requestBody?: RequestBody
  responses: Record<string, Response>
}

export interface Parameter {
  name: string
  in: 'query' | 'path' | 'header' | 'cookie'
  required?: boolean
  schema?: Schema
  description?: string
}

export interface RequestBody {
  content: {
    'application/json': {
      schema: Schema
    }
  }
  required?: boolean
}

export interface Response {
  description: string
  content?: {
    '*/*'?: {
      schema: Schema | Reference
    }
  }
}

export interface Schema {
  type?: string
  format?: string
  properties?: Record<string, Schema>
  items?: Schema | Reference
  enum?: any[]
  description?: string
  title?: string
  required?: string[]
  $ref?: string
  default?: any
  oneOf?: Schema[]
  allOf?: Schema[]
  anyOf?: Schema[]
  nullable?: boolean
  uniqueItems?: boolean
  // 分页相关
  pageIndex?: number
  pageSize?: number
  // 数组相关
  maximum?: number
  minimum?: number
}

export interface Reference {
  $ref: string
}

// 解析后的数据类型
export interface ParsedPath {
  path: string
  methods: ParsedOperation[]
  tag: string
}

export interface ParsedOperation {
  method: 'get' | 'post' | 'put' | 'delete'
  operationId?: string
  summary?: string
  parameters: ParsedParameter[]
  requestSchema?: string // $ref 指向的 schema 名称
  responseSchema?: string // $ref 指向的 schema 名称
}

export interface ParsedParameter {
  name: string
  in: 'query' | 'path' | 'header' | 'cookie'
  required?: boolean
  schemaName: string // 类型名称
  schemaType: string // 类型: string, integer, boolean, array, object
}

export interface ParsedSchema {
  name: string
  type: string
  properties: ParsedSchemaProperty[]
  required: string[]
}

export interface ParsedSchemaProperty {
  name: string
  type: string
  format?: string
  description?: string
  title?: string
  enum?: any[]
  items?: Schema | Reference
  $ref?: string
  properties?: Record<string, Schema>
}

// 生成选项
export interface GeneratorOptions {
  // Swagger 文档地址
  swaggerUrl?: string
  // 文档对象（直接传入）
  document?: OpenAPIDocument
  // UI 组件库
  uiLibrary?: 'element-plus' | 'naive-ui' | 'antdv'
}

// 选择的状态
export interface SelectionState {
  selectedPath: string | null
  selectedSchema: string | null
  selectedFields: string[]
}

// 生成结果
export interface GeneratedCode {
  indexVue: string
  detailVue: string
  types: string
}