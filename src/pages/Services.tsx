import { business } from "../config/business";

function Services() {
  const categories = [
    "Beauty & Makeup",
    "Hair & Wigs",
    "Body Art",
    "Beauty Products",
  ];

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
            <p className="eyebrow">OUR SERVICES</p>

            <h1>Beauty services for every expression of you.</h1>

            <p>
              Explore professional beauty services and carefully selected
              beauty products available at MALDEE BEAUTY in Thika Town.
            </p>
          </div>

          {categories.map((category) => {
            const services = business.services.filter(
              (service) => service.category === category
            );

            if (services.length === 0) {
              return null;
            }

            return (
              <section key={category} style={{ marginBottom: "70px" }}>
                <div className="section-heading" style={{ marginBottom: "30px" }}>
                  <p className="eyebrow">{category}</p>
                </div>

                <div className="services-grid">
                  {services.map((service, index) => (
                    <article className="service-card" key={service.name}>
                      <span className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{service.name}</h3>

                      <p>{service.description}</p>

                      <a href="/contact">Enquire About This Service →</a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">READY TO GET STARTED?</p>

            <h2>Tell us what you're looking for.</h2>

            <p>
              Contact MALDEE BEAUTY for service enquiries, appointments and
              product availability.
            </p>

            <div className="contact-actions">
              <a
                className="button button-dark"
                href={business.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>

              <a className="button button-light" href={business.phoneLink}>
                Call Now
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

export default Services;
