"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Reveal, EASE_OUT } from "./Reveal";

type Technique = {
  name: string;
  whatIsIt: string;
  whatFor: string[];
  summary: string;
};

const techniques: Technique[] = [
  {
    name: "Massatge terapèutic",
    whatIsIt: "Una tècnica de manipulació manual que es fa servir per alleujar el dolor, reduir la tensió muscular, millorar la circulació i promoure la relaxació general del cos.",
    whatFor: [
      "Redueix la tensió i els nusos musculars, alleujant el dolor i millorant la mobilitat.",
      "Estimula la circulació sanguínia i l'oxigenació dels teixits.",
      "Redueix l'estrès i l'ansietat amb una relaxació profunda.",
      "Accelera la recuperació de lesions esportives i problemes musculoesquelètics.",
    ],
    summary: "A diferència d'un massatge de relaxació, el massatge terapèutic treballa problemes concrets: contractures, lesions esportives, dolor crònic i problemes posturals.",
  },
  {
    name: "Punció seca",
    whatIsIt: "La introducció d'una agulla fina en punts concrets del múscul per alliberar la tensió i reduir el dolor, especialment eficaç en contractures profundes i punts gallet.",
    whatFor: [
      "Redueix el dolor muscular de forma immediata.",
      "Allibera tensió i millora la mobilitat.",
      "Afavoreix la regeneració del teixit muscular.",
      "Millora la circulació sanguínia de la zona.",
    ],
    summary: "Pot produir una petita punxada i una contracció involuntària del múscul: és normal i indica l'alliberament del punt gallet. S'aplica de manera segura i personalitzada.",
  },
  {
    name: "Manipulació osteopàtica",
    whatIsIt: "Una teràpia manual global —estructural, visceral i craniana— que busca restablir l'equilibri i la mobilitat del cos.",
    whatFor: [
      "Alleuja el dolor muscular i articular.",
      "Millora la postura.",
      "Redueix l'estrès i equilibra el sistema nerviós.",
      "Ajuda amb problemes digestius i mal de cap.",
    ],
    summary: "Combina tècniques estructurals per a lesions musculoesquelètiques, viscerals per a la funció dels òrgans i cranials per a l'equilibri general, sempre amb un tractament personalitzat.",
  },
  {
    name: "Exercici terapèutic",
    whatIsIt: "L'ús de moviments i exercicis específics, guiats i progressius, per tractar, prevenir i rehabilitar diverses afeccions físiques.",
    whatFor: [
      "Recupera força, control i estabilitat.",
      "Redueix el risc de noves lesions.",
      "Millora la funció i l'autonomia en el dia a dia.",
    ],
    summary: "El pla d'exercicis es dissenya de manera progressiva, adaptat al teu cas i al teu moment de recuperació.",
  },
  {
    name: "Neuromodulació",
    whatIsIt: "L'aplicació d'estímuls elèctrics de baixa intensitat sobre nervis perifèrics o músculs, de forma percutània o no percutània.",
    whatFor: [
      "Redueix el dolor crònic i neuropàtic.",
      "Recupera el control motor.",
      "Millora la connexió neuromuscular.",
      "Trenca patrons de dolor persistent.",
    ],
    summary: "La forma no percutània aplica elèctrodes sobre la pell, ideal per a dolor generalitzat; la percutània fa servir agulles per a una estimulació nerviosa directa i més localitzada.",
  },
  {
    name: "Electropunció",
    whatIsIt: "Combina l'acupuntura tradicional amb l'estimulació elèctrica de baixa intensitat per potenciar l'efecte analgèsic, antiinflamatori i neuromuscular.",
    whatFor: [
      "Redueix el dolor i la inflamació.",
      "Millora el reg sanguini.",
      "Estimula la relaxació muscular profunda.",
      "Millora la funció motora i el control neuromuscular.",
    ],
    summary: "Pot generar una sensació de contracció lleu i controlada, però no és una tècnica dolorosa; molts pacients noten alleujament immediat després de la sessió.",
  },
  {
    name: "Neurodinàmia SNP",
    whatIsIt: "L'estudi de com es mouen els nervis dins dels teixits i com les restriccions d'aquest moviment poden causar dolor i disfunció.",
    whatFor: [
      "Allibera tensió del sistema nerviós perifèric.",
      "Millora el moviment i redueix el dolor irradiat.",
      "Complementa altres tècniques manuals i d'exercici.",
    ],
    summary: "Especialment útil quan el dolor no ve només del múscul o l'articulació, sinó de restriccions en el recorregut del propi nervi.",
  },
  {
    name: "Ecografia",
    whatIsIt: "Una tècnica d'imatge no invasiva que utilitza ones d'ultrasò per visualitzar en temps real músculs i teixits tous.",
    whatFor: [
      "Precisa el diagnòstic.",
      "Guia amb exactitud altres tècniques (punció seca, electropunció...).",
      "Permet fer seguiment de l'evolució d'una lesió.",
    ],
    summary: "No emet radiació i no és dolorosa: és una eina de suport clínic, no només un tractament en si mateix.",
  },
  {
    name: "Crioteràpia",
    whatIsIt: "L'exposició d'una part del cos a temperatures extremadament baixes, de forma local o general, amb finalitats terapèutiques.",
    whatFor: [
      "Disminueix el dolor i la sensibilitat nerviosa.",
      "Redueix la inflamació i l'edema.",
      "Millora la mobilitat articular.",
      "Reactiva la circulació un cop retirat el fred.",
    ],
    summary: "Útil en lesions agudes, postoperatoris i recuperació esportiva; a Fiasmed s'aplica amb equipament professional com el Cryopush.",
  },
  {
    name: "Diatèrmia",
    whatIsIt: "Una tècnica que utilitza corrents d'alta freqüència per generar calor de manera controlada als teixits profunds.",
    whatFor: [
      "Redueix el dolor i la inflamació.",
      "Accelera la curació dels teixits.",
      "Millora la mobilitat i la flexibilitat.",
      "Ajuda a reabsorbir edemes i hematomes.",
    ],
    summary: "És una tècnica no invasiva, indolora i molt segura, també indicada en recuperació postpart i postoperatoris.",
  },
  {
    name: "Ones de xoc",
    whatIsIt: "Ones acústiques d'alta intensitat que s'apliquen sobre una zona lesionada o dolorosa.",
    whatFor: [
      "Redueix el dolor de forma progressiva.",
      "Estimula la regeneració natural dels teixits.",
      "Millora la mobilitat de la zona afectada.",
      "Trenca calcificacions i adherències.",
    ],
    summary: "Una tècnica segura i avalada científicament, amb resultats visibles en poques sessions: tendinitis, fascitis plantar o punts gallet en són alguns dels casos habituals.",
  },
  {
    name: "Pressoteràpia",
    whatIsIt: "Un tractament que utilitza pressió d'aire controlada per millorar la circulació sanguínia i limfàtica.",
    whatFor: [
      "Redueix la inflor i la sensació de pesadesa.",
      "Millora el retorn venós.",
      "Afavoreix la recuperació muscular.",
    ],
    summary: "Molt utilitzada com a complement d'altres tècniques, especialment en recuperació postpart i esportiva.",
  },
  {
    name: "Parafina",
    whatIsIt: "Un hidrocarbur que es fon i s'aplica sobre la pell per generar calor superficial.",
    whatFor: [
      "Hidrata profundament la pell.",
      "Relaxa articulacions i teixits tous.",
      "Millora la flexibilitat abans d'altres tècniques.",
    ],
    summary: "Especialment agradable en mans i peus, on el fred i la rigidesa articular es noten més.",
  },
  {
    name: "Ultrasò",
    whatIsIt: "Ones sonores d'alta freqüència, no perceptibles per l'oïda, que es transmeten mitjançant un capçal amb gel conductor.",
    whatFor: [
      "Alleuja el dolor muscular i articular.",
      "Redueix la inflamació.",
      "Accelera els processos de recuperació.",
    ],
    summary: "Genera un efecte tèrmic (augmenta la temperatura local i l'elasticitat dels teixits) i un efecte mecànic (afavoreix la regeneració cel·lular). El pacient només nota una lleugera calor o pressió suau.",
  },
  {
    name: "Magnetoteràpia",
    whatIsIt: "L'ús de camps magnètics estàtics o polsants per influir sobre els teixits i les cèl·lules del cos.",
    whatFor: [
      "Estimula la regeneració dels teixits.",
      "Redueix la inflamació.",
      "Complementa la recuperació de lesions cròniques.",
    ],
    summary: "Una tècnica indolora que s'utilitza sovint com a suport a altres tractaments actius.",
  },
  {
    name: "Electroteràpia",
    whatIsIt: "L'ús de corrents elèctrics, com TENS i EMS, per influir sobre el sistema nerviós i muscular.",
    whatFor: [
      "Redueix el dolor (TENS).",
      "Estimula i enforteix la musculatura (EMS).",
      "Complementa l'exercici terapèutic.",
    ],
    summary: "Una eina versàtil que s'adapta tant al control del dolor com al reforç muscular, segons l'objectiu del tractament.",
  },
];

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
