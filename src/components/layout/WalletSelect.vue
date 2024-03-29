<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { WALLETS, WALLET_MAP } from '@/lib/constants'
import type { WALLET } from '@/lib/constants'
import Icon from '@/components/Icon.vue'
import { useWallet } from '@/composables/hooks/use-wallet'
import { formatHashWithEllipsis } from '@/lib/utils'

const loading = ref(false)
const { wallet, onConnect, onLogout } = useWallet()

const onConnectWallet = async (value: WALLET) => {
  try {
    loading.value = true
    await onConnect(value)
    loading.value = false
  } catch (e) {}
}

const onClickLogout = () => {
  void onLogout()
  location.reload()
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        class="w-[196px] tracking-[1px] text-[#bce4cd] select-none"
        variant="outline"
      >
        <div
          class="flex items-center gap-[8px]"
          v-if="wallet"
        >
          <Icon
            class="text-[24px]"
            :name="WALLET_MAP[wallet.name].icon"
          />
          <p>{{ formatHashWithEllipsis(wallet.address) }}</p>
          <Icon
            class="text-[24px]"
            name="a-arrowdown"
          />
        </div>
        <template v-else>
          CONNECT WALLET
        </template>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="px-0 py-[12px] border-none min-w-[var(--radix-popper-anchor-width)]">
      <!-- Wallet connected -->
      <template v-if="wallet">
        <DropdownMenuItem @click="onClickLogout">
          DISCONNECT
        </DropdownMenuItem>
      </template>
      <!-- Wallet disconnect -->
      <DropdownMenuItem
        v-else
        class="flex items-center gap-[8px]"
        v-for="item of WALLETS"
        :key="item.value"
        @click="onConnectWallet(item.value)"
      >
        <Icon
          class="text-[24px]"
          :name="item.icon"
        />
        {{ item.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
