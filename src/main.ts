import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  MenuPlugin,
  ContextMenuPlugin,
  SidebarPlugin,
} from "@syncfusion/ej2-vue-navigations";
import { enableRipple } from "@syncfusion/ej2-base";

Vue.use(ContextMenuPlugin);
Vue.use(SidebarPlugin);
Vue.use(MenuPlugin);

enableRipple(true);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
