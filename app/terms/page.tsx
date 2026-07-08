import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service | Aixoniq Technologies",
  description: "Terms of service for using the Aixoniq Technologies website and engaging our services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms", path: "/terms" }]} />
      <section className="shell prose-sm max-w-3xl py-16">
        <h1 className="font-display text-3xl font-semibold text-navy">Terms of Service</h1>
        <p className="mt-6 text-sm leading-relaxed text-slate">
          This is placeholder content. Replace with your actual terms —
          covering service engagements, payment terms, and liability — before
          going live. Contact{" "}
          <a href="mailto:aixoniqtechnologies@gmail.com" className="text-royal">aixoniqtechnologies@gmail.com</a> with questions.
        </p>
      </section>
    </>
  );
}
