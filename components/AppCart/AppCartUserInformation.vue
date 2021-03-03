<template>
  <form @submit.prevent="makePayment">
    <a
      href="javascript:"
      class="back-button"
      aria-label="Back to cart summary screen"
      @click="$emit('switchScreen', 'AppCartSummary')"
    >
      <arrow-left-icon /> <strong>Go back</strong>
    </a>

    <hr />

    <app-input
      id="full_name"
      v-model="formData.name"
      label="Full name"
      name="full_name"
      required
      placeholder=""
      :disabled="isCreating"
    />
    <app-input
      id="email_address"
      v-model="formData.email"
      type="email"
      label="Email Address"
      name="email_address"
      required
      placeholder=""
      :disabled="isCreating"
    />
    <app-input
      id="phone_number"
      v-model="formData.phone"
      type="tel"
      label="Phone Number"
      name="phone_number"
      required
      placeholder=""
      :disabled="isCreating"
    />

    <table class="summary-table">
      <tbody>
        <tr>
          <td>TOTAL PAYMENT</td>
          <td class="total_amount">
            {{ totalAmount | currency(ticketCurrency) }}
          </td>
        </tr>
      </tbody>
    </table>
    <button
      :disabled="isCreating"
      class="button button--md button--block mt-30"
    >
      <span v-if="!isCreating">
        PAY {{ totalAmount | currency(ticketCurrency) }}
      </span>
      <span v-else> Please wait... </span>
    </button>
    <app-cart-guarantee v-once />
  </form>
</template>

<script>
import ArrowLeftIcon from '~/assets/images/arrow-left-icon.svg?inline'
export default {
  name: 'AppCartUserInformation',
  components: { ArrowLeftIcon },
  data() {
    return {
      formData: {
        email: '',
        phone: '',
        name: '',
      },
    }
  },
  computed: {
    paymentData() {
      return {
        class: 'button button--md button--block mt-30',
        tx_ref: this.generateReference(),
        amount: this.totalAmount,
        currency: this.ticketCurrency,
        payment_options: 'card',
        customer: {
          ...this.formData,
          phone_number: this.formData.phone,
        },
        customizations: {
          title: 'Ticket Master',
          description: `${this.currentEvent.name} - ${this.totalQuantity} ticket(s)`,
          logo: 'https://flutterwave.com/images/logo-colored.svg',
        },
        callback: this.makePaymentCallback,
        onclose: this.paymentModalClose,
      }
    },
    currentEvent() {
      return this.$store.getters['events/getCurrentEvent']
    },
    isCreating() {
      return this.$store.getters['order/getIsCreating']
    },
    isEmptyCart() {
      return this.$store.getters['cart/getIsEmptyCart']
    },
    totalQuantity() {
      return this.$store.getters['cart/getTotalQuantity']
    },
    totalAmount() {
      return this.$store.getters['cart/getTotalAmount']
    },
    subTotalAmount() {
      return this.$store.getters['cart/getSubTotalAmount']
    },
    ticketCurrency() {
      return this.$store.getters['cart/getTicketCurrency']
    },
    vat() {
      return this.$store.getters['cart/getVat']
    },
    cartTickets() {
      return this.$store.getters['cart/getCartTickets']
    },
  },
  methods: {
    async makePayment() {
      await this.asyncPayWithFlutterwave(this.paymentData)
    },
    makePaymentCallback() {
      this.$notify({
        text: `Payment was successful, thank you for choosing ticket master`,
        type: 'success',
      })
      // clear cart
      this.$store.dispatch('cart/clearCart')
      // redirect home
      this.$router.push('/')
    },
    paymentModalClose() {
      //
    },
    generateReference() {
      return new Date().getTime().toString()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~~/assets/scss/components/app-cart-summary.scss';
.summary-table {
  margin-top: 40px;
}
.back-button {
  display: flex;
  align-items: center;

  svg {
    transition: all 400ms;
    stroke: $primary-black-color;
    margin-right: 7px;
  }

  &:hover {
    svg {
      stroke: $primary-color;
      transition: all 400ms;
    }
  }
}
</style>
