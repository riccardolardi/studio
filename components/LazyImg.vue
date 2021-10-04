<template>
  <nuxt-picture
    ref="image"
    format="webp"
    quality="80"
    sizes="sm:320px md:480px lg:640px"
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    loading="lazy"
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
  },
}
</script>

<style lang="scss" scoped>
.lazy-img {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
