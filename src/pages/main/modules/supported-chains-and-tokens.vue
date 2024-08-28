<script setup lang="ts">
import BTC_IMAGE from '@/assets/images/tokens/btc.png'
import BSC_IMAGE from '@/assets/images/chains/bsc.png'
import ETH_IMAGE from '@/assets/images/chains/eth.png'
import LINEA_IMAGE from '@/assets/images/chains/linea.png'
import POLYGON_IMAGE from '@/assets/images/chains/polygon.png'
import XLAYER_IMAGE from '@/assets/images/chains/xlayer.png'
import ARB_IMAGE from '@/assets/images/chains/arb.png'
import BASE_IMAGE from '@/assets/images/chains/base.png'
import ROOTSTOCK_IMAGE from '@/assets/images/chains/rootstock.png'
import B2_IMAGE from '@/assets/images/chains/b2.png'
import ZETACHAIN_IMAGE from '@/assets/images/chains/zetachain.png'
import ALIENX_IMAGE from '@/assets/images/chains/alienx.png'
import BITLAYER_IMAGE from '@/assets/images/chains/bitlayer.png'
import BEVM_IMAGE from '@/assets/images/chains/bevm.png'
import BLAST_IMAGE from '@/assets/images/chains/blast.png'
import BOB_IMAGE from '@/assets/images/chains/bob.png'
import OP_IMAGE from '@/assets/images/chains/op.png'
import BOUNCEBIT_IMAGE from '@/assets/images/chains/bounce-bit.png'
import CORE_IMAGE from '@/assets/images/chains/core.png'
import MERLIN_IMAGE from '@/assets/images/chains/merlin.png'
import ZKSYNC_IMAGE from '@/assets/images/chains/zksync.png'
import MODE_IMAGE from '@/assets/images/chains/mode.png'
import SCROLL_IMAGE from '@/assets/images/chains/scroll.png'
import TAIKO_IMAGE from '@/assets/images/chains/taiko.png'
import ZKLINK_IMAGE from '@/assets/images/chains/zklink.png'
import FANTOM_IMAGE from '@/assets/images/chains/fantom.png'
import BINANCE_IMAGE from '@/assets/images/chains/binance.png'
import ROOCH_IMAGE from '@/assets/images/chains/rooch.png'
import BITURBO_IMAGE from '@/assets/images/chains/biturbo.png'
import TAPROOT_IMAGE from '@/assets/images/chains/taproot.png'
import GONSIS_IMAGE from '@/assets/images/chains/gonsis.png'
import METIS_IMAGE from '@/assets/images/chains/metis.png'
import AVALANCHE_IMAGE from '@/assets/images/chains/avalanche.png'
import MANTLE_IMAGE from '@/assets/images/chains/mantle.png'
import BOTANIX_IMAGE from '@/assets/images/chains/botanix.png'
import USDT_IMAGE from '@/assets/images/tokens/usdt.png'
import USDC_IMAGE from '@/assets/images/tokens/usdc.png'

const list = [
  {
    img: BTC_IMAGE,
    title: 'BTC'
  }, {
    img: BSC_IMAGE,
    title: 'BSC'
  }, {
    img: ETH_IMAGE,
    title: 'ETHEREUM'
  }, {
    img: LINEA_IMAGE,
    title: 'LINEA'
  }, {
    img: POLYGON_IMAGE,
    title: 'POLYGON'
  }, {
    img: XLAYER_IMAGE,
    title: 'X LAYER'
  }, {
    img: ARB_IMAGE,
    title: 'ARBITRUM'
  }, {
    img: BASE_IMAGE,
    title: 'BASE'
  }, {
    img: ROOTSTOCK_IMAGE,
    title: 'ROOTSTOCK'
  }, {
    img: B2_IMAGE,
    title: 'B² Network'
  }, {
    img: ZETACHAIN_IMAGE,
    title: 'ZETACHAIN'
  }, {
    img: ALIENX_IMAGE,
    title: 'ALIENX'
  }, {
    img: BITLAYER_IMAGE,
    title: 'BITLAYER'
  }, {
    img: BEVM_IMAGE,
    title: 'BEVM'
  }, {
    img: BEVM_IMAGE,
    title: 'BEVM CANARY'
  }, {
    img: BLAST_IMAGE,
    title: 'BLAST'
  }, {
    img: BOB_IMAGE,
    title: 'BOB'
  }, {
    img: OP_IMAGE,
    title: 'OPTIMISM'
  }, {
    img: CORE_IMAGE,
    title: 'CORE'
  }, {
    img: MERLIN_IMAGE,
    title: 'MERLIN'
  }, {
    img: ZKSYNC_IMAGE,
    title: 'ZKSYNC'
  }, {
    img: MODE_IMAGE,
    title: 'MODE'
  }, {
    img: SCROLL_IMAGE,
    title: 'SCROLL'
  }, {
    img: TAIKO_IMAGE,
    title: 'TAIKO'
  }, {
    img: ZKLINK_IMAGE,
    title: 'ZKLINK'
  }, {
    img: FANTOM_IMAGE,
    title: 'SONIC'
  }, {
    img: BINANCE_IMAGE,
    title: 'BINANCE'
  }, {
    img: BOUNCEBIT_IMAGE,
    title: 'BOUNCEBIT',
    description: 'SOON'
  }, {
    img: ROOCH_IMAGE,
    title: 'ROOCH',
    description: 'SOON'
  }, {
    img: BITURBO_IMAGE,
    title: 'BITURBO',
    description: 'SOON'
  }, {
    img: TAPROOT_IMAGE,
    title: 'TAPROOT',
    description: 'SOON'
  }, {
    img: GONSIS_IMAGE,
    title: 'GONSIS',
    description: 'SOON'
  }, {
    img: METIS_IMAGE,
    title: 'METIS',
    description: 'SOON'
  }, {
    img: AVALANCHE_IMAGE,
    title: 'AVALANCHE',
    description: 'SOON'
  }, {
    img: MANTLE_IMAGE,
    title: 'MANTLE',
    description: 'SOON'
  }, {
    img: BOTANIX_IMAGE,
    title: 'BOTANIX',
    description: 'SOON'
  }, {
    img: BTC_IMAGE,
    title: 'BTC'
  }, {
    img: ETH_IMAGE,
    title: 'ETH'
  }, {
    img: USDT_IMAGE,
    title: 'USDT'
  }, {
    img: USDC_IMAGE,
    title: 'USDC'
  }
]
</script>

<template>
  <div class="mt-[90px] md:mt-[180px] md:px-[60px]">
    <h3 class="text-[28px] md:text-[48px] font-[500] text-center leading-[1]">
      SUPPORTED CHAINS & TOKENS
    </h3>
    <div class="mt-[30px] md:mt-[60px] grid grid-cols-[repeat(auto-fill,minmax(90px,_1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,_1fr))] gap-[28px] md:gap-[60px]">
      <div
        class="flex flex-col items-center"
        v-for="(item, index) of list"
        :key="index"
      >
        <img
          class="w-[32px] h-[32px] md:w-[64px] md:h-[64px]"
          :src="item.img"
        >
        <p class="mt-[10px] md:mt-[16px] text-[14px] md:text-[18px] font-[500] text-center">
          {{ item.title }}
        </p>
        <p
          class="mt-[4px] text-[14px] md:text-[18px] font-[500] text-[#eab357]"
          v-if="item.description"
        >
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
