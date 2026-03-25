import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";

export function HomeCta() {
  return (
    <section className="py-32 px-6">
      <SectionReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-light md:text-5xl text-balance">
            Ready to see what&apos;s possible?
          </h2>
          <p className="mt-6 text-mid-grey leading-relaxed">
            Tell us your pain points, your goals, and what takes up too much of
            your time. We&apos;ll show you what smart systems can do.
          </p>
          <div className="mt-10">
            <Button href="/contact">
              Tell us about your business
            </Button>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
