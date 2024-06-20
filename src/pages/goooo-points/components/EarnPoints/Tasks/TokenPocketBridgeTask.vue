<script setup lang="ts">
import TOKEN_POCKET_IMAGE from '@/assets/images/goooo-points/tokenpocket.png'

import { Button } from 'oooo-components/ui/button'
import TaskItem from '../TaskItem.vue'
import { WALLET, useEVMWallet } from 'oooo-components/oooo-wallet'
import { useToast } from 'oooo-components/ui/toast'
import { useCreatePointConfetti } from '@/pages/goooo-points/hooks/use-create-point-confetti'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { retrieveTaskStatus, verifyTask } from '@/request/api/task'
import { useSignature } from '@/pages/goooo-points/hooks/use-signature'

const { toast } = useToast()

const { name, address } = useEVMWallet()
const { signature, signContent } = useSignature()

const queryClient = useQueryClient()
const enabled = computed(() => address.value != null && signature.value != null)

const { isPending: isChecking, data: succeed } = useQuery({
  queryKey: ['/activity/task/status', address, signature],
  queryFn: async () => {
    try {
      return await retrieveTaskStatus({
        taskId: '6',
        walletAddress: address.value!,
        signature: signature.value!,
        signContent: signContent.value
      })
    } catch (e) {
      toast({ description: (e as Error).message })
      throw e
    }
  },
  enabled
})

const { isPending: verifing, mutate } = useMutation({
  mutationFn: async () => {
    if (address.value == null || signature.value == null || signContent.value == null) {
      throw new Error('Wallet or signature is not available, please re-connect wallet')
    }
    return await verifyTask({
      taskId: '6',
      walletAddress: address.value,
      signature: signature.value,
      signContent: signContent.value
    })
  },
  onSuccess: async () => {
    queryClient.setQueryData(['/activity/task/status', address, signature], true)
    createPointConfetti('GET 8 Goooo', 'VERIFIED SUCCESSFULLY')
    await queryClient.invalidateQueries({ queryKey: ['/point/account', address.value] })
  },
  onError: (e) => {
    toast({ description: e.message })
  }
})
const createPointConfetti = useCreatePointConfetti()

const onBridgeClick = () => {
  if (name.value === WALLET.TOKENPOCKET) {
    window.open('https://bridge.oooo.money/?token=BTC&from=merlin&to=bevm', '_blank')
  } else {
    toast({ description: 'Please use TokenPocket Wallet connect to complete this task.' })
  }
}

const onVerifyClick = () => {
  if (name.value !== WALLET.TOKENPOCKET) {
    toast({ description: 'Please use TokenPocket Wallet connect to complete this task.' })
    return
  }
  mutate()
}
</script>

<template>
  <TaskItem
    title="COMPLETE ONE ON-CHAIN BRIDGE BY TOKENPOCKET WALLET"
    description="USE TOKENPOCKET WALLET TO COMPLETE A CROSS-CHAIN TRANSACTION ON ANY CHAIN AND EARN Goooo POINTS."
    :image="TOKEN_POCKET_IMAGE"
    :succeed="succeed"
    points="8"
  >
    <Button
      class="w-full md:w-[174px]"
      size="sm"
      @click="onBridgeClick"
    >
      GO TO BRIDGE
    </Button>
    <Button
      class="w-full md:w-[174px]"
      size="sm"
      variant="outline"
      @click="onVerifyClick"
      :loading="isChecking || verifing"
    >
      Verify
    </Button>
  </TaskItem>
</template>

<style lang="scss" scoped>

</style>
