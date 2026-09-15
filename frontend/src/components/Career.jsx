import { ArrowRight, BriefcaseBusiness, Users, Rocket } from "lucide-react";
import "../styles/Career.css";

function Career() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="career-section section-padding" id="career">
      <div className="section-container">
        <div className="career-wrapper">
          <div className="career-content">
            <span className="section-label">CAREERS</span>

            <h2>
              Build your career
              <span> with us.</span>
            </h2>

            <p>
              We believe great work comes from curious people who love
              learning, creating, and solving meaningful problems.
            </p>

            <button className="career-button" onClick={scrollToContact}>
              Talk to our team
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="career-features">
            <div>
              <BriefcaseBusiness size={22} />
              <h4>Real Opportunities</h4>
              <p>Work on projects that create real business value.</p>
            </div>

            <div>
              <Users size={22} />
              <h4>Collaborative Culture</h4>
              <p>Learn and grow with people who support your ideas.</p>
            </div>

            <div>
              <Rocket size={22} />
              <h4>Keep Growing</h4>
              <p>Build skills while taking on new challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;