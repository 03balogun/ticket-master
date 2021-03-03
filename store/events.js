const PAGE_LIMIT = 15

export const state = () => ({
  eventData: {
    events: [],
    pageInfo: {},
  },
  tickets: [],
  currentEvent: {},
  isLoadingEvents: true,
  loadingMore: false,
  fetchingCurrentEvent: true,
})

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  },
}

export const getters = {
  getEvents: ({ eventData }) => eventData.events,
  getPageInfo: ({ eventData }) => eventData.pageInfo,
  getIsLoadingEvents: ({ isLoadingEvents }) => isLoadingEvents,
  getLoadingMore: ({ loadingMore }) => loadingMore,
  getCurrentEvent: ({ currentEvent }) => currentEvent,
  getFetchingCurrentEvent: ({ fetchingCurrentEvent }) => fetchingCurrentEvent,
  getTickets: ({ tickets }) => tickets,
  getMinMaxTicket: ({ tickets }) => {
    if (!tickets || tickets.length === 0) {
      return { min: 0, max: 0 }
    }
    const { currency } = tickets[0]
    const prices = tickets.map((ticket) => ticket.price)
    return {
      currency,
      max: Math.max(...prices),
      min: Math.min(...prices),
    }
  },
}

export const actions = {
  async fetchEvents({ commit, state }, page) {
    const { events, pageInfo } = state.eventData

    // When page number is not set and we have records, abort reloading
    if (!page && events.length > 0) return

    // Only signal loading if events data is empty
    if (events.length === 0) {
      commit('SET_STATE', { key: 'isLoadingEvents', value: true })
    }

    // When loading a new
    if (page && page > 1) {
      commit('SET_STATE', { key: 'loadingMore', value: true })
    }

    try {
      const { data } = await this.$axios.$get('/events', {
        params: {
          limit: PAGE_LIMIT,
          page,
        },
      })

      // When we fetch events from a new page, merge its result with existing
      if (
        pageInfo.currentPage &&
        pageInfo.currentPage !== data.pageInfo.currentPage
      ) {
        const events = [...state.eventData.events, ...data.events]
        commit('SET_STATE', {
          key: 'eventData',
          value: { ...data, events },
        })
      } else {
        // When it's a new page, update our state data
        commit('SET_STATE', { key: 'eventData', value: data })
      }
    } catch (e) {
      //
    }

    commit('SET_STATE', { key: 'isLoadingEvents', value: false })
    commit('SET_STATE', { key: 'loadingMore', value: false })
  },
  async fetchSingleEvent({ commit, state }, eventId) {
    // When the eventId is same with current event return abort
    if (parseInt(eventId) === state.currentEvent.id) return

    try {
      commit('SET_STATE', { key: 'fetchingCurrentEvent', value: true })

      // reset ticket data
      commit('SET_STATE', { key: 'tickets', value: [] })

      const { data: event } = await this.$axios.$get(`/events/${eventId}`)

      // If the event is not free, fetch event tickets
      if (!event.is_free) {
        const response = await this.$axios.$get(
          `/ticket-types/events/${eventId}`
        )
        commit('SET_STATE', { key: 'tickets', value: response.data })
      }
      commit('SET_STATE', { key: 'currentEvent', value: event })
    } catch (e) {
      //
    }
    commit('SET_STATE', { key: 'fetchingCurrentEvent', value: false })
  },
}
