export const state = () => ({
  modal: {
    closeable: true,
    isOpen: false,
    data: null,
    size: '',
    headerText: '',
  },
})

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  },
}

export const getters = {
  getModal: (state) => state.modal,
}

export const actions = {
  setModal({ commit, state }, value) {
    commit('SET_STATE', { key: 'modal', value })
  },
}
