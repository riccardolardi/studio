<template>
  <section
    id="services"
    class="page page--services"
    :class="{ 'is-active': active }"
  >
    <h1>Services</h1>
    <p class="subtitle">Frontend Entwicklung & Interaction Design</p>
    <p>
      Ich begleite
      <u>Gestaltungsprozesse</u>
      , berate vorausschauend auf die technische Umsetzung UI/UX und Interaction
      Design und übernehme die
      <u>Programmierung</u>
      von Projekten im Bereich von Web/Frontend & Apps sowie auch bei
      physischen, medialen Applikationen wie z.B. für Museen oder Ausstellungen.
    </p>
    <p>
      Neben der Planung, Gestaltung und Umsetzung von digitalen Produkten
      betätige ich mich auch in der
      <u>Lehre</u>
      wie z.B. in der Schulung oder im Unterricht.
    </p>
  </section>
</template>

<script>
export default {
  name: 'Services',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.page--services {
  //
}
</style>
