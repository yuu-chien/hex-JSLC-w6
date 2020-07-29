import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/all.scss';
import thousandsFilter from './filters/thousands';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('thousands', thousandsFilter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
