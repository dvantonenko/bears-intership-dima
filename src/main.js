import Vue from 'vue'
import router from './router/router'
import "./styles/styles.css"
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
