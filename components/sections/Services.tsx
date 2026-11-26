import { services } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="What we do" title="AI-first services, from model to app">
          AI agents, automation and data science, plus the full-stack web and mobile apps that put them in your users&apos; hands. One team covers the whole journey.
        </SectionHead>
        <div className="grid cards">
          {services.map((s) => (
            <article key={s.title} className={`card reveal${s.featured ? " featured" : ""}`}>
              <div className="icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.ticks && (
                <ul className="ticks">
                  {s.ticks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
