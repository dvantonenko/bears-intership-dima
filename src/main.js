import Vue from 'vue'
import router from './router/router'
import "./styles/styles.css"
import App from './App.vue'
import store from './store/store/store'

import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)


new Vue({
  store ,
  render: h => h(App),
  router
}).$mount('#app')
