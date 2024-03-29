<script setup lang="ts">
import AppHeader from './AppHeader.vue'

</script>

<template>
  <AppHeader />
  <!-- 不设置默认key，以文件名区分(Vue默认)，确保复用最外层容器 -->
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component
        :is="Component"
      />
    </KeepAlive>
  </RouterView>
</template>

<style lang="scss" scoped>

</style>
