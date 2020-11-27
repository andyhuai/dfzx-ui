<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <Assembly
          :drag2="drag2"
          @addcom="addcom"
          @setcom="setcom"
          @setdrag="setDrag"
          @deletecom="deleteComponent"
          @reset="reset"
        />
      </el-col>
      <el-col :span="12">
        <Forms
          ref="forms"
          :from-data="data"
          :form-setting="formSetting"
          :drag1="drag1"
          :drag2="drag2"
          :com="com"
          @setdrag="setDrag"
          @reset="reset"
          @setdelcom="setdelcom"
          @addcom="addcom"
          @exchange="exchange"
          @setformcom="setformcom"
          @setDialogVisible="dialogVisible = true"
          @save="save"
          @downloadVue="downloadVue"
        />
      </el-col>
      <el-col :span="6">
        <AttrFrom
          :fields="fields"
          :form="formcom"
          :form-setting="formSetting"
          :drag2="drag2"
          @deleteComponent="deleteComponent"
        />
      </el-col>
    </el-row>
    <el-dialog
      v-if="dialogVisible"
      title="预览表单"
      :visible.sync="dialogVisible"
      width="70%"
      destroy-on-close
    >
      <show-from ref="showForm" :form-data="{formSetting:formSetting,forms:data}" form-ref-name="showForm" />
      <el-button @click="submit">保存</el-button>
    </el-dialog>
  </div>
</template>

<script>
import dow from './dow'
import Assembly from './assembly.vue'
import Forms from './forms'
import AttrFrom from './attributeform'
import ShowFrom from './formShow'
export default {
  name: 'DfFormDesign',
  components: {
    Assembly, Forms, AttrFrom, ShowFrom
  },
  props: {
    formData: {
      type: Object,
      default() {
        return {}
      }
    },
    fields: {
      type: Array,
      default: () => {
        return [
          { label: '姓名', value: 'name' },
          { label: '年龄', value: 'age' }
        ]
      },
      required: true
    }
  },
  data() {
    return {
      // 是否正在拖动左侧的组件 1 没有动  2 已经拖动没有进入中间的界面  3拖动进入中间的页面 4 进入设计页面中的组件
      drag1: '1',
      // 是否正在拖动中间的组件 1 没有动  2 已经拖动没有进度其他组件  3 进入其他组件
      drag2: '1',
      // 左边 被操作的组件
      com: {},
      // 中间正在被拖动的组件的 如果拖动到垃圾桶 将会删除它
      delcom: {},
      // 表单列表
      data: [],
      // 表单设置
      formSetting: {
        labelPosition: 'left',
        labelWidth: 80,
        formSize: 'small'
      },
      // 中间被点击的组件
      formcom: {
        showFrom: [],
        rules: []
      },
      dialogVisible: false
    }
  },
  created() {
    // 当传入props 值时 设置进入当前的data
    if (this.formData && this.formData.formSetting && this.formData.forms) {
      this.formSetting = this.formData.formSetting
      this.data = this.formData.forms
    }
  },
  mounted() {
  },
  methods: {
    // 左边的全部重置 左边的结束拖动时调用
    reset() {
      this.drag1 = '1'
      this.drag2 = '1'
      // 重置中间的横线
      this.$refs.forms.chonzhihxindex()
    },
    // 设置拖动状态
    setDrag(data) {
      this[data.type] = data.value
    },
    // 设置操作的组件
    setcom(data) {
      this.com = data
    },
    setdelcom(data) {
      this.delcom = data
    },
    setformcom(data) {
      this.formcom = data
    },
    // 删除
    deleteComponent() {
      // 如果删除的是 被选中的 则把 选中的也清空
      if (this.delcom.id === this.formcom.id) {
        this.formcom = {
          showFrom: [],
          rules: []
        }
      }
      this.data = this.data.filter(item => item.id !== this.delcom.id)
    },
    // 增加一个组件
    addcom(index = -1) {
      if (index === -1) {
        this.data.push(this.com)
      } else {
        this.data.splice(index, 0, this.com)
      }
    },
    // 交换位置
    exchange(start, end) {
      const arr = this.data
      // JSON.parse(JSON.stringify(this.data))
      const aa = arr[start]
      arr[start] = arr[end]
      arr[end] = aa
      this.data = arr
    },
    save() {
      this.$emit('save', { formSetting: this.formSetting, forms: this.data })
    },
    // 下载
    download(filename, text) {
      const element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
      element.setAttribute('download', filename)
      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    },
    downloadVue() {
      const filename = 'hello.vue'
      const text = dow(this.formSetting, this.data)
      console.log(text)
      this.download(filename, text)
    },
    submit() {
      const [validPromise, formData] = this.$refs.showForm.submitForm()
      validPromise.then(valid => {
        console.log(valid)
        console.log(formData)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
</style>
