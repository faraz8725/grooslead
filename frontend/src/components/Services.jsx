import {
  Monitor,
  Megaphone,
  Palette,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import "../styles/Services.css";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Digital Solutions",
    description:
      "Modern digital experiences designed to make your business easier to discover and engage with.",
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic campaigns and communication that help your brand reach the right people.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Creative & Design",
    description:
      "Clean, thoughtful visual experiences that make your brand memorable.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Technology",
    description:
      "Reliable technology solutions built around your business goals and future growth.",
  },
];

function Services() {
  return (
    <section className="services-section section-padding" id="services">
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
            From strategy to execution, we bring creative thinking and digital
            expertise together under one roof.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>

                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <button className="service-arrow" aria-label={service.title}>
                  <ArrowUpRight size={19} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;