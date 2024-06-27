<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { isFollowedTwitter, getTwitterAuthorizationUrl } from '@/request/api/task'
import Icon from 'oooo-components/ui/Icon.vue'
import { Button } from 'oooo-components/ui/button'
import TaskItem from './TaskItem.vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'oooo-components/ui/dialog'
import { useToast } from 'oooo-components/ui/toast'
import { invokeAuthorizationLink } from '@/lib/utils'
import { useSignature } from '../../hooks/use-signature'
import { useCreatePointConfetti } from '../../hooks/use-create-point-confetti'
import { useEVMWallet } from 'oooo-components/oooo-wallet'

defineOptions({ name: 'TwitterTaskItem' })

const { toast } = useToast()

const isOpenFollowDialog = ref(false)
const isOpenErrorDialog = ref(false)

const { address } = useEVMWallet()
const { signature, signContent } = useSignature()
const createPointConfetti = useCreatePointConfetti()

const disabled = computed(() => address.value == null || signature.value == null)

watch(() => [address.value, signature.value], ([address, signature]) => {
  if (disabled.value) return
  void check()
})

const { isPending: isChecking, data: succeed, mutateAsync: check } = useMutation({
  mutationFn: async () => {
    if (address.value == null || signature.value == null) {
      throw new Error('Wallet or signature is not available, please re-connect wallet')
    }
    return await isFollowedTwitter({
      walletAddress: address.value,
      signature: signature.value,
      signContent: signContent.value
    })
  },
  onError: (e) => {
    toast({ description: e.message })
  }
})

const { mutate } = useMutation({
  mutationFn: async () => {
    if (address.value == null || signature.value == null) {
      throw new Error('Wallet or signature is not available, please re-connect wallet')
    }
    const url = await getTwitterAuthorizationUrl({
      walletAddress: address.value,
      signature: signature.value,
      signContent: signContent.value
    })
    const succeed = await invokeAuthorizationLink(url, false)
    if (succeed) {
      isOpenFollowDialog.value = false
      const succeed = await check()
      if (succeed) {
        createPointConfetti('GET 10 POINTS')
      }
    } else {
      isOpenErrorDialog.value = true
    }
  },
  onError: (e) => {
    toast({ description: e.message })
  }
})
</script>

<template>
  <TaskItem
    hint="+10 Goooo"
    icon="twitter2"
    :succeed="succeed"
  >
    <template #title>
      <p>
        FOLLOW
        <a
          class="underline"
          href="https://twitter.com/intent/follow?screen_name=oooo_money"
        >
          @oooo ON TWITTER
        </a>
      </p>
    </template>
    <Button
      variant="ghost"
      size="icon"
      @click="check"
      :disabled="isChecking || disabled"
    >
      <Icon
        :class="{
          'animate-spin-reverse': isChecking
        }"
        name="refresh"
      />
    </Button>
    <Button
      class="w-[90px]"
      size="sm"
      :disabled="disabled"
      @click="isOpenFollowDialog = !isOpenFollowDialog"
    >
      FOLLOW
    </Button>
  </TaskItem>
  <Dialog v-model:open="isOpenFollowDialog">
    <DialogContent>
      <template #header>
        <DialogHeader>
          <DialogTitle>
            FOLLOW @oooo ON X AND VERIFIED
          </DialogTitle>
        </DialogHeader>
      </template>
      <div class="space-y-[16px]">
        <TaskItem description="FOLLOW @oooo ON X">
          <template #title>
            <p class="text-[#abeec4]">
              STEP 1
            </p>
          </template>
          <Button
            class="w-[90px]"
            size="sm"
            as="a"
            href="https://twitter.com/intent/follow?screen_name=oooo_money"
            target="_blank"
          >
            FOLLOW
          </Button>
        </TaskItem>
        <TaskItem description="AUTHORIZE X TO ACCESS YOUR FOLLOW STATUS">
          <template #title>
            <p class="text-[#abeec4]">
              STEP 2
            </p>
          </template>
          <Button
            class="w-[90px]"
            size="sm"
            @click="mutate"
          >
            AUTH
          </Button>
        </TaskItem>
      </div>
    </DialogContent>
  </Dialog>
  <Dialog v-model:open="isOpenErrorDialog">
    <DialogContent>
      <template #header>
        <DialogHeader>
          <DialogTitle>
            _ OOPS
          </DialogTitle>
        </DialogHeader>
      </template>
      <div class="font-light tracking-[0.8px]">
        <p>
          NO FOLLOW FOUND FOR X, PLEASE TRY AGAIN.
        </p>
        <p class="mt-[30px] text-[#abeec4]">
          1. CONFIRM THAT X HAS BEEN AUTHORIZED.
        </p>
        <p class="mt-[10px] text-[#abeec4]">
          2. THE X ACCOUNT HAS NOT BEEN USED BY ANY OTHER ADDRESS.
        </p>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style lang="scss" scoped>

</style>
