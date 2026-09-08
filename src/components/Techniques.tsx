"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

const techniques = [
  { name: "Massatge terapèutic", text: "Manipulació manual per alleujar el dolor i reduir la tensió muscular." },
  { name: "Punció seca", text: "Tractament del dolor muscular i els punts gallet miofascials amb agulles fines." },
  { name: "Manipulació osteopàtica", text: "Teràpia manual global per restablir l'equilibri i la mobilitat del cos." },
  { name: "Exercici terapèutic", text: "Moviment guiat i progressiu per recuperar força, control i funció." },
  { name: "Neuromodulació", text: "Regulació directa de l'activitat nerviosa amb estímuls elèctrics controlats." },
  { name: "Electropunció", text: "Agulles a punts estratègics combinades amb corrents elèctrics." },
  { name: "Neurodinàmia SNP", text: "Mobilització del sistema nerviós perifèric per alliberar tensió neural." },
  { name: "Ecografia", text: "Imatge en temps real per guiar el diagnòstic i el tractament amb precisió." },
  { name: "Crioteràpia", text: "Exposició a temperatures molt baixes per reduir inflamació i dolor." },
  { name: "Diatèrmia", text: "Calor profunda per tractar teixits musculoesquelètics en profunditat." },
  { name: "Ones de xoc", text: "Polsos acústics extracorporis que estimulen la reparació dels teixits." },
  { name: "Pressoteràpia", text: "Pressió d'aire controlada per millorar la circulació sanguínia i limfàtica." },
  { name: "Parafina", text: "Calor superficial per relaxar articulacions i teixits tous." },
  { name: "Ultrasò", text: "Vibració tèrmica dels teixits per afavorir-ne la recuperació." },
  { name: "Magnetoteràpia", text: "Camps magnètics per estimular la regeneració dels teixits." },
  { name: "Electroteràpia", text: "Corrents elèctrics (TENS, EMS) per treballar el sistema nerviós i muscular." },
];

export function Techniques() {
  const [showAll, setShowAll] = useState(false);
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
            el teu moment.
          </p>
          <button type="button" className="technique-toggle" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Amagar tècniques" : "Veure totes les tècniques"}
            <ArrowDown size={16} style={{ transform: showAll ? "rotate(180deg)" : undefined }} />
          </button>
        </Reveal>

        <Reveal delay={0.08} className="technique-list">
          {visible.map((technique, index) => (
            <div key={technique.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{technique.name}</strong>
                <p>{technique.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
