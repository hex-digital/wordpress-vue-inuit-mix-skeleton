import Vue from 'vue';

Vue.filter('toFixed', (value, precision = 2) => parseFloat(parseFloat(value).toFixed(precision)));
