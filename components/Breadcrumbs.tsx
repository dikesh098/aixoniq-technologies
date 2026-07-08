import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export default function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="shell flex items-center gap-2 pb-2 pt-28 text-xs text-slate">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...items])} />
      <Link href="/" className="hover:text-navy">Home</Link>
      {items.map((item) => (
        <span key={item.path} className="flex items-center gap-2">
          <ChevronRight size={12} />
          {item.path === items[items.length - 1].path ? (
            <span className="text-navy">{item.name}</span>
          ) : (
            <Link href={item.path} className="hover:text-navy">{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
