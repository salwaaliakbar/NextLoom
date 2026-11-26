import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container split">
        <div className="reveal">
          <p className="eyebrow">Why NextLoom</p>
          <h2>Research-grade expertise, startup-speed delivery</h2>
          <p>
            Led by Dr. Bushra, NextLoom pairs deep ML and AI know-how with a practical, business-first mindset. We
            don&apos;t sell hype. We ship systems that work, and we explain them clearly.
          </p>
        </div>
        <ul className="why-list reveal">
          {whyUs.map((w) => (
            <li key={w.title}>
              <b>{w.title}</b>
              <span>{w.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
