<template>
  <li class="event">
    <nuxt-link :to="`event?id=${event.id}`">
      <app-shimmer-effect :style="{ height: '231px', width: '100%' }" />
      <!--      <div class="event__cover">-->
      <!--        <img v-if="event.image" :src="event.image" :alt="event.name" />-->
      <!--        <img-->
      <!--          v-else-->
      <!--          src="~assets/images/cover-placeholder.svg"-->
      <!--          :alt="event.name"-->
      <!--        />-->
      <!--      </div>-->
    </nuxt-link>
    <app-shimmer-effect :style="{ height: '14px', width: '98px' }" />
    <app-shimmer-effect :style="{ height: '18px', width: '120px' }" />
    <app-shimmer-effect :style="{ height: '22px', width: '100%' }" />
    <app-shimmer-effect :style="{ height: '14px', width: '129px' }" />
    <time class="event__time mt-20" datetime="8th February 2019"
      >8th February 2019</time
    >
    <h2 class="event__header my-5">
      <nuxt-link :to="`event?id=${event.id}`">{{ event.name }}</nuxt-link>
    </h2>
    <span class="event__amount"> N5000 – N2,000,000 </span>
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
