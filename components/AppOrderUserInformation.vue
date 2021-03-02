<template>
  <form @submit.prevent="">
    <nuxt-link class="back-button" to="/">
      <arrow-left-icon /> <strong>Go back</strong>
    </nuxt-link>
    <hr />
    <app-input
      id="full_name"
      label="Full name"
      name="full_name"
      required
      placeholder=""
    />
    <app-input
      id="email_address"
      label="Email Address"
      name="email_address"
      required
      placeholder=""
    />
    <app-input
      id="phone_number"
      label="Phone Number"
      name="phone_number"
      required
      placeholder=""
    />

    <table class="summary-table">
      <tbody>
        <tr>
          <td>TOTAL PAYMENT</td>
          <td class="total_amount">N111,000</td>
        </tr>
      </tbody>
    </table>
    <button class="button button--md button--block mt-30">PAY N111,000</button>
    <app-order-guarantee v-once />
  </form>
</template>

<script>
import ArrowLeftIcon from '~/assets/images/arrow-left-icon.svg?inline'
export default {
  name: 'AppOrderUserInformation',
  components: { ArrowLeftIcon },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-order-summary.scss';
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
