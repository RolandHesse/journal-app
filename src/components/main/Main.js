import EntryForm from "../entryform/Entryform";
import EntriesSection from "../entriessection/Entriessection";

export default function Main({ entries }) {
  return (
    <>
      <EntryForm />
      <EntriesSection entries={entries} />
    </>
  );
}
