<template>
  <div class="layout-entity">
    <div class="layout-entity__container">
      <div class="layout-entity__container__body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class LayoutContent extends Vue {}
</script>

<style lang="scss" scoped>
</style>

