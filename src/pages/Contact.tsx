import { business } from "../config/business";

function Contact() {
  return (
    <>
      <header className="site-header">
        <a href="/" className="brand" aria-label="MALDEE BEAUTY home">
          <span className="brand-main">MALDEE</span>
          <span className="brand-sub">BEAUTY</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>

        <a
          className="header-whatsapp"
          href={business.whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </header>

      <main id="main-content">
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">CONTACT MALDEE BEAUTY</p>

            <h1>Let's talk about your beauty needs.</h1>

            <p>
              Reach out to enquire about appointments, services and available
              beauty products.
            </p>
          </div>

          <div className="business-details">
            <div>
              <span>Location</span>
              <strong>{business.location}</strong>
            </div>

            <div>
              <span>Phone</span>
              <a href={business.phoneLink}>
                <strong>{business.phone}</strong>
              </a>
            </div>

            <div>
              <span>Email</span>
              <a href={`mailto:${business.email}`}>
                <strong>{business.email}</strong>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">BOOK OR ENQUIRE</p>

            <h2>Choose the easiest way to reach us.</h2>

            <p>
              WhatsApp is the quickest way to enquire about appointments,
              services and product availability.
            </p>

            <div className="contact-actions">
              <a
                className="button button-dark"
                href={business.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp MALDEE BEAUTY
              </a>

              <a className="button button-light" href={business.phoneLink}>
                Call {business.phone}
              </a>

              <a
                className="button button-light"
                href={`mailto:${business.email}`}
              >
                Send an Email
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">OPENING HOURS</p>

            <h2>When you can visit us.</h2>
          </div>

          <div className="services-grid">
            {business.openingHours.map((item, index) => (
              <article className="service-card" key={item.day}>
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.day}</h3>

                <p>{item.hours}</p>
              </article>
            ))}
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
          <a href={business.phoneLink}>{business.phone}</a>
          <a href={`mailto:${business.email}`}>{business.email}</a>
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
