<script setup lang="ts">
const list = [
  {
    title: '1M',
    content: 'TRANSACTIONS'
  }, {
    title: '0.6M',
    content: 'WALLET ADDRESSES'
  }, {
    title: '20+',
    content: 'INTEGRATIONS WITH THE MOST BITCOIN L2S'
  }, {
    title: '30+',
    content: 'SUPPORTED CHAINS'
  }
]
</script>

<template>
  <div class="mt-[90px] md:mt-[180px] xl:px-[60px]">
    <h3 class="text-[28px] md:text-[48px] font-[500] text-center leading-[1]">
      ACHIEVEMENTS
    </h3>
    <div class="mt-[30px] md:mt-[60px] flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap justify-center items-center md:items-start gap-[40px] md:gap-[54px]">
      <template
        v-for="(item, index) of list"
        :key="index"
      >
        <div
          class="max-w-[280px] md:w-full text-center"
        >
          <p class="text-[32px] md:text-[48px] font-[500] leading-[1]">
            {{ item.title }}
          </p>
          <p class="mt-[20px] md:text-[22px] text-[#a4a4a4]">
            {{ item.content }}
          </p>
        </div>
        <!-- divider -->
        <div
          v-if="index < list.length - 1"
          class="h-[1px] w-[96px] md:h-[96px] md:w-[1px] bg-[#fff]/30 md:hidden xl:block"
        />
      </template>
    </div>
  </div>
</template>
