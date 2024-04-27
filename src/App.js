import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/nav";
import "./App.css"; // Import the CSS file
import HeroImage from "./Images/HeroImage.svg";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="app-container">
          <div className="sideDiv" />
          <div className="HeroContent">
            <div className="HeroText">
              <div className="HeroText1">
                <h1 className="h1">Web & Mobile</h1>
                <h1 className="h2">UI Developer</h1>
              </div>
              <div className="HeroText2">
                <p>
                  Welcome to my digital space! I’m Peacefill Tawiah, a
                  <br />
                  passionate Software developer with a penchant for problem
                  <br />
                  solving and innovation with diverse skill set.
                </p>
              </div>
              <div className="hero-buttons">
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
                <button className="resume-download">
                  Download CV{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <img src={HeroImage} alt="Hero-Image" className="Hero-Image" />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
