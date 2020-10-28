<template>
  <div class="main-modal">
    <el-dialog
      :title="title"
      :visible="visible"
      :width="width"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      destroy-on-close
      :fullscreen="fullscreen"
      :top="top"
      :show-close="showClose"
      @close="onCancel"
      @closed="closed"
    >
      <slot>此处是内容填充区</slot>
      <span slot="footer" class="dialog-footer">
        <el-button v-if="showCancelButton" size="medium" @click="onCancel">
          {{ cancelButtonLabel }}
        </el-button>
        <el-button v-if="showConfirmButton" :loading="okLoading" type="primary" size="medium" class="btn-ok" @click="onOK">
          {{ confirmButtonLabel }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DfModal',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '600px'
    },
    top: {
      type: String,
      default: '10vh'
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    confirmButtonLabel: {
      type: String,
      default: '确 定'
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    cancelButtonLabel: {
      type: String,
      default: '取 消'
    },
    okLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onOK() {
      // 确定
      this.$emit('on-ok')
    },
    onCancel() {
      // 取消
      this.$emit('on-cancel')
      this.$emit('update:visible', false)
    },
    closed() {
      this.$emit('closed')
    }
  }
}
</script>
<style scoped lang="scss">
  .btn-ok {
    margin-left: 30px;
  }
</style>
<style lang="scss">
  .main-modal {
    .el-dialog__header {
      background-color: #409EFF;
      color: white;
    }
    .el-dialog__title {
      color: white;
    }
    .el-dialog__headerbtn .el-dialog__close {
      color: black;
      font-weight: bold;
    }
    .el-dialog__footer {
      text-align: center;
    }
    .el-dialog__body {
      padding: 10px 15px;
    }
    .el-dialog__footer {
      padding: 0 20px 20px;
    }
    .el-dialog{
      display: flex;
      flex-direction: column;
      margin:0 !important;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      /*height:600px;*/
      max-height:calc(100% - 30px);
      max-width:calc(100% - 30px);
    }
    .el-dialog .el-dialog__body{
      flex:1;
      overflow: auto;
    }
  }
</style>
