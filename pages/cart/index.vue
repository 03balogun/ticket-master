<template>
  <div class="container">
    <main>
      <button
        class="close-button"
        aria-label="close cart"
        @click="$router.push('/')"
      >
        <close-icon /> Close
      </button>
      <section class="cart-section">
        <h1 class="cart-section__header">The Nathan Cole Experience</h1>
        <time class="cart-section__time" datetime="8th February 2019"
          >8th February 2019</time
        >
        <table class="tickets-table">
          <tbody>
            <tr>
              <td>Regular</td>
              <td>N5000</td>
              <td>
                <div class="action">
                  <button class="action__btn" aria-label="decrease item">
                    <minus-icon />
                  </button>
                  <span>3</span>
                  <button class="action__btn" aria-label="increase item">
                    <plus-icon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>VIP</td>
              <td>N5000</td>
              <td>
                <div class="action">
                  <button class="action__btn" aria-label="decrease item">
                    <minus-icon />
                  </button>
                  <span>3</span>
                  <button class="action__btn" aria-label="increase item">
                    <plus-icon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Table for 5</td>
              <td>N5000</td>
              <td>
                <div class="action">
                  <button class="action__btn" aria-label="decrease item">
                    <minus-icon />
                  </button>
                  <span>3</span>
                  <button class="action__btn" aria-label="increase item">
                    <plus-icon />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <span class="cart-section__info"
          >Ticket sales ends on 22nd November 2019</span
        >
      </section>
      <button
        class="button button--md button--block mt-30 show-summary-button"
        @click="toggleSummarySection"
      >
        Order Summary
      </button>
      <aside class="summary-section" :class="{ 'show-summary': showSide }">
        <app-order-summary :toggle-display="toggleSummarySection" />
        <!--      <app-order-user-information />-->
      </aside>
    </main>
  </div>
</template>

<script>
import CloseIcon from '~/assets/images/close-icon.svg?inline'
import MinusIcon from '~/assets/images/minus-icon.svg?inline'
import PlusIcon from '~/assets/images/plus-icon.svg?inline'
export default {
  name: 'Cart',
  components: { CloseIcon, MinusIcon, PlusIcon },
  layout: 'blank',
  data() {
    return {
      showSide: false,
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
    currentEvent() {
      return this.$store.getters['events/getCurrentEvent']
    },
  },
  methods: {
    toggleSummarySection() {
      this.showSide = !this.showSide
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~~/assets/scss/pages/cart';
</style>
