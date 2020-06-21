import LayoutLink from "@/types/shared/LayoutLink";

const sideLinks: LayoutLink[] = [];

sideLinks.push(
  {
    title: "Vue",
    url: "/skills/vue",
    headingNames: ["Front End"],
    icon: "",
  },
  {
    title: "Snap",
    url: "/games/snap",
    headingNames: ["Games", "Card Games", "Snap"],
    icon: "mdi mdi-cards",
  },
  {
    title: "Approval Worklist",
    url: "/user-management/worklist/approval",
    headingNames: ["Staff Function", "New Employee", "Initiate"],
    icon: "",
  },
  {
    title: "NoShow Worklist",
    url: "/user-management/worklist/noshow",
    headingNames: ["Staff Function", "New Employee", "NoShow Worklist"],
    icon: "",
  },
  {
    title: "Generic Worklist",
    url: "/user-management/worklist",
    headingNames: ["Staff Function", "Admin", "Generic Worklist"],
    icon: "",
  },

  {
    title: "Start Day Worklist",
    url: "/user-management/worklist/startday",
    headingNames: ["Staff Function", "New Employee", "Initiate"],
    icon: "",
  },

  {
    title: "Rule Acceptance",
    url: "/rule-builder/rule-acceptance",
    headingNames: ["Rules", "Rule Acceptance"],
    icon: "",
  },
  {
    title: "Rule Trigger",
    url: "/rule-builder/rule-trigger",
    headingNames: ["Rules", "Rule Trigger"],
    icon: "",
  },

  //for testing capabilities config menu links
  {
    title: "Dep + create",
    url: "",
    headingNames: ["Department", "Department Create"],
    icon: "",
  },
  {
    title: "Dep + edit",
    url: "",
    headingNames: ["Department", "Department Edit"],
    icon: "",
  }
);

export default sideLinks;
