import Vue from 'vue'
import App from './App.vue'

import componentsBox from '../plugins/index'
Vue.use(componentsBox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/**
 * 注：构建npm包，需将下述文件放在 .gitignore
 * src/
 plugins/
 public/
 vue.config.js
 babel.config.js
 *.map
 *.html
 *
 * */