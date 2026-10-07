```tsx
import { business } from "../config/business";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const whatsappMessage = encodeURIComponent(
    "Hello MALDEE BEAUTY, I would like to enquire about your services."
  );

  return (
    <>
      <Header />

      <main id="main-content">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">THIKA TOWN • KENYA</p>

            <h1>{business.tagline}</h1>

            <p className="hero-text">
              Discover professional beauty services, personal expression and
              carefully selected beauty products at MALDEE BEAUTY.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="/contact">
                Book an Appointment
              </a>

              <a className="button button-light" href="/services">
                Explore Our Services
              </a>
            </div>

            <div className="quick-contact">
              <a
                href={`${business.whatsappLink}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <a href={business.phoneLink}>
                Call {business.phone}
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85"
              alt="Professional beauty portrait"
            />
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE OFFER</p>

            <h2>Beauty services designed around you.</h2>

            <p>
              From makeup and lashes to wigs, microblading and body artistry,
              MALDEE BEAUTY brings different expressions of beauty together in
              one professional destination.
            </p>
          </div>

          <div className="services-grid">
            {business.services.slice(0, 6).map((service, index) => (
              <article className="service-card" key={service.name}>
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <a href="/contact">Inquire →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty professional workspace"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <p className="eyebrow">ABOUT MALDEE BEAUTY</p>

            <h2>
              Where beauty meets confidence and personal expression.
            </h2>

            <p>
              MALDEE BEAUTY brings beauty services, beauty products and
              personal expression together in one professional destination in
              Thika Town.
            </p>

            <p>
              Whether you are looking for a polished makeup look, beautiful
              lashes, a new wig installation, body artistry or beauty products
              for your routine, our goal is to provide a welcoming and
              professional experience.
            </p>

            <a className="text-link" href="/about">
              Discover MALDEE BEAUTY →
            </a>
          </div>
        </section>

        <section className="section products-section">
          <div className="section-heading">
            <p className="eyebrow">BEAUTY COLLECTION</p>

            <h2>Products to complement your beauty routine.</h2>
          </div>

          <div className="product-grid">
            {business.services
              .filter((service) => service.category === "Beauty Products")
              .map((product) => (
                <article className="product-card" key={product.name}>
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <a href="/contact">Inquire →</a>
                </article>
              ))}
          </div>
        </section>

        <section className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">OUR WORLD</p>

            <h2>A glimpse into the MALDEE BEAUTY experience.</h2>
          </div>

          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=85"
              alt="Professional makeup beauty look"
              loading="lazy"
            />

            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85"
              alt="Professional beauty and makeup"
              loading="lazy"
            />

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
              alt="Elegant fashion and beauty styling"
              loading="lazy"
            />

            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85"
              alt="Professional hair styling"
              loading="lazy"
            />
          </div>
        </section>

        <section className="trust-section">
          <div>
            <p className="eyebrow">WHY MALDEE BEAUTY</p>

            <h2>A professional destination for your beauty journey.</h2>
          </div>

          <div className="trust-grid">
            <div>
              <strong>01</strong>

              <h3>Attention to Detail</h3>

              <p>
                Every beauty service deserves care, precision and attention.
              </p>
            </div>

            <div>
              <strong>02</strong>

              <h3>Professional Environment</h3>

              <p>
                A welcoming setting designed around your beauty experience.
              </p>
            </div>

            <div>
              <strong>03</strong>

              <h3>Personalized Service</h3>

              <p>
                Beauty choices that reflect your individual style and needs.
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
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>Ready to elevate your look?</h2>

            <p>
              Contact MALDEE BEAUTY to enquire about services, appointments
              and available beauty products.
            </p>

            <div className="contact-actions">
              <a
                className="button button-dark"
                href={`${business.whatsappLink}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>

              <a className="button button-light" href={business.phoneLink}>
                Call Now
              </a>

              <a
                className="button button-light"
                href={`mailto:${business.email}`}
              >
                Email Us
              </a>
            </div>

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
          </div>
        </section>
      </main>

      <a
        className="floating-whatsapp"
        href={`${business.whatsappLink}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with MALDEE BEAUTY on WhatsApp"
      >
        WhatsApp
      </a>

      <Footer />
    </>
  );
}

export default Home;
```
