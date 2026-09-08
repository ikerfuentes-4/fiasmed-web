import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { team } from "@/lib/team";
import { Header, WHATSAPP } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((item) => item.slug === slug);
  return {
    title: member ? `${member.name} | Fisio Fiasmed` : "Equip | Fisio Fiasmed",
    description: member?.detail ?? "Coneix l'equip de Fisio Fiasmed.",
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = team.find((item) => item.slug === slug);

  if (!member) {
    return (
      <main className="profile-page">
        <Header />
        <div className="container" style={{ padding: "100px 0" }}>
          <p className="eyebrow">Fisio Fiasmed</p>
          <h1>Professional no trobat</h1>
          <Link className="profile-back" href="/#equip">
            <ArrowLeft size={16} /> Tornar a l&apos;equip
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="profile-page">
      <Header />

      <section className="profile-hero">
        <Reveal as="div" className="profile-photo-wrap">
          <img className="profile-photo" src={member.photo} alt={member.name} />
        </Reveal>
        <Reveal delay={0.05} className="profile-intro">
          <Link className="profile-back" href="/#equip">
            <ArrowLeft size={16} /> Tornar a l&apos;equip
          </Link>
          <p className="eyebrow">Coneix l&apos;equip</p>
          <h1>{member.name}</h1>
          <p className="profile-role">{member.role}</p>
          <p className="profile-credential">{member.credential}</p>
        </Reveal>
        <Reveal delay={0.1} className="profile-statement">
          <p className="eyebrow">Perfil professional</p>
          <p>{member.detail}</p>
          <div className="profile-education">
            <h2>Formació i especialitats</h2>
            <ul>
              {member.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a className="profile-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
            Agafa cita amb {member.name.split(" ")[0]} <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </section>

      <section className="profile-footer container">
        <p>Fisio Fiasmed · Plaça de Jeroni Gelpí i Novell, 3, local 7 · Vilassar de Mar</p>
        <a href="mailto:fisiofiasmed@fiasmed.com">
          <MessageCircle size={16} /> fisiofiasmed@fiasmed.com
        </a>
      </section>

      <Footer />
    </main>
  );
}
