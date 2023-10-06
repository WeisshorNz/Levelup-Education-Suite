import React from "react";
import logo from "../Images/src-assets/NavBar/LevelUpWorks-blue.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div>
        <button
          className="navbarBtn"
          style={{ backgroundColor: "rgb(230, 28, 150" }} //pink colour
        >
          Help Centre
        </button>

        <button
          className="navbarBtn"
          style={{ backgroundColor: "rgb(48, 162, 250)" }} //blue colour
        >
          More Projects
        </button>
      </div>
    </div>
  );
}
