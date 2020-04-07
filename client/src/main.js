import Vue from 'vue'
import App from './App.vue'

//loads bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


//load axios
import axios from "axios";
Vue.prototype.$http = axios;



//load Router
import Router from './route/index'
Vue.config.productionTip = false

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
