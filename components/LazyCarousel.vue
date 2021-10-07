<template>
  <div ref="carousel" class="Carousel">
    <slot />
  </div>
</template>

<script>
import Flickity from 'flickity'
import 'flickity/dist/flickity.min.css'
export default {
  name: 'Carousel',
  data: () => {
    return {
      carousel: {},
    }
  },
  mounted() {
    this.carousel = new Flickity(this.$refs.carousel, {
      adaptiveHeight: true,
      groupCells: false,
      accessibility: false,
      prevNextButtons: false,
    })
    ;(() => {
      // https://github.com/metafizzy/flickity/issues/740
      let startX = 0
      this.$refs.carousel.ontouchstart = function (e) {
        startX = e.touches[0].clientX
      }
      this.$refs.carousel.ontouchmove = function (e) {
        if (Math.abs(e.touches[0].clientX - startX) > 5 && e.cancelable) {
          e.preventDefault()
        }
      }
    })()
  },
}
</script>

<style lang="scss" scoped>
.Carousel {
  position: relative;
  cursor: grab;
  .carousel-cell {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
  }
  ::v-deep .flickity-page-dots {
    text-align: left;
    .dot:first-child {
      margin-left: 0;
    }
  }
}
</style>
