"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const allCards = [
  { label: "AI", name: "Customer Service Agent", desc: "Every message answered. Every customer heard. Instant, accurate, personal — across every channel, 24/7." },
  { label: "AI", name: "Sales Agent", desc: "Every lead followed up. Every quote sent on time. Every opportunity pursued to its conclusion — automatically." },
  { label: "AI", name: "Receptionist", desc: "Answers calls, checks availability, takes bookings and handles the front line — professionally, instantly, always." },
  { label: "AI", name: "Operations Manager", desc: "Builds schedules, allocates resources, sends briefings, tracks jobs and coordinates everything behind the scenes." },
  { label: "AI", name: "HR Agent", desc: "Recruiting, screening, onboarding, training and managing your people — the entire employee lifecycle, automated." },
  { label: "AI", name: "Finance Agent", desc: "Invoices raised, payments chased, expenses tracked, reports ready — without a finance team doing it manually." },
  { label: "AI", name: "Marketing Agent", desc: "Content created, campaigns managed, performance tracked — your brand showing up everywhere, consistently." },
  { label: "AI", name: "Compliance Agent", desc: "Every deadline tracked, every licence monitored, every policy current — nothing missed, nothing expired." },
  { label: "AI", name: "Reporting Agent", desc: "Every number from every corner of your business — in one place, always current, always clear." },
  { label: "TOOL", name: "Instant Quotes & Bookings", desc: "Accurate quotes generated instantly based on your rules. Live availability. Full booking flow — no manual steps." },
  { label: "TOOL", name: "Bespoke CRM", desc: "Every interaction logged automatically. Pipeline managed. Follow-ups handled. Your sales process on autopilot." },
  { label: "TOOL", name: "Unified Inbox", desc: "Every message from every channel in one place. AI reads, prioritises and responds automatically." },
  { label: "TOOL", name: "Resource Allocation", desc: "The right resource, in the right place, at the right time — staff, vehicles, equipment, all automatic." },
  { label: "TOOL", name: "Stock & Inventory", desc: "Real-time levels. Auto-reorders. Supplier comms managed. Every movement tracked and audited." },
  { label: "TOOL", name: "Live Ops Dashboard", desc: "The complete picture of your business — right now, on any device, wherever you are." },
  { label: "TOOL", name: "Assessment Platform", desc: "Bespoke tests for every role. Automatically scored. Reduces bad hires and the cost of getting it wrong." },
  { label: "TOOL", name: "Web Design & Build", desc: "Websites with automation woven in from day one — your 24/7 digital salesperson." },
];

export function ServiceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mouseTrackingRef = useRef(false);

  const scroll = useCallback((direction: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 320;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });

    // Loop: if at the end, jump to start; if at start, jump to end
    setTimeout(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollLeft = 0;
      } else if (el.scrollLeft <= 10 && direction < 0) {
        el.scrollLeft = maxScroll;
      }
    }, 400);
  }, []);

  // Mouse position tracking — move cards based on mouse X
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let targetSpeed = 0;
    let currentSpeed = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTrackingRef.current) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0 to 1
      const centre = 0.5;
      const deadZone = 0.15;
      const diff = x - centre;

      if (Math.abs(diff) < deadZone) {
        targetSpeed = 0;
      } else {
        targetSpeed = (diff > 0 ? diff - deadZone : diff + deadZone) * 8;
      }
    };

    const handleMouseEnter = () => { mouseTrackingRef.current = true; };
    const handleMouseLeave = () => { mouseTrackingRef.current = false; targetSpeed = 0; };

    function animate() {
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;
      if (Math.abs(currentSpeed) > 0.1 && el) {
        el.scrollLeft += currentSpeed;
        // Loop
        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) el.scrollLeft -= maxScroll;
        if (el.scrollLeft <= 0) el.scrollLeft += maxScroll;
      }
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate cards for seamless loop
  const cards = [...allCards, ...allCards];

  return (
    <motion.div
      className="flex-1 flex flex-col justify-center w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {/* Arrow buttons */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white transition-colors"
        aria-label="Scroll left"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="rotate-[-90deg]">
          <path d="M10 20L16 10L22 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white transition-colors"
        aria-label="Scroll right"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="rotate-[90deg]">
          <path d="M10 20L16 10L22 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-hidden w-full px-12 py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, i) => (
          <div
            key={`${card.name}-${i}`}
            className="shrink-0 w-[260px] h-[360px] md:w-[280px] md:h-[400px]"
          >
            <div className="w-full h-full rounded-3xl border border-white/15 bg-white/8 backdrop-blur-2xl p-7 md:p-8 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-white/12 transition-colors duration-300">
              {/* Top */}
              <div>
                <div className="w-8 h-8 mb-6 flex items-center justify-center">
                  {card.label === "AI" ? (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white/40">
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <path d="M12 2V6M12 18V22M2 12H6M18 12H22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white/40">
                      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  )}
                </div>
                <h3 className="font-body text-base md:text-lg text-white font-medium leading-snug">{card.name}</h3>
              </div>

              {/* Bottom */}
              <div>
                <p className="font-body text-[11px] md:text-xs text-white/40 leading-relaxed mb-5">{card.desc}</p>
                <a
                  href="/services"
                  className="inline-block font-body text-[10px] md:text-xs uppercase tracking-wider text-white border border-white/30 rounded-full px-4 py-2 hover:bg-white/10 transition-colors duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
