// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './plugins/vuetify'
// import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
// import { ValidationProvider, ValidationObserver} from 'vee-validate';

Vue.config.productionTip = false
// Vue.component('ValidationProvider', ValidationProvider);
// Vue.component('ValidationObserver', ValidationObserver);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // vuetify: new Vuetify(
  //   {
  //     icons: {
  //       iconfont: 'fa'
  //     }
  //   }
  // ),
  router,
  components: { App,},
  template: '<App/>'
})
