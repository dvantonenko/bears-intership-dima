import Vue from 'vue'
import router from './router/router'
import "./styles/styles.css"
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store/store/store'
import ImageUploader from 'vue-image-upload-resize'
import modifiedAxios from './axios'
import VueAxios from 'vue-axios'


Vue.use(ImageUploader);
Vue.use(VueAxios, modifiedAxios)

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
Vue.config.productionTip = false
Vue.use(VueSweetalert2,options);

new Vue({
  store ,
  render: h => h(App),
  router
}).$mount('#app')
