interface GlyphProps {
  className?: string;
}

const d = "w-12 h-12 text-warm-grey/60";

export function TimeSavingGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" />
      <path d="M24 14V24L30 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M36 12L40 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M38 8L42 10" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  );
}

export function SpeedGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M6 32C12 18 20 14 42 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M34 10L42 12L38 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 36C14 28 22 22 36 18" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  );
}

export function CostGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M8 38L20 24L28 30L40 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 10H40V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="42" x2="40" y2="42" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function AccuracyGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ScalabilityGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="18" y="18" width="12" height="12" stroke="currentColor" strokeWidth="1" />
      <rect x="12" y="12" width="24" height="24" stroke="currentColor" strokeWidth="0.75" />
      <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function DataGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M4 36L12 28L18 32L24 20L30 24L36 14L44 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="20" r="2" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="36" cy="14" r="2" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

export function CustomerGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 6C30 6 42 14 42 24C42 34 30 42 24 42C18 42 6 34 6 24C6 14 18 6 24 6Z" stroke="currentColor" strokeWidth="1" />
      <path d="M24 6C20 14 20 34 24 42" stroke="currentColor" strokeWidth="0.5" />
      <path d="M24 6C28 14 28 34 24 42" stroke="currentColor" strokeWidth="0.5" />
      <line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" strokeWidth="0.5" />
      <line x1="8" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function CompetitiveGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M8 40L24 8L40 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 8V4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M20 6L24 2L28 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

export function StaffGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="16" cy="24" r="8" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function OwnerGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M10 36C10 36 16 20 24 12C32 20 38 36 38 36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M24 12V4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M20 8L24 2L28 8" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 32H34" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
    </svg>
  );
}

export const glyphs = [
  { Glyph: TimeSavingGlyph, title: "Time Saving", description: "Every hour spent on emails, quotes, invoices, follow-ups and admin is an hour you\u2019re not spending on growth. We automate the lot \u2014 giving you and your team back the time to focus on what actually matters." },
  { Glyph: SpeedGlyph, title: "Speed Optimised", description: "Instant quotes. Instant responses. Instant bookings. Instant delivery \u2014 before your competitors even respond." },
  { Glyph: CostGlyph, title: "Reduce Costs, Increase Profitability", description: "Hire less. Reduce overtime. Cut mistakes. Get more capacity from the same team. Automation reduces overhead while actually improving the output." },
  { Glyph: AccuracyGlyph, title: "Improved Accuracy & Consistency", description: "Eliminate errors in data entry, pricing, invoicing and communications. Every customer gets the same high standard of service, every single time." },
  { Glyph: ScalabilityGlyph, title: "Scalability", description: "Scale your operations seamlessly with AI and automation. Handle more customers and more complexity without proportionally increasing headcount. Growth without the growing pains." },
  { Glyph: DataGlyph, title: "Data Insights", description: "Extract actionable intelligence from your data. Track conversions, monitor performance, spot trends before they cost you \u2014 and make decisions based on evidence, not gut feel." },
  { Glyph: CustomerGlyph, title: "Customer Satisfaction \u2014 24/7, 365", description: "Sales, support and service running around the clock \u2014 so customers can reach you when it\u2019s convenient for them, not just when the office is open." },
  { Glyph: CompetitiveGlyph, title: "Competitive Edge", description: "Lower costs. Faster output. Faster response times. Better decisions. While your competitors struggle to keep up, your systems are already three steps ahead." },
  { Glyph: StaffGlyph, title: "Staff Satisfaction", description: "Less admin. Less repetition. Less frustration. Let your team focus on the work they were actually hired to do." },
  { Glyph: OwnerGlyph, title: "Business Owner Satisfaction", description: "More time. More profit. More control. Less stress \u2014 and more of everything that made you start this business in the first place." },
];
