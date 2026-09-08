"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

const techniques = [
  {
    name: "Massatge terapèutic",
    text: "Manipulació manual que alleuja el dolor, redueix la tensió muscular i millora la circulació. A diferència d'un massatge relaxant, treballa problemes concrets: contractures, lesions esportives, dolor crònic i tensió postural.",
  },
  {
    name: "Punció seca",
    text: "Introducció d'una agulla fina en punts concrets del múscul per alliberar contractures profundes i punts gallet. Redueix el dolor de forma immediata i millora la mobilitat i la circulació de la zona tractada.",
  },
  {
    name: "Manipulació osteopàtica",
    text: "Teràpia manual estructural, visceral i craniana per alleujar el dolor muscular i articular, millorar la postura, reduir l'estrès i equilibrar el sistema nerviós. També ajuda amb problemes digestius i mal de cap.",
  },
  {
    name: "Exercici terapèutic",
    text: "Moviments i exercicis específics, guiats i progressius, per tractar, prevenir i rehabilitar lesions, recuperant força, control i funció.",
  },
  {
    name: "Neuromodulació",
    text: "Estímuls elèctrics de baixa intensitat sobre nervis o músculs, de forma percutània o no, per reduir el dolor crònic, recuperar el control motor i trencar patrons de dolor persistent.",
  },
  {
    name: "Electropunció",
    text: "Combina l'acupuntura amb estimulació elèctrica de baixa intensitat: agulles fines connectades a corrents controlats que potencien l'efecte analgèsic i neuromuscular de la punció seca. La sensació és una contracció lleu, no dolorosa.",
  },
  {
    name: "Neurodinàmia SNP",
    text: "Examina com es mouen els nervis dins dels teixits i com les restriccions d'aquest moviment poden causar dolor i disfunció, per alliberar tensió del sistema nerviós perifèric.",
  },
  {
    name: "Ecografia",
    text: "Imatge no invasiva amb ones d'ultrasò per visualitzar múscul i teixits tous en temps real, guiant el diagnòstic i la precisió del tractament.",
  },
  {
    name: "Crioteràpia",
    text: "Fred aplicat de forma controlada, local o general, per reduir inflamació, dolor i sensibilitat nerviosa en lesions agudes, postoperatoris i recuperació esportiva.",
  },
  {
    name: "Diatèrmia",
    text: "Corrents d'alta freqüència que generen calor profunda als teixits: redueixen dolor i inflamació, acceleren la curació i milloren la mobilitat, de forma indolora i molt segura.",
  },
  {
    name: "Ones de xoc",
    text: "Ones acústiques d'alta intensitat que activen la circulació, estimulen la regeneració cel·lular i trenquen calcificacions o adherències, amb resultats visibles en poques sessions.",
  },
  {
    name: "Pressoteràpia",
    text: "Pressió d'aire controlada per millorar la circulació sanguínia i limfàtica, reduint la inflor i afavorint la recuperació.",
  },
  {
    name: "Parafina",
    text: "Calor superficial que s'aplica fosa sobre la pell per hidratar-la en profunditat i relaxar articulacions i teixits tous.",
  },
  {
    name: "Ultrasò",
    text: "Ones sonores d'alta freqüència que generen efecte tèrmic i mecànic als teixits profunds, alleujant el dolor i accelerant la recuperació de manera indolora.",
  },
  {
    name: "Magnetoteràpia",
    text: "Camps magnètics estàtics o polsants que estimulen els teixits i les cèl·lules del cos per afavorir-ne la regeneració.",
  },
  {
    name: "Electroteràpia",
    text: "Corrents elèctrics (TENS, EMS) que actuen sobre el sistema nerviós i muscular per reduir el dolor i potenciar la funció.",
  },
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
