import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Logo from "../Images/Logo.svg";
import Menu from "./Menu";
import ContactButton from "./ContactButton";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={Logo} className="Logo" alt="Logo" />
        <div className="NavItem">
          <div className="Name">
            <p className="Name1">Peacefill</p>
            <p className="Name2">Tawiah</p>
          </div>
          <div className="NavItem2">
            <Menu />
            <ContactButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
