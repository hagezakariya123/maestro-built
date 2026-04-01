import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal delay={index * 90}>
      <article className="group">
        <div className="overflow-hidden border border-[0.5px] border-white/20 bg-white/[0.03]">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={700}
            className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </div>
        <div className="border-x border-b border-[0.5px] border-white/20 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-white/70">{project.type}</p>
          <h3 className="mt-3 text-2xl tracking-[-0.03em]">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/80">{project.summary}</p>
        </div>
      </article>
    </Reveal>
  );
}
