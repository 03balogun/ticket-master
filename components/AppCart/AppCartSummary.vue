<template>
  <div>
    <div class="header">
      <button class="back-button" aria-label="go back" @click="toggleDisplay">
        <arrow-left-icon />
      </button>
      <strong>ORDER SUMMARY</strong>
    </div>
    <hr />
    <div class="summary-table-container">
      <table class="summary-table">
        <tbody v-if="!isEmptyCart">
          <template v-for="ticket in cartItems">
            <tr v-if="ticket.quantity !== 0" :key="ticket.id">
              <td>{{ ticket.quantity }} - {{ ticket.name }}</td>
              <td>{{ ticket.totalPrice | currency(ticketCurrency) }}</td>
            </tr>
          </template>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="2" class="text-center">You have no items in cart</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <table v-if="!isEmptyCart" class="summary-table">
      <tbody>
        <tr>
          <td>Total Tickets</td>
          <td>{{ totalQuantity }}</td>
        </tr>
        <tr>
          <td>Sub-total</td>
          <td>{{ subTotalAmount | currency(ticketCurrency) }}</td>
        </tr>
        <tr>
          <td>VAT</td>
          <td>{{ vat | currency(ticketCurrency) }}</td>
        </tr>
        <tr>
          <td>TOTAL PAYMENT</td>
          <td class="total_amount">
            {{ totalAmount | currency(ticketCurrency) }}
          </td>
        </tr>
      </tbody>
    </table>
    <button
      v-if="!isEmptyCart"
      class="button button--md button--block mt-30"
      @click="$emit('switchScreen', 'AppCartUserInformation')"
    >
      Continue
    </button>
    <app-cart-guarantee v-once />
  </div>
</template>

<script>
import ArrowLeftIcon from '~/assets/images/arrow-left-icon.svg?inline'
export default {
  name: 'AppCartSummary',
  components: { ArrowLeftIcon },
  props: {
    toggleDisplay: {
      type: Function,
      required: true,
    },
  },
  computed: {
    vat() {
      return this.$store.getters['cart/getVat']
    },
    isEmptyCart() {
      return this.$store.getters['cart/getIsEmptyCart']
    },
    totalQuantity() {
      return this.$store.getters['cart/getTotalQuantity']
    },
    subTotalAmount() {
      return this.$store.getters['cart/getSubTotalAmount']
    },
    totalAmount() {
      return this.$store.getters['cart/getTotalAmount']
    },
    cartItems() {
      return this.$store.getters['cart/getCartTickets']
    },
    ticketCurrency() {
      return this.$store.getters['cart/getTicketCurrency']
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-cart-summary.scss';
</style>
