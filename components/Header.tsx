"use client";

import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav">
        <Logo />
        <nav id="nav-menu" className={`nav-menu${open ? " open" : ""}`} aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm" onClick={close}>Book a free call</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
