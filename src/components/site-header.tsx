"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Memberships", href: "#memberships" },
  { label: "Benefits", href: "#benefits" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="6membership home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <Image
              src="/6logo.PNG"
              alt=""
              width={44}
              height={44}
              priority
              className="brand-logo-image"
            />
          </span>

          <span className="brand-name">
            6<span>membership</span>
          </span>
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-apply-button" href="#memberships">
          Apply
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
      >
        <nav className="site-shell" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a
            className="mobile-apply-button"
            href="#memberships"
            onClick={closeMenu}
          >
            Apply for membership
          </a>
        </nav>
      </div>
    </header>
  );
}
