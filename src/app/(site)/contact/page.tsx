import type { Metadata } from "next";
import { SectionReveal } from "@/components/ui/section-reveal";
import { DiagnosticForm } from "@/components/contact/diagnostic-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us your pain points, goals, and what takes up too much of your time. We'll show you what smart systems can do.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6">
        <div className="mx-auto max-w-2xl">
          <SectionReveal>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-white/70">Get started</p>
            <h1 className="mt-4 font-display text-5xl font-light md:text-6xl">Let&apos;s talk</h1>
            <p className="mt-6 text-white/50 leading-relaxed">
              Tell us about your business, your biggest pain points, and where you want to be. We&apos;ll come back with honest advice on what&apos;s possible — and what isn&apos;t.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12"><DiagnosticForm /></div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-16 text-center">
              <p className="text-sm text-white/50">
                Prefer to talk?{" "}
                <a href="https://cal.com/upandup" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white/70-hover font-medium">
                  Book a call directly &rarr;
                </a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
