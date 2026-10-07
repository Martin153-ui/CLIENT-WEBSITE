```tsx id="m4q2vk"
import { business } from "../config/business";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Gallery() {
  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=85",
      alt: "Professional makeup beauty look",
      category: "Makeup",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
      alt: "Professional beauty and makeup",
      category: "Beauty",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      alt: "Elegant beauty styling",
      category: "Styling",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=85",
      alt: "Professional hair styling",
      category: "Hair & Wigs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=85",
      alt: "Professional beauty products",
      category: "Products",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589992893756-3f6b5d3f6b8a?auto=format&fit=crop&w=1200&q=85",
      alt: "Body art and tattoo styling",
      category: "Body Art",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello MALDEE BEAUTY, I would like to enquire about your services."
  );

  return (
    <>
      <Header />

      <main id="main-content">
        <section className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">MALDEE BEAUTY GALLERY</p>

            <h1>
              A glimpse into beauty, style and personal expression.
            </h1>

            <p>
              Explore a visual collection inspired by the beauty services,
              styling and products available at MALDEE BEAUTY in Thika Town.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure className="gallery-item" key={item.image}>
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />

                <figcaption>{item.category}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">CREATE YOUR LOOK</p>

            <h2>Ready for your next beauty experience?</h2>

            <p>
              Contact MALDEE BEAUTY to enquire about makeup, lashes, wigs,
              microblading, body art and available beauty products.
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

export default Gallery;
```
