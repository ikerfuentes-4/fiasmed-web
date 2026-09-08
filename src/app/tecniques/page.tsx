import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { techniques } from "@/lib/techniques";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tècniques de fisioteràpia | Fisio Fiasmed",
  description:
    "16 tècniques de rehabilitació: punció seca, ones de xoc, osteopatia, ecografia, diatèrmia, crioteràpia i més, explicades una per una.",
  alternates: { canonical: "/tecniques" },
};

export default function TechniquesIndexPage() {
  return (
    <main className="info-page">
      <Header />
      <section className="info-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Totes les tècniques</p>
            <h1>Les eines que fem servir per ajudar-te.</h1>
            <p className="info-hero-text">Cada tècnica, explicada: què és, per a què serveix i què en pots esperar.</p>
          </Reveal>
        </div>
      </section>
      <section className="info-body">
        <div className="container">
          <Reveal className="info-index-group">
            <ul className="info-related-list">
              {techniques.map((technique) => (
                <li key={technique.slug}>
                  <Link href={`/tecniques/${technique.slug}`}>
                    {technique.name} <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
