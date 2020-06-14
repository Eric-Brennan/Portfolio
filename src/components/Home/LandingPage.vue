<template>
  <div>
    <ParallaxImage class @scrollToID="scrollToID"></ParallaxImage>
    <div id="main-content" class="scrollable-content">
      <div>Eric Brennan - Portfolio</div>
      <div>Built with VueJS and Typescript</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ParallaxImage from "./ParallaxImage.vue";

@Component({
  components: {
    ParallaxImage
  }
})
export default class LandingPage extends Vue {
  scrollToID(id: string) {
    var elmnt = document.getElementById(id);
    console.log(id);
    elmnt!.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  position: static;
}

.scrollable-content {
  width: 100%;
  height: 1000px;
}
</style>