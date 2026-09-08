import { media } from "@/lib/media";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#inici" className="brand">
          <img src={media.logoBlack} alt="Fisio Fiasmed" />
        </a>
        <span>© 2026 Fisio Fiasmed · Vilassar de Mar</span>
        <span>Fisioteràpia · Salut · Moviment</span>
      </div>
    </footer>
  );
}
