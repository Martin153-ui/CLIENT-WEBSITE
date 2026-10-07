import { business } from "../config/business";

function Footer() {
  return (
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
  );
}

export default Footer;
