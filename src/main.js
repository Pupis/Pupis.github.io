// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify, { iconfont: 'mdi' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
