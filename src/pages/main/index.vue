<script setup lang="ts">
import { Button } from 'oooo-components/ui/button'
import { OOOO } from '@/composables/oooo'
import WhatIsOooo from './modules/what-is-oooo.vue'
import WhyBuildAndUseWithOooo from './modules/why-build-and-use-with-oooo.vue'
import Achievement from './modules/achievement.vue'
import SupportedChainsAndTokens from './modules/supported-chains-and-tokens.vue'
import OurJounery from './modules/our-jounery.vue'
import StrategicPartners from './modules/strategic-partners.vue'
import EmpoweringDevelopersAndUsers from './modules/empowering-developers-and-users.vue'
import { useElementSize } from '@vueuse/core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(async () => {
  const oooo = new OOOO('.oooo-model')
  await oooo.init()
  void oooo.start()
})

/**
 * listen container height change and refresh ScrollTrigger
 */
const homepageRef = ref(null)
const { height } = useElementSize(homepageRef)
watch(height, () => { ScrollTrigger.refresh() })
</script>

<template>
  <div
    ref="homepageRef"
    class="homepage"
  >
    <div class="relative h-[100vh] w-[100vw] left-[50%] -ml-[50vw]">
      <div class="oooo-model" />
      <div class="flex flex-col justify-center items-center px-[24px] md:px-[48px] xl:px-[120px] h-full">
        <h2 class="text-[48px] md:text-[68px] font-[500] leading-[1] text-center">
          BORN FOR LIQUIDITY
        </h2>
        <h3 class="mt-[20px] md:mt-[56px] text-[14px] md:text-[27px] md:font-[300] text-center max-w-[1056px]">
          STREAMLINING AND COORDINATING LIQUIDITY ACROSS CHAINS, SIMPLIFYING ASSET MANAGEMENT ON-CHAIN AND BEYOND.
        </h3>
        <div class="mt-[60px] md:mt-[116px] flex flex-col md:flex-row gap-[16px] w-full md:w-auto">
          <Button
            class="w-full md:w-[240px]"
            as="a"
            href="https://bridge.oooo.money/"
          >
            GO TO BRIDGE
          </Button>
          <Button
            class="w-full md:w-[240px]"
            variant="outline"
            as="a"
            href="https://bridge.oooo.money/goooo"
          >
            EARN Goooo POINTS
          </Button>
        </div>
      </div>
    </div>
    <div class="px-[24px] md:px-[48px] xl:px-[120px]">
      <WhatIsOooo />
      <EmpoweringDevelopersAndUsers />
      <WhyBuildAndUseWithOooo />
      <Achievement />
      <SupportedChainsAndTokens />
      <OurJounery />
      <StrategicPartners />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.oooo {
  &-model {
    @apply -z-[1] absolute left-0 top-0 w-full h-full;
  }

  &-logo {
    width: 140px;
    height: 64px;

    @media (min-width: 768px) {
      width: 266px;
      height: 70px;
    }

    @media (min-width: 1280px) {
      width: 302px;
      height: 80px;
    }
  }
}
</style>
