<script setup lang="ts">
import MERLIN_IMAGE from '@/assets/images/goooo-points/merlin.png'

import { Button } from 'oooo-components/ui/button'
import TaskItem from '../TaskItem.vue'

</script>

<template>
  <TaskItem
    title="BRIDGE $BTC FROM BINANCE TO MERLIN."
    description="BRIDGE $BTC FROM BINANCE TO MERLIN AND RECEIVE 8 Goooo AS A REWARD FOR EACH TRANSACTION COMPLETED."
    :image="MERLIN_IMAGE"
    points="8"
  >
    <Button
      class="w-full md:w-[174px]"
      size="sm"
      as="a"
      href="https://bridge.oooo.money/?from=binance&to=merlin"
      target="_blank"
    >
      GO TO BRIDGE
    </Button>
  </TaskItem>
</template>

<style lang="scss" scoped>

</style>
