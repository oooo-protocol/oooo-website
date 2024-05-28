<script setup lang="ts">
import Icon from 'oooo-components/ui/Icon.vue'
import { OOOO } from '@/composables/oooo'

const initializing = ref(true)

const menus = [
  {
    title: '# / A - D  ————————',
    items: [
      'BeL2',
      'BEVM',
      'B^2',
      'Babylon',
      'Chainway',
      'ckBTC',
      'Dovi',
      'DFS Network'
    ]
  }, {
    title: 'E - M  ————————',
    items: [
      'Liquid',
      'Lightning',
      'MAP Protocol',
      'Merlin chain'
    ]
  }, {
    title: 'N - O  ————————',
    items: [
      'Nubit'
    ]
  }, {
    title: 'P - S  ————————',
    items: [
      'RSK',
      'RGB',
      'QED Protocol',
      'Stacks',
      'SatoshiVM'
    ]
  }, {
    title: 'T - Z  ————————',
    items: [
      'Veda',
      'x.TAI'
    ]
  }
]

onMounted(async () => {
  const oooo = new OOOO('.oooo-model')
  await oooo.init()
  void oooo.start()
  initializing.value = false
})
</script>

<template>
  <div class="oooo-model" />
  <div class="relative flex flex-col min-h-[calc(100%-208px)] px-[24px] md:px-[48px] xl:px-[120px]">
    <h2 class="relative z-[1] box-content py-[32px] md:pt-[40px] md:pb-[120px] xl:pt-[32px] xl:pb-[80px] xl:pr-[540px] text-[24px] md:text-[32px] xl:text-[48px] leading-none font-light uppercase max-w-[549px] xl:max-w-[968px]">
      <b>
        <a
          class="lowercase"
          href="https://discord.gg/ooooprotocol"
          target="_blank"
        >oooo</a>
      </b>
      IS THE FIRST MODULAR OMNICHAIN INTEROPERABILITY PROTOCOL SUPPORTING <b>BITCOIN ECOSYSTEM</b>.
    </h2>
    <div class="relative grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-y-[24px] md:gap-y-[80px] -mx-[24px] mb-auto pb-[52px] md:pb-[173px] xl:pb-[327px] px-[24px] xl:w-[1300px] normal-case">
      <div
        class="space-y-[4px] md:space-y-[8px] md:even:mt-[58px]"
        v-for="(menu, index) in menus"
        :key="index"
      >
        <p class="mb-[16px] text-[12px] xl:text-[14px] font-light leading-none text-[#878787]">
          {{ menu.title }}
        </p>
        <p
          class="text-[10px] md:text-[12px] xl:text-[16px] leading-[1.2] tracking-[2px]"
          v-for="item of menu.items"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div class="relative xl:flex xl:items-center xl:gap-[275px]">
      <Icon
        class="mb-[32px] md:mb-[0] oooo-logo xl:shrink-0"
        name="a-OOOO2024"
      />
      <div class="xl:flex-1">
        <!-- <div class="relative z-[1] -mt-[20px] xl:mt-0 md:text-right">
          <a
            href="./terms"
            target="_blank"
          >
            Powered by oooo | Terms of Use
          </a>
        </div> -->
        <div class="relative z-0 -ml-[9px] h-[80px] md:h-[160px] xl:h-[240px] md:-ml-[20px] md:text-right">
          <p class="absolute text-[80px] md:text-[160px] xl:text-[240px] leading-none overflow-y-hidden font-medium normal-case">
            {Bitcoin}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.oooo {
  &-model {
    @apply -z-[1] fixed left-0 top-0 w-full h-full;
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
