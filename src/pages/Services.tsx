```tsx
import { business } from "../config/business";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Services() {
  const categories = [
    "Beauty & Makeup",
    "Hair & Wigs",
    "Body Art",
    "Beauty Products",
  ];

  return (
    <>
      <Header />

      <main id="main-content">
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">OUR SERVICES</p>

            <h1>
              Beauty services and products designed around your style.
            </h1>

            <p>
              Explore the professional beauty services and carefully selected
              beauty products available at MALDEE BEAUTY in Thika Town.
            </p>
          </div>

          {categories.map((category) => {
            const categoryServices = business.services.filter(
              (service) => service.category === category
            );

            if (categoryServices.length === 0) {
              return null;
            }

            return (
              <section className="section" key={category}>
                <div className="section-heading">
                  <p className="eyebrow">{category.toUpperCase()}</p>

                  <h2>
                    {category === "Beauty & Makeup" &&
                      "Beauty and makeup services."}

                    {category === "Hair & Wigs" &&
                      "Hair and wig services."}

                    {category === "Body Art" &&
                      "Creative body artistry."}

                    {category === "Beauty Products" &&
                      "Beauty products for your routine."}
                  </h2>
                </div>

                <div className="services-grid">
                  {categoryServices.map((service, index) => (
                    <article
                      className="service-card"
                      key={service.name}
                    >
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
            );
          })}
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">BOOK OR ENQUIRE</p>

            <h2>Find the right beauty service for you.</h2>

            <p>
              Contact MALDEE BEAUTY to enquire about a service, appointment
              or available beauty products.
            </p>

            <div className="contact-actions">
              <a
                className="button button-dark"
                href={`${business.whatsappLink}?text=${encodeURIComponent(
                  "Hello MALDEE BEAUTY, I would like to enquire about your services."
                )}`}
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
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;
```
