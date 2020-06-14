<template>
  <div class="layout">
    <div class="layout__header">
      <LayoutHeader
        :headings="headings"
        :dataLoaded="dataLoaded"
        @menuItemClicked="menuItemClicked"
      ></LayoutHeader>
    </div>
    <div class="layout__content">
      <Sidebar
        :links="linkData"
        :theme="theme"
        :selectedHeadingName="selectedHeading"
        :sidebarPos="sidebarPosition"
        @clearSelectedHeading="clearSelectedHeading"
        @menuItemClicked="menuItemClicked"
        @setTheme="setTheme"
        @updateSidebarPosition="updateSidebarPosition"
        @saveURL="saveURL"
        @changeURL="changeURL"
      ></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import LayoutHeader from "./LayoutHeader.vue";
import Sidebar from "./Sidebar.vue";
import LayoutContent from "./LayoutContent.vue";
import LayoutHeading from "@/types/shared/LayoutHeading";
import headings from "@/config/Layout/_base";
import sideLinks from "@/config/Layout/SideLinks";

interface NestedHeadingItem {
  text: string;
  iconCss: string | undefined;
  url: string;
  items: NestedHeadingItem[];
}

@Component({
  components: {
    LayoutHeader,
    LayoutContent,
    Sidebar
  }
})
export default class Layout extends Vue {
  /* Data to pass as props */
  headings: NestedHeadingItem[] = [];
  configHeadings: NestedHeadingItem[] = [];
  linkData = sideLinks;
  sidebarPosition = "Right";

  /* Check data */
  selectedHeading = "";
  dataLoaded = false;
  theme = "Light";

  // Hooks
  async mounted() {
    // Sets the selected theme & the side bar if it's left or right
    await this.setupSavedLayout();

    //Call recursive method to build menu data from headings, undefined as top level menu
    this.headings = await this.getNestedChildren(headings, undefined);
    this.dataLoaded = true;
  }

  // Methods
  setupSavedLayout(): void {
    // set 'app-background' class to body tag for themeing
    const bodyElement = document.body;
    bodyElement.classList.add("app-background");

    this.theme =
      localStorage.getItem("theme") === undefined
        ? "light"
        : (localStorage.getItem("theme") as string);

    const htmlElement = document.documentElement;
    htmlElement.setAttribute("theme", this.theme);

    // Check and set sidebar position
    if (localStorage.getItem("AdminSidebarPosition")) {
      this.sidebarPosition = localStorage.getItem("AdminSidebarPosition")!;
    } else {
      localStorage.setItem("AdminSidebarPosition", "Right"); // Set initial position if no save exists
    }
  }

  // Recursive method to build menu data
  getNestedChildren(
    headings: LayoutHeading[],
    parent: string | undefined
  ): NestedHeadingItem[] {
    const nestedHeadings: NestedHeadingItem[] = []; // Using an interface allows us to call this recursive method with type safety
    for (const i in headings) {
      if (headings[i].parentName === parent) {
        const children = this.getNestedChildren(headings, headings[i].name);
        nestedHeadings.push({
          text: headings[i].title,
          iconCss: headings[i].icon,
          items: children,
          url: headings[i].lowestNode ? headings[i].url : ""
        });
      }
    }
    return nestedHeadings;
  }

  menuItemClicked(menuItem: string) {
    this.selectedHeading = menuItem;
  }

  /** Called from Links nav upon clicking any link*/
  clearSelectedHeading() {
    this.selectedHeading = "";
  }

  /*** Called from Links nav upon selecting theme
   * @param {string} theme - Name of theme to set */
  setTheme(theme: string) {
    this.theme = theme;
    const htmlElement = document.documentElement;
    localStorage.setItem("theme", this.theme);
    htmlElement.setAttribute("theme", this.theme);
  }

  /** Called from Links nav upon changing sidebar position
   * @param {string} position - sidebar position - "Left" or "Right" */
  updateSidebarPosition(position: string) {
    this.sidebarPosition = position;
    localStorage.setItem("AdminSidebarPosition", position);
  }

  /** Called from Links nav upon clicking a link
   * @param {string} position - sidebar position - "Left" or "Right" */
  changeURL(url: string) {
    this.$router.push({
      path: url
    });
    this.saveURL();
  }

  /** Called from Links nav upon clicking a link - persist links
   * @param {LayoutLink[]} links - Current links in the sidebar */
  //saveLinks(links: LayoutLink[]) {
  //    this.$store.dispatch("layout/updateLinks", links);
  //    this.saveURL(); //Save url to associate saved links with the url for persistence
  //}

  saveURL() {
    this.$store.dispatch("layout/updateURL", this.$route.fullPath);
  }

  // Computed props
  //get savedLinks() {
  //    let _savedLinks: LayoutLink[] = [];
  //    if (this.$route.fullPath === LayoutModule.currentURL) {
  //        if (LayoutModule.links.length > 0) {
  //            _savedLinks = LayoutModule.links;
  //        }
  //    }
  //    return _savedLinks;
  //}
}
</script>

<style lang="scss" scoped>
</style>

