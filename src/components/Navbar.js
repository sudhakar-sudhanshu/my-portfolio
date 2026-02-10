import { useState } from "react";
import "./../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Logo */}
       <div className="nav-logo">
         <span>SUDHAKAR</span>
         <span className="last-name">SUDHANSHU</span>
       </div>

      {/* Hamburger (mobile only) */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About Me</a></li>
        <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
