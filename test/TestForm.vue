<template>
  <DfFormDesign @save="save" />
</template>

<script>
import DfFormDesign from '../packages/df-form/formDesign'
// import DfFormShow from '../packages/df-form/formDesign'
export default {
  name: 'TestForm',
  components: { DfFormDesign },
  methods: {
    save(data) {
      console.log(JSON.stringify(data))
    }
  }
}
</script>

<style scoped>

</style>
