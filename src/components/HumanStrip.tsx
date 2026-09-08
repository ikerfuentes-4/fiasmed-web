"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { humanStrip } from "@/lib/media";
import { Reveal } from "./Reveal";

export function HumanStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section id="humans" className="human-strip" ref={ref}>
      <Reveal className="container human-strip-intro">
        <p className="eyebrow">Fiasmed és equip</p>
        <h2>Darrere de cada recuperació hi ha persones.</h2>
      </Reveal>
      <div className="human-strip-track-wrap">
        <motion.div className="human-strip-track" style={{ x }}>
          {[...humanStrip, ...humanStrip].map((photo, index) => (
            <div className="human-strip-item" key={`${photo.alt}-${index}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
