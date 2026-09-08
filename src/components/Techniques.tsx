"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { techniques } from "@/lib/techniques";
import { Reveal, EASE_OUT } from "./Reveal";

export function Techniques() {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const visible = showAll ? techniques : techniques.slice(0, 8);

  return (
    <section id="tecniques" className="technique-section">
      <div className="container technique-layout">
        <Reveal className="technique-heading">
          <p className="eyebrow">Tècniques de rehabilitació</p>
          <h2>
            Les eines canvien.
            <br />
            <em>La mirada, no.</em>
          </h2>
          <p>
            Posem a la teva disposició tècniques avançades, sempre escollides segons el teu cas i
            el teu moment. Toca&apos;n una per veure&apos;n el detall.
          </p>
          <button type="button" className="technique-toggle" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Amagar tècniques" : "Veure totes les tècniques"}
            <ChevronDown size={16} style={{ transform: showAll ? "rotate(180deg)" : undefined }} />
          </button>
        </Reveal>

        <Reveal delay={0.08} className="technique-list">
          {visible.map((technique, index) => {
            const isOpen = open === technique.name;
            return (
              <div className={`technique-item${isOpen ? " is-open" : ""}`} key={technique.name}>
                <button
                  type="button"
                  className="technique-row"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : technique.name)}
                >
                  <span className="technique-index">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{technique.name}</strong>
                  <ChevronDown size={18} className="technique-chevron" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE_OUT }}
                      className="technique-detail"
                    >
                      <div className="technique-detail-inner">
                        <div>
                          <h4>Què és</h4>
                          <p>{technique.whatIsIt}</p>
                        </div>
                        <div>
                          <h4>Per a què serveix</h4>
                          <ul>
                            {technique.whatFor.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>En resum</h4>
                          <p>{technique.summary}</p>
                          <Link className="recovery-service-link" href={`/tecniques/${technique.slug}`}>
                            Veure la pàgina de la tècnica <ArrowUpRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
