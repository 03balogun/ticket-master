<template>
  <nav class="nav-bar mt-24">
    <nuxt-link to="/" class="brand-logo">
      <img src="~assets/images/logo.svg" alt="Flutterwave Logo" />
    </nuxt-link>

    <ul>
      <li>
        <a href="javascript:" class="fw-14 fw-bold">I didn't get a ticket</a>
      </li>
      <li>
        <button class="button button--sm">CREATE YOUR OWN EVENT</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
}
</script>

<style lang="scss" scoped>
.nav-bar {
  max-width: 1175px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    @include reset-list;
    display: flex;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: 38px;
      }

      a {
        color: $primary-black-color;
      }
    }
  }
}
</style>
