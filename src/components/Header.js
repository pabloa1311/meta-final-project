import React from "react";
import logo from "../icons_assets/Logo.svg"
import "../styles/Header.css"


function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <nav className="header__nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li>About Us</li>
            <li><a href="/booking">Book</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
