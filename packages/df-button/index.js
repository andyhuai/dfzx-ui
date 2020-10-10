import DfButton from './src/df-button.vue'
// 为组件提供 install 安装方法，供按需引入
DfButton.install = function(Vue) {
  Vue.component(DfButton.name, DfButton)
}
export default DfButton
