import type { Metadata } from "next";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "The up+up story — why we exist, what we believe, and how we help businesses operate at scale with lean teams.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <SectionReveal>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-accent">About us</p>
            <h1 className="mt-4 font-display text-5xl font-light md:text-6xl lg:text-7xl">
              Smart people. Smarter systems.
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-16 space-y-8 text-mid-grey leading-relaxed">
              <p>
                up+up was founded on a simple observation: the businesses that scale successfully aren&apos;t the ones that hire the most people. They&apos;re the ones that build the smartest systems.
              </p>
              <p>
                We&apos;ve seen it firsthand — running businesses where the admin consumed more time than the actual work. Where growth meant more chaos, more late nights, more things falling through the cracks. Where hiring another person just added another person&apos;s worth of problems.
              </p>
              <p>
                So we built something different. We took AI and automation — not the buzzword version, but the practical, operational version — and used it to build systems that actually run businesses. Not dashboards that look impressive. Not tools that need a PhD to configure. Real systems that handle the quoting, the booking, the follow-ups, the invoicing, the hiring, the customer service, the marketing — all of it — so the humans can focus on the work that actually requires a human.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-20">
              <h2 className="font-display text-3xl font-light md:text-4xl">What we believe</h2>
              <div className="mt-8 space-y-8 text-mid-grey leading-relaxed">
                <p>
                  <strong className="text-warm-grey">Automation should fit the business, not the other way around.</strong>{" "}
                  Every system we build is designed around how a business actually operates — not how a software product thinks it should.
                </p>
                <p>
                  <strong className="text-warm-grey">Technology is only as good as the people who implement it.</strong>{" "}
                  A developer who&apos;s never managed a rota on a bank holiday or lost a customer to a faster competitor will build you a technically functional system. But they&apos;ll miss the edge cases that only experience reveals.
                </p>
                <p>
                  <strong className="text-warm-grey">The best businesses don&apos;t need the most people.</strong>{" "}
                  They need the right systems. We build those systems — so two people can run what used to take twenty.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="mt-20 text-center">
              <Button href="/contact">Start a conversation</Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
