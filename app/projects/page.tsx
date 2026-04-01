import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { ProjectCard } from "@/components/project-card";
import { buildPageMetadata } from "@/lib/metadata";
import { allProjects } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "View selected placeholder projects from Maestro Built Constructions across residential, renovation, and commercial work.",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected work presented with clarity and room to breathe."
        description="A flexible project gallery designed for future case studies, photography swaps, and expanded project detail."
      />

      <PageSection>
        <div className="mb-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-white/70">
          {["All", "Residential", "Renovation", "Commercial", "Interiors"].map((label) => (
            <span
              key={label}
              className="border border-[0.5px] border-white/25 px-4 py-2"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </PageSection>
    </>
  );
}
