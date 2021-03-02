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
        this.$router.replace(`/event?id=${this.$route.query.id}`)
      }
    },
  },
  created() {
    this.$store.dispatch('modal/setModal', {
      closeable: false,
      isOpen: true,
      component: 'AppModalRegister',
      headerText: 'REGISTER FOR FREE',
    })
  },
}
</script>

<style scoped></style>
