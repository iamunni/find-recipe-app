import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="topnav">
      <Link to="/">
        <a href="#home">Home</a>
      </Link>
      <Link to="/about">
        <a href="#about">About</a>
      </Link>
    </nav>
  );
};

export default NavigationBar;
