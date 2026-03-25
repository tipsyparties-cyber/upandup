import type { Metadata } from "next";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ServiceSection } from "@/components/services/service-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description: "AI & automation services — quotes, bookings, CRM, customer service, operations, recruitment, marketing, and web design.",
};

const services = [
  {
    title: "Quotes & Bookings",
    description: "Automated quoting systems that account for date, location, availability and dynamic pricing — plus live online booking that converts enquiries into confirmed customers without anyone lifting a finger.",
    features: ["Instant dynamic quotes", "Live booking availability", "Automated booking flows", "Email remarketing for unconverted quotes", "Payment collection and reminders", "Date and time change management"],
  },
  {
    title: "Sales & CRM",
    description: "Intelligent CRM systems that prioritise your hottest leads, monitor conversions, track staff performance and automate your entire sales pipeline — so nothing falls through the cracks.",
    features: ["Lead prioritisation and scoring", "Conversion tracking and monitoring", "Staff performance dashboards", "Pipeline automation", "Follow-up sequences", "Revenue forecasting"],
  },
  {
    title: "AI Customer Service",
    description: "AI agents that handle customer enquiries via email, chat and messaging — responding instantly, accurately, and in your brand voice. 24/7, 365 days a year.",
    features: ["AI email response agents", "Inbox and outbox automation", "24/7 intelligent support", "Brand voice consistency", "Escalation to human when needed", "Multi-channel support"],
  },
  {
    title: "Operations",
    description: "Streamline the engine room of your business. From invoicing to inventory, rotas to logistics — we automate the operational tasks that eat up your team\u2019s time.",
    features: ["Automated invoicing and payments", "Stock and inventory control", "Automated shopping lists", "Logistics and delivery planning", "Rota and schedule management", "Equipment tracking"],
  },
  {
    title: "Recruitment & Onboarding",
    description: "AI-powered recruitment that writes job ads tailored to each role, screens applicants automatically, tests candidates with bespoke assessments, and onboards new hires — all without HR lifting a finger.",
    features: ["AI-tailored job advertisements", "Bespoke candidate assessments", "AI applicant screening", "Automated staff onboarding", "Training programme management", "Performance tracking from day one"],
  },
  {
    title: "Marketing, SEO & Branding",
    description: "AI-generated content, automated social media posting, remarketing campaigns that run themselves, and SEO strategies that compound over time. Your marketing engine, always running.",
    features: ["AI marketing copy generation", "Social media automation", "Remarketing campaigns", "SEO strategy and content", "Brand consistency enforcement", "Performance analytics"],
  },
  {
    title: "Web Design with Integrated Automation",
    description: "Websites built with automation woven in from day one. Not a website with a contact form — a website that quotes, books, follows up, converts and reports. Your 24/7 digital salesperson.",
    features: ["Conversion-optimised design", "Integrated booking and quoting", "Automated lead capture", "CRM-connected forms", "SEO-first architecture", "Analytics and tracking built in"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-accent">What we do</p>
            <h1 className="mt-4 font-serif text-5xl font-light md:text-6xl lg:text-7xl">Services</h1>
            <p className="mt-6 max-w-2xl text-mid-grey leading-relaxed">
              Every business is different. We don&apos;t sell packages — we design and build bespoke automation around your specific operations, pain points, and goals.
            </p>
          </SectionReveal>

          <div className="mt-20 space-y-8">
            {services.map((service, i) => (
              <ServiceSection key={service.title} {...service} index={i} />
            ))}
          </div>

          <SectionReveal>
            <div className="mt-20 text-center">
              <Button href="/contact">Tell us what you need</Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
