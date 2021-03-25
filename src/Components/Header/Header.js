import React from "react";
import "./Header.css";
import Logo from "../../Images/LaLiga.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-overlay">
        <img src={Logo} className="logo" alt="logo" />
        <h2 className="header-title">La Liga Official</h2>
      </div>
    </div>
  );
};

export default Header;
