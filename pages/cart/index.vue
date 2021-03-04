<template>
  <div class="container">
    <main>
      <button
        class="close-button"
        aria-label="close cart"
        @click="$router.back()"
      >
        <close-icon /> Close
      </button>
      <section class="cart-section">
        <app-cart-shimmer v-if="fetchingCurrentEvent" />
        <template v-if="!fetchingCurrentEvent && isFoundEvent">
          <h1 class="cart-section__header">{{ currentEvent.name }}</h1>
          <time
            itemprop="startDate"
            class="cart-section__time"
            :datetime="currentEvent.start_time"
            >{{ currentEvent.start_time | formatDate }}</time
          >
          <app-cart-tickets />
          <span class="cart-section__info"
            >Ticket sales ends on
            <time itemprop="endDate" :datetime="currentEvent.end_time">{{
              currentEvent.end_time | formatDate
            }}</time></span
          >
        </template>
        <app-alert-card v-if="isNotFound" class="mt-30">
          <h1>Event not found</h1>
          <nuxt-link to="/">Go back home</nuxt-link>
        </app-alert-card>
      </section>
      <button
        class="button button--md button--block mt-30 show-summary-button"
        @click="toggleSummarySection"
      >
        Order Summary
      </button>
      <aside
        class="summary-section"
        :class="{ 'show-summary': showSide, 'p-0': fetchingCurrentEvent }"
      >
        <app-shimmer-effect
          v-if="fetchingCurrentEvent"
          :style="{ height: '100%', width: '100%', marginTop: '0' }"
        />
        <template v-if="!fetchingCurrentEvent && isFoundEvent">
          <component
            :is="currentScreen"
            v-bind="currentScreenProperties"
            @switchScreen="switchScreen"
          />
        </template>
      </aside>
    </main>
  </div>
</template>

<script>
import AppCartSummary from '~/components/AppCart/AppCartSummary'
import AppCartCheckout from '~/components/AppCart/AppCartCheckout'
import CloseIcon from '~/assets/images/close-icon.svg?inline'
export default {
  name: 'Cart',
  components: { CloseIcon, AppCartSummary, AppCartCheckout },
  layout: 'blank',
  validate({ query }) {
    return query.id
  },
  data() {
    return {
      showSide: false,
      currentScreen: 'AppCartSummary',
    }
  },
  head() {
    return {
      title: `Tickets - ${this.currentEvent.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.currentEvent.description,
        },
      ],
    }
  },
  computed: {
    currentScreenProperties() {
      if (this.isSummaryScreen) {
        return { 'toggle-display': this.toggleSummarySection }
      }
      return {}
    },
    isSummaryScreen() {
      return this.currentScreen === 'AppCartSummary'
    },
    isFoundEvent() {
      return !this.fetchingCurrentEvent && this.currentEvent.id
    },
    isNotFound() {
      return !this.fetchingCurrentEvent && !this.currentEvent.id
    },
    currentEvent() {
      return this.$store.getters['events/getCurrentEvent']
    },
    fetchingCurrentEvent() {
      return this.$store.getters['events/getFetchingCurrentEvent']
    },
  },
  created() {
    this.fetchEventDetail()
  },
  methods: {
    fetchEventDetail() {
      const eventId = this.$route.query.id
      this.$store.dispatch('events/fetchSingleEvent', eventId)

      // When we have a different event, clear cart
      if (eventId !== this.currentEvent.id) {
        this.$store.dispatch('cart/clearCart')
      }
    },
    toggleSummarySection() {
      this.showSide = !this.showSide
    },
    switchScreen(componentName) {
      this.currentScreen = componentName
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/pages/cart';
</style>
