<script setup lang="ts">
import FOR_USERS_IMAGE from '@/assets/images/for-users.png'
import FOR_DEVELOPERS_IMAGE from '@/assets/images/for-developers.png'

const list = [
  {
    img: FOR_USERS_IMAGE,
    title: '_ FOR USERS',
    content: 'SEAMLESS, SECURE ASSET MANAGEMENT ACROSS CHAINS WITH BRIDGE, SWAP, AND MORE.'
  }, {
    img: FOR_DEVELOPERS_IMAGE,
    title: '_ FOR DEVELOPERS',
    content: 'CUSTOMIZABLE SDKS, EASY INTEGRATION, AND SCALABLE WITH A VAST USER BASE.'
  }
]
</script>

<template>
  <div class="mt-[90px] xl:mt-[105px]">
    <h3 class="text-[28px] md:text-[48px] font-[500] leading-[1] text-center">
      WHY BUILD AND USE WITH oooo
    </h3>
    <div
      class="mt-[30px] xl:mt-[60px]"
    >
      <div
        class="sticky top-[20%] flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[120px] p-[40px] xl:px-[120px] xl:py-[60px] bg-[#a6bcaf]"
        :class="{
          'mt-[100vh]': index !== 0,
          'bg-[#e9f3ed]': index % 2
        }"
        v-for="(item, index) of list"
        :key="index"
      >
        <div>
          <p class="md:text-[22px] text-[#000]">
            {{ item.title }}
          </p>
          <p class="mt-[40px] text-[20px] md:text-[32px] font-[500] text-[#000]">
            {{ item.content }}
          </p>
        </div>
        <div class="shrink-0 w-full xl:w-[55.6%] aspect-[2/1]">
          <img
            class="w-full h-full"
            :src="item.img"
          >
        </div>
      </div>
    </div>
  </div>
</template>
