import Vue from 'vue'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

Vue.filter('currency', function (value, currency = 'NGN') {
  if (!value || isNaN(value)) value = 0
  const formatter = new Intl.NumberFormat('en-NG', {
    currency,
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
})

Vue.filter('formatDateTime', function (value) {
  if (!value) value = '--'
  return dayjs(value).format('dddd, MMMM Do YYYY, h:mmA') // Friday, February 8th 2019, 10:00pm
})

Vue.filter('formatDate', function (value) {
  if (!value) value = '--'
  return dayjs(value).format('Do MMMM YYYY') // 16th July, 2020
})

Vue.prototype.$slug = (title) => title.toLowerCase().replace(/ /gi, '-')

Vue.prototype.$getMinMaxTicket = (tickets) => {
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
}
