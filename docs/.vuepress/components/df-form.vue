<template>
  <div>
    <demo-code title="Modal弹出窗" description="基础用法">
      <df-form-design :form-data="{}" :fields="[]" @save="save"/>
      <pre v-highlightjs slot="codeText" lang="vue">
        <code class="vue">{{ designCode }}</code>
      </pre>
    </demo-code>
    <demo-code>
      <el-button @click="visible = true">展示表单</el-button>
      <pre v-highlightjs slot="codeText" lang="vue">
        <code class="vue">{{ showCode }}</code>
      </pre>
    </demo-code>
    <df-modal
        title="表单展示"
        :visible.sync="visible"
        @on-ok="onOK"
    >
      <df-form-show :form-data="formData" form-ref-name="dfForm" :form-value="{}" ref="form"/>
    </df-modal>

    <demo-api title="df-form-design属性" type="attr" :api-data="apiData"/>
    <demo-api title="df-form-show属性" type="attr" :api-data="apiDataShow"/>
    <demo-api title="df-form-design方法" type="method" :api-data="methodData"/>
  </div>
</template>

<script>
import DfFormDesign from "../../../packages/df-form/formDesign";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs';
import DemoCode from "./demo-code";
import DemoApi from "./demo-api";
import {show, design} from './code/dfForm'
import DfModal from "../../../packages/df-modal/DfModal";
import DfFormShow from "../../../packages/df-form/formShow";

Vue.use(VueHighlightJS);

export default {
  name: "df-form",
  components: {
    DfFormShow,
    DfModal,
    DemoApi,
    'demo-code': DemoCode,
    DfFormDesign
  },
  data() {
    return {
      apiData: [
        {
          params: 'form-data',
          describe: '表单设计的JSON数据,用于展示上一次的设计页面',
          type: 'Object',
          defaultValue: '-'
        }, {
          params: 'form-ref-name',
          describe: '表单form的ref',
          type: 'String',
          defaultValue: '-'
        }, {
          params: 'form-value',
          describe: '表单初始值',
          type: 'Object',
          defaultValue: '{}'
        }
      ],
      apiDataShow: [
        {
          params: 'form-data',
          describe: '表单设计的JSON数据,用于展示上一次的设计页面',
          type: 'Object',
          defaultValue: '-'
        }, {
          params: 'fields',
          describe: '表单选项的字段,类型为 [{ label: String, Value: String }]',
          type: 'Array',
          defaultValue: '[]'
        },
      ],
      methodData: [
        {
          params: 'save',
          describe: '保存, 回调参数为表单设计JSON对象',
          cbparams: '(formData)=>{}',
        }
      ],
      designCode: design,
      showCode: show,
      visible: false,
      formData: {
        "formSetting": {"labelPosition": "left", "labelWidth": 80, "formSize": "small"},
        "forms": [{
          "id": "Input1606446222090",
          "type": "Input",
          "name": "文本框",
          "col": 24,
          "key": "Input1606446222090",
          "showFrom": ["name", "col", "key", "minlength", "maxlength", "showWordLimit", "placeholder", "clearable", "showPassword", "disabled", "prefixIcon", "suffixIcon", "prepend", "append"],
          "minlength": 0,
          "maxlength": 100,
          "showWordLimit": true,
          "placeholder": "请输入文本框",
          "clearable": true,
          "showPassword": false,
          "disabled": false,
          "prefixIcon": "el-icon-edit",
          "suffixIcon": "",
          "prepend": "",
          "append": "",
          "rules": [{"required": false, "message": "请输入文本框", "trigger": "change"}]
        }, {
          "id": "Select1606446223666",
          "type": "Select",
          "name": "下拉框",
          "col": 24,
          "key": "Select1606446223666",
          "showFrom": ["name", "col", "key", "multiple", "collapseTags", "placeholder", "clearable", "disabled", "filterable", "allowCreate", "dataType", "option", "url", "optionLabelKey", "optionValueKey", "relatedField"],
          "multiple": false,
          "collapseTags": false,
          "disabled": false,
          "filterable": false,
          "allowCreate": false,
          "placeholder": "请输入下拉框",
          "clearable": true,
          "dataType": "option",
          "url": "",
          "option": [{"value": "Beijing", "label": "北京"}, {"value": "Shanghai", "label": "上海"}, {
            "value": "Tianjin",
            "label": "天津"
          }, {"value": "ChongQing", "label": "重庆"}],
          "rules": [{"required": false, "message": "请选择下拉框", "trigger": "change"}],
          "optionLabelKey": "",
          "optionValueKey": "",
          "relatedField": ""
        }]
      }
    }
  },
  methods: {
    save(formData) {
      console.log(formData)
    },
    onOK() {
      const [promise, data] = this.$refs.form.submitForm()
      console.log(JSON.stringify(data))
    }
  }
}
</script>

<style scoped>

</style>
