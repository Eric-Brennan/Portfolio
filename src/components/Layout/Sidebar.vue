<template>
  <ejs-sidebar
    id="dockSidebar"
    :enableDock="true"
    :width="width"
    :dockSize="dockSize"
    ref="dockSidebar"
    :position="sidebarPosition"
    type="Push"
    isOpen="false"
  >
    <div class="dock">
      <div>
        <ul>
          <!-- Sidebar toggle -->
          <li class="sidebar-item" id="toggle" v-on:click="toggleSidebar(undefined)">
            <span class="mdi mdi-chevron-double-right"></span>
            <span class="mdi mdi-chevron-double-left"></span>
            <span class="e-text" title="menu">Links</span>
          </li>
          <!-- Links -->
          <li
            v-for="link in currentLinks"
            :key="link.title"
            class="sidebar-item"
            @click="linkClicked(link)"
          >
            <ejs-tooltip :content="link.title" :position="sidebarTooltipPosition" openDelay="500">
              <span :class="link.icon"></span>
            </ejs-tooltip>
            <span class="e-text" title="menu">{{link.title}}</span>
          </li>
        </ul>
        <!-- Settings menu -->

        <ejs-menu
          :items="configData"
          cssClass="configMenu"
          :showItemOnClick="true"
          @select="settingsItemSelected"
        >
          <span class="e-text" title="menu">Config</span>
        </ejs-menu>
      </div>
    </div>
    <!-- right click context menu for sidebar -->
    <ejs-contextmenu target="#dockSidebar" :items="contextItems" :select="onContextSelect"></ejs-contextmenu>
  </ejs-sidebar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import {
  MenuEventArgs,
  SidebarComponent
} from "@syncfusion/ej2-vue-navigations";

import LayoutLink from "@/types/shared/LayoutLink";

@Component({
  components: {}
})
export default class Sidebar extends Vue {
  // Props
  @Prop() configData!: {}[];
  @Prop() links!: LayoutLink[];
  //@Prop() savedLinks!: LayoutLink[];
  @Prop() selectedHeadingName!: string;
  @Prop() theme!: string;
  @Prop() sidebarPos!: string;
  // Data
  currentLinks: LayoutLink[] = [];
  currentHeading = "";

  // Sidebar stuff
  dockSize = "40px";
  width = "220px";

  // Hooks
  mounted() {
    // Set saved links as current links if any saved
    //if (this.savedLinks.length > 0) {
    //  this.currentLinks = this.savedLinks;
    //}
  }

  // Methods

  /**
   * Hide or show sidebar
   * @param { boolean | undefined } show - show if true, hide if false, switch between 2 if undefined
   */
  toggleSidebar(show?: boolean | undefined) {
    switch (show) {
      case undefined: {
        (this.$refs.dockSidebar as SidebarComponent).toggle();
        break;
      }
      case true: {
        (this.$refs.dockSidebar as SidebarComponent).show();
        break;
      }
      case false: {
        (this.$refs.dockSidebar as SidebarComponent).hide();
        break;
      }
    }
  }

  /**
   * Menu Item has been clicked, show links associated with that menu item
   */
  updateCurrentLinks() {
    const self = this;
    const filteredLinks = this.links.filter(function(link) {
      return link.headingNames.indexOf(self.currentHeading) > -1;
    }, self);
    filteredLinks.sort(function(firstLink: LayoutLink, secondLink: LayoutLink) {
      return firstLink.title.charCodeAt(0) - secondLink.title.charCodeAt(0);
    });
    this.currentLinks = filteredLinks;
    this.toggleSidebar(true);

    this.saveLinks();
  }

  /**
   * Link clicked, only show clicked link
   * @param linkClicked
   */
  linkClicked(linkClicked: LayoutLink) {
    const self = this;
    const filteredLinks = this.links.filter(function(link) {
      return link.title.indexOf(linkClicked.title) > -1;
    });
    this.currentLinks = filteredLinks;
    this.toggleSidebar(false);

    this.saveLinks(linkClicked.url);
  }

  /**
   * Save links - save url if link clicked
   * @param url
   */
  saveLinks(url?: string) {
    // URL will be defined if called from linkClicked method, do not change url if same, prevent duplicate route error
    if (url && url !== this.$route.fullPath) {
      this.$emit("changeURL", url);
    }
    this.$emit("clearSelectedHeading");
    /*Must clear selected heading otherwise clicking heading
     * then clicking a link then clicking the same heading will not repopulate links */
    this.$emit("saveLinks", this.currentLinks);
  }

  settingsItemSelected(args: MenuEventArgs) {
    this.$emit("menuItemClicked", args.item.text);
  }

  //context menu click handler
  onContextSelect(args: MenuEventArgs) {
    switch (args.item.text) {
      case "Move Left": {
        this.$emit("updateSidebarPosition", "Left");
        break;
      }
      case "Move Right": {
        this.$emit("updateSidebarPosition", "Right");
        break;
      }
      case "Dark Mode": {
        this.$emit("setTheme", "dark");
        break;
      }
      case "Light Mode": {
        this.$emit("setTheme", "light");
        break;
      }
    }
  }

  // Computed props

  get contextItems() {
    const contextMenuItems: { text: string }[] = [];
    if (this.sidebarPosition === "Right") {
      contextMenuItems.push({ text: "Move Left" });
    } else {
      contextMenuItems.push({ text: "Move Right" });
    }
    if (this.theme === "light") {
      contextMenuItems.push({ text: "Dark Mode" });
    } else {
      contextMenuItems.push({ text: "Light Mode" });
    }
    return contextMenuItems;
  }

  get sidebarTooltipPosition() {
    if (this.sidebarPosition === "Right") {
      return "LeftCenter";
    }
    return "RightCenter";
  }

  get sidebarPosition() {
    return this.sidebarPos;
  }
  // Watches
  @Watch("selectedHeadingName")
  onSelectedHeadingNameChanged() {
    if (this.selectedHeadingName !== "") {
      this.currentHeading = this.selectedHeadingName;

      this.updateCurrentLinks();
    }
  }
}
</script>
