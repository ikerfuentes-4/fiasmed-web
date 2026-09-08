// Franja de moviment continu amb el lema de la marca. Text real ja existent al lloc
// ("Mou-te. Cuida't. Viu millor." i el sistema Entendre · Recuperar · Tornar).
const WORDS = ["Mou-te", "Entendre", "Cuida't", "Recuperar", "Viu millor", "Tornar"];

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((loop) => (
          <div className="marquee-group" key={loop}>
            {WORDS.map((word, i) => (
              <span className="marquee-word" key={`${loop}-${word}-${i}`}>
                {word}
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
