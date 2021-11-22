import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMask from 'v-mask'
import money from 'v-money'

Vue.use(VueMask);
Vue.config.productionTip = false
Vue.use(money, {precision: 4})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
