<template>
  <div>
    <ParallaxImage class @scrollToID="scrollToID"></ParallaxImage>
    <div id="main-content" class="scrollable-content div--themed">
      <hr />
        <h1 class="text-center font__oxygen mt-5">Eric Brennan - Portfolio</h1>
        <h3  class="text-center mt-1 font__oxygen">Built with VueJS and Typescript</h3>
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
    elmnt!.scrollIntoView({ behavior: "smooth", block: "nearest" });
    
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  position: static;
  
}

.scrollable-content {
  width: 100%;
  height: 100vh;
}
</style>