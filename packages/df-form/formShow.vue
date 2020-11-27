<template>
  <div>
    <el-form
      :key="formKey"
      :ref="formRefName"
      :model="form"
      :label-position="formData.formSetting.labelPosition"
      :label-width="formData.formSetting.labelWidth+'px'"
      :size="formData.formSetting.formSize"
      style="overflow: hidden"
    >
      <el-row :gutter="10">
        <el-col v-for="(item,index) in formData.forms" :key="index" :span="item.col">
          <el-form-item
            v-if="['Divider','p'].indexOf(item.type) === -1 "
            :label="item.name"
            :prop="item.key"
            :rules="item.rules"
          >
            <FormItem :item="item" :form="form" />
          </el-form-item>
          <el-divider v-if="item.type === 'Divider'" :content-position="item.contentPosition">{{ item.text }}</el-divider>
          <p v-if="item.type === 'p'" :style="{'text-align': item.contentPosition,'font-size':item.fontsize+'px',color:item.textColor}">{{ item.text }}</p>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
// 初始化form
// 1 下拉框多选时为 数组
// 2 开关进入之后 默认 false
// 3 滑块范围选择时为数组
// 4 多选 需要初始化为 数组
import FormItem from './formitem'
export default {
  name: 'DfFormShow',
  components: {
    FormItem
  },
  props: {
    // 表单布局信息
    formData: {
      type: Object,
      default: () => {
        return {
          formSetting: {
            labelPosition: 'left',
            labelWidth: 80,
            formSize: 'small'
          },
          forms: []
        }
      },
      required: true
    },
    // 表单的默认值
    formValue: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // form ref
    formRefName: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      formKey: 'formKey',
      form: {}
    }
  },
  computed: {
  },
  watch: {
    data: {
      handler() {
        this.formKey = 'formKey' + new Date().getTime()
      },
      deep: true
    }
  },
  created() {
    this.initForm()
  },
  methods: {
    initForm() {
      const obj = this.formValue
      // TODO 待确定多项选择默认值为数组
      // this.formData.forms.map(item => {
      //   console.log('initForm', this.formData.forms)
      //   if (item.type === 'Checkbox') {
      //     obj[item.key] = []
      //   }
      // })
      this.form = obj
    },
    submitForm() {
      // 当前表单的校验
      return [this.$refs[this.formRefName].validate(), this.form]
    }
  }
}
</script>

<style>

</style>
