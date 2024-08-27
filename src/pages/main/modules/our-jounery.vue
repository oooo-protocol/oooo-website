<script setup lang="ts">
import { gsap } from 'gsap'

const list = [
  {
    title: 'FOR USERS',
    subTitle: 'STAGE-1',
    content: {
      title: 'ALL-IN-ONE EXCHANGE & OMNI-PLATFORM',
      description: 'oooo’S INITIAL FOCUS IS ON ENHANCING INTEROPERABILITY. \b\b LIQUIDITY AGGREGATION - BLOCKCHAINS + REAL-WORLD FINANCIAL SYSTEMS. \b\b USER AGGREGATION - OMNI-PLATFORM (PC+H5+TG AND MORE)'
    }
  }, {
    title: 'JAN',
    content: {
      title: 'oooo WAS ESTABLISHED'
    }
  }, {
    title: 'FEB 9',
    content: {
      title: 'CROSS CHAIN BRIDGE WAS LIVE'
    }
  }, {
    title: 'APR',
    content: {
      title: 'SUCCESSFULLY INTEGRATED WITH THE MOST BTC L2S'
    }
  }, {
    title: 'MAR',
    content: {
      title: '1,000,000 TX REACHED'
    }
  }, {
    title: 'MAY',
    content: {
      title: 'BINANCE EXCHANGE CONNECTED'
    }
  }, {
    title: 'JUN',
    content: {
      title: 'oooo AIRDROP SEASON 1'
    }
  }, {
    title: 'JUL',
    content: {
      title: 'SUPPORT ETH, USDC & MORE NON-BTC CHAINS'
    }
  }, {
    title: 'AUG',
    content: {
      title: 'GAS STATION & STAKING'
    }
  }, {
    title: 'FOR DEVELOPERS',
    subTitle: 'STAGE-2',
    content: {
      title: 'DIRECT USER BASE & SIMPLE INTEGRATION',
      description: 'BASED ON oooo’S ALL-IN-ONE EXCHANGE & OMNI-PLATFORM, DEVELOPERS CAN DIRECTLY ACCESS THE USER BASE AND NETWORK CONNECTED WITH oooo.'
    }
  }, {
    title: 'FOR USERS & DEVELOPERS',
    subTitle: 'STAGE-3',
    content: {
      title: 'LIQUIDITY ABSTRACTION & ULTIMATE FLUIDITY',
      description: 'UTILIZING oooo’S INFRA FOR ASSET ABSTRACTION ENABLES ASSETS TO MOVE SEAMLESSLY ACROSS NETWORKS, UNBOUND BY THEIR ORIGINAL FORMS, ENSURING MAXIMUM FLUIDITY AND ENHANCING EFFICIENCY FOR USERS AND DEVELOPERS.'
    }
  }
]

onMounted(async () => {
  gsap.matchMedia().add('(max-width: 767px)', () => {
    const sections = gsap.utils.toArray<HTMLDivElement>('.our-jounery-time')

    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          toggleClass: 'active',
          start: 'bottom center',
          end: 'bottom center-=154px'
        }
      })
    })
  })
})

const onScroll = (e: UIEvent) => {
  const el = e.target
  const maskEl = document.querySelector<HTMLDivElement>('.our-jounery-mask')
  if (el == null || maskEl == null) return
  const { scrollLeft, scrollWidth, offsetWidth } = el as HTMLDivElement
  const scrollPercent = scrollLeft / (scrollWidth - offsetWidth)
  maskEl.style.opacity = `${1 - scrollPercent}`
}
</script>

<template>
  <div class="our-jounery mt-[90px] md:mt-[160px] md:px-[60px]">
    <h3 class="text-[28px] md:text-[48px] font-[500] text-center">
      OUR JOUNERY
    </h3>
    <div class="relative">
      <div class="our-jounery-mask" />
      <div
        class="our-jounery-scroll mt-[30px] md:mt-[60px] md:overflow-x-auto"
        @scroll="onScroll"
      >
        <div class="relative flex flex-col md:flex-row gap-[129px] pl-[60px] md:pl-0 md:pt-[60px] pb-[300px] md:pb-[420px] w-fit">
          <div class="our-jounery-timeline" />
          <div
            class="our-jounery-time"
            v-for="(item, index) of list"
            :key="index"
          >
            <!-- STAGE or DATE title -->
            <div class="absolute -translate-x-[100%] md:-translate-x-0 md:-translate-y-[100%] pr-[10px] md:pr-0 md:py-[10px] w-[70px] md:w-[200px] text-right md:text-start">
              <p
                class="mb-[4px] text-[14px] text-[#bce4cd]"
                v-if="item.subTitle"
              >
                {{ item.subTitle }}
              </p>
              <p
                class="text-[14px] font-[500] break-words"
              >
                {{ item.title }}
              </p>
            </div>
            <!-- Hover line -->
            <div class="our-jounery-time__line" />
            <!-- Hover Content -->
            <div class="our-jounery-time__content">
              <p class="font-[500] text-[#bce4cd]">
                {{ item.content.title }}
              </p>
              <p
                class="mt-[20px] text-[14px] text-[#a4a4a4]"
                v-if="item.content.description"
              >
                {{ item.content.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-jounery {
  &-timeline {
    @apply absolute h-full w-[20px] md:w-full md:h-[50px] bg-[linear-gradient(to_bottom,#929292_1px,transparent_1px)] bg-[length:1px_13px] md:bg-[linear-gradient(to_right,#929292_1px,transparent_1px)] md:bg-[length:13px_50px];
  }

  &-mask {
    @apply hidden md:block z-10 absolute right-0 w-[240px] h-full bg-gradient-to-r from-transparent to-[#000] pointer-events-none;
  }

  &-time {
    @apply shrink-0 relative h-[27px] w-full md:h-[50px] md:w-[27px];

    &__line {
      @apply absolute top-[50%] -translate-y-[50%] md:-translate-y-0 md:top-0 md:left-[50%] md:-translate-x-[50%] w-[30px] h-[1px] md:w-[1px] md:h-[75px]  bg-[#929292] transition-all;
    }

    &__content {
      @apply absolute left-[80px] md:left-0 md:top-[170px] w-[200px] md:w-[235px] min-h-[200px] opacity-0 transition-all;
    }

    &.active &__line {
      @apply w-[60px] md:w-[1px] md:h-[150px] bg-[#f2a73d];
    }

    &.active &__content {
      @apply opacity-100;
    }

    &:hover &__line {
      @apply w-[60px] md:w-[1px] md:h-[150px] bg-[#f2a73d];
    }

    &:hover &__content {
      @apply opacity-100;
    }
  }
}
</style>
