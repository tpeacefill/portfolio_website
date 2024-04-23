import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Logo from "./Images/Logo.svg";
import Menu from "./Menu";

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
            <Menu/>
            <button className="ContactButton">
              Get In Touch{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <mask id="path-1-inside-1_50_87" fill="white">
                  <path d="M13.079 0L25.4459 13.079L12.3669 25.4459L-5.96046e-06 12.3669L13.079 0Z" />
                </mask>
                <path
                  d="M13.0935 24.7588L0.726604 11.6798L-0.726616 13.0539L11.6403 26.1329L13.0935 24.7588Z"
                  fill="white"
                  fill-opacity="0.01"
                  mask="url(#path-1-inside-1_50_87)"
                />
                <path
                  d="M9.55127 8.75462L16.7079 8.95489L16.5077 16.1115M16.197 9.43797L8.73792 16.491"
                  stroke="white"
                  stroke-width="1.6875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
