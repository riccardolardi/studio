<template>
  <div class="page page--profile" :class="{ 'is-active': active }">
    <h1>Profil</h1>
    <p class="subtitle">Riccardo Alberto Lardi, *1984</p>
    <p>
      Ich bin ein Interaction Designer und Software/Web/Frontend Entwickler mit
      umfassender Erfahrung in der Gestaltung und Umsetzung von
      Benutzeroberflächen.
    </p>
    <p>
      Bevor ich das Studio eröffnete, war ich massgeblich an zahlreichen
      Projekten für Unternehmen wie Takram (London) und iart (Basel) beteiligt.
      Ich trage einen BA von der Zürcher Hochschule der Künste und einen MA vom
      Royal College of Art, London.
    </p>
    <p>
      Ich schätze mich glücklich u.a. die folgenden Institutionen/Firmen bei
      Projekten erfolgreich unterstützt zu haben:
    </p>
    <div class="clients">
      <siaSvg />
      <bsSvg />
      <kulturprozentSvg />
      <hsluSvg />
      <iartSvg />
      <unizhSvg />
    </div>
  </div>
</template>

<script>
import bsSvg from '~/assets/icons/clients/bs.svg?inline'
import iartSvg from '~/assets/icons/clients/iart.svg?inline'
import unizhSvg from '~/assets/icons/clients/unizh.svg?inline'
import hsluSvg from '~/assets/icons/clients/hslu.svg?inline'
import siaSvg from '~/assets/icons/clients/sia.svg?inline'
import kulturprozentSvg from '~/assets/icons/clients/kulturprozent.svg?inline'
export default {
  name: 'Profile',
  components: {
    bsSvg,
    iartSvg,
    unizhSvg,
    hsluSvg,
    siaSvg,
    kulturprozentSvg,
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
.page--profile {
  .clients {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 2rem;
    grid-row-gap: 2rem;
    margin: 1rem 0 0;
    @media (min-width: $bp-2) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 4rem;
    }
    ::v-deep svg {
      width: 100%;
      height: auto;
    }
  }
}
</style>
