import { useEffect, useState } from "react";
import {
  Monitor,
  Megaphone,
  Palette,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import { API_URL } from "../config/api";
import "../styles/Services.css";

const iconMap = {
  "Digital Solutions": Monitor,
  "Digital Marketing": Megaphone,
  "Creative & Design": Palette,
  Technology: Code2,
};

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/services`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch services");
        }

        setServices(data.services || data);
      } catch (error) {
        console.error("Fetch services error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section
      className="services-section section-padding"
      id="services"
    >
      <div className="section-container">
        <div className="services-header">
          <div className="section-heading">
            <span className="section-label">OUR SERVICES</span>

            <h2>
              Everything you need to
              <span> move forward.</span>
            </h2>
          </div>

          <p>
            From strategy to execution, we bring creative thinking and
            digital expertise together under one roof.
          </p>
        </div>

        <div className="services-grid">
          {loading ? (
            <p>Loading services...</p>
          ) : services.length === 0 ? (
            <p>No services available.</p>
          ) : (
            services.map((service, index) => {
              const Icon = iconMap[service.title] || Monitor;

              return (
                <article
                  className="service-card"
                  key={service._id}
                >
                  <div className="service-top">
                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="service-icon">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="service-content">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <button
                    className="service-arrow"
                    aria-label={service.title}
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;