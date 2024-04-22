import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Logo from "./Images/Logo_new.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={Logo} alt="portfolio-logo" />
        <div className="menu-items">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="contact-button">
          Get In Touch{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M9.55127 8.75462L16.7079 8.95489L16.5077 16.1115M16.197 9.43797L8.73792 16.491"
              stroke="black"
              stroke-width="1.6875"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
