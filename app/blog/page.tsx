import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | AI, Cybersecurity & Software Development Insights",
  description:
    "Articles on AI development, cybersecurity best practices, ERP software, and digital transformation from Aixoniq Technologies.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <section className="shell pb-16 pt-10 md:pb-20">
        <SectionHeading
          eyebrow="Blog"
          title="Notes on AI, software, and running a technology practice"
          description="Practical writing on custom software development, cybersecurity, cloud, and ERP — not vendor filler."
        />
      </section>

      <section className="pb-24">
        <div className="shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="card flex flex-col">
              <span className="w-fit rounded-full bg-royal/10 px-3 py-1 text-xs font-medium text-royal">
                {post.category}
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-navy">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
