import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { PageSection } from "@/components/page-section";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { homeFeaturedProjects, homeServices, differentiators } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-white/20">
        <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-7xl flex-col justify-center gap-14 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end">
            <Reveal className="space-y-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/70">
                Crafted spaces. Considered delivery.
              </p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-balance italic sm:text-6xl lg:text-8xl">
                Maestro Built Constructions creates enduring spaces with quiet precision.
              </h1>
            </Reveal>
            <Reveal delay={140} className="space-y-8 lg:max-w-md lg:justify-self-end">
              <p className="text-base leading-8 text-white/80 sm:text-lg">
                We deliver custom homes, major renovations, extensions, and commercial builds with disciplined project management and a premium standard of finish.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/projects">View Projects</CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Request a Quote
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PageSection className="border-b border-white/20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Company"
            title="Built on craftsmanship, carried by dependable execution."
            description="Our work is shaped by measured detailing, clear communication, and a calm, professional process from planning through handover."
          />
          <div className="grid gap-8 text-sm leading-7 text-white/80 sm:grid-cols-2 sm:text-base">
            <p className="animate-fade-up">
              Maestro Built Constructions partners closely with homeowners, developers, and businesses to deliver spaces that feel resolved, functional, and enduring.
            </p>
            <p className="animate-fade-up-delayed">
              Every project is coordinated with the same priorities: thoughtful sequencing, trusted trades, transparent reporting, and a finish standard that reflects the brief.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection className="border-b border-white/20">
        <SectionHeading
          eyebrow="Services"
          title="Construction services shaped for quality-focused clients."
          description="A concise service offering, structured to support projects from early planning through final detailing."
          align="center"
        />
        <div className="mt-12 grid gap-px bg-white/12 sm:grid-cols-2 xl:grid-cols-3">
          {homeServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </PageSection>

      <PageSection className="border-b border-white/20">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects with a refined, practical point of view."
            description="Placeholder projects arranged to be easy to replace with live case studies later."
          />
          <Link
            href="/projects"
            className="hidden border-b border-white pb-1 text-sm text-white transition-opacity hover:opacity-60 md:block"
          >
            See all projects
          </Link>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {homeFeaturedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </PageSection>

      <PageSection className="border-b border-white/20">
        <SectionHeading
          eyebrow="Why Maestro"
          title="A considered approach to quality, coordination, and trust."
          description="Our value lies in the details that keep projects moving well and finishing properly."
        />
        <div className="mt-12 grid gap-px bg-white/12 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className="bg-white/[0.03] p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h3 className="text-xl tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="border border-[0.5px] border-white/25 px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/70">
                Start a Conversation
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] italic sm:text-5xl">
                Planning a new build, renovation, or commercial project?
              </h2>
            </div>
            <div className="space-y-6">
              <p className="max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                Share your scope and timeframe, and we will prepare a considered next step for your project.
              </p>
              <CTAButton href="/contact">Request a Quote</CTAButton>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
