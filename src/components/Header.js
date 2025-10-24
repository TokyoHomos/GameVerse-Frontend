import React from "react";
import "../styles/Header.css";
import Logo from "../assets/Logo";
import NavLinks from "../components/NavLinks";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-left">
        <Logo />
      </div>
      <div className="Header-center">
        <NavLinks />
      </div>
      <div className="Header-right">
        {/* Optional: Add button or search bar later */}
      </div>
    </header>
  );
}
