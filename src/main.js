// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$ajax=axios 
// import api from './api/index.js'
// Vue.prototype.$api = api
import VueAwesomeSwiper from 'vue-awesome-swiper'
import preview from 'vue-photo-preview'
import 'swiper/dist/css/swiper.css'
import 'vue-photo-preview/dist/skin.css'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
