<script setup lang="ts">
import INTEGRATING_LIQUIDITY_IMAGE from '@/assets/images/integrating-liquidity.png'
import ENHANCING_LIQUIDITY_IMAGE from '@/assets/images/enhancing-liquidity.png'

const list = [
  {
    img: ENHANCING_LIQUIDITY_IMAGE,
    title: 'ENHANCING LIQUIDITY WITH SEAMLESS ASEET ABSTRACTION ACROSS ALL NETWORKS.',
    description: 'UNIFYING LIQUIDITY FROM OVER 30 BLOCKCHAINS, CENTRALIZED EXCHANGES, AND TRADITIONAL FINANCE, oooo ENABLES SEAMLESS BRIDGING, SWAPPING, AND ASSET MANAGEMENT ACROSS NETWORKS. \n\n oooo OFFERS A UNIFIED EXPERIENCE THROUGH ITS OMNI-PLATFORM, ENSURING SMOOTH, SECURE, AND ACCESSIBLE INTERACTIONS THAT ENHANCE ENGAGEMENT FOR BOTH USERS AND DEVELOPERS.'
  }, {
    img: INTEGRATING_LIQUIDITY_IMAGE,
    title: 'INTEGRATING LIQUIDITY AND USERS ACROSS BLOCKCHAINS AND CENTRALIZED FINACE',
    description: 'oooo BOOSTS LIQUIDITY BY ABSTRACTING ASSETS ACROSS NETWORKS, ENABLING INSTANT, INTENT-CENTRIC TRANSACTIONS WITHOUT THE NEED FOR BRIDGING, GAS, OR OTHER SLOWDOWNS. \n\n THIS SIMPLIFIES ACCESS TO UNIFIED LIQUIDITY POOLS, ALLOWING USERS AND DEVELOPERS TO EFFICIENTLY FULFILL THEIR INTENTS AND UNLOCK NEW OPPORTUNITIES IN DEFI, NFTS, AND BEYOND.'
  }
]
</script>

<template>
  <div class="mt-[63px] md:mt-[105px]">
    <h3 class="text-[28px] md:text-[48px] font-[500] text-center">
      WHAT IS oooo
    </h3>
    <p class="mt-[20px] text-[14px] md:text-[22px] font-[300] text-center">
      THE FIRST MODULAR OMNICHAIN PROTOCOL, UNITING NETWORKS AND ABSTRACTING ASSETS TO ENHANCE LIQUIDITY SCALABILITY AND OPERATIONAL EFFICIENCY.
    </p>
    <div class="mt-[30px] md:mt-[60px] flex flex-col md:flex-row gap-[60px]">
      <div
        class="what-is-oooo-card p-[40px] flex flex-col xl:flex-row gap-[40px] items-center w-full border border-[#464646]"
        v-for="(item, index) of list"
        :key="index"
        :data-description="item.description"
      >
        <p class="font-[500] text-[#bce4cd]">
          {{ item.title }}
        </p>
        <div class="shrink-0 w-full xl:w-[38.5%] aspect-[4/3]">
          <img
            class="w-full h-full"
            :src="item.img"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.what-is-oooo-card {
  @apply relative overflow-hidden;

  &::before {
    content: attr(data-description);
    @apply absolute top-0 left-0 flex items-center p-[40px] w-full h-full bg-[#a6bcaf] text-[14px] font-[500] text-[#000] whitespace-pre-line transition-all;
    transform: translateY(100%);
  }

  &:hover::before {
    transform: translateY(0%);
  }
}
</style>
