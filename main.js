import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

Vue.config.productionTip = false

const app = new Vue({
  router: new Router(),
  render: h => h(App),
}).$mount('#app')

export default app 
