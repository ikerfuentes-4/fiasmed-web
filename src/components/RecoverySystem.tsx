"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/media";
import { Reveal } from "./Reveal";

const stages = [
  {
    step: "01",
    stage: "Entendre",
    title: "Escoltar abans d'actuar.",
    text: "Una valoració personalitzada és el primer pas. Parlem del que notes, no només del que es veu en una prova.",
    photo: media.handsTreatment2,
    services: ["Fisioteràpia especialitzada", "Podologia"],
  },
  {
    step: "02",
    stage: "Recuperar",
    title: "Un pla que es mou amb tu.",
    text: "Tècniques avançades i exercici guiat, sempre triats segons el teu cas i el teu moment.",
    photo: media.therapeuticExercise,
    services: ["Fisioteràpia esportiva", "Sòl pelvià", "Readaptació esportiva"],
  },
  {
    step: "03",
    stage: "Tornar",
    title: "Tornar a fer allò que t'importa.",
    text: "L'objectiu no és el tractament, és el que faràs després: córrer, jugar, entrenar, viure sense pensar-hi.",
    photo: media.sportsPhysio,
    services: ["Entrenament personal"],
  },
];

export function RecoverySystem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.4"] });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="recuperacio" className="recovery-section" ref={ref}>
      <div className="container">
        <Reveal className="section-intro">
          <div>
            <p className="eyebrow">Un sistema de recuperació</p>
            <h2>
              Entendre. Recuperar. <em>Tornar.</em>
            </h2>
          </div>
          <p>Els nostres serveis no són un catàleg: són les tres fases del teu camí.</p>
        </Reveal>

        <div className="recovery-rail-wrap">
          <div className="recovery-rail-track">
            <motion.div className="recovery-rail-fill" style={{ height: railHeight }} />
          </div>

          <div className="recovery-rows">
            {stages.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05} className="recovery-row">
                <div className="recovery-row-photo">
                  <img src={item.photo} alt={item.title} loading="lazy" />
                </div>
                <div className="recovery-row-copy">
                  <span className="recovery-step">
                    {item.step} · {item.stage}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="recovery-services">
                    {item.services.map((service) => (
                      <li key={service}>
                        {service} <ArrowUpRight size={14} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
