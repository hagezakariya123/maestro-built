import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <p className="text-xs uppercase tracking-[0.32em] text-white/70">{eyebrow}</p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] italic text-balance sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={220}>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
