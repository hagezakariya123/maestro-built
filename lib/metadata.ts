import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
};

export function buildPageMetadata({ title, description }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Maestro Built Constructions`,
      description,
    },
  };
}
