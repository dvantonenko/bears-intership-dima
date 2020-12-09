import Vue from 'vue'
import router from './router/router'
import "./styles/styles.css"
import App from './App.vue'
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  store ,
  render: h => h(App),
  router
}).$mount('#app')
