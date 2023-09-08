import FavButton from "../favbutton/Favbutton";

export default function Entry({ date, motto, notes }) {
  return (
    <>
      <span>{date}</span>
      <h2>{motto}</h2>
      <p>{notes}</p>
      <FavButton />
    </>
  );
}
