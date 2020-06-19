import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import LandingPage from "@/components/Home/LandingPage.vue";
import SnapBoard from "@/components/Games/Snap/Board.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    { path: "/", name: "Home", component: LandingPage },
    { path: "/games/snap", name: "Snap", component: SnapBoard}
  ],
});