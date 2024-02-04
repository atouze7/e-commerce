import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/Admin Panel Assets/nav-logo.svg";
import navProfile from "../../assets/Admin Panel Assets/nav-profile.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="nav-logo" src={navlogo} alt="" />
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
}
