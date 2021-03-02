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
        <tbody>
          <tr>
            <td>2 - Regular</td>
            <td>N10,000</td>
          </tr>
          <tr>
            <td>1 - Regular</td>
            <td>N10,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <table class="summary-table">
      <tbody>
        <tr>
          <td>Sub-total</td>
          <td>N110,000</td>
        </tr>
        <tr>
          <td>VAT</td>
          <td>N1,000</td>
        </tr>
        <tr>
          <td>TOTAL PAYMENT</td>
          <td class="total_amount">N111,000</td>
        </tr>
      </tbody>
    </table>
    <button class="button button--md button--block mt-30">Continue</button>
    <app-order-guarantee v-once />
  </div>
</template>

<script>
import ArrowLeftIcon from '~/assets/images/arrow-left-icon.svg?inline'
export default {
  name: 'AppOrderSummary',
  components: { ArrowLeftIcon },
  props: {
    toggleDisplay: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-order-summary.scss';
</style>
