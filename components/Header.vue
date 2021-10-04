<template>
  <header ref="el" :class="{ 'is-intro': isIntro }">
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
    <Nav :active-entry="activeEntry" :headroom="headroom" />
    <button v-if="!isIntro" class="menu--button" @click="headroom.pin()">
      <MenuSvg />
    </button>
  </header>
</template>

<script>
import Headroom from 'headroom.js'
import Logo from '~/components/Logo'
import Nav from '~/components/Nav'
import MenuSvg from '~/assets/icons/menu.svg?inline'
export default {
  name: 'Header',
  components: {
    Logo,
    Nav,
    MenuSvg,
  },
  props: {
    activeEntry: {
      type: String,
      default: '',
    },
    isIntro: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    return {
      headroom: {},
    }
  },
  mounted() {
    this.headroom = new Headroom(this.$refs.el, {
      tolerance: {
        up: 12,
        down: 2,
      },
    })
    this.headroom.init()
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: $pad * 2;
  will-change: transform, background-color;
  transition: transform 250ms, background-color 0ms 0ms;
  @media (min-width: $bp-2) {
    align-items: center;
    transition: unset;
  }
  &.headroom--pinned {
    transform: translateY(0%);
    @media (min-width: $bp-4) {
      transform: unset;
    }
  }
  &:not(.is-intro).headroom--unpinned {
    transform: translateY(-100%);
    @media (min-width: $bp-4) {
      transform: unset;
    }
    .menu--button {
      opacity: 1;
      transform: translateY(200%) scaleY(1);
      transition: opacity 250ms 250ms, transform 250ms 250ms;
    }
  }
  .menu--button {
    position: absolute;
    bottom: 0;
    right: $pad * 2;
    width: 24px;
    opacity: 0;
    cursor: pointer;
    transform: translateY(200%) scaleY(0);
    transform-origin: top;
    transition: opacity 250ms, transform 250ms;
    @media (min-width: $bp-4) {
      display: none;
    }
    svg {
      width: 100%;
      height: auto;
    }
  }
}
</style>
