export default function Headings({ S }) {
  return (
    <div className="heading">
      <h1>{S.title}</h1>
      <h2>
        <span className="material-symbols-outlined">edit </span>
        {S.author}
      </h2>
    </div>
  );
}
