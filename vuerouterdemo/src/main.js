import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './router.config.js'
import '../bower_components/animate.css/animate.min.css'
Vue.use(VueRouter);

//生成router实例
var router=new VueRouter(RouterConfig);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
