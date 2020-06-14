export default class LayoutHeading {
  // Unqiue name given to the heading to link other headings and links to it
  name: string = "";
  // The text you want it to appear as
  title: string = "";
  // The URL when link is clicked
  url: string = "";
  // Specifies whether the item is lowest in the menu item (has content to show)
  lowestNode: boolean = false;
  // (OPTIONAL) if top level. The parent name you want to like this to
  parentName: string | undefined = "";
  // The order you want it to appear as
  order: number = 0;
  // (OPTIONAL) Icon you want it to show
  icon?: string;
}
