import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
Vue.config.productionTip = false

Vue.use(VueAxios, Axios)
new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
