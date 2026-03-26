import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/section-reveal";
import { NeoCard } from "@/components/ui/neo-card";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "See how up+up has transformed businesses with AI & automation — real case studies and project examples.",
};

const fauxProjects = [
  {
    title: "Evergreen Aesthetics",
    industry: "Healthcare Clinic",
    description: "A busy aesthetics clinic drowning in appointment admin, missed follow-ups, and lapsed patients. We built a system that manages the entire patient journey automatically.",
    features: ["Automated appointment booking and reminders", "Treatment follow-up scheduling", "Patient reactivation campaigns", "Intelligent waitlist management"],
    accentColor: "bg-emerald-400",
  },
  {
    title: "Hartley Construction",
    industry: "Construction",
    description: "A growing construction firm managing 15+ concurrent projects with spreadsheets and phone calls. We gave them real-time visibility and automated the admin that was costing them hours every day.",
    features: ["Real-time project cost tracking", "Automated supplier ordering", "Subcontractor coordination", "Automated client progress reporting"],
    accentColor: "bg-amber-400",
  },
  {
    title: "FreshBite Franchise",
    industry: "Franchise Network",
    description: "A 12-location food franchise struggling with operational inconsistency across sites. We connected every location into a single automated ecosystem.",
    features: ["Standardised operations across all locations", "Unified performance reporting dashboard", "Consistent customer communications", "Network-wide performance monitoring"],
    accentColor: "bg-sky-400",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-accent">Our work</p>
            <h1 className="mt-4 font-display text-5xl font-light md:text-6xl lg:text-7xl">Projects</h1>
            <p className="mt-6 max-w-2xl text-mid-grey leading-relaxed">
              Every project is different because every business is different. Here&apos;s a look at how we&apos;ve helped real businesses transform their operations.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <Link href="/projects/tipsy-parties" className="mt-16 block">
              <NeoCard className="overflow-hidden md:flex">
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-peach/30 to-coral/20 md:aspect-auto md:w-2/5">
                  <p className="font-display text-7xl font-light text-warm-grey/20">TP</p>
                </div>
                <div className="p-8 md:w-3/5 md:p-10">
                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-accent">Featured Case Study</p>
                  <h2 className="mt-2 font-display text-3xl font-light md:text-4xl">Tipsy Parties</h2>
                  <p className="mt-4 text-mid-grey leading-relaxed">
                    A fully autonomous cocktail events operation — from instant quoting to staff allocation, inventory management, AI customer service, and automated recruitment. The entire business runs itself.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read the full case study
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 14V2M8 2L3 7M8 2L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </NeoCard>
            </Link>
          </SectionReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {fauxProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
