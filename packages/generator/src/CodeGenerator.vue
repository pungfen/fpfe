<template>
  <div class="code-generator">
    <!-- 左侧配置面板 -->
    <div class="config-panel">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>配置</span>
          </div>
        </template>

        <!-- Swagger 地址 -->
        <el-form-item label="Swagger 地址">
          <el-input
            v-model="swaggerUrl"
            placeholder="请输入 Swagger/OAS 文档地址"
            @change="handleLoadDocs"
          >
            <template #append>
              <el-button :loading="loading" @click="handleLoadDocs">加载</el-button>
            </template>
          </el-input>
        </el-form-item>

        <!-- 选择 Path -->
        <el-form-item v-if="parsedPaths.length > 0" label="选择接口">
          <el-select
            v-model="selectedPath"
            placeholder="请选择接口"
            filterable
            @change="handlePathChange"
          >
            <el-option
              v-for="path in parsedPaths"
              :key="path.path"
              :label="`${path.path} - ${path.methods.map((m) => m.method.toUpperCase()).join(', ')}`"
              :value="path.path"
            />
          </el-select>
        </el-form-item>

        <!-- 选择 Schema -->
        <el-form-item v-if="availableSchemas.length > 0" label="选择 DTO">
          <el-select v-model="selectedSchema" placeholder="请选择 DTO" @change="handleSchemaChange">
            <el-option
              v-for="schema in availableSchemas"
              :key="schema.name"
              :label="schema.name"
              :value="schema.name"
            />
          </el-select>
        </el-form-item>

        <!-- 字段选择 -->
        <el-form-item v-if="selectedSchemaProperties.length > 0" label="选择字段">
          <div class="field-list">
            <el-checkbox
              v-model="selectAll"
              :indeterminate="isIndeterminate"
              @change="handleSelectAll"
            >
              全选
            </el-checkbox>
            <el-checkbox-group v-model="selectedFields" @change="handleFieldsChange">
              <el-checkbox
                v-for="prop in selectedSchemaProperties"
                :key="prop.name"
                :value="prop.name"
              >
                {{ prop.title || prop.name }}
                <span class="field-type">({{ prop.type }})</span>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item>

        <!-- 生成按钮 -->
        <el-form-item v-if="selectedFields.length > 0">
          <el-button type="primary" :loading="generating" @click="handleGenerate">
            生成代码
          </el-button>
        </el-form-item>
      </el-card>
    </div>

    <!-- 右侧代码预览 -->
    <div class="preview-panel">
      <el-tabs v-model="activeTab" type="border-card">
        <el-tab-pane label="index.vue" name="index">
          <div class="code-header">
            <el-button type="primary" size="small" @click="handleCopy(indexCode)">
              复制代码
            </el-button>
          </div>
          <pre class="code-preview"><code>{{ indexCode }}</code></pre>
        </el-tab-pane>

        <el-tab-pane label="detail.vue" name="detail">
          <div class="code-header">
            <el-button type="primary" size="small" @click="handleCopy(detailCode)">
              复制代码
            </el-button>
          </div>
          <pre class="code-preview"><code>{{ detailCode }}</code></pre>
        </el-tab-pane>

        <el-tab-pane label="types.ts" name="types">
          <div class="code-header">
            <el-button type="primary" size="small" @click="handleCopy(typesCode)">
              复制代码
            </el-button>
          </div>
          <pre class="code-preview"><code>{{ typesCode }}</code></pre>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { parseOpenAPI, findCrudOperations } from './resolve'
import { generateIndex, generateDetail, generateTypes } from './template'
import type { OpenAPIDocument, ParsedPath, ParsedSchema, ParsedSchemaProperty } from './types'

// Props
interface Props {
  swaggerUrl?: string
  document?: OpenAPIDocument
}

const props = withDefaults(defineProps<Props>(), {
  swaggerUrl: ''
})

// 状态
const swaggerUrl = ref(props.swaggerUrl)
const loading = ref(false)
const generating = ref(false)
const activeTab = ref('index')

// 解析后的数据
const parsedPaths = ref<ParsedPath[]>([])
const schemas = ref<Record<string, ParsedSchema>>({})

// 选择状态
const selectedPath = ref<string | null>(null)
const selectedSchema = ref<string | null>(null)
const selectedFields = ref<string[]>([])

// 生成结果
const indexCode = ref('')
const detailCode = ref('')
const typesCode = ref('')

// 可用的 Schema 列表
const availableSchemas = computed(() => {
  if (!selectedPath.value) return []
  const path = parsedPaths.value.find((p) => p.path === selectedPath.value)
  if (!path) return []

  const crud = findCrudOperations(selectedPath.value, parsedPaths.value)
  const schemaNames = new Set<string>()

  // 从 CRUD 操作中收集 schema 名称
  if (crud.list?.responseSchema) schemaNames.add(crud.list.responseSchema)
  if (crud.detail?.responseSchema) schemaNames.add(crud.detail.responseSchema)
  if (crud.create?.requestSchema) schemaNames.add(crud.create.requestSchema)
  if (crud.update?.requestSchema) schemaNames.add(crud.update.requestSchema)

  return Array.from(schemaNames)
    .map((name) => schemas.value[name])
    .filter(Boolean)
})

// 当前 Schema 的属性
const selectedSchemaProperties = computed((): ParsedSchemaProperty[] => {
  if (!selectedSchema.value) return []
  const schema = schemas.value[selectedSchema.value]
  return schema?.properties || []
})

// 全选状态
const selectAll = computed(() => {
  return selectedFields.value.length === selectedSchemaProperties.value.length
})

const isIndeterminate = computed(() => {
  const len = selectedFields.value.length
  return len > 0 && len < selectedSchemaProperties.value.length
})

// 加载文档
async function handleLoadDocs() {
  if (!swaggerUrl.value) {
    ElMessage.warning('请输入 Swagger 地址')
    return
  }

  loading.value = true
  try {
    const response = await fetch(swaggerUrl.value)
    const document: OpenAPIDocument = await response.json()
    const { paths, schemas: parsedSchemas } = parseOpenAPI(document)
    parsedPaths.value = paths
    schemas.value = parsedSchemas

    ElMessage.success('加载成功')
  } catch (error) {
    console.error('加载失败:', error)
    ElMessage.error('加载失败，请检查地址是否正确')
  } finally {
    loading.value = false
  }
}

// Path 变化时自动选择第一个可用的 Schema
function handlePathChange() {
  selectedSchema.value = null
  selectedFields.value = []
  indexCode.value = ''
  detailCode.value = ''
  typesCode.value = ''

  // 自动选择第一个 Schema
  if (availableSchemas.value.length > 0) {
    selectedSchema.value = availableSchemas.value[0].name
    handleSchemaChange()
  }
}

// Schema 变化时默认全选字段
function handleSchemaChange() {
  selectedFields.value = selectedSchemaProperties.value.map((p) => p.name)
}

// 全选/取消全选
function handleSelectAll(val: boolean | string | number) {
  selectedFields.value = val ? selectedSchemaProperties.value.map((p) => p.name) : []
}

// 字段选择变化
function handleFieldsChange() {
  // 清空生成的代码，强制重新生成
  indexCode.value = ''
  detailCode.value = ''
  typesCode.value = ''
}

// 生成代码
function handleGenerate() {
  if (!selectedPath.value || !selectedSchema.value || selectedFields.value.length === 0) {
    ElMessage.warning('请完成配置后生成')
    return
  }

  generating.value = true

  const schema = schemas.value[selectedSchema.value]
  if (!schema) {
    ElMessage.error('未找到对应的 Schema')
    generating.value = false
    return
  }

  try {
    // 生成类型定义
    typesCode.value = generateTypes(schema)

    // 生成 index.vue
    indexCode.value = generateIndex(selectedPath.value, schema, selectedFields.value)

    // 生成 detail.vue
    detailCode.value = generateDetail(selectedPath.value, schema, selectedFields.value)

    ElMessage.success('生成成功')
  } catch (error) {
    console.error('生成失败:', error)
    ElMessage.error('生成失败')
  } finally {
    generating.value = false
  }
}

// 复制代码
function handleCopy(code: string) {
  if (!code) {
    ElMessage.warning('没有可复制的代码')
    return
  }

  navigator.clipboard
    .writeText(code)
    .then(() => {
      ElMessage.success('复制成功')
      return null
    })
    .catch(() => {
      ElMessage.error('复制失败')
      return null
    })
}

// 初始化：如果传入了文档直接加载
if (props.document) {
  const { paths, schemas: parsedSchemas } = parseOpenAPI(props.document)
  parsedPaths.value = paths
  schemas.value = parsedSchemas
} else if (props.swaggerUrl) {
  handleLoadDocs()
}
</script>

<style scoped>
.code-generator {
  display: flex;
  height: calc(100vh - 120px);
  gap: 16px;
}

.config-panel {
  width: 360px;
  flex-shrink: 0;
  overflow-y: auto;
}

.preview-panel {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.preview-panel :deep(.el-tabs__content) {
  height: calc(100% - 40px);
  overflow: hidden;
}

.preview-panel :deep(.el-tab-pane) {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.code-header {
  padding: 8px 12px;
  border-bottom: 1px solid var(--el-border-color-lighter);
  display: flex;
  justify-content: flex-end;
}

.code-preview {
  flex: 1;
  overflow: auto;
  margin: 0;
  padding: 12px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 12px;
  line-height: 1.5;
}

.field-list {
  max-height: 300px;
  overflow-y: auto;
}

.field-list .el-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.field-type {
  color: #909399;
  font-size: 11px;
  margin-left: 4px;
}
</style>