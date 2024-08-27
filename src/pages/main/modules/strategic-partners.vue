<script setup lang="ts">
import { Marquee } from 'vue-fast-marquee'
import 'vue-fast-marquee/style.css'

import BITLAYER_IMAGE from '@/assets/images/partners/bitlayer.png'
import BEVM_IMAGE from '@/assets/images/partners/bevm.png'
import B2_IMAGE from '@/assets/images/partners/b-2.png'
import ROOTSTOCK_IMAGE from '@/assets/images/partners/rootstock.png'
import MERLIN_IMAGE from '@/assets/images/partners/merlin.png'
import ALIENX_IMAGE from '@/assets/images/partners/alienx.png'
import BNB_IMAGE from '@/assets/images/partners/bnb-chain.png'
import SCROLL_IMAGE from '@/assets/images/partners/scroll.png'
import ZKLINK_IMAGE from '@/assets/images/partners/zklink.png'
import TOKENPOCKET_IMAGE from '@/assets/images/partners/tp-wallet.png'
import BITGET_IMAGE from '@/assets/images/partners/bitgit.png'
import ONEKEY_IMAGE from '@/assets/images/partners/onekey.png'
import SATOSHI_IMAGE from '@/assets/images/partners/satoshi.png'
import BOB_IMAGE from '@/assets/images/partners/bob.png'
import ROOCH_IMAGE from '@/assets/images/partners/rooch.png'
import BEVMSWAP_IMAGE from '@/assets/images/partners/bevmswap.png'
import LAYEREAGE_IMAGE from '@/assets/images/partners/layereage.png'
import MACARON_IMAGE from '@/assets/images/partners/macaron.png'
import PARTICLE_IMAGE from '@/assets/images/partners/particle.png'
import BIDO_IMAGE from '@/assets/images/partners/bido.png'
import ZULU_IMAGE from '@/assets/images/partners/zulu.png'
import LUMOZ_IMAGE from '@/assets/images/partners/lumoz.png'
import AILAYER_IMAGE from '@/assets/images/partners/ailayer.png'
import AGENTLAYER_IMAGE from '@/assets/images/partners/agentlayer.png'
import BIHELIX_IMAGE from '@/assets/images/partners/bihelix.png'
import UXLINK_IMAGE from '@/assets/images/partners/uxlink.png'

const marquee = [
  [
    BITLAYER_IMAGE,
    BEVM_IMAGE,
    B2_IMAGE,
    ROOTSTOCK_IMAGE,
    MERLIN_IMAGE,
    ALIENX_IMAGE,
    BNB_IMAGE,
    SCROLL_IMAGE,
    ZKLINK_IMAGE
  ], [
    TOKENPOCKET_IMAGE,
    BITGET_IMAGE,
    ONEKEY_IMAGE,
    SATOSHI_IMAGE,
    BOB_IMAGE,
    ROOCH_IMAGE,
    BEVMSWAP_IMAGE,
    LAYEREAGE_IMAGE
  ], [
    MACARON_IMAGE,
    PARTICLE_IMAGE,
    BIDO_IMAGE,
    ZULU_IMAGE,
    LUMOZ_IMAGE,
    AILAYER_IMAGE,
    AGENTLAYER_IMAGE,
    BIHELIX_IMAGE,
    UXLINK_IMAGE
  ]
]
</script>

<template>
  <div class="mt-[80px] md:mt-[40px] mb-[120px]">
    <h3 class="text-[28px] md:text-[48px] font-[500] text-center leading-[1]">
      STRATEGIC PARTNERS
    </h3>
    <div class="strategic-partners-marquee mt-[60px] md:mt-[120px] flex flex-col gap-[40px] md:gap-[80px]">
      <Marquee
        v-for="(item, index) of marquee"
        :key="index"
        :direction="index % 2 ? 'left' : 'right'"
      >
        <img
          class="mx-[20px] md:mx-[40px] h-[32px] md:h-[48px]"
          v-for="img in item"
          :key="img"
          :src="img"
        >
      </Marquee>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.strategic-partners-marquee {
  @apply relative -mx-[24px] md:mx-0;

  &::before, &::after {
    content: '';
    @apply z-[99] absolute top-0 w-[70px] md:w-[400px] h-full bg-gradient-to-r;
  }

  &::before {
    @apply left-0 from-[#000] to-[#000]/0;
  }

  &::after {
    @apply right-0  from-[#000]/0 to-[#000];
  }
}
</style>
