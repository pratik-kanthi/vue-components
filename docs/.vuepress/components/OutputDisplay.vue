<template>
  <div class="output e9">
    <p>Formatted Output:</p>
    <VueJsonPretty :data="data" />
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
export default {
  components: { VueJsonPretty },
  props: {
    data: { type: [Object, Array], required: true }
  }
}
</script>

<style lang="scss">
.output {
  max-width: 35rem
}
</style>
