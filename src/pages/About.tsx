```tsx
import { business } from "../config/business";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

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

              <a
                className="button button-light"
                href={business.phoneLink}
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
```
