import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueCoreVideoPlayer from 'vue-core-video-player';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.component(VueCoreVideoPlayer);

new Vue({
  render: h => h(App),
}).$mount('#app')
