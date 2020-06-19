import LayoutHeading from "@/types/shared/LayoutHeading";

import { AboutMeHeadings } from "./AboutMe";
import { GamesHeadings } from "./Games";

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
const gamesHeading: LayoutHeading = {
  name: "Games",
  order: 2,
  title: "Games",
  url: "/games",
  parentName: undefined,
  lowestNode: false,
};

headings.push(aboutMeHeading);
headings.push(gamesHeading);
headings = headings.concat(AboutMeHeadings);
headings = headings.concat(GamesHeadings);

export default headings;
