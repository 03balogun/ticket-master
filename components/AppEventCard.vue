<template>
  <li class="event">
    <nuxt-link :to="`event/${$slug(event.name)}?id=${event.id}`">
      <div class="event__cover">
        <img v-if="event.image" :src="event.image" :alt="event.name" />
        <img
          v-else
          src="~assets/images/cover-placeholder.svg"
          :alt="event.name"
        />
      </div>
    </nuxt-link>
    <time
      itemprop="startDate"
      class="event__time mt-20"
      :datetime="event.start_time"
      >{{ event.start_time | formatDate }}</time
    >
    <h2 class="event__header my-5">
      <nuxt-link :to="`event/${$slug(event.name)}?id=${event.id}`">{{
        event.name
      }}</nuxt-link>
    </h2>
    <span class="event__amount">
      {{ 5000 | currency }} – {{ 2000000 | currency }}
    </span>
    <span v-if="event.is_sold_out" class="status status--red"> Sold Out </span>
    <span v-if="event.is_free" class="status status--green"> Free </span>
  </li>
</template>

<script>
export default {
  name: 'AppEventCard',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-event-card';
</style>
