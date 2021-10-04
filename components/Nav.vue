<template>
  <nav>
    <ul>
      <li>
        <a
          href="#services"
          :class="{ active: activeEntry === 'services' }"
          @click.prevent="onClick"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#projects"
          :class="{ active: activeEntry === 'projects' }"
          @click.prevent="onClick"
        >
          Projekte
        </a>
      </li>
      <li>
        <a
          href="#profile"
          :class="{ active: activeEntry === 'profile' }"
          @click.prevent="onClick"
        >
          Profil
        </a>
      </li>
      <li>
        <a
          href="#contact"
          :class="{ active: activeEntry === 'contact' }"
          @click.prevent="onClick"
        >
          Kontakt
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    activeEntry: {
      type: String,
      default: '',
    },
    headroom: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onClick(event) {
      this.headroom?.freeze()
      const element = document.querySelector(event.target.getAttribute('href'))
      element.scrollIntoView({ block: 'start', inline: 'nearest' })
      setTimeout(() => this.headroom.unfreeze(), 250)
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  transition: opacity 250ms 250ms, transform 250ms 250ms;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    list-style: none;
    padding: 0;
    @media (min-width: $bp-2) {
      flex-direction: row;
      align-items: unset;
    }
    li {
      a {
        @extend %t-1;
        @extend %underline;

        position: relative;
        &::after {
          opacity: 0;
          transform: scaleX(0);
        }
        &.active {
          &::after {
            transform: scaleX(1);
            opacity: 1;
          }
        }
      }
      &:not(:last-child) {
        @media (min-width: $bp-2) {
          margin: 0 $pad * 2 0 0;
        }
      }
    }
  }
}
</style>
