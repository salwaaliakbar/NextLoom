import HeroCanvas from "../HeroCanvas";

export default function Hero() {
  return (
    <section className="hero">
      <HeroCanvas />
      <div className="container hero-inner">
        <p className="eyebrow reveal">AI-first IT services &amp; consulting</p>
        <h1 className="reveal">
          We weave <span className="grad">AI &amp; automation</span> into the way your business works.
        </h1>
        <p className="lead reveal">
          NextLoom designs custom AI agents, automates repetitive workflows, and ships production-ready ML and
          data systems, so your team can spend its time on work that matters.
        </p>
        <div className="hero-cta reveal">
          <a href="#contact" className="btn btn-primary">Start your project</a>
          <a href="#services" className="btn btn-ghost">Explore services →</a>
        </div>
        <ul className="hero-proof reveal" aria-label="Highlights">
          <li><span className="stars" aria-hidden="true">★★★★★</span> Five-star client reviews</li>
          <li>Clients across 🇺🇸 🇬🇧 🇨🇦 🇵🇰</li>
          <li>Delivered on time or ahead of schedule</li>
        </ul>
      </div>
    </section>
  );
}
