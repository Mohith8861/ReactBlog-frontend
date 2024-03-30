import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar">
      <h1>
        <Link className="title" to={"/"}>
          PolytheistWiki
        </Link>
      </h1>
      <input type="text" className="searchbar" />
      <div className="btnBlock">
        <button className="btn--green btn">LogIn</button>
        <button className="btn--green btn">Signup</button>
      </div>
    </div>
  );
}
