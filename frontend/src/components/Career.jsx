import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Users,
  Rocket,
} from "lucide-react";

import { API_URL } from "../config/api";
import "../styles/Career.css";

function Career() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch(`${API_URL}/careers`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch careers");
        }

        setCareers(data.careers || data);
      } catch (error) {
        console.error("Fetch careers error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

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

            <button
              className="career-button"
              onClick={scrollToContact}
            >
              Talk to our team
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="career-features">
            {loading ? (
              <p>Loading career opportunities...</p>
            ) : careers.length === 0 ? (
              <p>No career opportunities available.</p>
            ) : (
              careers.map((career, index) => {
                const icons = [
                  BriefcaseBusiness,
                  Users,
                  Rocket,
                ];

                const Icon = icons[index % icons.length];

                return (
                  <div key={career._id}>
                    <Icon size={22} />

                    <h4>{career.title}</h4>

                    <p>
                      {career.description}
                    </p>

                    <small>
                      {career.location} • {career.type}
                    </small>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;