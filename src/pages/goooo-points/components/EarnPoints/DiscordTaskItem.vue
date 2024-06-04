<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { isFollowedDiscord, getDiscordAuthorizationUrl } from '@/request/api/task'
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

watch(() => [address.value, signature.value], ([wallet, signature]) => {
  if (disabled.value) return
  void check()
})

const { isPending: isChecking, data: succeed, mutateAsync: check } = useMutation({
  mutationFn: async () => {
    if (address.value == null || signature.value == null) {
      throw new Error('WALLET OR SIGNATURE IS NOT AVAILABLE, PLEASE RE-CONNECT WALLET')
    }
    return await isFollowedDiscord({
      walletAddress: address.value,
      signature: signature.value,
      signContent: signContent.value
    })
  },
  onError: (e) => {
    toast({ description: e.message })
  }
})

const { isPending: loading, mutate } = useMutation({
  mutationFn: async () => {
    if (address.value == null || signature.value == null) {
      throw new Error('WALLET OR SIGNATURE IS NOT AVAILABLE, PLEASE RE-CONNECT WALLET')
    }
    const url = await getDiscordAuthorizationUrl({
      walletAddress: address.value,
      signature: signature.value,
      signContent: signContent.value
    })
    const succeed = await invokeAuthorizationLink(url)
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
    points="10"
    icon="discord1"
    :succeed="succeed"
  >
    <template #title>
      <p>
        FOLLOW
        <a
          class="underline"
          href="https://discord.gg/ooooprotocol"
        >
          @oooo ON DISCORD
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
      JOIN
    </Button>
  </TaskItem>
  <Dialog v-model:open="isOpenFollowDialog">
    <DialogContent>
      <template #header>
        <DialogHeader>
          <DialogTitle>
            JOIN @oooo ON DISCORD AND VERIFIED
          </DialogTitle>
        </DialogHeader>
      </template>
      <div class="space-y-[16px]">
        <TaskItem description="COMPLETE DISCORD FOLLOW, READ RULES AND COMPLETE VERIFICATION.">
          <template #title>
            <p class="text-[#abeec4]">
              STEP 1
            </p>
          </template>
          <Button
            class="w-[90px]"
            size="sm"
            as="a"
            href="https://discord.gg/ooooprotocol"
            target="_blank"
          >
            JOIN
          </Button>
        </TaskItem>
        <TaskItem description="AUTHORIZE DISCORD TO ACCESS YOUR FOLLOW STATUS. ONLY REPLY THE TRANSLATED RESULT AND NOTHING ELSE.">
          <template #title>
            <p class="text-[#abeec4]">
              STEP 2
            </p>
          </template>
          <Button
            class="w-[90px]"
            size="sm"
            :loading="loading"
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
          NO FOLLOW FOUND FOR DISCORD, TRY AGAIN.
        </p>
        <p class="mt-[30px] text-[#abeec4]">
          1. COMPLETE DISCORD FOLLOW, READ RULES AND COMPLETE VERIFICATION.
        </p>
        <p class="mt-[10px] text-[#abeec4]">
          2. CONFIRM DISCORD ACCOUNT HAS BEEN AUTHORIZED.
        </p>
        <p class="mt-[10px] text-[#abeec4]">
          3. THE DISCORD ACCOUNT HAS NOT BEEN USED BY ANY OTHER ADDRESS.
        </p>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style lang="scss" scoped>

</style>
