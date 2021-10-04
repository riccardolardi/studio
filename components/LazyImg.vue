<template>
  <nuxt-picture
    ref="image"
    format="webp"
    quality="80"
    sizes="sm:320px md:560px lg:768px"
    :class="{
      loaded: isLoaded,
      intersecting: watch ? isIntersecting : true,
    }"
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :loading="lazy ? 'lazy' : null"
    class="lazy-img"
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
    this.$refs.image.$el.onload = this.onLoaded()
    if (this.watch) {
      this.observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.isIntersecting = true
          this.observer.unobserve(entries[0].target)
        }
      })
      this.observer.observe(this.$refs.image.$el)
    }
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    onLoaded() {
      this.isLoaded = true
      this.$emit('loaded', this.$refs.image.$el)
    },
  },
}
</script>

<style lang="scss" scoped>
.lazy-img {
  opacity: 0;
  transition: opacity 500ms 250ms;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  &.loaded.intersecting {
    opacity: 1;
  }
}
</style>
