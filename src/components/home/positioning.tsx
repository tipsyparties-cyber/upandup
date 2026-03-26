import { SectionReveal } from "@/components/ui/section-reveal";

export function Positioning() {
  return (
    <section className="py-32 px-6">
      <SectionReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-3xl font-light leading-relaxed md:text-4xl lg:text-5xl text-balance">
            The best businesses aren&apos;t run by super humans working 24/7.
            They&apos;re run by smart people with smarter systems.
          </p>
          <p className="mt-8 font-sans text-lg text-mid-grey">
            We design and build those systems.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
