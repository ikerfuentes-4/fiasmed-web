import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { HumanStrip } from "@/components/HumanStrip";
import { WhatHappensSection } from "@/components/BodyMap";
import { RecoverySystem } from "@/components/RecoverySystem";
import { Techniques } from "@/components/Techniques";
import { FirstVisit } from "@/components/FirstVisit";
import { Team } from "@/components/Team";
import { Trust } from "@/components/Trust";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="clinic-shell">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <HumanStrip />
        <WhatHappensSection />
        <RecoverySystem />
        <Techniques />
        <FirstVisit />
        <Team />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
