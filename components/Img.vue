<template>
  <nuxt-picture
    format="webp"
    quality="80"
    sizes="sm:320px md:480px lg:640px"
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    class="Img"
  />
</template>

<script>
export default {
  name: 'Img',
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
.Img {
  ::v-deep img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 75vh;
    object-fit: cover;
  }
}
</style>
