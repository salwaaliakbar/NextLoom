import { techStack } from "@/lib/content";

export default function TechStrip() {
  return (
    <section className="strip" aria-label="What we build with">
      <div className="container strip-inner">
        <span>Built with</span>
        <ul>
          {techStack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
