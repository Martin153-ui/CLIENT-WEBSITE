import { business } from "../config/business";

function About() {
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
            <p className="eyebrow">ABOUT MALDEE BEAUTY</p>

            <h1>
              Beauty, confidence and personal expression in Thika Town.
            </h1>

            <p>
              MALDEE BEAUTY brings professional beauty services, personal
              expression and carefully selected beauty products together in
              one destination.
            </p>
          </div>

          <div className="about-section">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
                alt="Beauty professional workspace"
              />
            </div>

            <div className="about-content">
              <p className="eyebrow">OUR APPROACH</p>

              <h2>Beauty designed around you.</h2>

              <p>
                Our approach brings together beauty artistry, personal style
                and a professional customer experience.
              </p>

              <p>
                Whether you are preparing for a special occasion, refreshing
                your everyday look or exploring personal expression through
                body art, MALDEE BEAUTY provides a range of services from one
                convenient location in Thika Town.
              </p>

              <p>
                We also offer selected beauty products including makeup,
                skincare, haircare, wigs and fragrances.
              </p>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div>
            <p className="eyebrow">OUR VALUES</p>

            <h2>
              Professional service with attention to the details that matter.
            </h2>
          </div>

          <div className="trust-grid">
            <div>
              <strong>01</strong>
              <h3>Attention to Detail</h3>
              <p>
                Every service deserves care, precision and thoughtful
                execution.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Professional Environment</h3>
              <p>
                A welcoming environment focused on your beauty experience.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Personalized Service</h3>
              <p>
                Services and beauty choices that reflect your individual
                preferences.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Convenient Location</h3>
              <p>
                Conveniently located in Thika Town, Kenya.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">VISIT MALDEE BEAUTY</p>

            <h2>Let's create your next look.</h2>

            <p>
              Contact us about an appointment, beauty service or available
              products.
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

export default About;
