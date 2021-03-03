<template>
  <section class="events-section">
    <h1 class="events-section__header">The best events happening now.</h1>
    <ul class="events">
      <template v-if="isLoadingEvents">
        <app-event-card-shimmer v-for="placeholder in 6" :key="placeholder" />
      </template>

      <template v-if="!isLoadingEvents">
        <app-event-card
          v-for="event in events"
          :key="event.id"
          :event="event"
        />
      </template>
      <template v-if="!isLoadingEvents && events.length === 0">
        <app-alert-card>
          <h2>No events at the moment</h2>
          <button class="button button--md mt-10" @click="loadEvents">
            Refresh
          </button>
        </app-alert-card>
      </template>
    </ul>
    <div v-if="hasMorePage" class="load-more">
      <button
        v-if="!loadingMoreEvents"
        class="load-more__btn"
        :disabled="loadingMoreEvents"
        @click="loadEvents(nextPage)"
      >
        Load more <arrow-right-icon />
      </button>
      <span v-if="loadingMoreEvents" class="load-more__active">Loading...</span>
    </div>
  </section>
</template>

<script>
import ArrowRightIcon from '~/assets/images/arrow-right-icon.svg?inline'
export default {
  components: { ArrowRightIcon },
  computed: {
    events() {
      return this.$store.getters['events/getEvents']
    },
    loadingMoreEvents() {
      return this.$store.getters['events/getLoadingMore']
    },
    pageInfo() {
      return this.$store.getters['events/getPageInfo']
    },
    isLoadingEvents() {
      return this.$store.getters['events/getIsLoadingEvents']
    },
    hasMorePage() {
      return this.pageInfo.currentPage < this.pageInfo.totalPages
    },
    nextPage() {
      return this.pageInfo.currentPage + 1
    },
  },
  created() {
    this.loadEvents()
  },
  methods: {
    loadEvents(page) {
      this.$store.dispatch('events/fetchEvents', page)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/pages/home';
</style>
