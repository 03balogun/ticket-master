<template>
  <section class="registration-container">
    <form v-if="!isSuccess" class="form" action="" @submit.prevent="">
      <app-input
        id="full_name"
        label="Full name"
        name="full_name"
        placeholder=""
        required
      />
      <app-input
        id="email_address"
        type="email"
        label="Email Address"
        name="email_address"
        placeholder=""
        required
      />
      <app-input
        id="phone_number"
        type="tel"
        label="Phone Number"
        name="phone_number"
        placeholder=""
        required
      />

      <button class="button button--md button--block" @click="changeToSuccess">
        Register
      </button>
    </form>
    <div v-else class="success-screen">
      <circle-check />
      <p>You have successfully registered for the nathan cole experience.</p>
    </div>
  </section>
</template>

<script>
import CircleCheck from '~/assets/images/check-circle.svg?inline'
export default {
  name: 'AppModalRegister',
  components: {
    CircleCheck,
  },
  data() {
    return {
      isSuccess: false,
    }
  },
  computed: {
    modal() {
      return this.$store.getters['modal/getModal']
    },
  },
  methods: {
    changeToSuccess() {
      this.$store.dispatch('modal/setModal', {
        ...this.modal,
        closeable: true,
        headerText: '',
      })
      this.isSuccess = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-modal-register';
</style>
