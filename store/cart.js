/**
 * @getPropertyTotal get the to value of a property from an object
 * @param records
 * @param property
 * @returns {unknown}
 */
const getPropertyTotal = (records, property) => {
  const items = Object.values(records)
  return items.reduce(
    (previousValue, currentValue) => previousValue + currentValue[property],
    0
  )
}

export const state = () => ({
  cartTickets: {},
  vat: 1000,
})

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value
  },
}

export const getters = {
  getCartTickets: (state) => state.cartTickets,
  getVat: (state) => state.vat,
  getTotalQuantity: (state) => {
    return getPropertyTotal(state.cartTickets, 'quantity')
  },
  getIsEmptyCart: (_, getters) => {
    return getters.getTotalQuantity < 1
  },
  getSubTotalAmount: (state) => {
    return getPropertyTotal(state.cartTickets, 'totalPrice')
  },
  getTotalAmount(_, getters) {
    return getters.getSubTotalAmount + getters.getVat
  },
  getTicketCurrency(_, getters) {
    const tickets = Object.values(getters.getCartTickets)
    // determine currency from first item of the ticket
    return tickets[0]?.currency ?? 'NGN'
  },
}

export const actions = {
  increaseQuantity({ dispatch, commit, state, getters }, ticket) {
    /**
     * We adding new properties to ticket schema
     * - quantity: Total item selected
     * - totalPrice: quantity * ticket price
     */

    // Get selected ticket from cart
    const cartTicket = state.cartTickets[ticket.id]

    // Set new ticket quantity
    const quantity = cartTicket ? cartTicket.quantity + 1 : 1

    // If ticket doesn't already exist in cart, add it
    if (!cartTicket) {
      const totalPrice = quantity * ticket.price
      dispatch('updateTicket', { ticket, quantity, totalPrice })
      return
    }

    // When ticket already exist update the price and quantity
    const totalPrice = quantity * cartTicket.price

    dispatch('updateTicket', { ticket, quantity, totalPrice })
  },
  decreaseQuantity({ dispatch, commit, state, getters }, ticket) {
    // Get selected ticket from cart
    const cartTicket = state.cartTickets[ticket.id]

    // When ticket isn't already added abort
    if (!cartTicket) return

    // Remove one from ticket, update the price and quantity
    const quantity = cartTicket.quantity - 1
    const totalPrice = quantity * cartTicket.price

    dispatch('updateTicket', { ticket, quantity, totalPrice })
  },
  updateTicket({ commit, state }, { ticket, ...properties }) {
    commit('SET_STATE', {
      key: 'cartTickets',
      value: {
        ...state.cartTickets,
        [ticket.id]: { ...ticket, ...properties },
      },
    })
  },
  clearCart({ commit }) {
    commit('SET_STATE', {
      key: 'cartTickets',
      value: {},
    })
  },
}
