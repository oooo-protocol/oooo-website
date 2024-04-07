<script setup lang="ts">
import AppNav from './AppNav.vue'
import WalletSelect from './WalletSelect.vue'
</script>

<template>
  <div class="app-header xl:absolute xl:top-0 xl:right-0 flex items-center justify-between gap-[40px] px-[24px] md:px-[48px] xl:pr-[120px] h-[80px] max-w-[1920px]">
    <AppNav />
    <WalletSelect />
  </div>
</template>

<style lang="scss">
.app-header {
  z-index: 10;
}
</style>
