import { ArrowRight, Play, Sparkles } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={15} />
          <span>Creative Digital Solutions</span>
        </div>

        <h1>
          Ideas that <span>grow.</span>
          <br />
          Digital experiences that connect.
        </h1>

        <p className="hero-description">
          Grosslead Media helps businesses build meaningful digital
          experiences through creative strategy, modern technology, and
          powerful communication.
        </p>

        <div className="hero-actions">
          <button className="primary-button" onClick={scrollToContact}>
            Let's Work Together
            <ArrowRight size={18} />
          </button>

          <button className="secondary-button" onClick={scrollToServices}>
            <Play size={16} fill="currentColor" />
            Explore Services
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <strong>Creative</strong>
            <span>Thinking</span>
          </div>

          <div>
            <strong>Digital</strong>
            <span>Solutions</span>
          </div>

          <div>
            <strong>Real</strong>
            <span>Impact</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-orbit orbit-one"></div>
        <div className="visual-orbit orbit-two"></div>

        <div className="visual-card main-card">
          <div className="visual-card-top">
            <span>G</span>
            <span>Grosslead</span>
          </div>

          <div className="visual-chart">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="growth-text">
            <small>Digital Growth</small>
            <strong>+84%</strong>
          </div>
        </div>

        <div className="floating-card floating-top">
          <span className="floating-dot"></span>
          Creative Strategy
        </div>

        <div className="floating-card floating-bottom">
          <strong>01</strong>
          <span>Build. Grow. Connect.</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;  