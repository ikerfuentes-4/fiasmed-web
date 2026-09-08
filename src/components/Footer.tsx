import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { media } from "@/lib/media";
import { SOCIAL_LINKS } from "@/lib/trust";

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.6 5.82c-.9-.63-1.53-1.6-1.72-2.72h-3.06v13.2a2.7 2.7 0 1 1-2.7-2.7c.24 0 .48.03.7.09V10.6a5.7 5.7 0 1 0 5.06 5.66V9.4a8.06 8.06 0 0 0 4.73 1.52V7.86a4.85 4.85 0 0 1-3.01-2.04Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/#inici" className="brand">
          <img src={media.logoBlack} alt="Fisio Fiasmed" />
        </Link>
        <div className="footer-social">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Fisio Fiasmed">
            <Instagram size={18} />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook de Fisio Fiasmed">
            <Facebook size={18} />
          </a>
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok de Fisio Fiasmed">
            <TikTokIcon />
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube de Fisio Fiasmed">
            <Youtube size={18} />
          </a>
        </div>
        <span>© 2026 Fisio Fiasmed · Vilassar de Mar</span>
        <span>Fisioteràpia · Salut · Moviment</span>
      </div>
    </footer>
  );
}
