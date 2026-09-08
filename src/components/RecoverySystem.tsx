"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/media";
import { Reveal, EASE_OUT } from "./Reveal";

type Service = { name: string; text: string; detail: string };

const stages: { step: string; stage: string; title: string; text: string; photo: string; services: Service[] }[] = [
  {
    step: "01",
    stage: "Entendre",
    title: "Escoltar abans d'actuar.",
    text: "Una valoració personalitzada és el primer pas. Parlem del que notes, no només del que es veu en una prova.",
    photo: media.handsTreatment2,
    services: [
      {
        name: "Fisioteràpia especialitzada",
        text: "Tractaments adaptats a cada pacient, especialitzats en lesions complexes i trastorns musculoesquelètics.",
        detail: "A Fiasmed ens especialitzem en el tractament de lesions complexes i específiques, com les lesions esportives i els trastorns musculoesquelètics. Oferim una fisioteràpia personalitzada, adaptada a cada pacient i a cada lesió, amb l'objectiu d'aconseguir una recuperació efectiva i duradora. Disposem d'equipament d'última generació que ens permet aplicar tractaments altament especialitzats segons la patologia o molèstia de cada persona.",
      },
      {
        name: "Estudi biomecànic de la trepitjada",
        text: "Un petit desequilibri en com trepitges pot generar dolor a genolls, malucs o esquena; l'analitzem des de l'arrel.",
        detail: "El teu cos es mou cada dia —camines, estàs dempeus, puges escales, fas esport— i tot comença pels peus. Un petit desequilibri en com trepitges pot generar dolors o compensacions en altres parts del cos: genolls, malucs, esquena o fins i tot espatlles. L'estudi biomecànic analitza la teva petjada i la teva marxa per trobar l'origen real del problema.",
      },
      {
        name: "Podologia esportiva",
        text: "Prevenció, diagnòstic i tractament de lesions al peu relacionades amb la pràctica esportiva.",
        detail: "Prevenim, diagnostiquem i tractem les lesions del peu, turmell i extremitat inferior derivades de la pràctica esportiva. Una alteració en la petjada o un mal suport pot acabar afectant tot el teu rendiment i provocar lesions recurrents. Inclou avaluació biomecànica completa, anàlisi de la marxa esportiva, revisió del calçat i plantilles a mida.",
      },
      {
        name: "Podologia infantil",
        text: "Cura especialitzada dels peus dels més petits, des dels primers passos.",
        detail: "Els peus dels infants estan en constant desenvolupament, i qualsevol alteració en aquesta etapa pot condicionar-ne el futur. Recomanem una primera visita cap als 4-5 anys, o abans si el nen camina de puntetes o amb els peus cap endins o cap enfora, o es queixa de dolor al peu, turmell, genoll o maluc.",
      },
    ],
  },
  {
    step: "02",
    stage: "Recuperar",
    title: "Un pla que es mou amb tu.",
    text: "Tècniques avançades i exercici guiat, sempre triats segons el teu cas i el teu moment.",
    photo: media.therapeuticExercise,
    services: [
      {
        name: "Fisioteràpia esportiva",
        text: "Prevenció, tractament i rehabilitació de lesions derivades de la pràctica esportiva.",
        detail: "Enfocada en la salut de les persones que practiquen esport, tant a nivell amateur com professional. Tractem esquinços, tendinitis, distensions musculars, lesions de lligaments i problemes de cartílag a genolls, turmells i columna, combinant teràpia manual, ones de xoc, exercici terapèutic i punció seca per tornar a l'activitat amb seguretat.",
      },
      {
        name: "Sòl pelvià",
        text: "Prevenció i tractament de disfuncions de la zona pèlvica: embaràs, postpart i dolor crònic.",
        detail: "El sòl pelvià és el conjunt de músculs i teixits que sostenen la bufeta, l'úter i el recte; una zona que sovint passem per alt però que juga un paper clau en la nostra salut. El debilitament o la manca de coordinació pot causar incontinència, prolapses o dolor pèlvic crònic. El recomanem durant l'embaràs, el postpart, la menopausa o després d'una cirurgia pèlvica.",
      },
      {
        name: "Fisioteràpia per a embarassades",
        text: "Dolor lumbar, cames cansades, canvis posturals: t'acompanyem durant tot l'embaràs.",
        detail: "L'embaràs és una etapa preciosa, però també pot venir acompanyada de molèsties i canvis físics: dolor lumbar i sacre, cames cansades i inflor, tensions musculars i canvis en la postura i l'estabilitat de la pelvis. T'acompanyem amb teràpia manual, ecografia funcional, exercicis de Kegel i treball abdominal hipopressiu.",
      },
      {
        name: "Rehabilitació d'accidents de trànsit",
        text: "Tractament personalitzat amb seguiment per recuperar-te d'un accident i evitar seqüeles futures.",
        detail: "Els accidents de trànsit, fins i tot els lleus, poden provocar lesions que afecten la teva qualitat de vida a mitjà i llarg termini: mal de coll, dolor lumbar, marejos o rigidesa articular. Encara que el dolor no aparegui de manera immediata, moltes d'aquestes lesions es manifesten als pocs dies o setmanes; per això oferim un tractament amb seguiment mèdic i fisioterapèutic.",
      },
      {
        name: "Rehabilitacions clíniques",
        text: "Recuperació de la funcionalitat i la qualitat de vida després de lesions, malalties o cirurgies.",
        detail: "La rehabilitació clínica s'enfoca en la recuperació de la funcionalitat i la qualitat de vida de persones que han patit lesions, malalties o cirurgies, amb un pla de tractament adaptat a cada procés de recuperació.",
      },
      {
        name: "Fisioteràpia traumatològica",
        text: "Tractament i recuperació de lesions musculoesquelètiques, agudes i cròniques.",
        detail: "Oferim un servei especialitzat de fisioteràpia traumatològica, orientat al tractament i la recuperació de lesions musculoesquelètiques, tant agudes com cròniques.",
      },
      {
        name: "Fisioteràpia a domicili",
        text: "El millor tractament des de la comoditat de casa teva, quan desplaçar-te és difícil.",
        detail: "Si necessites tractament fisioterapèutic però et costa desplaçar-te fins a una clínica, oferim fisioteràpia a domicili al Maresme. Després d'una lesió, una operació o simplement per comoditat, pot ser difícil anar a una clínica: per això adaptem el servei a les teves necessitats i al teu ritme de vida.",
      },
      {
        name: "Diatèrmia Medestec",
        text: "Calor profunda amb tecnologia Medestec per reduir dolor i inflamació i accelerar la recuperació.",
        detail: "Corrents d'alta freqüència amb tecnologia Medestec que generen calor de manera controlada als teixits profunds: redueixen dolor i inflamació, acceleren la curació dels teixits i milloren la mobilitat, de forma indolora i molt segura.",
      },
    ],
  },
  {
    step: "03",
    stage: "Tornar",
    title: "Tornar a fer allò que t'importa.",
    text: "L'objectiu no és el tractament, és el que faràs després: córrer, jugar, entrenar, viure sense pensar-hi.",
    photo: media.sportsPhysio,
    services: [
      {
        name: "Readaptació esportiva",
        text: "El procés especialitzat que es fa després d'una lesió per tornar a entrenar amb seguretat.",
        detail: "La readaptació esportiva és un procés especialitzat que es duu a terme després d'una lesió, amb l'objectiu d'ajudar els esportistes a recuperar el seu nivell de rendiment i tornar a competir amb seguretat i confiança.",
      },
      {
        name: "Entrenament personal",
        text: "Un enfocament individualitzat de l'exercici físic, dissenyat per als teus objectius.",
        detail: "Els entrenaments personals estan dissenyats per oferir un enfocament individualitzat i eficient de l'exercici físic, adaptat als teus objectius i al teu moment.",
      },
      {
        name: "Fisio estètica",
        text: "Combina tècniques terapèutiques i estètiques per millorar la salut i l'aparença del cos.",
        detail: "La fisioteràpia estètica combina tècniques terapèutiques i estètiques amb l'objectiu de millorar tant la salut com l'aparença del cos.",
      },
    ],
  },
];

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
                              <motion.p
                                className="recovery-service-detail"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.28, ease: EASE_OUT }}
                              >
                                {service.detail}
                              </motion.p>
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
