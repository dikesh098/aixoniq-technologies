import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Aixoniq Technologies",
  description: "How Aixoniq Technologies collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <section className="shell prose-sm max-w-3xl py-16">
        <h1 className="font-display text-3xl font-semibold text-navy">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-relaxed text-slate">
          This is placeholder content. Replace with your actual privacy policy —
          covering what data is collected via the contact form, how it's stored,
          and how visitors can request deletion — before going live. Contact{" "}
          <a href="mailto:aixoniqtechnologies@gmail.com" className="text-royal">aixoniqtechnologies@gmail.com</a> with questions.
        </p>
      </section>
    </>
  );
}
