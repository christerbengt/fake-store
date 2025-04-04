import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/logo.png";
import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa"; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Faux Finds Logo" className="logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/AboutUs" className="nav-link">About Us</Link>
        <Link to="/Checkout" className="nav-link cart-icon">
          <FaShoppingCart size={24} />
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={toggleMenu} aria-expanded={isMenuOpen}>
        <span className={isMenuOpen ? "menu-icon open" : "menu-icon"}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/AboutUs" className="nav-link" onClick={toggleMenu}>About Us</Link>
        <Link to="/Checkout" className="nav-link" onClick={toggleMenu}>
          <FaShoppingCart size={20} />
        </Link>
      </div>
    </header>
  );
}

export default Header;