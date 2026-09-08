"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { media } from "@/lib/media";

const WHATSAPP = "https://wa.me/34647479968";

const links = [
  { href: "/#humans", label: "Qui som" },
  { href: "/#que-et-passa", label: "Què et passa?" },
  { href: "/#recuperacio", label: "Serveis" },
  { href: "/#tecniques", label: "Tècniques" },
  { href: "/#equip", label: "L'equip" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/#inici" className="brand" aria-label="Fisio Fiasmed, inici">
          <img src={media.logoBlack} alt="Fisio Fiasmed" />
        </Link>
        <nav className="desktop-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
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
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
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
