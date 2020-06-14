<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>
 <script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Layout from "@/components/Layout/Layout.vue";
@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
</style>
<style>
@font-face {
  font-family: "Oxygen-regular";
  src: url("~@/assets/fonts/Oxygen-Regular.ttf");
}

@import url("../public/css/main.css");
@import url("../node_modules/bootstrap-css-only/css/bootstrap.min.css");
@import url("../node_modules/@mdi/font/css/materialdesignicons.min.css");
</style>
