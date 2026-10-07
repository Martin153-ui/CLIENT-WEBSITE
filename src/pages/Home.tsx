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
            <p className="eyebrow">MALDEE BEAUTY • THIKA TOWN</p>

            <h1>Beauty, Confidence & Artistry — All in One Place</h1>

            <p>
              Professional beauty services, personal expression and carefully
              selected beauty products in one elegant destination in Thika
              Town, Kenya.
            </p>

            <div className="hero-actions">
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
                href="/services"
              >
                Explore Services
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
                {business.phone}
              </a>

              <span>{business.location}</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
              alt="Professional beauty workspace"
            />
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE OFFER</p>

            <h2>
              Beauty services created to complement your style.
            </h2>

            <p>
              From professional makeup and lashes to wigs, microblading,
              tattooing and body piercing, MALDEE BEAUTY brings a diverse
              range of beauty experiences together.
            </p>
          </div>

          <div className="services-grid">
            {business.services.slice(0, 6).map((service, index) => (
              <article
                className="service-card"
                key={service.name}
              >
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <a href="/services">Explore Service →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=85"
              alt="Professional makeup styling"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <p className="eyebrow">ABOUT MALDEE BEAUTY</p>

            <h2>
              Beauty, artistry and confidence in one destination.
            </h2>

            <p>
              MALDEE BEAUTY brings together professional beauty services,
              personal style and selected beauty products in Thika Town.
            </p>

            <p>
              Whether you are preparing for a special occasion, refreshing
              your everyday look or exploring personal expression through
              body art, our services are designed around your individual
              beauty experience.
            </p>

            <a
              className="button button-dark"
              href="/about"
            >
              Discover MALDEE BEAUTY
            </a>
          </div>
        </section>

        <section className="products-section section">
          <div className="section-heading">
            <p className="eyebrow">BEAUTY PRODUCTS</p>

            <h2>
              Complete your beauty routine.
            </h2>

            <p>
              Explore selected makeup, skincare, haircare, wigs and
              fragrances available from MALDEE BEAUTY.
            </p>
          </div>

          <div className="product-grid">
            {business.services
              .filter((service) => service.category === "Beauty Products")
              .map((service) => (
                <article
                  className="product-card"
                  key={service.name}
                >
                  <span className="eyebrow">MALDEE BEAUTY</span>

                  <h3>{service.name}</h3>

                  <p>{service.description}</p>

                  <a href="/contact">Enquire →</a>
                </article>
              ))}
          </div>
        </section>

        <section className="gallery-section section">
          <div className="section-heading">
            <p className="eyebrow">GALLERY</p>

            <h2>
              A glimpse into beauty and personal expression.
            </h2>

            <p>
              Explore the world of beauty, styling and artistry at MALDEE
              BEAUTY.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85"
                alt="Professional beauty and makeup"
                loading="lazy"
              />

              <figcaption>Beauty</figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant beauty styling"
                loading="lazy"
              />

              <figcaption>Styling</figcaption>
            </figure>

            <figure className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85"
                alt="Professional hair styling"
                loading="lazy"
              />

              <figcaption>Hair & Wigs</figcaption>
            </figure>
          </div>

          <div className="section-actions">
            <a
              className="button button-light"
              href="/gallery"
            >
              View Full Gallery
            </a>
          </div>
        </section>

        <section className="trust-section">
          <div>
            <p className="eyebrow">WHY MALDEE BEAUTY</p>

            <h2>
              A beauty experience built around confidence and individuality.
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
                Beauty choices and services that reflect your individual
                preferences.
              </p>
            </div>

            <div>
              <strong>04</strong>

              <h3>Thika Town</h3>

              <p>
                Conveniently located in Thika Town, Kenya.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">READY WHEN YOU ARE</p>

            <h2>
              Let's create your next look.
            </h2>

            <p>
              Contact MALDEE BEAUTY for appointments, services, products
              and general enquiries.
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
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
```
