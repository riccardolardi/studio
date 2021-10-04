<template>
  <span class="Logo" @click="onClick">Studio Riccardo Lardi</span>
</template>

<script>
export default {
  name: 'Logo',
  methods: {
    onClick() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.Logo {
  @extend %t-1;

  display: inline-block;
  max-width: min-content;
}
</style>
