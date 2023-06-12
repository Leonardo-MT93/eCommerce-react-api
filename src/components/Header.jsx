import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link className="header-link" to="/">E-commerce - Proyecto1</Link>
    </header>
  );
};
