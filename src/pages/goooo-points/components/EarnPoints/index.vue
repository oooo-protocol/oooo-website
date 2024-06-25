<script setup lang="ts">
// import copy from 'copy-text-to-clipboard'
// import Icon from 'oooo-components/ui/Icon.vue'
// import { useToast } from 'oooo-components/ui/toast'

// import MoreSoon from './MoreSoon.vue'

import Airdrop from './Airdrop/index.vue'

import TaskCard from './TaskCard.vue'

// import RootStockBridgeTask from './Tasks/RootstockBridgeTask.vue'
import B2BridgeTask from './Tasks/B2BridgeTask.vue'
import BinanceMerlinBridgeTask from './Tasks/BinanceMerlinBridgeTask.vue'
import TokenPocketBridgeTask from './Tasks/TokenPocketBridgeTask.vue'

// import TwitterTaskItem from './TwitterTaskItem.vue'
// import DiscordTaskItem from './DiscordTaskItem.vue'

// import FOLLOW_TO_EARN_IMAGE from '@/assets/images/goooo-points/follow.png'
// import INVITE_TO_EARN_IMAGE from '@/assets/images/goooo-points/invite.png'
import BRIDGE_TO_EARN_IMAGE from '@/assets/images/goooo-points/bridge.png'

// import BEVM_IMAGE from '@/assets/images/goooo-points/bevm.png'

// import { useWallet } from '@/composables/hooks/use-wallet'
// import { useSignature } from '../../hooks/use-signature'
// import { useQuery } from '@tanstack/vue-query'
// import { retrieveAccountInfo } from '@/request/api/task'
// import { ENV_VARIABLE } from '@/lib/constants'

// const { toast } = useToast()
// const { wallet } = useWallet()
// const { signature, signContent } = useSignature()

// const enabled = computed(() => wallet.value !== undefined && signature.value !== undefined)
// const { data: account } = useQuery({
//   queryKey: ['/point/account', wallet.value],
//   queryFn: async () => await retrieveAccountInfo({
//     walletAddress: wallet.value!.address,
//     signature: signature.value!,
//     signContent: signContent.value
//   }),
//   enabled
// })
// const pointInviteUrl = computed(() => account.value ? `${window.location.origin}/goooo-points?inviteCode=${account.value.inviteCode}` : undefined)
// const birdgeInviteUrl = computed(() => account.value ? `${ENV_VARIABLE.VITE_BRIDGE_DOMAIN}?inviteCode=${account.value.inviteCode}` : undefined)

// const onCopy = (text: string) => {
//   const success = copy(text)
//   if (success) {
//     toast({
//       description: '💌 Copied to clipboard! Send to friends to earn Goooo'
//     })
//   }
// }
</script>

<template>
  <div class="space-y-[8px] md:space-y-[20px]">
    <h3 class="text-[32px] font-[600] tracking-[1.6px]">
      EARN POINTS
    </h3>
    <!-- <MoreSoon /> -->
    <!-- <TaskCard
      title="FOLLOW TO EARN"
      :img="FOLLOW_TO_EARN_IMAGE"
    >
      <TwitterTaskItem />
      <DiscordTaskItem />
    </TaskCard>
    <TaskCard
      title="INVITE TO EARN"
      :img="INVITE_TO_EARN_IMAGE"
    >
      <TaskItem
        title="INVITE FRIENDS TO EARN MORE POINTS"
        description="THEY NEED TO COMPLETE TASKS FOR 𝕏 AND DISCORD, BOTH OF YOU WILL RECEIVE AN ADDITIONAL 10 POINTS."
        points="10"
        icon="giftbox"
      >
        <Button
          variant="ghost"
          size="icon"
          as="a"
          href=""
        >
          <Icon
            class="text-[22px]"
            name="twitter"
          />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          as="a"
          href=""
        >
          <Icon
            class="text-[22px]"
            name="telegram"
          />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          :disabled="!pointInviteUrl"
          @click="onCopy(pointInviteUrl!)"
        >
          COPY URL
        </Button>
      </TaskItem>
      <TaskItem
        title="INVITE FRIENDS TO COMPLETED MAINNET BRIDGE TRANSACTION."
        description="EARN POINTS BASED ON TRANSACTION AMOUNT."
        icon="bbitcoin"
      >
        <Button
          variant="ghost"
          size="icon"
          as="a"
          href=""
        >
          <Icon
            class="text-[22px]"
            name="twitter"
          />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          as="a"
          href=""
        >
          <Icon
            class="text-[22px]"
            name="telegram"
          />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          :disabled="!birdgeInviteUrl"
          @click="onCopy(birdgeInviteUrl!)"
        >
          COPY URL
        </Button>
      </TaskItem>
    </TaskCard> -->
    <Airdrop />
    <TaskCard
      title="BRIDGE TO EARN"
      :img="BRIDGE_TO_EARN_IMAGE"
    >
      <TokenPocketBridgeTask />
      <B2BridgeTask />
      <!-- <RootStockBridgeTask /> -->
      <!-- <TaskItem
        title="BRIDGE $BTC FROM BINANCE TO BEVM."
        description="BRIDGE $BTC FROM BINANCE TO BEVM AND RECEIVE 4 Goooo AS A REWARD FOR EACH TRANSACTION COMPLETED."
        :image="BEVM_IMAGE"
      >
        <Button
          class="w-full md:w-[174px]"
          size="sm"
          as="a"
          href="https://bridge.oooo.money/?from=binance&to=bevm"
          target="_blank"
        >
          GO TO BRIDGE
        </Button>
      </TaskItem> -->
      <BinanceMerlinBridgeTask />
    </TaskCard>
  </div>
</template>

<style lang="scss" scoped>

</style>
