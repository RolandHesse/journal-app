import Entry from "../entry/Entry.js";

export default function EntryList({ entries }) {
  return (
    <>
      {entries.map((entry) => {
        return (
          <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />
        );
      })}
    </>
  );
}
