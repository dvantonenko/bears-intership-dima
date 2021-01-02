import Vue from 'vue'
import router from './router/router'
import "./styles/styles.css"
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store/store/store'
import Amplify, * as AmplifyModules from 'aws-amplify'
import {AmplifyPlugin} from "aws-amplify-vue"
import '@aws-amplify/ui-vue';
import ImageUploader from 'vue-image-upload-resize'

Vue.use(ImageUploader);
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "us-east-2",
    userPoolId: "us-east-2_01glTZJsL",
    userPoolWebClientId: "6bttq2iufsqmjdp0dmpjnsr3bu"
  }
})
Vue.use(AmplifyPlugin, AmplifyModules)

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
