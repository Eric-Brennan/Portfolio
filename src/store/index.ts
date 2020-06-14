import Vue from "vue";
import Vuex from "vuex";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import createPersistedState from "vuex-persistedstate";

import shared from "./modules/shared";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  modules: {
    shared,
  },
});

export default store;

export const SharedModule = getModule(shared, store);
