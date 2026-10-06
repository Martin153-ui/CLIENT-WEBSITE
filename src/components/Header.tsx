import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "../config/business";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a
        href="/"
        className="brand"
        aria-label="MALDEE BEAUTY home"
        onClick={closeMenu}
      >
        <span className="brand-main">MALDEE</span>
        <span className="brand-sub">BEAUTY</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/" onClick={closeMenu}>
          Home
        </a>
        <a href="/about" onClick={closeMenu}>
          About
        </a>
        <a href="/services" onClick={closeMenu}>
          Services
        </a>
        <a href="/gallery" onClick={closeMenu}>
          Gallery
        </a>
        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <a
        className="header-whatsapp"
        href={business.whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Us
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/" onClick={closeMenu}>
            Home
          </a>
          <a href="/about" onClick={closeMenu}>
            About
          </a>
          <a href="/services" onClick={closeMenu}>
            Services
          </a>
          <a href="/gallery" onClick={closeMenu}>
            Gallery
          </a>
          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            className="mobile-whatsapp"
            href={business.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
