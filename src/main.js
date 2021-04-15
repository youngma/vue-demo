import Vue from 'vue';
import CoreuiVue, { CSwitch, CButton } from '@coreui/vue';
import App from './App.vue';

Vue.use(CoreuiVue);
Vue.component('CButton', CButton);
Vue.component('CSwitch', CSwitch);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
