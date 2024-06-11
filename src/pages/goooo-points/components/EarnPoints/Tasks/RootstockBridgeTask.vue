<script setup lang="ts">
import ROOTSTOCK_IMAGE from '@/assets/images/goooo-points/rootstock.png'

import { Button } from 'oooo-components/ui/button'
import TaskItem from '../TaskItem.vue'

</script>

<template>
  <TaskItem
    title="BRIDGE $BTC FROM ANY CHAIN TO ROOTSTOCK."
    description="BRIDGE $BTC FROM ANY CHAIN TO ROOTSTOCK AND RECEIVE 8 Goooo AS A REWARD FOR EACH TRANSACTION COMPLETED."
    :image="ROOTSTOCK_IMAGE"
    points="8"
  >
    <Button
      class="w-full md:w-[174px]"
      size="sm"
      as="a"
      href="https://bridge.oooo.money/?token=BTC&from=merlin&to=rootstock"
      target="_blank"
    >
      GO TO BRIDGE
    </Button>
  </TaskItem>
</template>

<style lang="scss" scoped>

</style>
