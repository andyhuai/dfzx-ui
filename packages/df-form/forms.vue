<template>
  <el-card class="elcard">
    <div slot="header" class="clearfix">
      <span>表单设计</span>
      <el-button style="float: right; padding: 3px 0;margin-left:5px" type="text" @click="save">保存</el-button>
      <el-button style="float: right; padding: 3px 0;margin-left:5px" type="text" @click="preview">预览</el-button>
      <el-button style="float: right; padding: 3px 0;margin-left:5px" type="text" @click="()=>this.$emit('downloadVue')">下载源码</el-button>
    </div>
    <div
      class="elcardzz"
      :style="styleCard"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="dropfun"
      @dragover.prevent
    />
    <!-- <span>{{leftDrag}} {{drag2}} {{startIndex}} {{endIndex}}</span> -->
    <div class="forms-content">
      <!-- 从左侧拖动条目到中间时候显示高亮的横线 -->
      <div v-if="hxindex === -1" class="hxdiv" />
      <el-form
        :model="from"
        :label-position="formSetting.labelPosition"
        :label-width="formSetting.labelWidth+'px'"
        :size="formSetting.formSize"
      >
        <el-row :gutter="10">
          <el-col v-for="(item,index) in fromData" :key="index" :span="item.col">
            <div
              class="form-item"
              :style="{'background': startIndex === index ? 'rgba(255,0,0,0.2)' : endIndex === index ? 'rgba(0,0,255,0.2)' :''}"
            >
              <div
                class="form-item2"
                :style="{...styleitem,border: actId === item.id ? '1px solid red' : ''}"
                draggable="true"
                @dragstart="dragstart(index,item)"
                @dragend="dragend(index)"
                @dragover="dragover2(index)"
                @dragleave="dragleave2(index)"
                @drop="dropfun2(index)"
                @dragover.prevent
                @click="clickItem(item)"
              >
                <!-- <div class="form-itemzz"></div> -->
                <div v-if="hxindex === index" class="hxdiv" />

                <el-form-item
                  v-if="['Divider','p'].indexOf(item.type) === -1 "
                  v-model="from[item.key]"
                  :label="item.name"
                  :prop="item.key"
                  :rules="item.rules"
                >
                  <FormItem :item="item" :form="from" />
                </el-form-item>
                <el-divider v-if="item.type === 'Divider'" :content-position="item.contentPosition">{{ item.text }}</el-divider>
                <p
                  v-if="item.type === 'p'"
                  :style="{'text-align': item.contentPosition,'font-size':item.fontsize+'px',color:item.textColor}"
                >{{ item.text }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div v-if="hxindex === -2" class="hxdiv" />
    </div>
    <!-- <el-button @click="sub">sub</el-button> -->
  </el-card>
</template>

<script>
import FormItem from './formitem'
import Constants from './constants'
export default {
  name: 'Forms',
  components: {
    FormItem
  },
  // 是否正在拖动组件
  props: {
    leftDrag: {
      type: String,
      default: () => {
        return Constants.LEFT_DRAG_IDLE
      }
    },
    centerDrag: {
      type: String,
      default: () => {
        return Constants.CENTER_DRAG_IDLE
      }
    },
    fromData: {
      type: Array,
      default: () => {
        return [{ name: '111' }]
      }
    },
    formSetting: {
      type: Object,
      default: () => {
        return {
          labelPosition: 'left',
          labelWidth: 80,
          formSize: 'small'
        }
      }
    },
    // 左侧正在被拖动的组件
    com: {
      type: Object,
      default() {
        return {}
      }
    },
    height: {
      type: Number,
      default: () => {
        return 600
      }
    }
  },
  data() {
    return {
      startIndex: -1,
      endIndex: -1,
      // 表单的值
      from: {},
      // -3 为没有 -2 为大的div的下面 -1 为大的div的上面  其他为 小组件
      hxindex: -3,
      // 被点击选中的id值
      actId: '0'
    }
  },
  computed: {
    // 中间的大的div
    styleCard: function() {
      // leftDrag 是否正在拖动左侧的组件 1 没有动 2 已经拖动没有进入中间的界面  3拖动进入中间的页面 4 进入设计页面中的组件
      // centerDrag 是否正在拖动中间的组件 1 没有动  2 已经拖动没有进度其他组件  3 进入其他组件
      const sty = { background: 'rgb(0,0,0,0)' }
      if (this.leftDrag === Constants.LEFT_DRAG_NOT_ENTER_CENTER) {
        // sty.background = 'rgb(0,0,0,0.1)'
      } else if (this.leftDrag === Constants.LEFT_DRAG_ENTER_CENTER) {
        // sty.background = 'rgb(0,0,0,0.5)'
        // sty["z-index"] = 10;
      }
      return sty
    },
    styleitem: function() {
      const sty = { 'z-index': 100 }
      // if (this.centerDrag == '2') {
      // }
      return sty
    }
  },
  watch: {
    // fromData 变化时初始化表单
    fromData() {
      this.initFrom()
    }
    // fromData: {
    //   handler() {
    //   },
    //   deep: true
    // }
  },
  created() {
    this.initFrom()
  },
  methods: {
    // Checkbox 需要提前初始化
    initFrom() {
      const obj = {}
      this.fromData.map(item => {
        if (item.type === 'Checkbox') {
          obj[item.key] = []
        }
      })
      this.from = obj
    },
    chonzhihxindex() {
      this.hxindex = -3
    },
    // 大div 中滑动时
    dragover() {
      // 中间没有拖动时
      if (this.centerDrag === Constants.CENTER_DRAG_IDLE) {
        this.$emit('setdrag', { type: 'leftDrag', value: Constants.CENTER_DRAG_ENTER_ITEM })
        // 一个都没有时 在上面 否则在下面
        if (this.fromData.length === 0) {
          this.hxindex = -1
        } else {
          this.hxindex = -2
        }
      }
    },
    // 离开大div时
    dragleave() {
      // 当进入到小div中时  或者在操作小div 时 不处理
      if (this.leftDrag === Constants.LEFT_DRAG_ENTER_ITEM || this.centerDrag !== Constants.CENTER_DRAG_IDLE) {
        return
      }
      this.$emit('setdrag', { type: 'leftDrag', value: Constants.LEFT_DRAG_NOT_ENTER_CENTER })
      this.hxindex = -3
    },
    // 在div 中放下时
    dropfun() {
      // 不是中间的拖动时 者添加到中间的表单中
      if (this.centerDrag === Constants.CENTER_DRAG_IDLE) {
        this.$emit('addcom')
        this.hxindex = -3
      }
    },
    // 在组件中的
    dragstart(index, data) {
      this.$emit('setdrag', { type: 'centerDrag', value: Constants.CENTER_DRAG_NOT_ENTER_ITEM })
      this.$emit('setdelcom', data)
      this.startIndex = index
      // console.log('开始拖动 小div', index)
    },
    dragend() {
      // 重置数据
      // console.log('中间的end ------------')
      this.startIndex = -1
      this.endIndex = -1
      this.$emit('reset')
    },
    // 在组件中滑动
    dragover2(index) {
      // 处理 从左侧拖动到中间组件的逻辑
      if (this.centerDrag === Constants.CENTER_DRAG_IDLE && this.leftDrag !== Constants.LEFT_DRAG_IDLE) {
        this.$emit('setdrag', { type: 'leftDrag', value: Constants.LEFT_DRAG_ENTER_ITEM })
        this.hxindex = index
        // todo 增加横线
      }
      // 中间拖动进入到 中间的其他组件
      if (this.leftDrag === Constants.LEFT_DRAG_IDLE && this.centerDrag !== Constants.CENTER_DRAG_IDLE) {
        if (index !== this.startIndex) {
          this.endIndex = index
          this.$emit('setdrag', { type: 'centerDrag', value: Constants.CENTER_DRAG_ENTER_ITEM })
        } else {
          this.endIndex = -1
        }
      }
    },
    dragleave2(index) {
      this.endIndex = -1
    },
    dropfun2(index) {
      // 中间的进行拖动交换
      if (this.leftDrag === Constants.LEFT_DRAG_IDLE) {
        this.$emit('setdrag', { type: 'centerDrag', value: Constants.CENTER_DRAG_IDLE })
        if (
          this.startIndex !== this.endIndex &&
          this.startIndex !== -1 &&
          this.endIndex !== -1
        ) {
          this.$emit('exchange', this.startIndex, this.endIndex)
        }
      }
      // 从左侧进入到小div中放下 进行对应位置的添加
      if (this.leftDrag === Constants.LEFT_DRAG_ENTER_ITEM) {
        this.$emit('addcom', index)
        this.hxindex = -3
      }
    },
    // 选中中间的组件
    clickItem(data) {
      // console.log('data..')
      // console.log(data)
      this.actId = data.id
      this.$emit('setformcom', data)
    },
    // 预览
    preview() {
      this.$emit('setDialogVisible', true)
    },
    // 保存
    save() {
      this.$emit('save')
    }
  }
}
</script>

<style scoped lang="scss">
.elcard {
  position: relative;
  min-height: 600px;
}

.elcardzz {
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  bottom: 0;
}

.forms-content {
  min-height: 600px;
}
.form-item {
  position: relative;
  padding: 3px;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  .el-form-item__label {
    cursor: move;
  }
}
.form-item2 {
  position: relative;
  padding: 3px;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px dashed #3a88ed;
  cursor: move;
}
.form-item2:hover {
  border: 1px dashed red;
  transition: 0.5s;
}
.form-itemzz {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.hxdiv {
  width: 100%;
  height: 2px;
  background: dodgerblue;
  border-radius: 2px;
}

.icons1 {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
<style lang="scss">
.form-item {
  .el-form-item__label {
    cursor: move;
  }
}
</style>
