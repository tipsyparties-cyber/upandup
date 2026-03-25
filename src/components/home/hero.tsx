import { RotatingWord } from "./rotating-word";
import { ScrollChevron } from "@/components/ui/scroll-chevron";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center gradient-hero px-6">
      {/* Decorative thin lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-full w-px bg-warm-grey/5" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-warm-grey/5" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-warm-grey/5" />
        <svg className="absolute right-12 top-1/4 h-48 w-48 text-warm-grey/5" viewBox="0 0 200 200" fill="none" data-parallax="0.3">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-5xl font-light leading-tight tracking-tight md:text-7xl lg:text-8xl text-balance">
          We use AI &amp; automation to make businesses
        </h1>
        <div className="mt-4 font-serif text-5xl font-light md:text-7xl lg:text-8xl">
          <RotatingWord />
        </div>
      </div>

      <ScrollChevron />
    </section>
  );
}
