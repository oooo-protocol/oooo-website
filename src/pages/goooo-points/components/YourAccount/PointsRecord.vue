<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'oooo-components/ui/dialog'
import DataTable from 'oooo-components/ui/DataTable.vue'
import PaginationPro from '@/components/PaginationPro.vue'
import { columns } from './columns'
import { useQuery, keepPreviousData } from '@tanstack/vue-query'
import { retrieveAccountPointLogs } from '@/request/api/task'
import { useWallet } from '@/composables/hooks/use-wallet'
import { useSignature } from '../../hooks/use-signature'

const open = defineModel<boolean>()

const pageNumber = ref(1)

const { wallet } = useWallet()
const { signature, signContent } = useSignature()

const enabled = computed(() => wallet.value !== undefined && signature.value !== undefined)
const { isPending, data } = useQuery({
  queryKey: ['/point/account/log', pageNumber],
  queryFn: async () => {
    const { list, totalCount } = await retrieveAccountPointLogs({
      walletAddress: wallet.value!.address,
      signature: signature.value!,
      signContent: signContent.value,
      pagesize: 10,
      page: pageNumber.value
    })
    return {
      list,
      total: totalCount
    }
  },
  placeholderData: keepPreviousData,
  enabled
})

// temp to fix Pagination component error
// reference: https://github.com/radix-vue/radix-vue/pull/857
const total = computed(() => Math.max(data.value?.total ?? 0, 1))
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent>
      <template #header>
        <DialogHeader>
          <DialogTitle>
            _ POINTS RECORD
          </DialogTitle>
        </DialogHeader>
      </template>
      <template #content>
        <div class="flex flex-col pb-[24px] overflow-hidden">
          <DataTable
            class="xl:mt-[8px] overflow-auto"
            :columns="columns"
            :data="data?.list ?? []"
          />
          <PaginationPro
            v-model:page="pageNumber"
            class="mt-[20px] md:mt-[40px]"
            :total="total"
            :disabled="isPending"
            show-edges
          />
        </div>
      </template>
    </DialogContent>
  </Dialog>
</template>

<style lang="scss" scoped>

</style>
