import Tab from "../tab/Tab.js";
import Badge from "../badge/Badge.js";

export default function TabBar() {
  return (
    <>
      <Tab text="All Entries">
        <Badge numberOfEntries={3} />
      </Tab>
      <Tab text="Favorites">
        <Badge numberOfEntries={1} />
      </Tab>
    </>
  );
}
