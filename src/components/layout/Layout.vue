<script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'oooo-components/ui/dropdown-menu'
import AppHeader from 'oooo-components/layout/AppHeader.vue'
import AppNav from 'oooo-components/layout/AppNav.vue'
import AppFooter from 'oooo-components/layout/AppFooter.vue'
import Icon from 'oooo-components/ui/Icon.vue'

const route = useRoute()

const menus = [
  {
    name: 'DOCS',
    tag: 'a',
    attributes: {
      href: 'https://docs.oooo.money/'
    }
  },
  {
    name: 'GITHUB',
    tag: 'a',
    attributes: {
      href: 'https://github.com/oooo-protocol'
    }
  },
  {
    name: 'MEDIA KIT',
    tag: 'a',
    attributes: {
      href: '/assets/media-kit/logo.zip',
      download: 'oooo-media-kit.zip'
    },
    closable: true
  }
]
</script>

<template>
  <AppHeader class="justify-between">
    <RouterLink to="/">
      <Icon
        name="OOOOlogo"
        class="text-[32px] md:text-[44px]"
      />
    </RouterLink>
    <DropdownMenu>
      <DropdownMenuTrigger class="ml-auto flex gap-[8px] -tracking-tighter hover:text-[#bce4cd]">
        <Icon
          class="text-[22px] text-[#ff961e]"
          name="bridge"
        />
        BRIDGE
      </DropdownMenuTrigger>
      <DropdownMenuContent class="px-0 py-[12px] border-none min-w-[var(--radix-popper-anchor-width)]">
        <DropdownMenuItem as-child>
          <a
            href="https://bridge.oooo.money"
            target="_blank"
          >
            MAINNET
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem as-child>
          <a
            href="https://testnet.bridge.oooo.money"
            target="_blank"
          >
            TESTNET
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <a
      class="flex items-center gap-[8px] -tracking-tighter hover:text-[#bce4cd]"
      href="https://bridge.oooo.money/goooo"
    >
      <Icon
        class="text-[20px] text-[#ff961e]"
        name="Goooo"
      />
      Goooo
    </a>
    <div class="hidden md:flex gap-[40px]">
      <template
        v-for="(menu, index) of menus"
        :key="index"
      >
        <component
          class="hover:text-[#bce4cd]"
          :is="menu.tag"
          v-if="menu.tag"
          v-bind="menu.attributes"
        >
          {{ menu.name }}
        </component>
      </template>
    </div>
    <AppNav
      class="flex md:hidden"
      :menus="menus"
    />
  </AppHeader>
  <!-- 不设置默认key，以文件名区分(Vue默认)，确保复用最外层容器 -->
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component
        :is="Component"
      />
    </KeepAlive>
  </RouterView>
  <AppFooter :is-hide-logo="route.name === 'home'" />
</template>

<style lang="scss" scoped>

</style>
