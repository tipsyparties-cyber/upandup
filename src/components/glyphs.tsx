interface GlyphProps {
  className?: string;
}

const d = "w-12 h-12 text-warm-grey/60";

export function TimeSavingGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Egg timer shape */}
      <path d="M16 6H32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M16 42H32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M18 6C18 6 18 18 24 24C30 18 30 6 30 6" stroke="currentColor" strokeWidth="1" />
      <path d="M18 42C18 42 18 30 24 24C30 30 30 42 30 42" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="34" r="1" fill="currentColor" />
      <circle cx="24" cy="37" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function SpeedGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Straight speeding arrow with motion lines */}
      <path d="M6 24H38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M34 18L42 24L34 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 18H22" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M12 30H26" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M6 14H16" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
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
      {/* Top circle - clock */}
      <circle cx="24" cy="14" r="10" stroke="currentColor" strokeWidth="1" />
      <path d="M24 8V14L27 16" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      {/* Bottom left circle - sun */}
      <circle cx="14" cy="36" r="8" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="25" x2="14" y2="27" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="14" y1="45" x2="14" y2="47" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="3" y1="36" x2="5" y2="36" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="23" y1="36" x2="25" y2="36" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="6.2" y1="28.2" x2="7.6" y2="29.6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="20.4" y1="42.4" x2="21.8" y2="43.8" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="6.2" y1="43.8" x2="7.6" y2="42.4" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="20.4" y1="29.6" x2="21.8" y2="28.2" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      {/* Bottom right circle - half moon */}
      <circle cx="34" cy="36" r="8" stroke="currentColor" strokeWidth="1" />
      <path d="M34 28C30 30 30 42 34 44" stroke="currentColor" strokeWidth="0.75" fill="none" />
    </svg>
  );
}

export function CompetitiveGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Comet head */}
      <circle cx="36" cy="12" r="5" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      {/* Comet tail - sweeping lines */}
      <path d="M32 16C26 22 16 28 4 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M31 14C24 18 14 22 4 24" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M34 17C28 24 18 32 6 38" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  );
}

export function StaffGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* 3 overlapping circles in a row, like chain links */}
      <circle cx="12" cy="24" r="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="36" cy="24" r="9" stroke="currentColor" strokeWidth="1" />
      {/* Smiles */}
      <path d="M9 26C9 26 10.5 28.5 12 28.5C13.5 28.5 15 26 15 26" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none" />
      <path d="M21 26C21 26 22.5 28.5 24 28.5C25.5 28.5 27 26 27 26" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none" />
      <path d="M33 26C33 26 34.5 28.5 36 28.5C37.5 28.5 39 26 39 26" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function OwnerGlyph({ className = d }: GlyphProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      {/* Single circle with smile */}
      <circle cx="24" cy="22" r="14" stroke="currentColor" strokeWidth="1" />
      <path d="M18 26C18 26 20 30 24 30C28 30 30 26 30 26" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" fill="none" />
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
