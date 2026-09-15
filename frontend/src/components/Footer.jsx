/*import {
  Instagram,
  Linkedin,
  Facebook,
  ArrowUp,
} from "lucide-react";

import { ArrowUp } from "lucide-react";
import "../styles/Footer.css";



function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <button onClick={scrollTop} className="footer-logo">
              <span>G</span>
              Grosslead Media
            </button>

            <p>
              Creative thinking, digital solutions, and meaningful
              connections.
            </p>
          </div>

          <div className="footer-links">
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              About
            </button>

            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              Services
            </button>

            <button onClick={() => document.getElementById("career")?.scrollIntoView({ behavior: "smooth" })}>
              Career
            </button>

            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </button>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <Instagram size={17} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>

            <a href="#" aria-label="Facebook">
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Grosslead Media. All rights reserved.</span>

          <button onClick={scrollTop}>
            Back to top
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

*/


import { ArrowUp } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <button onClick={scrollTop} className="footer-logo">
              <span>G</span>
              Grosslead Media
            </button>

            <p>
              Creative thinking, digital solutions, and meaningful
              connections.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("career")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Career
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a href="#" aria-label="LinkedIn">
              IN
            </a>

            <a href="#" aria-label="Facebook">
              FB
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            © 2026 Grosslead Media. All rights reserved.
          </span>

          <button onClick={scrollTop}>
            Back to top
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

