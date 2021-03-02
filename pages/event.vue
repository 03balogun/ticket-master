<template>
  <div class="event">
    <article class="article">
      <time
        itemprop="startDate"
        class="article__time"
        datetime="8th February 2019"
        >8th February 2019</time
      >
      <h1 class="article__header" itemprop="startDate">
        The Nathan Cole Experience
      </h1>
      <p class="article__description">
        Two-Time Grammy Award winner, Nathaniel Cole, who’s also just released
        an album, Into The Wild, will be having his first concert in Lagos,
        Nigeria! Fans have waited so long for this announcement, and it promises
        to be everything anyone has imagined.
      </p>
      <strong class="article__amount">N5000 – N2,000,000</strong>
      <button class="button button--md" @click="gotoCart">Buy Tickets</button>
    </article>
    <img
      class="event__photo"
      src="~assets/images/event-image-bg.png"
      alt="The Nathan Cole Experience cover photo"
    />
    <hr class="line" />
    <section class="detail">
      <h4 class="detail__label">VENUE</h4>
      <p class="detail__description">
        Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island, Lagos.
      </p>
      <a href="javascript:" class="detail__map">
        <map-icon /> View map for directions
      </a>
    </section>
    <div class="additional-detail">
      <section class="detail">
        <h4 class="detail__label">DATE AND TIME</h4>
        <p class="detail__description">Friday, February 8th 2019, 10:00pm</p>
      </section>
      <section class="detail mt-10">
        <h4 class="detail__label">SOCIAL LINKS</h4>
        <ul>
          <li>
            <a href="javascript:"> http://www.nathanielcole.com </a>
          </li>
          <li>
            <a href="javascript:">https://twitter.com/nathanielcole</a>
          </li>
          <li>
            <a href="javascript:">https://instagram.com/nathanielcole/</a>
          </li>
        </ul>
      </section>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import MapIcon from '~/assets/images/map-icon.svg?inline'
export default {
  name: 'EventDetail',
  components: { MapIcon },
  // validate({ query }) {
  //   return query.id
  // },
  head() {
    return {
      bodyAttrs: {
        class: ['body-bg'],
      },
    }
  },
  methods: {
    gotoCart() {
      this.$router.push(`/cart?id=${this.$route.query.id}`)
    },
    gotoRegister() {
      this.$router.push(
        `${this.$route.path}/register?id=${this.$route.query.id}`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/pages/event';
</style>
