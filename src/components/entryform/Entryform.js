export default function EntryForm() {
  return (
    <form>
      <label htmlFor="motto">Motto</label>
      <input type="text" id="motto" name="motto" />
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
      <button type="submit">Create</button>
    </form>
  );
}
