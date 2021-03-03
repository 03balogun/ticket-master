import Vue from 'vue'
import Notifications from 'vue-notification/dist/ssr.js'
// Docs: https://github.com/euvl/vue-notification
Vue.use(Notifications)

export default ({ app }, inject) => {
  inject('notify', Vue.notify)
}
