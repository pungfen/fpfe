import type { ParsedSchema, ParsedSchemaProperty } from './types'

/**
 * 根据字段类型返回 Element Plus 组件
 */
function getFormComponent(prop: ParsedSchemaProperty): string {
  const type = prop.type.toLowerCase()

  // 处理数组类型
  if (type.endsWith('[]')) {
    return 'el-select'
  }

  // 处理引用类型
  if (prop.$ref) {
    // 特殊处理 LookupDto 这种枚举类型
    if (prop.$ref === 'LookupDto') {
      return 'el-select'
    }
    // 其他引用类型默认用输入框
    return 'el-input'
  }

  // 处理枚举
  if (prop.enum && prop.enum.length > 0) {
    return 'el-select'
  }

  // 根据类型选择组件
  switch (type) {
    case 'string':
      return 'el-input'
    case 'integer':
    case 'number':
      return 'el-input-number'
    case 'boolean':
      return 'el-switch'
    case 'date':
    case 'datetime':
    case 'date-time':
      return 'el-date-picker'
    default:
      return 'el-input'
  }
}

/**
 * 生成 TypeScript 类型定义
 */
export function generateTypes(schema: ParsedSchema): string {
  const lines: string[] = []

  lines.push(`export interface ${schema.name} {`)

  for (const prop of schema.properties) {
    let tsType = 'any'

    if (prop.type.endsWith('[]')) {
      const itemType = prop.type.replace('[]', '')
      if (prop.$ref || itemType === prop.name) {
        tsType = `${itemType}[]`
      } else {
        tsType = `${itemType}[]`
      }
    } else if (prop.$ref) {
      tsType = prop.$ref
    } else if (prop.enum && prop.enum.length > 0) {
      tsType = prop.enum.map((e) => `'${e}'`).join(' | ')
    } else {
      switch (prop.type.toLowerCase()) {
        case 'string':
          tsType = 'string'
          break
        case 'integer':
        case 'int32':
        case 'int64':
          tsType = 'number'
          break
        case 'number':
          tsType = 'number'
          break
        case 'boolean':
          tsType = 'boolean'
          break
        default:
          tsType = 'any'
      }
    }

    const required = schema.required.includes(prop.name) ? '' : '?'
    const comment = prop.title || prop.description || ''
    if (comment) {
      lines.push(`  /** ${comment} */`)
    }
    lines.push(`  ${prop.name}${required}: ${tsType};`)
  }

  lines.push('}')
  lines.push('')

  return lines.join('\n')
}

/**
 * 生成 index.vue - 列表页
 */
export function generateIndex(
  path: string,
  schema: ParsedSchema,
  selectedFields: string[]
): string {
  const tableName = schema.name.replace('Dto', '')
  const apiName = tableName.toLowerCase()

  // 过滤选中的字段
  const fields = schema.properties.filter((p) => selectedFields.includes(p.name))

  // 生成表格列
  const tableColumns = fields
    .map((prop) => {
      const label = prop.title || prop.name
      const propName = prop.name
      return `      { label: '${label}', prop: '${propName}' }`
    })
    .join(',\n')

  // 生成搜索表单字段
  const searchFields = fields
    .filter((p) => p.type === 'string')
    .slice(0, 3)
    .map((prop) => {
      const label = prop.title || prop.name
      return `        <el-form-item label="${label}">
          <el-input v-model="searchForm.${prop.name}" placeholder="请输入${label}" />
        </el-form-item>`
    })
    .join('\n')

  return `<template>
  <div class="${apiName}-list">
    <!-- 搜索区域 -->
    <el-card class="search-card" shadow="never">
      <el-form :model="searchForm" inline>
${searchFields}
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 操作栏 -->
    <div class="toolbar">
      <el-button type="primary" @click="handleCreate">新增</el-button>
      <el-button type="danger" :disabled="!selectedRows.length" @click="handleBatchDelete">
        批量删除
      </el-button>
    </div>

    <!-- 表格 -->
    <el-table v-loading="loading" :data="tableData" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
${tableColumns}
      <el-table-column label="操作" width="180" fixed="right">
        <template #default="{ row }">
          <el-button type="primary" link @click="handleView(row)">查看</el-button>
          <el-button type="primary" link @click="handleEdit(row)">编辑</el-button>
          <el-button type="danger" link @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-model:current-page="pagination.pageIndex"
      v-model:page-size="pagination.pageSize"
      :total="pagination.total"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleQuery"
      @current-change="handleQuery"
    />

    <!-- 详情/编辑弹窗 -->
    <${tableName}Detail
      v-model="detailVisible"
      :row="currentRow"
      :mode="detailMode"
      @refresh="handleQuery"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { ${schema.name} } from './types'
import { ${apiName}Api } from './api'

// 搜索表单
const searchForm = reactive({
${fields
  .slice(0, 3)
  .map((p) => `  ${p.name}: ''`)
  .join(',\n')}
})

// 表格数据
const loading = ref(false)
const tableData = ref<${schema.name}[]>([])
const selectedRows = ref<${schema.name}[]>([])
const currentRow = ref<${schema.name} | null>(null)

// 分页
const pagination = reactive({
  pageIndex: 1,
  pageSize: 20,
  total: 0,
})

// 详情弹窗
const detailVisible = ref(false)
const detailMode = ref<'view' | 'edit' | 'create'>('view')

// 加载数据
async function loadData() {
  loading.value = true
  try {
    const res = await ${apiName}Api.list({
      pageIndex: pagination.pageIndex,
      pageSize: pagination.pageSize,
      ...searchForm,
    })
    tableData.value = res.data || []
    pagination.total = res.meta?.paging?.itemCount || 0
  } catch (error) {
    ElMessage.error('加载失败')
  } finally {
    loading.value = false
  }
}

function handleQuery() {
  pagination.pageIndex = 1
  loadData()
}

function handleSearch() {
  handleQuery()
}

function handleReset() {
  Object.keys(searchForm).forEach((key) => {
    searchForm[key as keyof typeof searchForm] = ''
  })
  handleQuery()
}

function handleSelectionChange(rows: ${schema.name}[]) {
  selectedRows.value = rows
}

function handleCreate() {
  currentRow.value = null
  detailMode.value = 'create'
  detailVisible.value = true
}

function handleView(row: ${schema.name}) {
  currentRow.value = { ...row }
  detailMode.value = 'view'
  detailVisible.value = true
}

function handleEdit(row: ${schema.name}) {
  currentRow.value = { ...row }
  detailMode.value = 'edit'
  detailVisible.value = true
}

async function handleDelete(row: ${schema.name}) {
  try {
    await ElMessageBox.confirm('确认删除该数据?', '提示', { type: 'warning' })
    await ${apiName}Api.delete([row.id!])
    ElMessage.success('删除成功')
    loadData()
  } catch (error) {
    // 用户取消或删除失败
  }
}

async function handleBatchDelete() {
  try {
    await ElMessageBox.confirm(\`确认删除选中的 \${selectedRows.value.length} 条数据?\`, '提示', { type: 'warning' })
    const ids = selectedRows.value.map((row) => row.id!)
    await ${apiName}Api.delete(ids)
    ElMessage.success('删除成功')
    loadData()
  } catch (error) {
    // 用户取消或删除失败
  }
}

onMounted(() => {
  loadData()
})
</script>

<style scoped>
.${apiName}-list {
  padding: 16px;
}

.search-card {
  margin-bottom: 16px;
}

.toolbar {
  margin-bottom: 16px;
}
</style>
`
}

/**
 * 生成 detail.vue - 详情/编辑页
 */
export function generateDetail(
  path: string,
  schema: ParsedSchema,
  selectedFields: string[]
): string {
  const tableName = schema.name.replace('Dto', '')

  // 过滤选中的字段
  const fields = schema.properties.filter((p) => selectedFields.includes(p.name))

  // 生成了表单项
  const formItems = fields
    .map((prop) => {
      const label = prop.title || prop.name
      const vModel = `form.${prop.name}`
      const component = getFormComponent(prop)

      // 处理只读字段
      const isReadonly = prop.name === 'id' || prop.name === 'createdAt'

      if (component === 'el-select') {
        // 枚举类型或引用类型
        if (prop.enum && prop.enum.length > 0) {
          return `        <el-form-item label="${label}" prop="${prop.name}">
          <el-select v-model="${vModel}" placeholder="请选择${label}"${isReadonly ? ' disabled' : ''}>
            ${prop.enum.map((e) => `<el-option label="${e}" value="${e}" />`).join('\n            ')}
          </el-select>
        </el-form-item>`
        } else if (prop.$ref === 'LookupDto') {
          return `        <el-form-item label="${label}" prop="${prop.name}">
          <el-select v-model="${vModel}" placeholder="请选择${label}"${isReadonly ? ' disabled' : ''}>
            <el-option label="选项1" value="1" />
          </el-select>
        </el-form-item>`
        }
      }

      if (component === 'el-switch') {
        return `        <el-form-item label="${label}" prop="${prop.name}">
          <el-switch v-model="${vModel}"${isReadonly ? ' disabled' : ''} />
        </el-form-item>`
      }

      if (component === 'el-date-picker') {
        return `        <el-form-item label="${label}" prop="${prop.name}">
          <el-date-picker v-model="${vModel}" type="datetime" placeholder="选择${label}"${isReadonly ? ' disabled' : ''} />
        </el-form-item>`
      }

      if (component === 'el-input-number') {
        return `        <el-form-item label="${label}" prop="${prop.name}">
          <el-input-number v-model="${vModel}" :min="0"${isReadonly ? ' disabled' : ''} />
        </el-form-item>`
      }

      // 默认 el-input
      return `        <el-form-item label="${label}" prop="${prop.name}">
          <el-input v-model="${vModel}" placeholder="请输入${label}"${isReadonly ? ' disabled' : ''} />
        </el-form-item>`
    })
    .join('\n')

  return `<template>
  <el-dialog
    v-model="visible"
    :title="dialogTitle"
    width="600px"
    @close="handleClose"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="100px"
    >
${formItems}
    </el-form>

    <template #footer>
      <el-button @click="handleClose">取消</el-button>
      <el-button v-if="mode !== 'view'" type="primary" :loading="saving" @click="handleSubmit">
        确定
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import type { ${schema.name} } from './types'
import { ${tableName.toLowerCase()}Api } from '../api'

interface Props {
  modelValue: boolean
  row?: ${schema.name} | null
  mode?: 'view' | 'edit' | 'create'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  row: null,
  mode: 'view',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  refresh: []
}>()

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const formRef = ref<FormInstance>()
const saving = ref(false)

const defaultForm: ${schema.name} = {
${fields.map((p) => `  ${p.name}: ${p.type === 'string' ? "''" : p.type === 'boolean' ? 'false' : 'undefined'}`).join(',\n')}
}

const form = ref<${schema.name}>({ ...defaultForm })

// 表单校验规则
const rules: FormRules = {
${fields
  .filter((p) => p.required || [])
  .map(
    (p) =>
      `  ${p.name}: [{ required: true, message: '请输入${p.title || p.name}', trigger: 'blur' }]`
  )
  .join(',\n')}
}

const dialogTitle = computed(() => {
  switch (props.mode) {
    case 'create':
      return '新增'
    case 'edit':
      return '编辑'
    default:
      return '详情'
  }
})

// 监听弹窗打开，初始化表单
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      if (props.row) {
        form.value = { ...props.row }
      } else {
        form.value = { ...defaultForm }
      }
    }
  }
)

async function handleSubmit() {
  if (!formRef.value) return

  await formRef.value.validate()

  saving.value = true
  try {
    if (props.mode === 'create') {
      await ${tableName.toLowerCase()}Api.create(form.value)
      ElMessage.success('创建成功')
    } else {
      await ${tableName.toLowerCase()}Api.update(form.value)
      ElMessage.success('更新成功')
    }
    visible.value = false
    emit('refresh')
  } catch (error) {
    ElMessage.error(props.mode === 'create' ? '创建失败' : '更新失败')
  } finally {
    saving.value = false
  }
}

function handleClose() {
  visible.value = false
  formRef.value?.resetFields()
}
</script>
`
}