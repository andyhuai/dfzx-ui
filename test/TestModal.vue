<template>
  <div>
    <df-modal
      :visible="visible"
      title="我是标题"
      show-close
      @on-ok="visible = !visible"
      @on-cancel="close"
    >
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
      <div>我是弹窗内容</div>
    </df-modal>
    <el-button @click="visible = !visible">显示弹窗</el-button>
  </div>
</template>

<script>
import DfModal from '../packages/df-modal/DfModal'
export default {
  name: 'TestModal',
  components: { DfModal },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    close() {
      this.visible = false
    }
  }
}
</script>

<style scoped>

</style>
