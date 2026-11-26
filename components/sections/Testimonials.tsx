import { testimonials } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Testimonials() {
  return (
    <section className="section alt" id="testimonials">
      <div className="container">
        <SectionHead eyebrow="Client voices" title="Trusted by clients across four countries">
          What clients said after working with our founder, Dr. Bushra, and the team.
        </SectionHead>
        <div className="testimonials">
          {testimonials.map((t) => (
            <figure key={t.author} className="quote reveal">
              <div className="q-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{t.author[0].toUpperCase()}</span>
                <div>
                  <b>{t.author}</b>
                  <small>
                    {t.flag} {t.country}
                    {t.tag && ` · ${t.tag}`}
                  </small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
