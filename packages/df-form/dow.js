
export default function gettext(formSetting, data) {
  const text = `
<template>
  <div>
    <df-form-show :form-data="data" form-ref-name="showForm" :form-data="formData"/>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        data: {
          formSetting: ${JSON.stringify(formSetting)},
          forms: ${JSON.stringify(data)},
        },
        formData: {
          name:1,
          age:2
        }
      };
    },
    methods: {
      save(data) {
        // 通过校验时 返回 用户提交的表单数据  未通过时 返回false
        if (data) {
          console.log(data)
        }
      }
    }
  };
</script>
  
<style scoped>
  .cont {
    width: 800px;
    margin: 20px auto;
  }
</style>
<script>
import DfFormShow from "./formShow"; 
export default { 
components: { DfFormShow }
 }
</script>`
  return text
}
