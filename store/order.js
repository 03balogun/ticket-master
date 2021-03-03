export const state = () => ({
  isCreating: false,
})

export const getters = {
  getIsCreating: (state) => state.isCreating,
}

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  },
}

export const actions = {
  async createOrder({ commit, state }, payload) {
    commit('SET_STATE', { key: 'isCreating', value: true })
    try {
      const { data } = await this.$axios.$post(`/orders`, payload)
      //
    } catch (e) {
      //
    }
    commit('SET_STATE', { key: 'isCreating', value: false })
  },
}
