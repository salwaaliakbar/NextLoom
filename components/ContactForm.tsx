"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/content";

// Optional: set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) in .env.local.
// When empty, the form falls back to opening the visitor's email app (mailto:).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

type Status = { text: string; tone: "info" | "ok" | "error" } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const errors: Record<string, boolean> = {
      name: !data.name?.trim(),
      email: !/^\S+@\S+\.\S+$/.test(data.email ?? ""),
      message: !data.message?.trim(),
    };
    setInvalid(errors);
    if (Object.values(errors).some(Boolean)) {
      setStatus({ text: "Please fill in all fields with a valid email.", tone: "error" });
      return;
    }

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`New project inquiry: ${data.service}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus({ text: "Opening your email app…", tone: "info" });
      return;
    }

    setStatus({ text: "Sending…", tone: "info" });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus({ text: "Thanks! We'll get back to you within one business day.", tone: "ok" });
    } catch {
      setStatus({ text: `Something went wrong. Please email us at ${site.email}.`, tone: "error" });
    }
  }

  const cls = (field: string) => (invalid[field] ? "invalid" : undefined);

  return (
    <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required className={cls("name")} />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={cls("email")} />
      </div>
      <div className="field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service">
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea id="message" name="message" rows={4} required className={cls("message")} />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Send message</button>
      <p className={`form-note${status ? ` ${status.tone}` : ""}`} role="status" aria-live="polite">
        {status?.text}
      </p>
    </form>
  );
}
