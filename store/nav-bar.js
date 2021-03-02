export const state = () => ({
  isMobileMenuActive: false,
})

export const getters = {
  getIsMobileMenuActive: (state) => state.isMobileMenuActive,
}

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  },
}

export const actions = {
  toggleMobileMenu({ commit, state }, value) {
    commit('SET_STATE', { key: 'isMobileMenuActive', value: !value })
  },
}
