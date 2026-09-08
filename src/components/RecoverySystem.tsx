"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { stages } from "@/lib/services";
import { Reveal, EASE_OUT } from "./Reveal";

export function RecoverySystem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.4"] });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [open, setOpen] = useState<string | null>(null);

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
                    {item.services.map((service) => {
                      const isOpen = open === service.name;
                      return (
                        <li key={service.name} className={isOpen ? "is-open" : undefined}>
                          <button type="button" onClick={() => setOpen(isOpen ? null : service.name)}>
                            <strong>
                              {service.name} <ArrowUpRight size={14} />
                            </strong>
                            <span>{service.text}</span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                className="recovery-service-detail"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.28, ease: EASE_OUT }}
                              >
                                <p>{service.detail}</p>
                                <Link className="recovery-service-link" href={`/serveis/${service.slug}`}>
                                  Veure la pàgina del servei <ArrowUpRight size={13} />
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    })}
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
