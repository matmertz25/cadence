import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
