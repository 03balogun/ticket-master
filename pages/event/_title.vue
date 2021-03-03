<template>
  <div class="event">
    <app-event-detail-shimmer v-if="fetchingCurrentEvent" />
    <template v-if="isFoundEvent">
      <article class="article">
        <time
          itemprop="startDate"
          class="article__time"
          :datetime="currentEvent.start_time"
          >{{ currentEvent.start_time | formatDate }}</time
        >

        <h1 class="article__header" itemprop="startDate">
          {{ currentEvent.name }}
        </h1>
        <p class="article__description">
          {{ currentEvent.description }}
        </p>
        <strong v-if="!isFreeEvent" class="article__amount"
          >{{ minMaxTicket.min | currency(minMaxTicket.currency) }} –
          {{ minMaxTicket.max | currency(minMaxTicket.currency) }}</strong
        >
        <button class="button mt-30 button--md" @click="proceed">
          {{ isFreeEvent ? 'Register For Free' : 'Buy Tickets' }}
        </button>
      </article>
      <img
        v-if="currentEvent.image"
        class="event__photo"
        :src="currentEvent.image"
        :alt="currentEvent.name"
      />
      <img
        v-else
        class="event__photo"
        src="~assets/images/cover-placeholder.svg"
        :alt="currentEvent.name"
      />
      <hr class="line" />
      <section class="detail">
        <h4 class="detail__label">VENUE</h4>
        <p class="detail__description">
          {{ currentEvent.venue }}
        </p>
        <a href="javascript:" class="detail__map">
          <map-icon /> View map for directions
        </a>
      </section>
      <div class="additional-detail">
        <section class="detail">
          <h4 class="detail__label">DATE AND TIME</h4>
          <p class="detail__description">
            {{ currentEvent.start_time | formatDateTime }}
          </p>
        </section>
        <section class="detail mt-10">
          <h4 class="detail__label">SOCIAL LINKS</h4>
          <ul>
            <li>
              <a href="javascript:"> http://www.dummy-link.com </a>
            </li>
            <li>
              <a href="javascript:">https://twitter.com/dummy-link</a>
            </li>
            <li>
              <a href="javascript:">https://instagram.com/dummy-link/</a>
            </li>
          </ul>
        </section>
      </div>
    </template>
    <app-alert-card v-if="isNotFound">
      <h1>Event not found</h1>
      <nuxt-link to="/">Go back home</nuxt-link>
    </app-alert-card>
    <nuxt-child />
  </div>
</template>

<script>
import MapIcon from '~/assets/images/map-icon.svg?inline'
export default {
  name: 'EventDetail',
  components: { MapIcon },
  head() {
    return {
      title: `${this.currentEvent.name} - Ticket Master`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.currentEvent.description,
        },
      ],
      bodyAttrs: {
        class: ['body-bg'],
      },
    }
  },
  computed: {
    isFoundEvent() {
      return !this.fetchingCurrentEvent && this.currentEvent.id
    },
    isNotFound() {
      return !this.fetchingCurrentEvent && !this.currentEvent.id
    },
    isFreeEvent() {
      return this.currentEvent.is_free
    },
    minMaxTicket() {
      return this.$store.getters['events/getMinMaxTicket']
    },
    fetchingCurrentEvent() {
      return this.$store.getters['events/getFetchingCurrentEvent']
    },
    currentEvent() {
      return this.$store.getters['events/getCurrentEvent']
    },
  },
  created() {
    this.fetchEventDetail()
  },
  methods: {
    fetchEventDetail() {
      this.$store.dispatch('events/fetchSingleEvent', this.$route.query.id)
    },
    proceed() {
      const idString = `?id=${this.$route.query.id}`
      if (this.isFreeEvent) {
        this.$router.push(`${this.$route.path}/register${idString}`)
        return
      }
      this.$router.push(`/cart${idString}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/pages/event';
</style>
