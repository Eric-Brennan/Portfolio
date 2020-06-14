<template>
  <div>
    <div class="parallax-image scrollable-background-1" id="parallax-image">
      <div class="div__overlay--text parallax__div--down-slow" @click="scrollDown">
        Welcome
        <div>
          <span class="animation__pulsate--slow icon__size--lg mdi mdi-chevron-double-down"></span>
        </div>
      </div>
      <div
        class="d-none d-sm-block parallax-image__overlay scrollable-background-2"
        id="parallax-content"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class ParallaxImage extends Vue {
  mounted() {
    document
      .getElementById("parallax-content")!
      .addEventListener("mousemove", function(e) {
        var x = e.pageX;
        var y = -((e.pageY + this.offsetTop) / 20) - window.pageYOffset * 0.5;
        //@ts-ignore
        e.currentTarget.style.backgroundPosition = 0 + "px " + y + "px";
      });
    window.addEventListener("scroll", function(e) {
      var scrolled = window.pageYOffset;

      var x = 0;
      var y = scrolled * 0.5;
      //@ts-ignore
      [...document.querySelectorAll(".scrollable-background-1")].map(
        element =>
          ((element as HTMLElement).style.backgroundPosition =
            "50% " + (y + "px"))
      );
      [...document.querySelectorAll(".scrollable-background-2")].map(
        element =>
          ((element as HTMLElement).style.backgroundPosition =
            x + "px " + -y / 0.8 + "px")
      );
      [...document.querySelectorAll(".parallax__div--down-slow")].map(
        element => ((element as HTMLElement).style.top = y / 0.45 + 90 + "px")
      );
    });
  }

  scrollDown() {
    this.$emit("scrollToID", "main-content");
  }
}
</script>

<style lang="scss">
.parallax-image {
  position: relative;
  background-image: url("~@/assets/Airbus.jpg");
  height: 1000px;
  overflow: hidden;
  background-position: 50% 0;

  &__underlay {
    width: 100%;
  }

  &__overlay {
    overflow: hidden;
    background-image: url("~@/assets/fog3.png");
    background-attachment: fixed;
    width: 100%;
    height: 110%;
    background-size: 150% 150%;

    background-repeat: no-repeat;
    position: absolute;
    top: -20px;
  }
}
</style>