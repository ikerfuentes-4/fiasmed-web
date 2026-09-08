"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { bodyZones, type BodyZoneId } from "./bodyMapData";
import { team } from "@/lib/team";
import { WHATSAPP } from "../Header";
import { EASE_OUT } from "../Reveal";

// Zones overlaid on the silhouette as % of the figure's bounding box.
// Some anatomical areas map to two overlay hot-spots (left/right) that
// both resolve to the same zone id.
const hotspots: { zone: BodyZoneId; top: number; left: number; width: number; height: number }[] = [
  { zone: "cap-coll", top: 0, left: 36, width: 28, height: 16 },
  { zone: "espatlla-brac", top: 15, left: 10, width: 16, height: 30 },
  { zone: "espatlla-brac", top: 15, left: 74, width: 16, height: 30 },
  { zone: "esquena", top: 15, left: 30, width: 40, height: 22 },
  { zone: "pelvis", top: 37, left: 32, width: 36, height: 10 },
  { zone: "maluc-cuixa", top: 44, left: 26, width: 19, height: 20 },
  { zone: "maluc-cuixa", top: 44, left: 55, width: 19, height: 20 },
  { zone: "genoll", top: 63, left: 27, width: 17, height: 8 },
  { zone: "genoll", top: 63, left: 56, width: 17, height: 8 },
  { zone: "turmell-peu", top: 79, left: 26, width: 18, height: 17 },
  { zone: "turmell-peu", top: 79, left: 56, width: 18, height: 17 },
];

export function BodyMap() {
  const [active, setActive] = useState<BodyZoneId | null>(null);
  const [hovered, setHovered] = useState<BodyZoneId | null>(null);
  const shown = active ?? hovered;
  const activeZone = bodyZones.find((z) => z.id === active);

  return (
    <div className="body-map">
      <div className="body-map-figure">
        <svg viewBox="0 0 240 640" className="body-svg" aria-hidden="true">
          <rect x="68" y="268" width="36" height="286" rx="18" />
          <rect x="136" y="268" width="36" height="286" rx="18" />
          <path d="M76,86 Q120,76 164,86 L172,258 Q120,282 68,258 Z" />
          <rect x="34" y="110" width="30" height="188" rx="15" transform="rotate(-6 49 204)" />
          <rect x="176" y="110" width="30" height="188" rx="15" transform="rotate(6 191 204)" />
          <circle cx="120" cy="52" r="36" />
        </svg>

        {hotspots.map((spot, index) => (
          <button
            key={`${spot.zone}-${index}`}
            type="button"
            className={`body-hotspot${shown === spot.zone ? " is-active" : ""}`}
            style={{ top: `${spot.top}%`, left: `${spot.left}%`, width: `${spot.width}%`, height: `${spot.height}%` }}
            aria-label={`Veure ajuda per a: ${bodyZones.find((z) => z.id === spot.zone)?.label}`}
            aria-pressed={active === spot.zone}
            onMouseEnter={() => setHovered(spot.zone)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(spot.zone)}
            onBlur={() => setHovered(null)}
            onClick={() => setActive(active === spot.zone ? null : spot.zone)}
          />
        ))}
      </div>

      <div className="body-map-panel">
        <AnimatePresence mode="wait">
          {activeZone ? (
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="body-panel-content"
            >
              <p className="eyebrow">{activeZone.label}</p>
              <ul className="body-situations">
                {activeZone.situations.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="body-help">{activeZone.help}</p>
              <div className="body-professionals">
                {activeZone.professionals.map((name) => {
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
              <a
                className="primary-button dark"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Reservar per {activeZone.service.toLowerCase()} <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="body-panel-placeholder"
            >
              <p className="eyebrow">Què et passa?</p>
              <h3>Toca una zona del cos.</h3>
              <p>No cal que sàpigues quin servei necessites. Comença per on notes la molèstia.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
