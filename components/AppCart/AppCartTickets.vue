<template>
  <div>
    <table v-if="tickets.length" class="tickets-table">
      <tbody>
        <tr v-for="ticket in tickets" :key="ticket.id">
          <td>{{ ticket.name }}</td>
          <td>{{ ticket.price | currency(ticket.currency) }}</td>
          <td>
            <div class="action">
              <button
                class="action__btn"
                :aria-label="`remove one ${ticket.name} ticket`"
                @click="decrement(ticket)"
              >
                <minus-icon />
              </button>
              <span>{{ getQuantity(ticket) }}</span>
              <button
                class="action__btn"
                :aria-label="`add one more ${ticket.name} tickets`"
                @click="increment(ticket)"
              >
                <plus-icon />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 v-else class="mt-30">Event has no ticket</h3>
  </div>
</template>

<script>
import MinusIcon from '~/assets/images/minus-icon.svg?inline'
import PlusIcon from '~/assets/images/plus-icon.svg?inline'

export default {
  name: 'AppCartTickets',
  components: { MinusIcon, PlusIcon },
  computed: {
    tickets() {
      return this.$store.getters['events/getTickets']
    },
    cartTickets() {
      return this.$store.getters['cart/getCartTickets']
    },
  },
  methods: {
    getQuantity(ticket) {
      return this.cartTickets[ticket.id]?.quantity ?? 0
    },
    increment(ticket) {
      const newQuantity = this.getQuantity(ticket) + 1
      if (newQuantity > ticket.qty_available) {
        this.$notify({
          text: `Sorry you can't add more than ${ticket.qty_available} of "${ticket.name}" tickets`,
          type: 'error',
        })
        return
      }
      this.$store.dispatch('cart/increaseQuantity', ticket)
    },
    decrement(ticket) {
      if (this.getQuantity(ticket) === 0) return
      this.$store.dispatch('cart/decreaseQuantity', ticket)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-cart-tickets.scss';
</style>
