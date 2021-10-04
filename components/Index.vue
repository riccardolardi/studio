<template>
  <section id="index" class="page page--index" :class="{ 'is-active': active }">
    <p>
      Hoi, ich bin ein Interaction Designer und Software Entwickler und arbeite
      zwischen digitalem und physischem Raum.
    </p>
    <ArrowSvg class="arrow--down" />
  </section>
</template>

<script>
import ArrowSvg from '~/assets/icons/arrow.svg?inline'
export default {
  name: 'Index',
  components: {
    ArrowSvg,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.page--index {
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0;
  &:not(.is-active) {
    visibility: hidden;
  }
  p {
    @extend %t-2;

    margin: 0;
    padding: 0 $pad * 2;
  }
  .arrow--down {
    position: fixed;
    bottom: 15vw;
    width: 24px;
    height: auto;
    @media (min-width: $bp-2) {
      bottom: 15%;
    }
  }
}
</style>
