"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { bodyZones, type BodyZoneId } from "./bodyMapData";
import { team } from "@/lib/team";
import { WHATSAPP } from "../Header";
import { EASE_OUT } from "../Reveal";

export function BodyMapMobile() {
  const [open, setOpen] = useState<BodyZoneId | null>(null);

  return (
    <div className="body-map-mobile">
      {bodyZones.map((zone) => {
        const isOpen = open === zone.id;
        return (
          <div className={`body-accordion-item${isOpen ? " is-open" : ""}`} key={zone.id}>
            <button
              type="button"
              className="body-accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : zone.id)}
            >
              <span>{zone.label}</span>
              <ChevronDown size={18} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="body-accordion-panel"
                >
                  <ul className="body-situations">
                    {zone.situations.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <p className="body-help">{zone.help}</p>
                  <div className="body-professionals">
                    {zone.professionals.map((name) => {
                      const member = team.find((t) => t.name === name);
                      if (!member) return null;
                      return (
                        <div className="body-professional" key={name}>
                          <img src={member.photo} alt={name} />
                          <div>
                            <strong>{name}</strong>
                            <span>{member.role}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <a className="primary-button dark" href={WHATSAPP} target="_blank" rel="noreferrer">
                    Reservar per {zone.service.toLowerCase()} <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
