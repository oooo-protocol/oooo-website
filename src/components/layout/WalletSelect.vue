<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from 'oooo-components/ui/dropdown-menu'
import { Button } from 'oooo-components/ui/button'
import { WALLET_MAP } from '@/lib/constants'
import Icon from 'oooo-components/ui/Icon.vue'
import { useWallet } from '@/composables/hooks/use-wallet'
import { formatHashWithEllipsis } from '@/lib/utils'
import WalletConnectButton from '@/components/WalletConnectButton.vue'

const { wallet, onLogout } = useWallet()

const onClickLogout = () => {
  void onLogout()
}
</script>

<template>
  <DropdownMenu v-if="wallet">
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
            :src="WALLET_MAP[wallet.name].image"
          >
          <p>{{ formatHashWithEllipsis(wallet.address) }}</p>
          <Icon
            class="text-[24px]"
            name="a-arrowdown"
          />
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="px-0 py-[12px] border-none min-w-[var(--radix-popper-anchor-width)]">
      <DropdownMenuItem @click="onClickLogout">
        DISCONNECT
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <WalletConnectButton v-else />
</template>
