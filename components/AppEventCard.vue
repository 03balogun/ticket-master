<template>
  <li class="event">
    <nuxt-link :to="`event?id=${i}`">
      <div class="event__cover">
        <img
          src="~assets/images/event-image1.png"
          alt="The Nathan Cole Experience"
        />
      </div>
    </nuxt-link>
    <time class="event__time mt-20" datetime="8th February 2019"
      >8th February 2019</time
    >
    <h2 class="event__header my-5">
      <nuxt-link :to="`event?id=${i}`">The Nathan Cole Experience</nuxt-link>
    </h2>
    <span v-if="i !== 2 && i !== 3" class="event__amount">
      N5000 – N2,000,000
    </span>
    <span v-if="i === 2" class="status status--red"> Sold Out </span>
    <span v-if="i === 3" class="status status--green"> Free </span>
  </li>
</template>

<script>
export default {
  name: 'AppEventCard',
  props: {
    i: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/app-event-card';
</style>
