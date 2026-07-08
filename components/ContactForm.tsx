"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const SERVICE_OPTIONS = [
  "Artificial Intelligence",
  "Software Development",
  "ERP Solutions",
  "Cybersecurity",
  "Cloud Solutions",
  "Digital Marketing",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this to an API route (e.g. app/api/contact/route.ts) that
    // emails aixoniqtechnologies@gmail.com or writes to your CRM/Supabase table.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="card text-center">
        <p className="font-display text-lg font-semibold text-navy">Message received.</p>
        <p className="mt-2 text-sm text-slate">
          We reply within one business day at aixoniqtechnologies@gmail.com.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1.5 block font-medium text-navy">Full name</span>
          <input
            required
            type="text"
            name="name"
            className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-navy outline-none focus:border-royal"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1.5 block font-medium text-navy">Email</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-navy outline-none focus:border-royal"
          />
        </label>
      </div>
      <label className="text-sm">
        <span className="mb-1.5 block font-medium text-navy">Service of interest</span>
        <select
          name="service"
          className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-navy outline-none focus:border-royal"
        >
          {SERVICE_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="text-sm">
        <span className="mb-1.5 block font-medium text-navy">Project details</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-xl border border-border bg-paper px-4 py-3 text-sm text-navy outline-none focus:border-royal"
        />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-fit">
        Send Message <Send size={15} />
      </button>
    </form>
  );
}
