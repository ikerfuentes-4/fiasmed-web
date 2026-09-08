"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { media } from "@/lib/media";
import { Reveal } from "./Reveal";
import { WHATSAPP } from "./Header";

export function FirstVisit() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <section id="centre" className="visit-section" ref={ref}>
      <div className="visit-image">
        <motion.img src={media.spaceInterior} alt="Sala de tractament de Fisio Fiasmed" style={{ scale }} />
      </div>
      <div className="visit-copy">
        <Reveal>
          <p className="eyebrow">La primera visita</p>
          <h2>
            Arriba amb dubtes.
            <br />
            <em>Surt amb un camí.</em>
          </h2>
          <p>
            La primera visita és un espai per escoltar-te, valorar què passa i explicar-te les
            opcions sense presses.
          </p>
          <div className="visit-list">
            <div>
              <b>01</b>
              <span>Ens expliques què t&apos;importa</span>
            </div>
            <div>
              <b>02</b>
              <span>Valorem el teu cas amb tu</span>
            </div>
            <div>
              <b>03</b>
              <span>Comencem un pla clar</span>
            </div>
          </div>
          <a className="primary-button dark" href={WHATSAPP} target="_blank" rel="noreferrer">
            Reservar primera visita <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
