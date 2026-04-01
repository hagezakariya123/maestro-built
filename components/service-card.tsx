import { Reveal } from "@/components/reveal";
import type { HomeService } from "@/lib/site-data";

type ServiceCardProps = {
  service: HomeService;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <article className="h-full bg-black/10 p-8">
        <p className="text-xs uppercase tracking-[0.26em] text-white/70">{service.kicker}</p>
        <h3 className="mt-4 text-2xl tracking-[-0.03em]">{service.title}</h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
          {service.description}
        </p>
      </article>
    </Reveal>
  );
}
