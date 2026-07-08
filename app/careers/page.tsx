import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { OPEN_ROLES } from "@/lib/data";
import { MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Aixoniq Technologies",
  description:
    "Join Aixoniq Technologies — open roles for AI/ML engineers, full-stack developers, and cybersecurity interns in India.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Careers", path: "/careers" }]} />

      <section className="shell pb-16 pt-10 md:pb-20">
        <SectionHeading
          eyebrow="Careers"
          title="Build software that ships, with people who'll tell you why"
          description="We hire for freshers, interns, and experienced engineers across AI, full-stack development, and cybersecurity."
        />
      </section>

      <section className="pb-20">
        <div className="shell grid gap-5">
          {OPEN_ROLES.map((role) => (
            <div key={role.title} className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-lg font-semibold text-navy">{role.title}</h2>
                <p className="mt-1.5 text-sm text-slate">{role.description}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate">
                  <span className="flex items-center gap-1.5"><Briefcase size={13} /> {role.type}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} /> {role.location}</span>
                </div>
              </div>
              <a href="mailto:aixoniqtechnologies@gmail.com?subject=Application" className="btn-secondary shrink-0">
                Apply
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="shell text-center">
          <SectionHeading
            eyebrow="Don't see your role?"
            title="Send your resume anyway"
            align="center"
            className="mx-auto"
          />
          <a
            href="mailto:aixoniqtechnologies@gmail.com?subject=Resume%20Submission"
            className="btn-primary mt-8 inline-flex"
          >
            Email your resume
          </a>
        </div>
      </section>
    </>
  );
}
