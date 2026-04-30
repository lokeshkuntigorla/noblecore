 import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container-fluid">

        {/* ===== LOGO + BRAND ===== */}
        <Link 
          className="navbar-brand d-flex align-items-center gap-2" 
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
        >
          <div className="logo-wrapper">
            <img src={logo} alt="NobleCore Logo" className="brand-logo" />
          </div>
          <span className="brand-text">NobleCore</span>
        </Link>

        {/* ===== TOGGLER ===== */}
        <button
          className={`navbar-toggler border-0 ${isMenuOpen ? "active" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ===== NAV LINKS ===== */}
        <div
          className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav gap-4">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/services", name: "Services" },
              { path: "/employers", name: "Employers" },
               { path: "/contact", name: "Contact" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;