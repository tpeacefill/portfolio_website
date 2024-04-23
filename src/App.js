import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./nav";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="sideDiv"/>
      </div>
    </Router>
  );
}

export default App;
