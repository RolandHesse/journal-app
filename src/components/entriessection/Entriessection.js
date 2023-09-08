import TabBar from "../tabbar/Tabbar";
import EntryList from "../entrylist/Entrylist";

export default function EntriesSection({ entries }) {
  return (
    <>
      <TabBar />
      <EntryList entries={entries} />
    </>
  );
}
