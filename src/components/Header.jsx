import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo">
          <Link className="header-link" to="/">
            WildCommerce🦁
          </Link>
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Ingrese texto"
            className="search-bar"
            maxLength={45}
          />
          <button type="button" className="search-button">
            <span role="img" aria-label="Search" className="search-icon">
              🔍
            </span>
          </button>
        </div>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link className="menu-links" to="/categories">
              Categorías
            </Link>
            {/* Aquí puedes agregar submenús desplegables si es necesario */}
          </li>
          <li>
            <Link className="menu-links" to="/products">
              Todos los productos
            </Link>
          </li>
          <li>
            <Link className="menu-links" to="/favorites">
              Favoritos
            </Link>
          </li>
          <li>
            <Link className="menu-links" to="/account">
              Mi cuenta
            </Link>
          </li>
        </ul>
        <div
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
