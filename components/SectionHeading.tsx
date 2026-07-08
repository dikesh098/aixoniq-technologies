import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  number,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  number?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div className={cn("mb-5 flex items-center gap-3", align === "center" && "justify-center")}>
        {number && <span className="eyebrow-num">{number}</span>}
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-balance text-[15px] leading-relaxed text-ink-muted md:text-base">{description}</p>
      )}
    </div>
  );
}
