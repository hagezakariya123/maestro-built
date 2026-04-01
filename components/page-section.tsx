import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageSection({ children, className }: PageSectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24", className)}>
      <Reveal>{children}</Reveal>
    </section>
  );
}
