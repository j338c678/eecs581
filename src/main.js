// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
//3/28
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
Vue.prototype.$ajax=axios
// import api from './api/index.js'
// Vue.prototype.$api = api
import VueAwesomeSwiper from 'vue-awesome-swiper'
import preview from 'vue-photo-preview'
import 'swiper/dist/css/swiper.css'
import 'vue-photo-preview/dist/skin.css'
import global from './components/common/Global.vue'
//9/21/2019
import {LoadingPlugin} from 'vux'
Vue.use(LoadingPlugin)

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

//const route_testdb = require('./router/routes.js');
// import { route_testdb } from 'router/routes.js'
//Vue.use('/testdb', route_testdb)

//
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(preview)
Vue.use(MintUI)
Vue.use(ElementUI);
Vue.prototype.GLOBAL=global
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
   render: h => h(App),
  components: { App },
  template: '<App/>'
})