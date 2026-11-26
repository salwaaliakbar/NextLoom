import { automationStats, flowSteps } from "@/lib/content";

export default function Automation() {
  return (
    <section className="section alt" id="automation">
      <div className="container split">
        <div className="reveal">
          <p className="eyebrow">Automation spotlight</p>
          <h2>Turn hours of manual work into workflows that run themselves</h2>
          <p>
            Most teams lose hours every week to copy-paste, status updates and repetitive decisions. We find that
            work and hand it to reliable automations and AI agents, with your team still in control.
          </p>
          <div className="stats">
            {automationStats.map((s) => (
              <div key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary">Get a free automation audit</a>
        </div>

        <div className="flow reveal" aria-label="Example automated workflow">
          {flowSteps.map((s) => (
            <div key={s.title} className="flow-step">
              <span className="dot" />
              <div>
                <b>{s.title}</b>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
