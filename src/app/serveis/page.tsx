import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stages } from "@/lib/services";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Serveis de fisioteràpia a Vilassar de Mar | Fisio Fiasmed",
  description:
    "Tots els serveis de Fisio Fiasmed organitzats en tres fases: Entendre, Recuperar i Tornar. Fisioteràpia esportiva, sòl pelvià, podologia, readaptació i més.",
  alternates: { canonical: "/serveis" },
};

export default function ServicesIndexPage() {
  return (
    <main className="info-page">
      <Header />
      <section className="info-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Tots els serveis</p>
            <h1>Un servei per a cada moment del teu camí.</h1>
            <p className="info-hero-text">
              Organitzats en les tres fases del nostre sistema de recuperació: Entendre, Recuperar
              i Tornar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="info-body">
        <div className="container">
          {stages.map((stage, index) => (
            <Reveal key={stage.step} delay={index * 0.05} className="info-index-group">
              <h2>
                {stage.step} · {stage.stage}
              </h2>
              <ul className="info-related-list">
                {stage.services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/serveis/${service.slug}`}>
                      {service.name} <ArrowUpRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
