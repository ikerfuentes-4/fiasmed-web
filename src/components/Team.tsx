import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { team } from "@/lib/team";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equip" className="team-section">
      <div className="container">
        <Reveal className="team-heading">
          <div>
            <p className="eyebrow">Coneix els nostres professionals</p>
            <h2>
              Un equip que
              <br />
              <em>treballa amb tu.</em>
            </h2>
          </div>
          <p>
            Un dels nostres pilars és que tots els professionals de Fisio Fiasmed formen equip i
            donen suport als pacients perquè sempre tinguin l&apos;atenció que es mereixen.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="team-grid">
          {team.map((member) => (
            <Link className="team-member" href={`/equip/${member.slug}`} key={member.slug}>
              <img className="team-photo" src={member.photo} alt={member.name} loading="lazy" />
              <div>
                <span className="team-name-button">{member.name}</span>
                <p>{member.role}</p>
              </div>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
