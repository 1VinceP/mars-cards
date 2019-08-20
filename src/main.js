import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './reset.css';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

/**
 * NOTE (because I can't add comments into package.json):
 * "portfinder" changes added in to run server on port 8080 rather than a random port
 */
