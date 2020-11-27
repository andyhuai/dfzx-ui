export const design = `
<template>
  <div>
      <df-form-design :form-data="formData" :fields="fields" @save="save"/>
  </div>
</template>

<script>
export default {
  name: "df-form",
  components: {
    DfFormDesign
  },
  data() {
    return {
        fields: [],
        formData: []
    }
  },
  methods: {
    save(formData) {
      console.log(formData)
    }
  }
}
</script>

<style scoped>

</style>
`

export const show = `
<template>
  <div>
      <df-modal
        title="表单展示"
        :visible.sync="visible"
        @on-ok="save"
    >
      <df-form-show :form-data="formData" form-ref-name="dfForm" :form-value="{}" ref="form" />
    </df-modal>
  </div>
</template>

<script>
export default {
  name: "df-form",
  components: {
    DfFormDesign
  },
  data() {
    return {
        fields: [],
        formData: {"formSetting":{"labelPosition":"left","labelWidth":80,"formSize":"small"},"forms":[{"id":"Input1606446222090","type":"Input","name":"文本框","col":24,"key":"Input1606446222090","showFrom":["name","col","key","minlength","maxlength","showWordLimit","placeholder","clearable","showPassword","disabled","prefixIcon","suffixIcon","prepend","append"],"minlength":0,"maxlength":100,"showWordLimit":true,"placeholder":"请输入文本框","clearable":true,"showPassword":false,"disabled":false,"prefixIcon":"el-icon-edit","suffixIcon":"","prepend":"","append":"","rules":[{"required":false,"message":"请输入文本框","trigger":"change"}]},{"id":"Select1606446223666","type":"Select","name":"下拉框","col":24,"key":"Select1606446223666","showFrom":["name","col","key","multiple","collapseTags","placeholder","clearable","disabled","filterable","allowCreate","dataType","option","url","optionLabelKey","optionValueKey","relatedField"],"multiple":false,"collapseTags":false,"disabled":false,"filterable":false,"allowCreate":false,"placeholder":"请输入下拉框","clearable":true,"dataType":"option","url":"","option":[{"value":"Beijing","label":"北京"},{"value":"Shanghai","label":"上海"},{"value":"Tianjin","label":"天津"},{"value":"ChongQing","label":"重庆"}],"rules":[{"required":false,"message":"请选择下拉框","trigger":"change"}],"optionLabelKey":"","optionValueKey":"","relatedField":""}]}

    }
  },
  methods: {
    save() {
      const [promise, data] = this.$refs.form.submitForm()
      console.log(JSON.stringify(data))
    }
  }
}
</script>

<style scoped>

</style>`

export default { design, show }
