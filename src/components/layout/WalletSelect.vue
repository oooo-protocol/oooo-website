<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'oooo-components/ui/dropdown-menu'
import { Button } from 'oooo-components/ui/button'
import { formatHashWithEllipsis } from 'oooo-components/lib/utils'
import { WALLET_CONFIG_MAP, useEVMWallet } from 'oooo-components/oooo-wallet'
import WalletConnectButton from '../WalletConnectButton.vue'

const { name, address, onLogout } = useEVMWallet()
const config = computed(() => name.value != null ? WALLET_CONFIG_MAP[name.value] : undefined)

const onClickLogout = () => {
  void onLogout()
}
</script>

<template>
  <WalletConnectButton v-if="!config" />
  <DropdownMenu v-else>
    <DropdownMenuTrigger as-child>
      <Button
        class="w-[196px] tracking-[1px] text-[#bce4cd] select-none"
        variant="outline"
      >
        <div
          class="flex items-center gap-[8px]"
        >
          <img
            class="w-[24px] h-[24px]"
            :src="config.image"
          >
          <p>{{ formatHashWithEllipsis(address!) }}</p>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="px-0 py-[12px] border-none min-w-[var(--radix-popper-anchor-width)]">
      <DropdownMenuItem @click="onClickLogout">
        DISCONNECT
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style lang="scss" scoped>

</style>
