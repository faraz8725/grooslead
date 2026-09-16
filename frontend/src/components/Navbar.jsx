/*import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setMenuOpen(false);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <button
          className="brand"
          onClick={() => handleNavClick("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">G</span>

          <span className="brand-name">
            Grosslead<span> Media</span>
          </span>
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => handleNavClick("home")}>Home</button>
          <button onClick={() => handleNavClick("about")}>About Us</button>
          <button onClick={() => handleNavClick("services")}>Services</button>
          <button onClick={() => handleNavClick("career")}>Career</button>

          <button
            className="nav-contact-mobile"
            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </button>
        </div>

        <button
          className="nav-contact"
          onClick={() => handleNavClick("contact")}
        >
          Contact Us
          <ArrowUpRight size={17} />
        </button>

<Link to="/login" className="navbar-login">
  Login
</Link>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar; *

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  UserCircle,
  LogOut,
} from "lucide-react";

import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("User data error:", error);
        setUser(null);
      }
    }
  }, []);

  const handleNavClick = (section) => {
    setMenuOpen(false);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/");
    window.location.reload();
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        <button
          className="brand"
          onClick={() => handleNavClick("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">G</span>

          <span className="brand-name">
            Grosslead<span> Media</span>
          </span>
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <button
            onClick={() => handleNavClick("home")}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("about")}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick("services")}
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick("career")}
          >
            Career
          </button>

          <button
            className="nav-contact-mobile"
            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </button>
        </div>

        <button
          className="nav-contact"
          onClick={() => handleNavClick("contact")}
        >
          Contact Us
          <ArrowUpRight size={17} />
        </button>

        {user ? (
          <div className="navbar-profile">
            <button
              className="profile-button"
              onClick={() =>
                navigate("/profile")
              }
              title={user.name || "Profile"}
            >
              <UserCircle size={25} />
            </button>

            <button
              className="profile-logout"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="navbar-login"
          >
            Login
          </Link>
        )}

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </nav>
    </header>
  );
}

export default Navbar; */

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("User data error:", error);
        setUser(null);
      }
    }
  }, []);

  const handleNavClick = (section) => {
    setMenuOpen(false);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleProfileClick = () => {
    setProfileOpen((prev) => !prev);
  };

  const handleDashboard = () => {
    setProfileOpen(false);
    navigate("/admin");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setProfileOpen(false);

    navigate("/");
    window.location.reload();
  };

  const getInitial = () => {
    if (!user?.name) return "U";

    return user.name.trim().charAt(0).toUpperCase();
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Brand */}
        <button
          className="brand"
          onClick={() => handleNavClick("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">G</span>

          <span className="brand-name">
            Grosslead<span> Media</span>
          </span>
        </button>

        {/* Navigation Links */}
        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <button
            onClick={() => handleNavClick("home")}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("about")}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick("services")}
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick("career")}
          >
            Career
          </button>

          <button
            className="nav-contact-mobile"
            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </button>
        </div>

        {/* Contact */}
        <button
          className="nav-contact"
          onClick={() => handleNavClick("contact")}
        >
          Contact Us
          <ArrowUpRight size={17} />
        </button>

        {/* Login / Profile */}
        {user ? (
          <div className="navbar-profile">

            <button
              className="profile-button"
              onClick={handleProfileClick}
              title="Profile"
            >
              {getInitial()}
            </button>

            {profileOpen && (
              <div className="profile-dropdown">

                <div className="profile-info">
                  <div className="profile-avatar">
                    {getInitial()}
                  </div>

                  <div className="profile-details">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                </div>

                {user.role === "admin" && (
                  <button
                    className="profile-menu-item"
                    onClick={handleDashboard}
                  >
                    <LayoutDashboard size={17} />
                    Admin Dashboard
                  </button>
                )}

                <button
                  className="profile-menu-item logout-item"
                  onClick={handleLogout}
                >
                  <LogOut size={17} />
                  Logout
                </button>

              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="navbar-login"
          >
            Login
          </Link>
        )}

        {/* Mobile Menu */}
        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;