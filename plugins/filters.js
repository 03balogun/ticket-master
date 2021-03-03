import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('currency', function (value) {
  if (!value || isNaN(value)) value = 0;
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
});

Vue.filter('formatDateTime', function (value) {
  if (!value) value = '--';
  return dayjs(value).format('D MMM, YYYY h:mmA'); // 16 Jul, 2020 2:00PM
});
