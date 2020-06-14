import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({
  name: "shared",
  namespaced: true,
})
export default class Shared extends VuexModule {
  public theme = "light";
}
