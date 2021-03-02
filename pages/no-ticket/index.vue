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
    <!--    <div class="success-container">-->
    <!--      <circle-check />-->
    <!--      <p>-->
    <!--        Your tickets have been confirmed and<br />-->
    <!--        sent to your email address at<br />-->
    <!--        <a href="mailto:ted@flutterwave.com">ted@flutterwave.com</a>-->
    <!--      </p>-->
    <!--      <button class="button button&#45;&#45;block button&#45;&#45;md">BUY MORE TICKETS</button>-->
    <!--    </div>-->
  </section>
</template>

<script>
// import CircleCheck from '~/assets/images/check-circle.svg?inline'

export default {
  name: 'NoTicket',
  // components: { CircleCheck },
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
.section-container {
  height: calc(100vh - 225px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
}

.description {
  @include fs-24;
  text-align: center;
  margin-bottom: 13px;
  font-weight: 700;
}

.form,
.success-container {
  width: 470px;
  min-height: 253px;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 51px;
}

.success-container {
  min-height: 519px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 56px 0 34px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.065em;
    a {
      color: #2d9cdb;
    }
  }
}

@media (max-width: 768px) {
  .section-container {
    height: auto;
    width: 100%;
    margin-top: 25px;
  }
  .success-container,
  .form {
    width: 100%;
    padding: 30px;
  }
}
</style>
