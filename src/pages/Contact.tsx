import { business } from "../config/business";
import Header from "../components/Header";

function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello MALDEE BEAUTY, I would like to enquire about your services."
  );

  return (
    <>
      <Header />

      <main id="main-content">
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">CONTACT MALDEE BEAUTY</p>

            <h1>
              Let's talk about your next beauty experience.
            </h1>

            <p>
              Contact MALDEE BEAUTY for appointments, beauty services,
              products and general enquiries in Thika Town.
            </p>
          </div>

          <div className="contact-section">
            <div className="contact-inner">
              <div className="business-details">
                <div>
                  <span>Location</span>
                  <strong>{business.location}</strong>
                </div>

                <div>
                  <span>Phone</span>
                  <strong>{business.phone}</strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>{business.email}</strong>
                </div>
              </div>

              <div className="contact-actions">
                <a
                  className="button button-dark"
                  href={`${business.whatsappLink}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </a>

                <a
                  className="button button-light"
                  href={business.phoneLink}
                >
                  Call Now
                </a>

                <a
                  className="button button-light"
                  href={`mailto:${business.email}`}
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">OPENING HOURS</p>

            <h2>When you can reach us.</h2>
          </div>

          <div className="trust-grid">
            {business.openingHours.map((item, index) => (
              <div key={item.day}>
                <strong>
                  {String(index + 1).padStart(2, "0")}
                </strong>

                <h3>{item.day}</h3>

                <p>{item.hours}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">FIND US</p>

            <h2>Visit us in Thika Town.</h2>

            <p>
              MALDEE BEAUTY is located in Thika Town, Kenya. Contact us
              directly for directions and appointment enquiries.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              minHeight: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(37, 33, 31, 0.12)",
              background: "#eee8df",
              textAlign: "center",
              padding: "40px",
            }}
          >
            <div>
              <p className="eyebrow">MALDEE BEAUTY</p>

              <h3>Thika Town, Kenya</h3>

              <p>
                Contact us for directions and location details.
              </p>

              <a
                className="button button-dark"
                href="https://www.google.com/maps/search/?api=1&query=Thika+Town+Kenya"
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">READY WHEN YOU ARE</p>

            <h2>Start your beauty conversation today.</h2>

            <p>
              Whether you already know what you want or need help choosing a
              service, reach out to MALDEE BEAUTY.
            </p>

            <div className="contact-actions">
              <a
                className="button button-dark"
                href={`${business.whatsappLink}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>

              <a
                className="button button-light"
                href={business.phoneLink}
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footer-brand">MALDEE BEAUTY</div>

          <p>
            Beauty, confidence, artistry and personal expression in Thika Town.
          </p>
        </div>

        <div>
          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h3>Opening Hours</h3>

          {business.openingHours.map((item) => (
            <p key={item.day}>
              <strong>{item.day}</strong>
              <br />
              {item.hours}
            </p>
          ))}
        </div>

        <div>
          <h3>Contact</h3>

          <a href={business.phoneLink}>
            {business.phone}
          </a>

          <a href={`mailto:${business.email}`}>
            {business.email}
          </a>

          <span>{business.location}</span>
        </div>

        <div className="footer-bottom">
          © 2026 MALDEE BEAUTY. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Contact;
