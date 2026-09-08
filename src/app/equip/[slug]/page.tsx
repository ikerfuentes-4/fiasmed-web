import type { Metadata } from "next";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { team } from "@/lib/team";
import { media } from "@/lib/media";

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
    return <main className="profile-page"><div className="profile-container"><p className="eyebrow">Fisio Fiasmed</p><h1>Professional no trobat</h1><Link className="profile-back" href="/#equip"><ArrowLeft size={16} /> Tornar a l'equip</Link></div></main>;
  }

  return (
    <main className="profile-page">
      <div className="profile-topbar"><Link className="profile-brand" href="/"><img src={media.logoBlack} alt="Fisio Fiasmed" /></Link><Link className="profile-back" href="/#equip"><ArrowLeft size={16} /> Tornar a l'equip</Link></div>
      <section className="profile-hero">
        <div className="profile-photo-wrap"><img className="profile-photo" src={member.photo} alt={member.name} /></div>
        <div className="profile-intro"><p className="eyebrow">Coneix l'equip</p><h1>{member.name}</h1><p className="profile-role">{member.role}</p><p className="profile-credential">{member.credential}</p><div className="profile-rule" /></div>
        <div className="profile-statement"><p className="eyebrow">Perfil professional</p><p>{member.detail}</p><div className="profile-education"><h2>Formació i especialitats</h2><ul>{member.education.map((item) => <li key={item}>{item}</li>)}</ul></div><a className="profile-cta" href="https://wa.me/34647479968" target="_blank" rel="noreferrer">Agafa cita <ArrowUpRight size={17} /></a></div>
      </section>
      <section className="profile-footer"><p>Fisio Fiasmed · Plaça de Jeroni Gelpí i Novell, 3, local 7 · Vilassar de Mar</p><a href="mailto:fisiofiasmed@fiasmed.com"><MessageCircle size={16} /> fisiofiasmed@fiasmed.com</a></section>
    </main>
  );
}
