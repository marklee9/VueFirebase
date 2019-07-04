// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// learning vue filter
Vue.filter('snippet', val => {
  if (!val || typeof val !== 'string') return ''
  val = val.slice(0, 50) + '...'
  return val
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
