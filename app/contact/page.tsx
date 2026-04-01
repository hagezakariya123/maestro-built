import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Maestro Built Constructions to discuss a project, request a quote, or enquire about service availability.",
});

const contactItems = [
  { label: "Phone", value: "+61 400 000 000" },
  { label: "Email", value: "hello@maestrobuilt.com" },
  { label: "Service Area", value: "Sydney and surrounding regions" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a clear brief. We will take it from there."
        description="Tell us about your project scope, property, and timing. We will respond with a considered next step."
      />

      <PageSection>
        <div className="grid gap-px bg-white/12 lg:grid-cols-[0.7fr_1.3fr]">
          <section className="bg-white/[0.03] p-8 lg:p-12">
            <h2 className="text-3xl tracking-[-0.03em]">Contact Details</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
              Placeholder details are arranged here so the page can be updated quickly once final business contact information is ready.
            </p>
            <dl className="mt-10 space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="border-t border-white/20 pt-4">
                  <dt className="text-xs uppercase tracking-[0.24em] text-white/70">
                    {item.label}
                  </dt>
                  <dd className="mt-3 text-lg tracking-[-0.02em]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="bg-white/[0.03] p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl tracking-[-0.03em]">Request a Quote</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Use the form below to share the essentials. The structure is ready for later connection to your preferred form handling workflow.
              </p>
            </div>
            <ContactForm />
          </section>
        </div>
      </PageSection>
    </>
  );
}
