import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { techniques, getTechniqueBySlug } from "@/lib/techniques";
import { Header, WHATSAPP } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return techniques.map((technique) => ({ slug: technique.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const technique = getTechniqueBySlug(slug);
  if (!technique) return { title: "Tècnica | Fisio Fiasmed" };
  return {
    title: `${technique.name} | Fisio Fiasmed`,
    description: technique.summary,
    alternates: { canonical: `/tecniques/${technique.slug}` },
  };
}

export default async function TechniquePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const technique = getTechniqueBySlug(slug);
  if (!technique) notFound();

  const others = techniques.filter((item) => item.slug !== technique.slug).slice(0, 6);

  return (
    <main className="info-page">
      <Header />
      <section className="info-hero">
        <div className="container">
          <Reveal>
            <Link className="profile-back" href="/#tecniques">
              <ArrowLeft size={16} /> Tornar a les tècniques
            </Link>
            <p className="eyebrow">Tècnica de rehabilitació</p>
            <h1>{technique.name}</h1>
            <p className="info-hero-text">{technique.summary}</p>
            <a className="primary-button" href={WHATSAPP} target="_blank" rel="noreferrer">
              Reservar visita <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="info-body">
        <div className="container">
          <Reveal className="technique-detail-inner technique-detail-static">
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
          </Reveal>
          <Reveal delay={0.06} className="info-cta-row">
            <a className="primary-button dark" href={WHATSAPP} target="_blank" rel="noreferrer">
              Consulta&apos;ns si és per a tu <MessageCircle size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="info-related">
        <div className="container">
          <p className="eyebrow">Altres tècniques</p>
          <ul className="info-related-list">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/tecniques/${item.slug}`}>
                  {item.name} <ArrowUpRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
