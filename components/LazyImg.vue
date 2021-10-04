<template>
  <img
    ref="image"
    :class="{
      loaded: isLoaded,
      intersecting: watch ? isIntersecting : true,
    }"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="lazy ? 'lazy' : null"
    @load="onLoaded"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: null,
      default: 'auto',
    },
    height: {
      type: null,
      default: 'auto',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    watch: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isLoaded: false,
      observer: null,
      isIntersecting: false,
    }
  },
  mounted() {
    if (this.watch) {
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.isIntersecting = true
          this.observer.unobserve(entries[0].target)
        }
      })
      this.observer.observe(this.$refs.image)
    }
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    onLoaded() {
      this.isLoaded = true
      this.$emit('loaded', this.$refs.image)
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 500ms 250ms;
  &.loaded.intersecting {
    opacity: 1;
  }
}
</style>
