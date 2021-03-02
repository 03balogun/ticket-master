<template>
  <header>
    <nav class="nav-bar">
      <nuxt-link to="/" class="brand-logo">
        <img src="~assets/images/logo.svg" alt="Flutterwave Logo" />
      </nuxt-link>

      <the-navbar-toggle />

      <ul :class="{ 'menu-active': isMobileMenuActive }">
        <li>
          <nuxt-link to="/no-ticket" class="fw-14 fw-bold"
            >I didn't get a ticket</nuxt-link
          >
        </li>
        <li>
          <button class="button button--sm">CREATE YOUR OWN EVENT</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    isMobileMenuActive() {
      return this.$store.getters['nav-bar/getIsMobileMenuActive']
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/the-navbar';
</style>
