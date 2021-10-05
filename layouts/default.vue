<template>
  <div
    class="layout layout--default"
    :class="[
      { 'is-intro': activeEntry === 'index', 'is-ready': ready },
      `browser-${browser.name}`,
    ]"
  >
    <client-only>
      <LazyThree :is-intro="activeEntry === 'index'" />
    </client-only>
    <main>
      <Index :active="activeEntry === 'index'" />
      <Services :active="activeEntry === 'services'" />
      <Projects :active="activeEntry === 'projects'" />
      <Profile :active="activeEntry === 'profile'" />
      <Contact :active="activeEntry === 'contact'" />
    </main>
    <Header :active-entry="activeEntry" :is-intro="activeEntry === 'index'" />
    <figure class="blend-overlay" />
  </div>
</template>

<script>
import LazyThree from '~/components/LazyThree'
import Header from '~/components/Header'
import Index from '~/components/Index'
import Services from '~/components/Services'
import Projects from '~/components/Projects'
import Profile from '~/components/Profile'
import Contact from '~/components/Contact'
const { detect } = require('detect-browser')
export default {
  name: 'Layout',
  components: {
    LazyThree,
    Header,
    Index,
    Services,
    Projects,
    Profile,
    Contact,
  },
  data: () => {
    return {
      ready: false,
      pages: [],
      intersectingEntries: [],
      activeEntry: undefined,
    }
  },
  computed: {
    browser() {
      return detect()
    },
  },
  mounted() {
    this.pages = document.querySelectorAll('.page')
    this.initScrollDetection()
    this.onScroll()
    setTimeout(() => {
      this.ready = true
    }, 250)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    initScrollDetection() {
      window.addEventListener('scroll', this.onScroll, { passive: true })
    },
    onScroll() {
      this.pages.forEach((page) => {
        if (window.scrollY + window.innerHeight / 2.5 >= page.offsetTop) {
          this.activeEntry = page.getAttribute('id')
          // this.activeEntry =
          //   page.getAttribute('id') === 'index' && window.scrollY > 0
          //     ? 'services'
          //     : page.getAttribute('id')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.layout--default {
  opacity: 0;
  transition: color 250ms, opacity 250ms;
  &.is-ready {
    opacity: 1;
  }
  &.is-intro {
    ::v-deep nav {
      opacity: 0;
      transform: translateY(-100%);
      @media (min-width: $bp-2) {
        transform: translateX(100%);
        transition: opacity 0ms 0ms, transform 0ms 0ms;
      }
      @media (min-width: $bp-4) {
        transition: opacity 250ms 0ms, transform 250ms 0ms;
      }
    }
    header,
    main {
      @media (min-width: $bp-2) {
        color: $white;
        mix-blend-mode: difference;
      }
      ::v-deep svg polyline {
        @media (min-width: $bp-2) {
          stroke: $white;
        }
      }
    }
  }
  &:not(.is-intro) {
    background-color: $white;
    .Three {
      opacity: 0;
    }
    .blend-overlay {
      opacity: 0;
    }
    header {
      background-color: rgba(255, 255, 255, 0.95);
      transition: transform 250ms, background-color 0ms 250ms;
      @media (min-width: $bp-4) {
        background-color: transparent;
      }
    }
  }
  &.browser-safari,
  &.browser-ios {
    .blend-overlay {
      mix-blend-mode: lighten;
    }
  }
  &.browser-ios {
    .page--index {
      ::v-deep svg {
        bottom: 15vh;
      }
    }
    .page--services {
      margin-top: -49.999vh;
    }
  }
  header,
  main {
    @extend %pageWidth;
  }
  .blend-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $blue;
    mix-blend-mode: color;
    transition: opacity 250ms;
    pointer-events: none;
    @media (min-width: $bp-2) {
      display: block;
    }
  }
}
</style>
