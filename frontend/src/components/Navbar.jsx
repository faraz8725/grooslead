import { useState } from "react";
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

export default Navbar;