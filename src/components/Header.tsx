"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { media } from "@/lib/media";

const WHATSAPP = "https://wa.me/34647479968";

const links = [
  { href: "#humans", label: "Qui som" },
  { href: "#que-et-passa", label: "Què et passa?" },
  { href: "#recuperacio", label: "Serveis" },
  { href: "#equip", label: "L'equip" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inici" className="brand" aria-label="Fisio Fiasmed, inici">
          <img src={media.logoBlack} alt="Fisio Fiasmed" />
        </a>
        <nav className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          Reservar visita <ArrowUpRight size={16} />
        </a>
        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Tancar menú" : "Obrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav container">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            Reservar visita <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}

export { WHATSAPP };
