<template>
  <section
    id="contact"
    class="page page--contact"
    :class="{ 'is-active': active }"
  >
    <h1>Kontakt</h1>
    <p class="subtitle">Erreichbar über alles ausser Fax</p>
    <p>
      Riccardo Lardi
      <br />
      Schertlingasse 3
      <br />
      4051 Basel
      <br />
      Schweiz
    </p>
    <a href="tel:0041793396538">+41 (0)79 339 65 38</a>
    <a href="mailto:hello@riccardolardi.com">hello@riccardolardi.com</a>
    <br />
    <a
      href="https://www.linkedin.com/in/riccardolardi"
      target="_blank"
      rel="noopener"
      class="external"
    >
      LinkedIn
    </a>
    <a
      href="https://twitter.com/riccardolardi"
      target="_blank"
      rel="noopener"
      class="external"
    >
      Twitter
    </a>
    <a
      href="https://github.com/riccardolardi"
      target="_blank"
      rel="noopener"
      class="external"
    >
      GitHub
    </a>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.page--contact {
  a {
    align-self: flex-start;
  }
}
</style>
