<script setup lang="tsx">
import { definePage } from 'vue-router/auto'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/composables'
import { useRequest, useUnitGlue } from '@/composables'
import XTableRequestConfig from '@/components/advance/XTableRequestConfig.vue'
import XButton from '@/components/misc/XButton.vue'
import XButtonAsync from '@/components/misc/XButtonAsync.vue'
import PageHeader from '@/components/misc/PageHeader.vue'
import { EnocbootconfigSupplierTableRequestConfig } from '@/business/supplier'

definePage({ meta: { title: '供应商模块' } })

const router = useRouter()
const user = useUserStore()
const { table, enable, discard } = useUnitGlue<components['schemas']['SupplierDto']>()

const EnocbootconfigSupplierHeader = () => (
  <PageHeader>
    {{
      operation: () => (
        <>
          {user.hasAccessRight('BAS^SUPPLIER_CREATE') && (
            <XButton
              type="primary"
              onClick={() =>
                router.push(`/common/supplier/${Symbol.CREATE}`, () =>
                  table.value?.search()
                )
              }
            >
              创建
            </XButton>
          )}
          <XButtonAsync action={() => table.value?.search()}>刷新</XButtonAsync>
        </>
      )
    }}
  </PageHeader>
)

const EnocbootconfigSupplierTableRequest = () => (
  <XTableRequestConfig
    type="SUPFD"
    ref={table}
    request={() => useRequest('/enocbootconfig/supplier', 'get', { query: {} })}
    config={{
      ...EnocbootconfigSupplierTableRequestConfig,
      OPERATION: {
        content: ({ row }) => (
          <>
            {row.status?.code === 'D' && user.hasAccessRight('BAS^SUPPLIER_ENABLE') && (
              <XButtonAsync
                link
                action={() =>
                  enable(() =>
                    useRequest('/enocbootconfig/supplier/enable/{supplierId}', 'put', {
                      path: { supplierId: row.id! }
                    })
                  )
                }
              >
                启用
              </XButtonAsync>
            )}
            {row.status?.code === 'A' && user.hasAccessRight('BAS^SUPPLIER_DISABLE') && (
              <XButtonAsync
                link
                action={() =>
                  discard(() =>
                    useRequest('/enocbootconfig/supplier/disable/{supplierId}', 'put', {
                      path: { supplierId: row.id! }
                    })
                  )
                }
              >
                禁用
              </XButtonAsync>
            )}
            {user.hasAccessRight('BAS^SUPPLIER_MODIFY') && (
              <XButton
                link
                onClick={() => router.push(`/common/supplier/${row.id}`)}
              >
                编辑
              </XButton>
            )}
            {user.hasAccessRight('BAS^SUPPLIER_DELETE') && (
              <XButtonAsync
                link
                action={() => discard(() => useRequest(`/enocbootconfig/supplier/${row.id}`, 'delete'))}
              >
                删除
              </XButtonAsync>
            )}
          </>
        )
      }
    }}
  />
)
</script>

<template>
  <div>
    <EnocbootconfigSupplierHeader />
    <EnocbootconfigSupplierTableRequest />
  </div>
</template>
