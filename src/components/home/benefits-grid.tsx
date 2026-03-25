import { SectionReveal } from "@/components/ui/section-reveal";
import { glyphs } from "@/components/glyphs";

export function BenefitsGrid() {
  return (
    <section className="py-32 px-6 gradient-section">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <h2 className="text-center font-serif text-4xl font-light md:text-5xl lg:text-6xl">
            What we{" "}
            <span className="hand-drawn-circle">achieve</span>{" "}
            with AI &amp; automation
          </h2>
        </SectionReveal>

        <div className="mt-20 grid gap-x-16 gap-y-20 md:grid-cols-2">
          {glyphs.map(({ Glyph, title, description }, i) => (
            <SectionReveal key={title} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <Glyph className="mx-auto mb-4 h-12 w-12 text-warm-grey/60 md:mx-0" />
                <h3 className="font-serif text-2xl font-light">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mid-grey">
                  {description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
