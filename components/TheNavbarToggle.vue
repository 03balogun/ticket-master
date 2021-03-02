<template>
  <button
    class="mobile_nav"
    :class="{ 'line-active': isMobileMenuActive }"
    @click="toggleMenu"
  >
    <span class="mobile_nav__line"></span>
    <span class="mobile_nav__line"></span>
    <span class="mobile_nav__line"></span>
  </button>
</template>

<script>
export default {
  name: 'TheNavbarToggle',
  computed: {
    isMobileMenuActive() {
      return this.$store.getters['nav-bar/getIsMobileMenuActive']
    },
  },
  watch: {
    $route(newVal, oldVal) {
      if (this.isMobileMenuActive && newVal.fullPath !== oldVal.fullPath) {
        this.toggleMenu()
      }
    },
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('nav-bar/toggleMobileMenu', this.isMobileMenuActive)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/the-navbar-toggle';
</style>
