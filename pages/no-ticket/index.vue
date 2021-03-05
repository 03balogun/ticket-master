<template>
  <section class="section-container">
    <p class="description">
      Enter your email and we’ll send your<br />
      tickets right away!
    </p>
    <div class="form">
      <form action="" @submit.prevent="">
        <app-input
          id="email_address"
          label="Email Address"
          placeholder=""
          name="email_address"
        />
        <button class="button button--md button--block">
          CONFIRM AND SEND TICKET
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NoTicket',
  head() {
    return {
      bodyAttrs: {
        class: 'body-bg',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/pages/no-ticket.scss';
</style>
