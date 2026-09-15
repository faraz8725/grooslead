import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">CONTACT US</span>

            <h2>
              Let's create something
              <span> meaningful.</span>
            </h2>

            <p>
              Have an idea, a project, or simply want to know more about us?
              Send us a message and let's start a conversation.
            </p>

            <div className="contact-details">
              <div>
                <div className="contact-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <small>Email</small>
                  <span>hello@grossleadmedia.com</span>
                </div>
              </div>

              <div>
                <div className="contact-icon">
                  <Phone size={18} />
                </div>

                <div>
                  <small>Phone</small>
                  <span>+91 XXXXX XXXXX</span>
                </div>
              </div>

              <div>
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <small>Location</small>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button className="submit-button" type="submit">
              Send Message
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;