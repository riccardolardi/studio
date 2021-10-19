<template>
  <section
    id="services"
    class="page page--services"
    :class="{ 'is-active': active }"
  >
    <h1>Services</h1>
    <p class="subtitle">Frontend Entwicklung und Interaction Design</p>
    <p>
      Ich begleite
      <u>Gestaltungsprozesse</u>
      , berate hinsichtlich UI/UX und Interaction Design und erarbeite die
      <u>technische Realisierung</u>
      von Projekten im Bereich von Web/Frontend & Apps sowie auch bei
      physischen, medialen Applikationen z.B. für Museen.
    </p>
    <p>
      Neben der Planung, Gestaltung und Umsetzung von digitalen Produkten
      betätige ich mich auch in der
      <u>Lehre</u>
      wie z.B. in der Schulung oder im Unterricht.
    </p>
    <ul>
      <li>
        Planung und Begleitung der Gestaltung von digitalen Produkten
        <ul>
          <li>Beratung von Designer/innen bei Projekten im Bereich Web/Apps</li>
          <li>
            Projektleitung bei Full-Service Projekten (von Design bis zur
            Umsetzung)
          </li>
          <li>Guidance und Mentorship</li>
        </ul>
      </li>
      <li>
        Technische Umsetzung
        <ul>
          <li>Entwicklung spezialisiert auf Nuxt / Vue / React / Expo</li>
          <li>Jamstack, Serverless, Microservices</li>
          <li>Prototyping, Machbarkeitsstudien</li>
        </ul>
      </li>
      <li>Lehre, Schulung, Vermittlung</li>
    </ul>
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
