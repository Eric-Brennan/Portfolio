<template>
  <div class="header">
    <ejs-menu
      v-if="dataLoaded"
      :enableScrolling="true"
      :items="headings"
      cssClass="header__mainMenu e-scrollable-menu menu__parent--transparent menu__parent--large menu--themed"
      :showItemOnClick="true"
      @select="menuItemSelected"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { MenuEventArgs } from "@syncfusion/ej2-vue-navigations";

@Component({})
export default class LayoutHeader extends Vue {
  @Prop() headings!: {}[];
  @Prop() dataLoaded!: boolean;

  menuItemSelected(args: MenuEventArgs) {
    this.$emit("menuItemClicked", args.item.text);
  }
}
</script>

<style lang="scss" scoped>
</style>

