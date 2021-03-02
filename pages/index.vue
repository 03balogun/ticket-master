<template>
  <section class="events-section">
    <h1 class="events-section__header">The best events happening now.</h1>
    <ul class="events">
      <app-event-card v-for="i in 8" :key="i" :i="i" />
    </ul>
  </section>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/pages/home';
</style>
