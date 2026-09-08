"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { media } from "@/lib/media";
import { WHATSAPP } from "./Header";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section id="inici" className="hero" ref={ref}>
      <div className="container hero-grid">
        <div className="hero-copy-col">
          <p className="eyebrow">Centre de fisioteràpia a Vilassar de Mar</p>
          <h1>
            El teu cos torna a <em>moure&apos;s.</em>
          </h1>
          <p className="hero-copy">
            T&apos;acompanyem perquè tornis a fer allò que t&apos;importa: caminar sense dolor,
            tornar a entrenar, aixecar-te sense pensar-hi. Amb criteri, proximitat i un equip que
            treballa en equip.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={WHATSAPP} target="_blank" rel="noreferrer">
              Fes la teva reserva <ArrowRight size={17} />
            </a>
            <a className="hero-link" href="#que-et-passa">
              No saps què et passa? <ChevronDown size={16} />
            </a>
          </div>
          <div className="hero-address">
            <span>Plaça de Jeroni Gelpí i Novell, 3 · Vilassar de Mar</span>
          </div>
        </div>
        <div className="hero-photo-col">
          <motion.div className="hero-photo-frame" style={{ y: photoY }}>
            <img src={media.handsTreatment1} alt="Fisioterapeuta tractant un pacient a Fisio Fiasmed" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
