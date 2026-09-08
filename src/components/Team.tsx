import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { team } from "@/lib/team";
import { Reveal } from "./Reveal";

export function Team() {
  const founder = team[0];
  const rest = team.slice(1);

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

        <Reveal delay={0.05}>
          <Link className="team-feature" href={`/equip/${founder.slug}`}>
            <img src={founder.photo} alt={founder.name} />
            <span>
              <small>{founder.role}</small>
              <strong>{founder.name}</strong>
              <em>
                Coneix la persona que va fer néixer Fiasmed <ArrowUpRight size={17} />
              </em>
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.08} className="team-grid">
          {rest.map((member) => (
            <article className="team-member" key={member.slug}>
              <img className="team-photo" src={member.photo} alt={member.name} />
              <div>
                <Link className="team-name-button" href={`/equip/${member.slug}`}>
                  {member.name}
                </Link>
                <p>{member.role}</p>
              </div>
              <ArrowUpRight size={17} />
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
