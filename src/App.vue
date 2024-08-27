<script setup lang="ts">
import Toaster from 'oooo-components/ui/toast/Toaster.vue'
</script>

<template>
  <RouterView />
  <Toaster />
</template>

<style>
#app {
  @apply m-auto relative max-w-[1920px];
}
</style>
