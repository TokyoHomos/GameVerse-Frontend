import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "../styles/NavLinks.css";

export default function NavLinks() {
  return (
    <nav className="NavLinks">
      <BrowserRouter>
        <NavLink to="/home" className="nav">
          Home
        </NavLink>
        <NavLink to="/about" className="nav">
          About
        </NavLink>
        <NavLink to="/contact" className="nav">
          Contact
        </NavLink>
      </BrowserRouter>
    </nav>
  );
}
