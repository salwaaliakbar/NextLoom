import { site } from "@/lib/content";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section className="section cta" id="contact">
      <div className="container cta-inner">
        <div className="reveal">
          <p className="eyebrow">Let&apos;s build</p>
          <h2>Ready to automate what slows you down?</h2>
          <p>
            Tell us about your project. We&apos;ll reply within one business day with next steps and a free
            consultation slot.
          </p>
          <ul className="contact-points">
            <li>📧 <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>🌍 Remote-first, working with clients worldwide</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
