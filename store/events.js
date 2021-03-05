const PAGE_LIMIT = 12

export const state = () => ({
  eventData: {
    events: [],
    pageInfo: {},
  },
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
}

export const actions = {
  async fetchEvents({ commit, state }, page) {
    const { events, pageInfo } = state.eventData

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

      const responseEvents = data.events

      // Make API call to get event tickets
      const ticketRequest = responseEvents.map((event) =>
        this.$axios.$get(`/ticket-types/events/${event.id}`)
      )

      // await response
      const ticketsResponse = await Promise.all(ticketRequest)

      // merge events and tickets
      const eventTickets = responseEvents.map((event, index) => ({
        ...event,
        tickets: ticketsResponse[index]?.data,
      }))

      // When we fetch events from a new page, merge its result with existing
      if (
        pageInfo.currentPage &&
        pageInfo.currentPage !== data.pageInfo.currentPage
      ) {
        const events = [...state.eventData.events, ...eventTickets]
        commit('SET_STATE', {
          key: 'eventData',
          value: { ...data, events },
        })
      } else {
        // When it's a new page, update our state data
        commit('SET_STATE', {
          key: 'eventData',
          value: { ...data, events: eventTickets },
        })
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

      const { data: event } = await this.$axios.$get(`/events/${eventId}`)

      // If the event is not free, fetch event tickets
      if (!event.is_free) {
        const response = await this.$axios.$get(
          `/ticket-types/events/${eventId}`
        )
        event.tickets = response.data
      }
      commit('SET_STATE', { key: 'currentEvent', value: event })
    } catch (e) {
      //
    }
    commit('SET_STATE', { key: 'fetchingCurrentEvent', value: false })
  },
}
