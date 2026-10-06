import { business } from "../config/business";

const galleryItems = [
  {
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional makeup beauty look",
  },
  {
    category: "Lashes",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional beauty and makeup",
  },
  {
    category: "Wigs",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional hair styling",
  },
  {
    category: "Products",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85",
    alt: "Beauty products",
  },
  {
    category: "Tattoo",
    image:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional tattoo artistry",
  },
  {
    category: "Piercing",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=85",
    alt: "Beauty and body piercing",
  },
];

function Gallery() {
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
            <p className="eyebrow">OUR GALLERY</p>

            <h1>Beauty, artistry and personal expression.</h1>

            <p>
              Explore a visual selection representing the world of MALDEE
              BEAUTY.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure key={item.image} style={{ margin: 0 }}>
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />

                <figcaption
                  style={{
                    padding: "14px 4px 0",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8b7044",
                  }}
                >
                  {item.category}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">LIKE WHAT YOU SEE?</p>

            <h2>Let's talk about your next look.</h2>

            <p>
              Contact MALDEE BEAUTY to enquire about services, appointments
              and available products.
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

export default Gallery;
