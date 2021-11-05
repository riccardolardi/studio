<template>
  <section
    id="projects"
    class="page page--projects"
    :class="{ 'is-active': active }"
  >
    <h1>Projekte</h1>
    <p class="subtitle">Web, Apps und mediale Installationen</p>
    <article class="project">
      <div class="project__info">
        <!--
          Digitale Demokratie / Museum
          HSLU / Lehre
          SIA Ordnungstag / Frontend, Live
          Blumline / Frontend
        -->
        <div class="project__info__title">
          <h2>
            Digitale Demokratie,
            <br />
            Web-App & Audio-Guide
          </h2>
          <ul class="contractor-list">
            <li>
              <a
                href="https://www.polit-forum-bern.ch/ausstellung/digitale-demokratie"
                class="external"
                target="_blank"
                rel="noopener"
              >
                Polit-Forum Bern
              </a>
            </li>
            <li>
              <a
                href="https://www.prolog.work"
                class="external"
                target="_blank"
                rel="noopener"
              >
                Prolog AG
              </a>
            </li>
          </ul>
        </div>
        <p>
          Ende April 2021 öffnet die Ausstellung "Digitale Demokratie - Eine
          interaktive Reise in die politische Zukunft" ihre Tore. Auf drei
          Stockwerken sollen Fragestellungen und Forschungsergebnisse zu Themen
          rund um den Einzug Digitaler Technologien in die Politik präsentiert
          werden.
        </p>
        <p>
          Die Basler Web-Agentur Prolog AG wurde mit der Konzeption und
          Entwicklung eines Audio-Guides beauftragt, der die Besucher/in auf
          interaktive Art und Weise durch die Ausstellung führen soll. Für
          Prolog AG durfte ich den Lead für die technische Umsetzung der Web-App
          übernehmen.
        </p>
      </div>
      <div class="project__media">
        <client-only>
          <LazyCarousel class="carousel-container">
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/digitaledemokratie/digitale-demokratie-8.jpg"
                alt="Digitale Demokratie"
                width="1024"
                height="1535"
              />
              <figcaption>
                Die Web-App dient als Audio-Guide und führt den Besucher durch
                die Ausstellung
              </figcaption>
            </figure>
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/digitaledemokratie/digitale-demokratie-39.jpg"
                alt="Digitale Demokratie"
                width="1024"
                height="1535"
              />
              <figcaption>
                Die Vermittlung von Inhalten wird durch zusätzliches Bild-,
                Video- und Audiomaterial medial unterstützt und erweitert
              </figcaption>
            </figure>
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/digitaledemokratie/digitale-demokratie-7.jpg"
                alt="Digitale Demokratie"
                width="1024"
                height="1535"
              />
              <figcaption>
                Eine fiktive Figur kommuniziert mit den Besucher/innen in Form
                eines Chats und begleitet diese/n durch die Ausstellung
              </figcaption>
            </figure>
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/digitaledemokratie/digitale-demokratie-32.jpg"
                alt="Digitale Demokratie"
                width="1024"
                height="1535"
              />
              <figcaption>
                Zusätzliche Informationen, Spiele, Audio und Videos ergänzen den
                Museumsbesuch
              </figcaption>
            </figure>
          </LazyCarousel>
        </client-only>
      </div>
    </article>
    <article class="project">
      <div class="project__info">
        <div class="project__info__title">
          <h2>
            Spatial Design / Media 1
            <br />
            Lehre, Unterrichtsassistenz
          </h2>
          <ul class="contractor-list">
            <li>
              <a
                href="https://www.hslu.ch/en/lucerne-school-of-art-and-design/degree-programmes/bachelor/spatial-design"
                class="external"
                target="_blank"
                rel="noopener"
              >
                Spatial Design Bachelor, HSLU
              </a>
            </li>
            <li>
              <a
                href="https://www.iart.ch"
                class="external"
                target="_blank"
                rel="noopener"
              >
                iart AG
              </a>
            </li>
          </ul>
        </div>
        <p>
          Der Bachelor "Spatial Design" an der Hochschule Luzern lehrt die
          Inszenierung von Räumen mittels Experience Design und digitalen
          Medien. Es wird hinterfragt was Räume sein können, ob und welche
          Grenzen bestehen und wie diese überbrückt werden können.
        </p>
        <p>
          In Kooperation mit der iart AG wurde ein einmonatiges Modul
          unterrichtet welches die Grundlagen der medialen Gestaltung im Raum
          aufgriff. Neben dem Vermitteln von Grundlagen der menschlichen
          Wahrnehmung wurden verschiedene Experimente mittels VR und Physical
          Computing durchgeführt.
        </p>
      </div>
      <div class="project__media">
        <client-only>
          <LazyCarousel class="carousel-container">
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/hslu/hslu-1.jpg"
                alt="HSLU Spatial Design Media 1"
                width="1024"
                height="1535"
              />
              <figcaption>
                Die Student/innen wurden angeleitet Experimente bezüglich
                Sinneswahrnehmung und Medien zu planen und durchzuführen
              </figcaption>
            </figure>
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/hslu/hslu-2.jpg"
                alt="HSLU Spatial Design Media 1"
                width="1024"
                height="1535"
              />
              <figcaption>
                Die Resultate waren vielfältig und reichten von immersiven, für
                Besucher/innen zugänglichen Farbkuben...
              </figcaption>
            </figure>
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/hslu/hslu-3.jpg"
                alt="HSLU Spatial Design Media 1"
                width="1024"
                height="1535"
              />
              <figcaption>
                ...bis hin zu sensorgesteuerten, interaktiven, auf die
                Besucher/innen reagierende Sound- und Lichtinstallationen.
              </figcaption>
            </figure>
          </LazyCarousel>
        </client-only>
      </div>
    </article>
    <article class="project">
      <div class="project__info">
        <div class="project__info__title">
          <h2>
            SIA Ordnungstag 2021
            <br />
            Website zum Beschaffungswesen
            <br />
            und Live-Stream
          </h2>
          <ul class="contractor-list">
            <li>
              <a
                href="https://www.sia.ch"
                class="external"
                target="_blank"
                rel="noopener"
              >
                Schweizerischer Ingenieur- und Architektenverein SIA
              </a>
            </li>
            <li>
              <a
                href="https://www.ronnyhunger.com"
                class="external"
                target="_blank"
                rel="noopener"
              >
                Ronny Hunger Graphic Design
              </a>
            </li>
            <li>
              <a
                href="https://ordnungstag.sia.ch"
                class="external"
                target="_blank"
                rel="noopener"
              >
                https://ordnungstag.sia.ch
              </a>
            </li>
          </ul>
        </div>
        <p>
          Für den Schweizerischen Ingenieur- und Architektenverband SIA durfte
          ich einen neuen Webauftritt zum Thema des Beschaffungswesens
          implementieren. In enger Zusammenarbeit mit dem Grafiker Ronny Hunger
          konnte ein klare, verständliche und doch verspielte Gestaltung
          umgesetzt werden.
        </p>
        <p>
          Zusätzlich zur Nachschlagefunktion beherbergte die Website ebenfalls
          den Live-Stream zur Konferenz des SIA Ordungstages 2021 im
          Kongresshaus Zürich. Dieser wurde auf einer Unterseite per Login den
          angemeldeten Personen zugänglich gemacht.
        </p>
      </div>
      <div class="project__media">
        <client-only>
          <LazyCarousel class="carousel-container">
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/sia/sia-1.png"
                alt="Schweizerischer Ingenieur- und Architektenverein SIA"
                width="1024"
                height="849"
              />
              <figcaption>
                Übersichtsseite mit aktuellen Beiträgen rund um das Thema des
                Beschaffungswesens
              </figcaption>
            </figure>
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/sia/sia-2.png"
                alt="Schweizerischer Ingenieur- und Architektenverein SIA"
                width="1024"
                height="849"
              />
              <figcaption>
                Informationsteil der einzelnen Phasen des Beschaffungswesens
                innerhalb eines Bauvorhabens
              </figcaption>
            </figure>
            <figure class="project__media__item carousel-cell">
              <Img
                src="/images/sia/sia-3.jpg"
                alt="Schweizerischer Ingenieur- und Architektenverein SIA"
                width="1024"
                height="1535"
              />
              <figcaption>
                Der Live-Stream der Konferenz wurde dreisprachig
                simultanübersetzt und über die Website übertragen
              </figcaption>
            </figure>
          </LazyCarousel>
        </client-only>
      </div>
    </article>
  </section>
</template>

<script>
import Img from '~/components/Img'
export default {
  name: 'Projects',
  components: {
    LazyCarousel: () =>
      process.client ? import('../components/LazyCarousel.vue') : null,
    Img,
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
.page--projects {
  .project {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:not(:last-child) {
      margin-bottom: $pad * 4;
    }
    @media (min-width: $bp-2) {
      margin: $pad * 8 0 0;
      flex-direction: row;
    }
    @media (min-width: $bp-4) {
      margin: $pad * 8 -12.5vw 0;
    }
    &:nth-of-type(even) {
      @media (min-width: $bp-2) {
        flex-direction: row-reverse;
      }
      .project__info {
        @media (min-width: $bp-2) {
          padding: 0 0 0 $pad * 4;
        }
      }
      .project__media {
        @media (min-width: $bp-2) {
          padding: 0 $pad * 4 0 0;
        }
      }
    }
    &__info {
      @media (min-width: $bp-2) {
        padding: 0 $pad * 4 0 0;
        width: 60%;
      }
      .contractor-list {
        display: flex;
        flex-direction: column;
        margin: 0.4em 0 0;
        list-style: none;
        padding: 0;
        @extend %t-1;
      }
      &__title {
        margin: 0 0 1em;
        h2 {
          margin: 0;
        }
      }
    }
    &__media {
      width: 100%;
      margin: $pad * 2 0 0;
      @media (min-width: $bp-2) {
        margin: 0;
        padding: 0 0 0 $pad * 4;
        width: 40%;
      }
      &__item {
        figcaption {
          padding: 0 1em 0 0;
        }
      }
    }
  }
}
</style>
