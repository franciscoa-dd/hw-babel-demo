import { NavLink } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="header">
      <h2>Rick & Morty</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
