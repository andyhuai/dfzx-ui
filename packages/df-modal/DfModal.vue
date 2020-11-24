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
      @open="open"
      @opened="opened"
      class="pub_dialog"
    >
      <div class="content">
        <slot>此处是内容填充区</slot>
      </div>
      <span class="dialog-footer">
        <el-button v-if="showCancelButton" size="medium" @click="onCancel" style="margin-right: 20px">
          {{ cancelButtonLabel }}
        </el-button>
        <el-button v-if="showConfirmButton" :loading="okLoading" :type="confirmButtonType" size="medium" class="btn-ok" @click="onOK">
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
    confirmButtonType: {
      type: String,
      default: 'primary'
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
    },
    open() {
      this.$emit('open')
    },
    opened() {
      this.$emit('opened')
    }
  }
}
</script>
<style scoped lang="scss">
  .btn-ok {
    margin-left: 30px;
  }
  .dialog-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .content {
    overflow: auto;
    flex: 1;
    max-height: calc(100vh - 260px);
  }
</style>
<style lang="scss">
  .main-modal {
    .el-dialog__header {
      background-color: #409EFF;
      color: white;
      padding: 10px 20px 10px;
    }
    .el-dialog__headerbtn {
      top: 13px;
    }
    .el-dialog__title {
      color: white;
    }
    .el-dialog__headerbtn .el-dialog__close {
      color: black;
      font-weight: bold;
    }
    .el-dialog__wrapper {
      //height: 100vh;
      //width: 100vw;
      //display: flex;
      //align-items: center;
      //justify-content: center;
      .el-dialog {
        //margin: 0 auto !important;
        display: flex;
        flex-direction: column;
        .el-dialog__body {
          //max-height: calc(100vh - 200px);
          margin: 20px;
          padding: 0;
          z-index: 1;
          overflow: hidden;
        }
      }
    }
  }
</style>
