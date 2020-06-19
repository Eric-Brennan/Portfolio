import LayoutHeading from "@/types/shared/LayoutHeading";

const TOP_LEVEL_PARENT_NAME = "Games";

//Initiate sub headings
const cardGamesSubHeadings: LayoutHeading[] = [];
cardGamesSubHeadings.push(
  {
    name: "Snap",
    url: "games/snap",
    title: "Snap",
    parentName:"Card",
    order: 1,
    lowestNode: false,
  }
);

// New Employee sub headings
let gamesHeadingsSubHeadings: LayoutHeading[] = [];

gamesHeadingsSubHeadings = gamesHeadingsSubHeadings.concat(
 cardGamesSubHeadings
);

// Main Staff Headings
let gamesHeadings: LayoutHeading[] = [];

gamesHeadings.push(
  {
    name: "Card",
    url: "/games",
    title: "Card Games",
    links: [],
    parentName: TOP_LEVEL_PARENT_NAME,
    order: 1,
    lowestNode: false,
  } as LayoutHeading
);

gamesHeadings = gamesHeadings.concat(gamesHeadingsSubHeadings);

export { gamesHeadings as GamesHeadings };
