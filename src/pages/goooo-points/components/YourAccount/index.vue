<script setup lang="ts">
import Icon from 'oooo-components/ui/Icon.vue'
import PointsRecord from './PointsRecord.vue'
import { useWallet } from '@/composables/hooks/use-wallet'
import { formatHashWithEllipsis } from '@/lib/utils'
import { useQuery } from '@tanstack/vue-query'
import { retrieveAccountInfo } from '@/request/api/task'
import { useSignature } from '../../hooks/use-signature'
import WalletConnectButton from '@/components/WalletConnectButton.vue'

defineOptions({ name: 'YourAccount' })

const isOpenPointsRecord = ref(false)
const { wallet } = useWallet()
const { signature, signContent } = useSignature()

const enabled = computed(() => wallet.value !== undefined && signature.value !== undefined)
const { data: account } = useQuery({
  queryKey: ['/point/account', wallet.value],
  queryFn: async () => await retrieveAccountInfo({
    walletAddress: wallet.value!.address,
    signature: signature.value!,
    signContent: signContent.value
  }),
  enabled
})
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-end gap-[24px] pb-[16px] md:pb-[30px] border-b border-[#4e4e4e]">
    <div>
      <h3 class="text-[24px] md:text-[32px] font-[600] tracking-[1.6px]">
        YOUR ACCOUNT
      </h3>
      <div
        class="flex items-center text-[#787878]"
        v-if="wallet"
      >
        <Icon
          class="md:text-[20px]"
          name="wallet"
        />
        <p class="text-[13px] md:text-base ml-[10px] tracking-[0.8px]">
          {{ formatHashWithEllipsis(wallet.address) }}
        </p>
        <div class="mx-[20px] md:mx-[30px] w-[1px] h-[20px] bg-[#787878]" />
        <p
          class="tracking-[0.8px] underline cursor-pointer"
          @click="isOpenPointsRecord = true"
        >
          POINTS RECORD
        </p>
      </div>
      <div
        class="text-[13px] md:text-base text-[#787878] tracking-[0.65px]"
        v-else
      >
        JOIN US NOW, WIN Goooo!
      </div>
    </div>
    <div
      class="md:ml-auto flex md:text-right"
      v-if="wallet"
    >
      <div>
        <p class="text-[14px] tracking-[0.7px]">
          TOTAL POINTS
        </p>
        <p class="text-[26px] font-medium text-[#abeec4]">
          {{ account?.point ?? '-' }}
        </p>
      </div>
      <!-- <div class="ml-[80px]">
        <p class="text-[14px] tracking-[0.7px]">
          YOUR RANK
        </p>
        <p class="text-[26px] font-medium text-[#abeec4]">
          {{ account?.rank ?? '-' }}
        </p>
      </div> -->
    </div>
    <WalletConnectButton
      class="hidden md:block ml-auto"
      v-else
    />
    <PointsRecord v-model="isOpenPointsRecord" />
  </div>
</template>

<style lang="scss" scoped>

</style>
