import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { buildPageMetadata } from "@/lib/metadata";
import { detailedServices } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore Maestro Built Constructions services including new builds, renovations, extensions, fit-outs, and project coordination.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Structured construction services with an exacting standard of finish."
        description="Our service offering is designed to support premium residential and commercial projects with clarity from briefing to completion."
      />

      <PageSection>
        <div className="grid gap-px bg-white/20">
          {detailedServices.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-8 bg-black/10 px-6 py-8 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-10"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  {service.kicker}
                </p>
                <h2 className="text-3xl tracking-[-0.04em] sm:text-4xl">{service.title}</h2>
              </div>
              <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
                <p className="max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
                  {service.description}
                </p>
                <ul className="space-y-3 border-l border-white/20 pl-6 text-sm leading-7 text-white">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
    </>
  );
}
