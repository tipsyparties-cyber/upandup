import type { Metadata } from "next";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your business. Before we speak, we like to do our homework.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 text-white">
      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <SectionReveal>
            <h1 className="font-display text-5xl font-light md:text-6xl lg:text-7xl">
              Let&apos;s get to know your business
            </h1>
            <p className="mt-6 text-white/50 leading-relaxed font-light">
              Tell us a bit about your business, what you&apos;ve built and what you&apos;re looking for. Before we speak, we like to do our homework.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12">
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
