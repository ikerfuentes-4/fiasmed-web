import { CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP } from "./Header";

export function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow light">S&apos;atén amb cita prèvia</p>
          <h2>Fem el primer pas.</h2>
        </Reveal>
        <Reveal delay={0.1} className="contact-row">
          <a className="primary-button" href={WHATSAPP} target="_blank" rel="noreferrer">
            Fes la teva reserva <MessageCircle size={17} />
          </a>
          <div className="contact-details">
            <a href="tel:+34647479968">
              <Phone size={15} /> +34 647 479 968
            </a>
            <a href="mailto:fisiofiasmed@fiasmed.com">
              <MessageCircle size={15} /> fisiofiasmed@fiasmed.com
            </a>
            <span>
              <MapPin size={15} /> Plaça de Jeroni Gelpí i Novell, 3, local 7
            </span>
            <span>
              <CalendarDays size={15} /> Dilluns a divendres · 09:00 a 20:00
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
