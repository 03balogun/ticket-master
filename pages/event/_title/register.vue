<template>
  <div></div>
</template>

<script>
export default {
  name: 'Register',
  computed: {
    modal() {
      return this.$store.getters['modal/getModal']
    },
  },
  watch: {
    modal(newVal, oldVal) {
      if (!newVal.isOpen) {
        this.$router.replace(
          `/event/${this.$route.params.title}?id=${this.$route.query.id}`
        )
      }
    },
  },
  created() {
    this.$store.dispatch('modal/setModal', {
      closeable: true,
      isOpen: true,
      component: 'AppModalRegister',
      headerText: 'REGISTER FOR FREE',
    })
  },
}
</script>

<style scoped></style>
