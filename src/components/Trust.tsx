import { ArrowUpRight, Star } from "lucide-react";
import { media } from "@/lib/media";
import { team } from "@/lib/team";
import { techniques } from "@/lib/techniques";
import { allServices } from "@/lib/services";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL } from "@/lib/trust";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Trust() {
  return (
    <section className="trust-section">
      <div className="container trust-grid">
        <Reveal className="trust-intro">
          <p className="eyebrow">Per què confiar-hi</p>
          <h2>No ho diem només nosaltres.</h2>
          <a className="trust-google" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
            <span className="trust-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="#fff" stroke="var(--ink)" strokeWidth={1.25} />
              ))}
            </span>
            <strong>
              <CountUp value={GOOGLE_RATING} decimals={1} />
            </strong>
            <span>
              <CountUp value={GOOGLE_REVIEW_COUNT} /> ressenyes a Google <ArrowUpRight size={13} />
            </span>
          </a>
          <img
            className="trust-badge"
            src={media.collegiBadge}
            alt="Col·legi de Fisioterapeutes de Catalunya"
            loading="lazy"
          />
        </Reveal>

        <div className="trust-stats">
          <div className="trust-stat">
            <span className="trust-stat-n">
              <CountUp value={team.length} />
            </span>
            <span className="trust-stat-d">professionals a l&apos;equip</span>
          </div>
          <div className="trust-stat">
            <span className="trust-stat-n">
              <CountUp value={allServices.length} />
            </span>
            <span className="trust-stat-d">serveis especialitzats</span>
          </div>
          <div className="trust-stat">
            <span className="trust-stat-n">
              <CountUp value={techniques.length} />
            </span>
            <span className="trust-stat-d">tècniques de tractament</span>
          </div>
        </div>
      </div>
    </section>
  );
}
