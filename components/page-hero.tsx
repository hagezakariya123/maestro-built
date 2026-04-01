import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.32em] text-white/70">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 font-serif text-5xl leading-[0.96] tracking-[-0.05em] italic text-balance sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
