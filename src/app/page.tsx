import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HumanStrip } from "@/components/HumanStrip";
import { WhatHappensSection } from "@/components/BodyMap";
import { RecoverySystem } from "@/components/RecoverySystem";
import { Techniques } from "@/components/Techniques";
import { FirstVisit } from "@/components/FirstVisit";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="clinic-shell">
      <Header />
      <main>
        <Hero />
        <HumanStrip />
        <WhatHappensSection />
        <RecoverySystem />
        <Techniques />
        <FirstVisit />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
