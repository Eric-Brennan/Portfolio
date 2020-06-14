import LayoutHeading from "@/types/shared/LayoutHeading";

const TOP_LEVEL_PARENT_NAME = "AboutMe";
const SKILLS_NAME = "Skills";

//Initiate sub headings
const skillsSubHeadings: LayoutHeading[] = [];
skillsSubHeadings.push(
  {
    name: "Front End",
    url: "/me/skills/front-end",
    title: "Front End",
    parentName: SKILLS_NAME,
    order: 1,
    lowestNode: true,
  },
  {
    name: "Back End",
    url: "/me/skills/back-end",
    title: "Back End",
    parentName: SKILLS_NAME,
    order: 2,
    lowestNode: true,
  }
);

// New Employee sub headings
let aboutMeHeadingsSubHeadings: LayoutHeading[] = [];

aboutMeHeadingsSubHeadings = aboutMeHeadingsSubHeadings.concat(
  skillsSubHeadings
);

// Main Staff Headings
let aboutMeHeadings: LayoutHeading[] = [];

aboutMeHeadings.push(
  {
    name: "Bio",
    url: "/me/bio",
    title: "Bio",
    links: [],
    parentName: TOP_LEVEL_PARENT_NAME,
    order: 1,
    lowestNode: true,
  } as LayoutHeading,
  {
    name: "Skills",
    url: "/me/skills",
    title: "Skills",
    links: [],
    parentName: TOP_LEVEL_PARENT_NAME,
    order: 2,
    lowestNode: false,
  } as LayoutHeading,
  {
    name: "Contact",
    url: "/me/contact",
    title: "Contact",
    links: [],
    parentName: TOP_LEVEL_PARENT_NAME,
    order: 3,
    lowestNode: true,
  } as LayoutHeading
);

aboutMeHeadings = aboutMeHeadings.concat(aboutMeHeadingsSubHeadings);

export { aboutMeHeadings as AboutMeHeadings };
