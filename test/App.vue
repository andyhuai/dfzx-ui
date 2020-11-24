<template>
  <div id="app">
    <test-modal />
    <test-form />
  </div>
</template>

<script>

import TestModal from './TestModal'
import TestForm from './TestForm'
export default {
  name: 'App',
  components: {
    TestForm,
    TestModal
  }
}
</script>

<style lang="scss"></style>
