import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { allServices, getServiceBySlug } from "@/lib/services";
import { Header, WHATSAPP } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Servei | Fisio Fiasmed" };
  return {
    title: `${service.name} a Vilassar de Mar | Fisio Fiasmed`,
    description: service.text,
    alternates: { canonical: `/serveis/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = allServices.filter((item) => item.stageName === service.stageName && item.slug !== service.slug);

  return (
    <main className="info-page">
      <Header />
      <section className="info-hero">
        <div className="container">
          <Reveal>
            <Link className="profile-back" href="/#recuperacio">
              <ArrowLeft size={16} /> Tornar als serveis
            </Link>
            <p className="eyebrow">
              Fase {service.stageStep} · {service.stageName}
            </p>
            <h1>{service.name}</h1>
            <p className="info-hero-text">{service.text}</p>
            <a className="primary-button" href={WHATSAPP} target="_blank" rel="noreferrer">
              Reservar visita <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="info-body">
        <div className="container info-body-grid">
          <Reveal className="info-photo">
            <img src={service.photo} alt={service.name} loading="lazy" />
          </Reveal>
          <Reveal delay={0.06} className="info-copy">
            <h2>En què consisteix</h2>
            <p>{service.detail}</p>
            <div className="info-cta-row">
              <a className="primary-button dark" href={WHATSAPP} target="_blank" rel="noreferrer">
                Parla&apos;ns del teu cas <MessageCircle size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="info-related">
          <div className="container">
            <p className="eyebrow">També dins d&apos;aquesta fase</p>
            <ul className="info-related-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/serveis/${item.slug}`}>
                    {item.name} <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
