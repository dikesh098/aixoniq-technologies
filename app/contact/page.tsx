import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Aixoniq Technologies",
  description:
    "Get in touch with Aixoniq Technologies for AI, software development, ERP, and cybersecurity projects.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="shell pb-20 pt-10 md:pb-28">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you're building"
          description="Share a few details and we'll follow up with next steps — usually within one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="card">
              <Mail className="text-royal" size={20} />
              <p className="mt-3 text-sm font-semibold text-navy">Email</p>
              <a href="mailto:aixoniqtechnologies@gmail.com" className="text-sm text-slate hover:text-royal">
                aixoniqtechnologies@gmail.com
              </a>
            </div>
            <div className="card">
              <MapPin className="text-royal" size={20} />
              <p className="mt-3 text-sm font-semibold text-navy">Office</p>
              <p className="text-sm text-slate">Gondia, Maharashtra, India</p>
            </div>
            <div className="card">
              <Clock className="text-royal" size={20} />
              <p className="mt-3 text-sm font-semibold text-navy">Response time</p>
              <p className="text-sm text-slate">Within one business day, Mon–Sat</p>
            </div>
            {/* Replace the src below with your Google Business Profile embed URL */}
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Aixoniq Technologies location"
                src="https://www.google.com/maps?q=Gondia,Maharashtra,India&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
