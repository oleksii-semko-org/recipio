import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import registerServiceWorkerScript from './services/cache/BrowserInteraction'

registerServiceWorkerScript('load');

Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
