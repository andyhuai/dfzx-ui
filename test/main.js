import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import VsUI from '../packages'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VsUI)
Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
