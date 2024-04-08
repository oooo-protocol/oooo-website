<template>
  <div class="act-wrapper">
    <div class="act-header">
      <div class="act-tmp" />
      <div class="act-header-1">
        <img
          src="@/assets/images/chest-chase/hammer.png"
          class="act-header-icon-ham"
        >
        <span
          class="act-header-text"
          data-text="oooo’s"
        >oooo’s</span>
        <img
          src="@/assets/images/chest-chase/box-gold.png"
          class="act-header-icon-gold"
        >
      </div>
      <div class="act-header-desc">
        <span data-text="TREASURE HUNTING JOURNEY">TREASURE HUNTING JOURNEY</span>
      </div>
    </div>
    <div class="m-auto act-banner text-center">
      <p class="m-auto text-[30px] font-bold leading-[0.8] w-[300px]">
        TREASURE HUNTING JOURNEY has reached its final destination!
      </p>
      <p class="mt-[18px] text-[20px] font-bold">
        ❤️ Let's look forward to the next event together ❤️
      </p>
      <p class="mt-[32px] text-[26px] leading-[1]">
        🎮 <br>
        Game
      </p>
      <p class="mt-[16px] text-[20px] leading-[1.1]">
        - Participate Address <span class="text-[#ebc24f]">170,149</span> <br>
        - Loot Box Fragment <span class="text-[#ebc24f]">1,917,177</span> <br>
        - Bridge Task <span class="text-[#ebc24f]">837,750</span>
      </p>
      <p class="mt-[32px] text-[26px] font-bold leading-[0.8]">
        📦 <br>
        Mythical Lootbox (oTHL)
      </p>
      <a
        href="https://haven-explorer.bsquared.network/token/0x934bE6f08f4d6a29E015E6Ed1d87B0Cb79dD5B17"
        target="_blank"
        class="text-[23px] leading-[1.1] text-[#3b6dff]"
      >
        0x934b…dD5B17
      </a>
      <p class="mt-[16px] text-[20px] leading-[1.1]">
        - Holders <span class="text-[#ebc24f]">67,871</span> <br>
        - Max Total Supply <span class="text-[#ebc24f]">111,810</span>
      </p>
      <p class="mt-[32px] text-[15px] text-[#999999]">
        The above data curated by
      </p>
      <img
        class="m-auto w-[54px]"
        src="@/assets/images/chest-chase/oooo-money.png"
      >
    </div>
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
  document.body.style.backgroundColor = '#1c1c1c'
})
onUnmounted(() => {
  document.body.removeAttribute('style')
})
</script>
<style lang="scss" scoped>
.act-wrapper {
  @font-face {
    font-family: 'NeueBit';
    src: url('./fonts/NeueBit-Bold.ttf') format('truetype'),
        url('./fonts/NeueBit-Bold.woff2') format('woff2'),
        url('./fonts/NeueBit-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  font-family: 'NeueBit';

  width:1256px;
  margin: auto;
  padding-top: 40px;
  transform-origin: center top;

  .act-header {
    position: relative;
    height: 340px;
    background: url('@/assets/images/chest-chase/titlebg.png');
    background-size: 100% 100%;
    .act-tmp {
      height: 30px;
    }

    .act-header-desc {
      height: 54px;
      line-height: 54px;
      text-align: center;
      font-size: 80px;
      font-weight: bold;
      color: #fff;
      span {
        position: relative;
        -webkit-text-stroke: 0px #343434;
        &:after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          z-index: -1;
        }
        &:after {
            -webkit-text-stroke: 6px #343434;
        }
      }
    }
    .act-header-1 {
      position: relative;
      height: 110px;
      text-align: center;
    }
    .act-header-icon-ham {
      position: relative;
      top: 20px;
      display: inline-block;
      width: 96px;
      height: 96px;
      vertical-align: top;
    }
    .act-header-icon-gold {
      position: relative;
      top: 0;
      display: inline-block;
      width: 120px;
      height: 120px;
      vertical-align: top;
    }
    .act-header-text {
      position: relative;
      line-height: 110px;
      color: #fff;
      font-size: 160px;
      font-weight: bold;
      -webkit-text-stroke: 0px #343434;

      &:after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          z-index: -1;
      }
      &:after {
          -webkit-text-stroke: 6px #343434;
      }
    }
  }

  .act-banner {
    background: url('@/assets/images/chest-chase/end-border.png') no-repeat center / contain;
    padding: 35px 32px;
    width: 396px;
    line-height: 1.2;
  }
}
</style>
