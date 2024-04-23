<script setup lang="ts">
import { Button } from 'oooo-components/ui/button'
import { createFunctionCall } from '@/components/function-call'
import WalletConnectModal from '@/components/wallet-connect/WalletConnectModal.vue'

const onConnect = async () => {
  createFunctionCall(WalletConnectModal)
}
</script>

<template>
  <Button
    class="w-[196px] tracking-[1px] text-[#bce4cd] select-none"
    variant="outline"
    @click="onConnect"
  >
    CONNECT WALLET
  </Button>
</template>
