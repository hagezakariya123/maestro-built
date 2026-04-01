import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { companyPrinciples, companyStats } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn about Maestro Built Constructions, our approach to craftsmanship, project leadership, and detail-driven delivery.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A construction studio guided by restraint, workmanship, and trust."
        description="Maestro Built Constructions brings together premium execution, practical coordination, and a calm client experience across residential and commercial work."
      />

      <PageSection className="border-y border-white/20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Our Story"
            title="We build with long-term value in mind."
            description="The business is positioned around clear planning, disciplined site management, and carefully resolved finishes."
          />
          <div className="space-y-6 text-sm leading-8 text-white/80 sm:text-base">
            <p>
              Maestro Built Constructions was established to deliver projects with the standard of care often associated with smaller bespoke studios, paired with the reliability and structure expected of a professional builder.
            </p>
            <p>
              Our team works closely with clients, consultants, and trades to maintain alignment at each stage. That means transparent communication, realistic sequencing, and a commitment to workmanship that is visible in both the large gestures and the fine details.
            </p>
            <p>
              The result is a process that feels steady and considered, producing homes and commercial environments that are practical, elegant, and built to last.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection className="border-b border-white/20">
        <SectionHeading
          eyebrow="Principles"
          title="The standards that shape every project."
          description="A concise framework for how we manage quality, communication, and delivery."
        />
        <div className="mt-12 grid gap-px bg-white/12 md:grid-cols-3">
          {companyPrinciples.map((principle, index) => (
            <article
              key={principle.title}
              className="bg-white/[0.03] p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl tracking-[-0.02em]">{principle.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Snapshot"
          title="A minimal view of our working priorities."
          description="Placeholder figures that can be replaced with live business metrics later."
        />
        <div className="mt-12 grid gap-px bg-white/12 sm:grid-cols-3">
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-serif text-5xl tracking-[-0.05em] italic">{stat.value}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/70">
                {stat.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/80">{stat.note}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
