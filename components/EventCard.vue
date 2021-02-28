<template>
  <li class="event">
    <a href="javascript:">
      <img
        class="event__cover"
        src="~assets/images/event-image1.png"
        alt="The Nathan Cole Experience"
      />
    </a>
    <time class="event__time mt-20" datetime="8th February 2019"
      >8th February 2019</time
    >
    <h2 class="event__header my-5">
      <a href="javascript:">The Nathan Cole Experience</a>
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
  name: 'EventCard',
  props: {
    i: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/event-card';
</style>
