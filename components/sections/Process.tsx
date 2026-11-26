import { processSteps } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead eyebrow="How we work" title="A clear process, from idea to production" />
        <ol className="grid steps">
          {processSteps.map((s, i) => (
            <li key={s.title} className="reveal">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
