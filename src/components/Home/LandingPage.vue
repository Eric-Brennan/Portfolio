<template>
  <div>
    <ParallaxImage class="fixed"></ParallaxImage>
    <div class="scrollable-content"></div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import ParallaxImage from "./ParallaxImage.vue";

@Component({
  components: {
    ParallaxImage
  }
})
export default class LandingPage extends Vue {}
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