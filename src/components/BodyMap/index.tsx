import { ArrowRight } from "lucide-react";
import { bodyZones } from "./bodyMapData";
import { BodyMap } from "./BodyMap";
import { BodyMapMobile } from "./BodyMapMobile";
import { WHATSAPP } from "../Header";
import { Reveal } from "../Reveal";

export function WhatHappensSection() {
  const generalZone = bodyZones.find((z) => z.id === "benestar")!;

  return (
    <section id="que-et-passa" className="patient-section">
      <div className="container">
        <Reveal className="patient-heading">
          <p className="eyebrow">Què et passa?</p>
          <h2>
            Toca on et fa mal.
            <br />
            <em>Nosaltres et diem per on començar.</em>
          </h2>
          <p>
            No cal que sàpigues quin servei necessites. Zona → situació → com t&apos;ajudem →
            professional → reserva.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="body-map-desktop-wrap">
          <BodyMap />
        </Reveal>
        <Reveal delay={0.1} className="body-map-mobile-wrap">
          <BodyMapMobile />
        </Reveal>

        <Reveal delay={0.15} className="body-map-general">
          <div>
            <p className="eyebrow">No és un lloc concret</p>
            <h3>{generalZone.label}</h3>
            <p>{generalZone.help}</p>
          </div>
          <a className="outline-button" href={WHATSAPP} target="_blank" rel="noreferrer">
            Parlar amb nosaltres <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
