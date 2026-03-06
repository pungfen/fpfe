import type {
  OpenAPIDocument,
  PathItem,
  Operation,
  Schema,
  Reference,
  ParsedPath,
  ParsedOperation,
  ParsedParameter,
  ParsedSchema,
  ParsedSchemaProperty
} from './types'

/**
 * 解析 OpenAPI 文档
 */
export function parseOpenAPI(document: OpenAPIDocument): {
  paths: ParsedPath[]
  schemas: Record<string, ParsedSchema>
} {
  const paths = parsePaths(document.paths, document.components?.schemas || {})
  const schemas = parseSchemas(document.components?.schemas || {})

  return { paths, schemas }
}

/**
 * 解析所有 paths
 */
function parsePaths(
  paths: Record<string, PathItem>,
  schemas: Record<string, Schema>
): ParsedPath[] {
  const result: ParsedPath[] = []

  for (const [path, pathItem] of Object.entries(paths)) {
    const methods: ParsedOperation[] = []
    const tags = pathItem.get?.tags || pathItem.post?.tags || []

    // GET - 列表
    if (pathItem.get) {
      methods.push(parseOperation('get', pathItem.get, schemas))
    }
    // POST - 创建
    if (pathItem.post) {
      methods.push(parseOperation('post', pathItem.post, schemas))
    }
    // PUT - 更新
    if (pathItem.put) {
      methods.push(parseOperation('put', pathItem.put, schemas))
    }
    // DELETE - 删除
    if (pathItem.delete) {
      methods.push(parseOperation('delete', pathItem.delete, schemas))
    }

    if (methods.length > 0) {
      result.push({
        path,
        methods,
        tag: tags[0] || path
      })
    }
  }

  return result
}

/**
 * 解析单个操作
 */
function parseOperation(
  method: 'get' | 'post' | 'put' | 'delete',
  operation: Operation,
  schemas: Record<string, Schema>
): ParsedOperation {
  // 解析参数
  const parameters: ParsedParameter[] = (operation.parameters || []).map((param) => {
    let schemaName = 'any'
    let schemaType = 'any'

    if (param.schema) {
      const resolved = resolveSchema(param.schema, schemas)
      schemaName = resolved.name
      schemaType = resolved.type
    }

    return {
      name: param.name,
      in: param.in,
      required: param.required,
      schemaName,
      schemaType
    }
  })

  // 解析请求体
  let requestSchema: string | undefined
  if (operation.requestBody?.content?.['application/json']?.schema) {
    const schema = operation.requestBody.content['application/json'].schema
    const resolved = resolveRef(schema, schemas)
    requestSchema = resolved
  }

  // 解析响应
  let responseSchema: string | undefined
  const okResponse = operation.responses['200']
  if (okResponse?.content?.['*/*']?.schema) {
    const schema = okResponse.content['*/*'].schema
    // 尝试提取 DataResponseXXX 中的 data 字段类型
    const resolved = resolveRef(schema, schemas)
    // 如果是 DataResponseXXX，尝试找到 data 数组元素的类型
    if (resolved && schemas[resolved]) {
      const dataSchema = schemas[resolved]
      const dataProp = dataSchema.properties?.data
      if (dataProp?.items) {
        const itemsResolved = resolveRef(dataProp.items as Schema, schemas)
        responseSchema = itemsResolved
      }
    } else {
      responseSchema = resolved
    }
  }

  return {
    method,
    operationId: operation.operationId,
    summary: operation.summary,
    parameters,
    requestSchema,
    responseSchema
  }
}

/**
 * 解析所有 schemas
 */
function parseSchemas(schemas: Record<string, Schema>): Record<string, ParsedSchema> {
  const result: Record<string, ParsedSchema> = {}

  for (const [name, schema] of Object.entries(schemas)) {
    result[name] = parseSchema(name, schema, schemas)
  }

  return result
}

/**
 * 解析单个 schema
 */
function parseSchema(
  name: string,
  schema: Schema,
  allSchemas: Record<string, Schema>,
  visited: Set<string> = new Set()
): ParsedSchema {
  // 避免循环引用
  if (visited.has(name)) {
    return {
      name,
      type: 'object',
      properties: [],
      required: []
    }
  }
  visited.add(name)

  // 如果是引用，解析引用的 schema
  if (schema.$ref) {
    const refName = schema.$ref.replace('#/components/schemas/', '')
    if (allSchemas[refName]) {
      return parseSchema(refName, allSchemas[refName], allSchemas, visited)
    }
  }

  const properties: ParsedSchemaProperty[] = []
  const requiredFields = schema.required || []

  if (schema.properties) {
    for (const [propName, propSchema] of Object.entries(schema.properties)) {
      let type = 'any'
      let format: string | undefined
      let description: string | undefined
      let title: string | undefined
      let enumValues: any[] | undefined
      let items: Schema | Reference | undefined
      let $ref: string | undefined

      if (propSchema.$ref) {
        const refName = propSchema.$ref.replace('#/components/schemas/', '')
        type = refName
        $ref = refName
      } else if (propSchema.type === 'array' && propSchema.items) {
        if ((propSchema.items as Reference).$ref) {
          const refName = (propSchema.items as Reference).$ref.replace('#/components/schemas/', '')
          type = `${refName}[]`
        } else {
          type = `${(propSchema.items as Schema).type || 'any'}[]`
        }
        items = propSchema.items
      } else {
        type = propSchema.type || 'any'
        format = propSchema.format
      }

      description = propSchema.description
      title = propSchema.title
      enumValues = propSchema.enum

      properties.push({
        name: propName,
        type,
        format,
        description,
        title,
        enum: enumValues,
        items,
        $ref
      })
    }
  }

  return {
    name,
    type: schema.type || 'object',
    properties,
    required: requiredFields
  }
}

/**
 * 解析 schema 或 reference，返回名称
 */
function resolveRef(
  schema: Schema | Reference,
  _schemas?: Record<string, Schema>
): string | undefined {
  if ('$ref' in schema) {
    return schema.$ref?.replace('#/components/schemas/', '')
  }
  return undefined
}

/**
 * 解析 schema，返回名称和类型
 */
function resolveSchema(
  schema: Schema | Reference,
  _schemas?: Record<string, Schema>
): { name: string; type: string } {
  if ('$ref' in schema) {
    const name = schema.$ref!.replace('#/components/schemas/', '')
    return { name, type: name }
  }

  if (schema.type === 'array' && schema.items) {
    if ('$ref' in schema.items) {
      const name = (schema.items as Reference).$ref.replace('#/components/schemas/', '')
      return { name, type: `${name}[]` }
    }
    return { name: 'array', type: `${schema.items.type || 'any'}[]` }
  }

  return { name: schema.type || 'any', type: schema.type || 'any' }
}

/**
 * 根据 path 查找对应的 CRUD 操作
 */
export function findCrudOperations(
  path: string,
  paths: ParsedPath[]
): {
  list?: ParsedOperation
  detail?: ParsedOperation
  create?: ParsedOperation
  update?: ParsedOperation
  delete?: ParsedOperation
} {
  const pathItem = paths.find((p) => p.path === path)
  if (!pathItem) return {}

  const result: any = {}

  for (const op of pathItem.methods) {
    switch (op.method) {
      case 'get':
        if (op.summary?.includes('详情') || op.summary?.includes('获取')) {
          result.detail = op
        } else {
          result.list = op
        }
        break
      case 'post':
        result.create = op
        break
      case 'put':
        result.update = op
        break
      case 'delete':
        result.delete = op
        break
    }
  }

  return result
}