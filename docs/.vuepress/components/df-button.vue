<template>
  <div>
    <demo-code title="按钮" description="基础用法">
      <df-button>default</df-button>
      <df-button type="primary">primary</df-button>
      <df-button type="info">info</df-button>
      <df-button type="success">success</df-button>
      <df-button type="warning">warning</df-button>
      <df-button type="danger">danger</df-button>
      <pre v-highlightjs slot="codeText" lang="vue">
        <code class="vue">{{code1}}</code>
      </pre>
    </demo-code>
    <demo-api title="属性" type="attr" :api-data="apiData"/>
  </div>
</template>

<script>
import btn from '../../../packages/button/src/button';
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs';
import DemoCode from "./demo-code";
import DemoApi from "./demo-api";
Vue.use(VueHighlightJS);

export default {
  data() {
    return {
      code1: `<df-button>default</df-button>
      <df-button type="primary">primary</df-button>
      <df-button type="info">info</df-button>
      <df-button type="success">success</df-button>
      <df-button type="warning">warning</df-button>
      <df-button type="danger">danger</df-button>`.replace(/^\s*/gm, '')
        .trim(),
      apiData: [
              {
                params: 'type',
                describe: '按钮类型',
                type: 'String',
                optionValue: 'primary, info, success, warning, danger',
                defaultValue: 'default'
              }
              ]
    };
  },
  components: {
    DemoApi,
    'demo-code': DemoCode,
    'df-button': btn,
  },
  methods: {
    click() {

    }
  }
};
</script>
