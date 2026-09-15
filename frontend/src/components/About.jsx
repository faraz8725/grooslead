import { ArrowUpRight, Target, Users, Lightbulb } from "lucide-react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        <div className="section-heading about-heading">
          <span className="section-label">ABOUT US</span>

          <h2>
            We turn ideas into
            <span> meaningful experiences.</span>
          </h2>

          <p>
            Grosslead Media combines creativity, strategy, and technology to
            help businesses communicate better and grow stronger in the
            digital world.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <div className="about-number">01</div>

            <h3>Built around your vision.</h3>

            <p>
              Every brand has a story. Our job is to understand that story,
              shape it into a clear digital experience, and make sure it
              reaches the right audience.
            </p>

            <button className="text-button">
              Discover our approach
              <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">
                <Target size={21} />
              </div>

              <h4>Purpose Driven</h4>

              <p>
                We focus on solutions that have a clear purpose and measurable
                direction.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <Lightbulb size={21} />
              </div>

              <h4>Creative Thinking</h4>

              <p>
                Fresh ideas and thoughtful design are at the heart of what we
                create.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <Users size={21} />
              </div>

              <h4>People First</h4>

              <p>
                We build long-term relationships through communication,
                collaboration, and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;