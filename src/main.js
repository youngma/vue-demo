import Vue from 'vue';
import CoreuiVue from '@coreui/vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { iconsSet as icons } from './assets/icons/icons';

Vue.prototype.$log = console.log.bind(console);
Vue.use(CoreuiVue);
Vue.config.productionTip = false;

new Vue({
  router,
  icons,
  store,
  render: (h) => h(App),
}).$mount('#app');
