import VuexPersistence from 'vuex-persist'
import Cookies from 'js-cookie'

export default ({ store }) => {
  new VuexPersistence({
    key: 'tm_',
    restoreState: (key) => Cookies.getJSON(key),
    saveState: (key, state) =>
      Cookies.set(key, state, {
        expires: 3,
      }),
    reducer: (state) => ({ cart: state.cart }),
  }).plugin(store)
}
