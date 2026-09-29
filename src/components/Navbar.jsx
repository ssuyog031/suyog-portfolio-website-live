import { useEffect, useState } from "react";
import { nav, profile } from "../data/content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].href);

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar-logo">
          {profile.name}
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile-panel ${open ? "open" : ""}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
