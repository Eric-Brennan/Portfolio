import LayoutHeading from "@/types/shared/LayoutHeading";

import { AboutMeHeadings } from "./AboutMe";

let headings: LayoutHeading[] = [];

// Main Headings
const aboutMeHeading: LayoutHeading = {
  name: "AboutMe",
  order: 1,
  title: "About Me",
  url: "test",
  parentName: undefined,
  lowestNode: false,
};

headings.push(aboutMeHeading);
headings = headings.concat(AboutMeHeadings);

export default headings;
