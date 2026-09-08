"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, HeartPulse, MapPin, Menu, MessageCircle, Phone, Play, X } from "lucide-react";

const services = [
  ["01", "Fisioteràpia especialitzada", "Lesions esportives i trastorns musculoesquelètics amb una fisioteràpia personalitzada per a cada pacient."],
  ["02", "Fisioteràpia esportiva", "Prevenir lesions, recuperar el rendiment i tornar a fer esport amb confiança."],
  ["03", "Sòl pelvià", "Un abordatge proper i especialitzat per recuperar benestar i qualitat de vida."],
  ["04", "Podologia", "Podologia esportiva, infantil i estudi biomecànic de la trepitjada."],
  ["05", "Readaptació esportiva", "Recuperar força, control i seguretat per tornar a entrenar."],
  ["06", "Entrenament personal", "Moviment guiat per millorar la teva salut i assolir els teus objectius."],
];

const techniques = ["Massatge terapèutic", "Punció seca", "Neuromodulació", "Electropunció", "Neurodinàmia SNP", "Manipulació osteopàtica", "Exercici terapèutic", "Crioteràpia", "Diatermia", "Ecografia", "Ones de xoc", "Pressoteràpia", "Parafina", "Ultrasò", "Magnetoteràpia", "Electroteràpia"];
const team = [
  { name: "Andrea Artero", role: "CEO i fundadora", initials: "AA", photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/6f994339-9730-4587-b316-a4408e96e6ec/4.png?format=1000w", credential: "Fundadora de Fiasmed", detail: "Fiasmed neix de la seva passió per la salut, l'esport i ajudar les persones a sentir-se millor. El seu compromís combina fisioteràpia, moviment, entrenament i benestar amb proximitat i tracte humà." },
  { name: "Aleix Cirera", role: "Fisioterapeuta", initials: "AC", photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/23dfb06f-19c7-4953-bff0-07cb26974c8f/6.png?format=1000w", credential: "Col. 15083", detail: "Grau en Fisioteràpia i Ciències de l'Activitat Física i l'Esport. Especialitzat en fisioteràpia invasiva, ecografia musculoesquelètica, neuromodulació, electroneuroacupuntura, punció seca, columna, pelvis i readaptació esportiva." },
  { name: "Joan Riera", role: "Fisioterapeuta", initials: "JR", credential: "Col. 14469", detail: "Grau en Fisioteràpia i màster en readaptació esportiva. Ha treballat a l'Hospital Universitari Vall d'Hebron i com a fisioterapeuta i readaptador esportiu al RCD Espanyol. Format en EPI, neuromodulació percutània ecoguiada i ecografia." },
  { name: "Laia Muñoz", role: "Fisioterapeuta i osteòpata", initials: "LM", credential: "Col. 6522", detail: "Diplomada en Fisioteràpia i osteòpata C.O. Formada en reequilibració neuromotriu, Feldenkrais, ATM, obstetrícia, fisioteràpia i osteopatia uroginecològica, endocrinologia en ginecologia i ecografia." },
  { name: "Edu Sogues", role: "Fisioterapeuta", initials: "ES", credential: "Col. 9191", detail: "Especialitzat en exercici terapèutic i dolor, tècniques manipulatives i miotensives, ATM, fisioteràpia conservadora i invasiva del síndrome de dolor miofascial, acupuntura zonal, mètode POLD i neurodinàmica." },
  { name: "Laia Vernet", role: "Fisioterapeuta de sòl pelvià", initials: "LV", credential: "Col. 8389", detail: "Diplomada en Fisioteràpia i formada en ginecologia, obstetrícia, entrenament, nutrició i salut de la dona. Especialista en sòl pelvià, embaràs, postpart, lactància, dolor pèlvic crònic i punció seca." },
  { name: "Lucía Bernuz", role: "Fisioterapeuta i osteòpata", initials: "LB", credential: "Col. 9556", detail: "Diplomada en Fisioteràpia, osteòpata i tècnica superior en activitats físiques. Especialitzada en dolor crònic, teràpia fascial, cicatrius, postoperatoris, ATM, disfuncions digestives i fisioteràpia i osteopatia pediàtrica." },
  { name: "Eva Trillo", role: "Podòloga", initials: "ET", credential: "Col. 838081109", detail: "Diplomada en Podologia per la F.U.B. (UAB), amb postgraus en cures i principis quirúrgics i ortopèdia. Manté formació continuada a través del Col·legi Oficial de Podòlegs de Catalunya." },
  { name: "Nuria Mompo", role: "Nutricionista - PNI", initials: "NM", credential: "Formació sanitària i PNI", detail: "Llicenciada en Odontologia, amb màster en formació del professorat, postgrau en periodòncia i màster en Psiconeuroimmunologia. També és tècnica superior en dietètica i nutrició." },
  { name: "Luisa Leizeriuc", role: "Psicòloga", initials: "LL", credential: "COPC 33106", detail: "Grau en Psicologia i màster en Psicologia General Sanitària. Especialista en depressió, autoestima, ansietat, problemes de parella i migració. Atén en català, castellà, anglès i romanès." },
];

const profileSlugs: Record<string, string> = {
  "Andrea Artero": "andrea-artero",
  "Aleix Cirera": "aleix-cirera",
  "Joan Riera": "joan-riera",
  "Laia Muñoz": "laia-munoz",
  "Edu Sogues": "edu-sogues",
  "Laia Vernet": "laia-vernet",
  "Lucía Bernuz": "lucia-bernuz",
  "Eva Trillo": "eva-trillo",
  "Nuria Mompo": "nuria-mompo",
  "Luisa Leizeriuc": "luisa-leizeriuc",
};

const teamPhotos: Record<string, string> = {
  "Andrea Artero": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/6f994339-9730-4587-b316-a4408e96e6ec/4.png?format=1000w",
  "Aleix Cirera": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/23dfb06f-19c7-4953-bff0-07cb26974c8f/6.png?format=1000w",
  "Joan Riera": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/d97a5aae-7151-4906-8ead-471e4f837bf0/fi2.png?format=1000w",
  "Laia Muñoz": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/16fb28fe-a6e2-421d-b5f3-3c654fd9cccc/IMG_4254.JPG?format=1000w",
  "Edu Sogues": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/d482e320-7514-4145-997a-21c8d643fd4a/5+%281%29.png?format=1000w",
  "Laia Vernet": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/18fc3e15-ca6b-41b2-9dc4-5a727223872e/1.png?format=1000w",
  "Lucía Bernuz": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/5b33f22e-c613-4cac-8e89-1d5a4141f7c7/6+%281%29+%281%29.png?format=1000w",
  "Eva Trillo": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/32ee71d8-fdff-4790-8e0f-d796435da3e6/7.jpg?format=1000w",
  "Nuria Mompo": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/04a3b5a8-1a7c-495c-aea6-bce2b8398f2a/WhatsApp+Image+2025-05-21+at+16.31.39.jpeg?format=1000w",
  "Luisa Leizeriuc": "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/6828863a-5e07-4f79-ad09-c703f81a67c6/4+%281%29+%281%29.png?format=1000w",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTechniques, setShowTechniques] = useState(false);
  const whatsapp = "https://wa.me/34647479968";
  return (
    <div className="clinic-shell">
      <header className="site-header"><div className="container header-inner"><a href="#inici" className="brand" aria-label="Fisio Fiasmed inici"><img src="https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/4c6acc18-bb1c-419f-93dc-91e313f16eb5/FISIO+FIASMED+BLACK+%28Sin+fondo%29.png?format=500w" alt="Fisio Fiasmed" /></a><nav className="desktop-nav"><a href="#que-et-passa">Què et passa?</a><a href="#serveis">Serveis</a><a href="#equip">L'equip</a><a href="#centre">El centre</a></nav><a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Reservar visita <ArrowUpRight size={16} /></a><button className="menu-button" aria-label={menuOpen ? "Tancar menú" : "Obrir menú"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <nav className="mobile-nav container"><a href="#que-et-passa" onClick={() => setMenuOpen(false)}>Què et passa?</a><a href="#serveis" onClick={() => setMenuOpen(false)}>Serveis</a><a href="#equip" onClick={() => setMenuOpen(false)}>L'equip</a><a href="#centre" onClick={() => setMenuOpen(false)}>El centre</a><a href={whatsapp} target="_blank" rel="noreferrer">Reservar visita <ArrowUpRight size={16} /></a></nav>}</header>

      <main>
        <section id="inici" className="hero"><div className="hero-image" /><div className="container hero-content"><p className="eyebrow">Centre de fisioteràpia a Vilassar de Mar</p><h1>El teu cos.<br /><em>La teva vida.</em></h1><p className="hero-copy">T'acompanyem perquè tornis a fer allò que t'importa. Amb criteri, proximitat i un equip que treballa en equip.</p><div className="hero-actions"><a className="primary-button" href={whatsapp} target="_blank" rel="noreferrer">Fes la teva reserva <ArrowRight size={17} /></a><a className="hero-link" href="#que-et-passa">No saps què necessites? <ChevronDown size={16} /></a></div></div><div className="hero-bottom container"><span>Plaça de Jeroni Gelpí i Novell, 3 · Vilassar de Mar</span><span><i /> Fisio Fiasmed</span></div></section>

        <section id="que-et-passa" className="patient-section"><div className="container patient-grid"><div><p className="eyebrow">Què et passa?</p><h2>Explica'ns què vols tornar a fer.</h2><p>No cal que sàpigues quin servei necessites. Parlem del que notes, del que t'està limitant i del teu objectiu.</p><a className="outline-button" href={whatsapp} target="_blank" rel="noreferrer">Parlar amb nosaltres <ArrowRight size={16} /></a></div><div className="patient-card"><div className="patient-circle circle-one" /><div className="patient-circle circle-two" /><div className="patient-mark"><HeartPulse size={48} strokeWidth={1.2} /></div><span className="patient-label">01 / escoltar</span><h3>Entendre abans d'actuar.</h3><p>Una valoració personalitzada és el primer pas per construir una recuperació que tingui sentit.</p></div></div></section>

        <section id="serveis" className="services-section"><div className="container"><div className="section-intro"><div><p className="eyebrow">Serveis de fisio</p><h2>Una mirada completa.<br /><em>Un pla per a tu.</em></h2></div><p>Coneix tots els serveis que pots gaudir al nostre centre i troba el suport que necessites.</p></div><div className="service-grid">{services.map(([number, title, text]) => <article key={number} className="service-card"><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={19} /></article>)}</div></div></section>

        <section className="technique-section"><div className="container technique-layout"><div className="technique-heading"><p className="eyebrow">Tècniques de rehabilitació</p><h2>Les eines canvien.<br /><em>La mirada, no.</em></h2><p>Posem a la teva disposició tècniques avançades, sempre escollides segons el teu cas i el teu moment.</p><button type="button" className="technique-toggle" onClick={() => setShowTechniques(!showTechniques)}>{showTechniques ? "Amagar tècniques" : "Veure totes les tècniques"}<ArrowDown size={16} /></button></div><div className="technique-list">{(showTechniques ? techniques : techniques.slice(0, 8)).map((technique, index) => <div key={technique}><span>0{index + 1}</span><strong>{technique}</strong><ArrowUpRight size={16} /></div>)}</div></div></section>

        <section id="centre" className="visit-section"><div className="visit-image"><div className="play-badge"><Play size={16} fill="currentColor" /></div></div><div className="visit-copy"><p className="eyebrow">La primera visita</p><h2>Arriba amb dubtes.<br /><em>Surt amb un camí.</em></h2><p>La primera visita és un espai per escoltar-te, valorar què passa i explicar-te les opcions sense presses.</p><div className="visit-list"><div><b>01</b><span>Ens expliques què t'importa</span></div><div><b>02</b><span>Valorem el teu cas amb tu</span></div><div><b>03</b><span>Comencem un pla clar</span></div></div><a className="primary-button dark" href={whatsapp} target="_blank" rel="noreferrer">Reservar primera visita <ArrowRight size={16} /></a></div></section>

        <section id="equip" className="team-section"><div className="container"><div className="team-heading"><div><p className="eyebrow">Coneix els nostres professionals</p><h2>Un equip que<br /><em>treballa amb tu.</em></h2></div><p>Un dels nostres pilars és que tots els professionals de Fisio Fiasmed formen equip i donen suport als pacients perquè sempre tinguin l'atenció que es mereixen.</p></div><Link className="team-feature" href="/equip/andrea-artero"><img src={teamPhotos["Andrea Artero"]} alt="Andrea Artero" /><span><small>CEO i fundadora</small><strong>Andrea Artero</strong><em>Coneix la persona que va fer néixer Fiasmed <ArrowUpRight size={17} /></em></span></Link><div className="team-grid">{team.map((member) => <article key={member.name} className="team-member"><img className="team-photo" src={teamPhotos[member.name]} alt={member.name} /><div><Link className="team-name-button" href={`/equip/${profileSlugs[member.name]}`}>{member.name}</Link><p>{member.role}</p></div><ArrowUpRight size={17} /></article>)}</div></div></section>

        <section className="contact-section"><div className="container"><p className="eyebrow light">S'atén amb cita prèvia</p><h2>Fem el primer pas.</h2><div className="contact-row"><a className="primary-button" href={whatsapp} target="_blank" rel="noreferrer">Fes la teva reserva <MessageCircle size={17} /></a><div className="contact-details"><a href="tel:+34647479968"><Phone size={15} /> +34 647 479 968</a><a href="mailto:fisiofiasmed@fiasmed.com"><MessageCircle size={15} /> fisiofiasmed@fiasmed.com</a><span><MapPin size={15} /> Plaça de Jeroni Gelpí i Novell, 3, local 7</span><span><CalendarDays size={15} /> Dilluns a divendres · 09:00 a 20:00</span></div></div></div></section>
      </main>
      <footer className="footer"><div className="container footer-inner"><a href="#inici" className="brand"><img src="https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/4c6acc18-bb1c-419f-93dc-91e313f16eb5/FISIO+FIASMED+BLACK+%28Sin+fondo%29.png?format=500w" alt="Fisio Fiasmed" /></a><span>© 2026 Fisio Fiasmed · Vilassar de Mar</span><span>Fisioteràpia · Salut · Moviment</span></div></footer>
    </div>
  );
}
