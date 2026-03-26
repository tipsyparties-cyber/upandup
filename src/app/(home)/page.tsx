"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotatingWord } from "@/components/home/rotating-word";
import { glyphs } from "@/components/glyphs";
import { ChaosGlyph } from "@/components/home/chaos-glyph";
import { HarmonyGlyph } from "@/components/home/harmony-glyph";
import { WhyUsSection } from "@/components/home/why-us-section";
import { ServiceCarousel } from "@/components/home/service-carousel";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function FloatingWords({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => {
        const seed = startDelay * 100 + i;
        const duration = 0.8 + seededRandom(seed) * 0.5;
        const delay = startDelay + seededRandom(seed + 1) * 0.3;
        return (
          <motion.span
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{
              duration,
              delay,
              ease: [0.15, 0.8, 0.3, 1],
              opacity: { duration: duration * 0.6, delay: delay + duration * 0.1, ease: "easeIn" },
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}

const sections = [
  {
    id: "hero",
    content: (onReady: () => void) => (
      <div className="text-center">
        <h1 className="font-light leading-tight tracking-tight">
          <span className="block font-body text-3xl md:text-5xl lg:text-[4.5rem]">
            <FloatingWords text="We use ai & automation" startDelay={0} />
          </span>
          <span className="relative block font-display mt-2 text-4xl md:text-6xl lg:text-[5.5rem]" style={{ marginLeft: "-0.5em" }}>
            <span className="whitespace-nowrap">
              <FloatingWords text="to make your business" startDelay={0.4} />
              <span className="inline-block" style={{ width: "5em" }}></span>
            </span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4 }}
              onAnimationComplete={onReady}
              className="absolute top-0"
              style={{ left: "calc(100% - 5em)" }}
            >
              <RotatingWord />
            </motion.span>
          </span>
        </h1>
      </div>
    ),
  },
  {
    id: "positioning",
    content: (onReady: () => void) => (
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-3xl font-light leading-tight md:text-5xl lg:text-[4rem]">
          <FloatingWords text="The best businesses aren't run by" startDelay={0} />
          <br />
          <FloatingWords text="super humans working 24/7." startDelay={0.15} />
        </p>
        <p className="font-body text-3xl font-light leading-tight md:text-4xl lg:text-[3rem] mt-8">
          <FloatingWords text="They're run by smart people" startDelay={0.3} />
          <br />
          <FloatingWords text="with smarter systems." startDelay={0.45} />
        </p>
        <motion.p
          className="font-display text-2xl font-light md:text-4xl lg:text-[3rem] mt-12 text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
          onAnimationComplete={onReady}
        >
          We design and build those systems.
        </motion.p>
      </div>
    ),
  },
  {
    id: "benefits",
    content: (onReady: () => void) => (
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="font-display text-2xl font-light md:text-4xl lg:text-5xl">
          <FloatingWords text="What we achieve with ai & automation" startDelay={0} />
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onAnimationComplete={onReady}
        >
          {glyphs.map(({ Glyph, title, description }, i) => (
            <motion.div
              key={title}
              className="text-center rounded-2xl border border-white/15 bg-white/8 backdrop-blur-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
            >
              <Glyph className="mx-auto mb-2 h-8 w-8 text-white/50" />
              <h3 className="font-body text-[11px] md:text-xs font-medium text-white leading-tight">{title}</h3>
              <p className="font-body text-[9px] md:text-[10px] text-white/40 mt-1 leading-snug">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    id: "stats",
    content: (onReady: () => void) => (
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-2xl font-light md:text-4xl lg:text-5xl mb-12">
          <FloatingWords text="The numbers speak for themselves" startDelay={0} />
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onAnimationComplete={onReady}
        >
          {[
            { stat: "40%", label: "reduction in operational costs with AI automation", source: "McKinsey" },
            { stat: "90%", label: "of repetitive tasks can be fully automated", source: "Deloitte" },
            { stat: "3x", label: "faster customer response times with AI agents", source: "Salesforce" },
            { stat: "65%", label: "of businesses will adopt AI by 2026", source: "Gartner" },
            { stat: "80%", label: "reduction in manual data entry errors", source: "IBM" },
            { stat: "2.5x", label: "more leads captured with 24/7 automated responses", source: "HubSpot" },
            { stat: "50%", label: "less time spent on admin and scheduling", source: "Accenture" },
            { stat: "73%", label: "of customers prefer instant responses over waiting", source: "Forrester" },
          ].map(({ stat, label, source }, i) => (
            <motion.div
              key={stat + label}
              className="text-left rounded-2xl border border-white/15 bg-white/8 backdrop-blur-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.12, duration: 0.6 }}
            >
              <p className="font-body text-4xl md:text-5xl lg:text-6xl font-light text-white">{stat}</p>
              <p className="font-body text-xs md:text-sm text-white/70 mt-2 leading-snug">{label}</p>
              <p className="font-body text-[9px] md:text-[10px] text-white/30 mt-1">{source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    id: "comparison",
    content: (onReady: () => void) => (
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl font-light md:text-4xl lg:text-5xl mb-12 text-center">
          <FloatingWords text={"Same business. Different operation."} startDelay={0} />
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-8">
          {/* Without */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ChaosGlyph />
            <h3 className="font-body text-sm uppercase tracking-widest text-white/40 mt-6 mb-4">Without us</h3>
            <div className="w-full grid gap-2">
              {["Slow response times", "Missed enquiries", "Manual everything", "Inconsistent service", "Limited by working hours", "Growth = more chaos"].map((item, i) => (
                <motion.div key={item} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2.5 flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}>
                  <svg className="w-3 h-3 shrink-0 text-white/40" viewBox="0 0 12 12" fill="none">
                    <line x1="2" y1="2" x2="10" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <line x1="10" y1="2" x2="2" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <span className="text-white/40 text-xs md:text-sm uppercase tracking-wider">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* With */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <HarmonyGlyph />
            <h3 className="font-body text-sm uppercase tracking-widest text-white/70 mt-6 mb-4">With us</h3>
            <div className="w-full grid gap-2">
              {["Instant responses, 24/7", "Every lead captured", "Fully automated", "Consistent every time", "Always on, 365 days", "Growth = more freedom"].map((item, i) => (
                <motion.div key={item} className="rounded-xl border border-white/15 bg-white/8 backdrop-blur-xl px-4 py-2.5 flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)]"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 + i * 0.1, duration: 0.4 }}
                  {...(i === 5 ? { onAnimationComplete: onReady } : {})}>
                  <svg className="w-3 h-3 shrink-0 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white text-xs md:text-sm uppercase tracking-wider">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: "services",
    content: (onReady: () => void) => {
      // This section handles its own scroll for horizontal carousel
      // onReady is called immediately so the parent doesn't block scrolling
      setTimeout(() => onReady(), 2000);
      return (
      <div className="w-full h-full flex flex-col">
        <div className="text-center pt-8">
          <h2 className="font-display text-3xl font-light md:text-5xl lg:text-[4.5rem]">
            <FloatingWords text="What can we do for you?" startDelay={0} />
          </h2>
          <motion.p
            className="font-body text-xs uppercase tracking-[0.2em] text-white/40 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Your AI Team &amp; Automation Tools
          </motion.p>
        </div>
        <ServiceCarousel />
      </div>
      );
    },
  },
  {
    id: "why-us",
    content: (onReady: () => void) => (
      <WhyUsSection onReady={onReady} />
    ),
  },
  {
    id: "knowledge",
    content: (onReady: () => void) => (
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <motion.h2
          className="font-display text-5xl md:text-7xl lg:text-[6rem] font-light text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Knowledge
        </motion.h2>
        <motion.p
          className="font-body text-xs md:text-sm lg:text-base text-white/60 leading-relaxed max-w-2xl mx-auto text-center mt-8 px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          onAnimationComplete={onReady}
        >
          We&apos;re entrepreneurs &times; coders. A decade of founding, scaling and automating real businesses has given us something no agency can replicate &mdash; our lived experience of every problem we solve, the knowledge to foresee them before they happen + the technical skill to solve them.
        </motion.p>
      </div>
    ),
  },
  {
    id: "how-it-works",
    content: (onReady: () => void) => (
      <div className="max-w-5xl mx-auto w-full px-8">
        <h2 className="font-display text-3xl font-light md:text-5xl lg:text-[4.5rem] text-center mb-16">
          <FloatingWords text="How does it work?" startDelay={0} />
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Tell us everything",
              desc: "Your pain points. Your repeated tasks. Your chaos. Your leaks. We\u2019ll automate them, simplify them, and plug them.",
            },
            {
              num: "02",
              title: "We come back with solutions",
              desc: "Tailored solutions and transparent pricing. No fluff, no upselling \u2014 just what your business actually needs.",
            },
            {
              num: "03",
              title: "Pick what fits",
              desc: "Choose your solutions based on priority and budget. We can always add more later \u2014 start where it matters most.",
            },
            {
              num: "04",
              title: "We build, you breathe",
              desc: "We build and integrate everything. You sit back and relax \u2014 or spend your spare time on growth and development.",
            },
          ].map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.7, ease: [0.15, 0.8, 0.3, 1] }}
              {...(i === 3 ? { onAnimationComplete: onReady } : {})}
            >
              <span className="font-body text-3xl md:text-4xl font-light text-white/20">{num}</span>
              <h3 className="font-body text-sm md:text-base font-medium text-white mt-4 uppercase tracking-wider">{title}</h3>
              <p className="font-body text-[10px] md:text-xs text-white/50 mt-3 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cta",
    content: (onReady: () => void) => (
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
          <FloatingWords text="Ready to see what's possible?" startDelay={0} />
        </h2>
        <motion.p
          className="font-body text-base md:text-xl text-white/70 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onAnimationComplete={onReady}
        >
          Tell us your pain points, your goals, and what takes up too much of your time.
        </motion.p>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-body text-sm font-medium tracking-wide uppercase glass text-white hover:bg-white/20 transition-all duration-300"
          >
            Tell us about your business
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 14V2M8 2L3 7M8 2L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    ),
  },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(-1);
  const [logoDone, setLogoDone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (transitioning) return;
      const next = currentSection + dir;
      if (next < 0 || next >= sections.length) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSection(next);
        setTransitioning(false);
      }, 600);
    },
    [transitioning, currentSection]
  );

  useEffect(() => {
    let lastNav = 0;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastNav < 1500) return;
      if (Math.abs(e.deltaY) < 30) return;
      lastNav = now;
      navigate(e.deltaY > 0 ? 1 : -1);
    };

    let touchY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchY - e.changedTouches[0].clientY;
      const now = Date.now();
      if (now - lastNav < 1500) return;
      if (Math.abs(diff) < 50) return;
      lastNav = now;
      navigate(diff > 0 ? 1 : -1);
    };

    // Keyboard
    const handleKey = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastNav < 1500) return;
      if (e.key === "ArrowDown" || e.key === " ") { lastNav = now; navigate(1); }
      if (e.key === "ArrowUp") { lastNav = now; navigate(-1); }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
    };
  }, [navigate]);

  useEffect(() => {
    if (logoDone && currentSection === -1) {
      setTimeout(() => setCurrentSection(0), 500);
    }
  }, [logoDone, currentSection]);

  return (
    <div className="fixed inset-0 overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-white/5" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />
      </div>

      {/* Logo */}
      <motion.div
        className="fixed z-[100] tracking-tight text-white pointer-events-none"
        initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", fontSize: "6rem", opacity: 0 }}
        animate={
          logoDone
            ? { top: "1.1rem", left: "1.5rem", x: "0%", y: "0%", fontSize: "1.5rem", opacity: 1 }
            : { top: "50%", left: "50%", x: "-50%", y: "-50%", fontSize: "6rem", opacity: 1 }
        }
        transition={logoDone ? { duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] } : { duration: 1, delay: 0.5, ease: "easeOut" }}
        onAnimationComplete={() => { if (!logoDone) setTimeout(() => setLogoDone(true), 1500); }}
      >
        <span className="font-body font-light">up</span>
        <span className="font-display text-[1.15em]">+up</span>
        <span className="text-white text-[0.7em] leading-none font-body -ml-[0.15em] relative -top-[0.35em]">^</span>
      </motion.div>

      {/* Sections */}
      <AnimatePresence mode="wait">
        {currentSection >= 0 && (
          <motion.div
            key={sections[currentSection].id}
            className="absolute inset-0 flex items-center justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {sections[currentSection].content(() => {})}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dots */}
      {logoDone && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { if (!transitioning) { setTransitioning(true); setTimeout(() => { setCurrentSection(i); setTransitioning(false); }, 400); } }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSection ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"}`}
              aria-label={`Section ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll hint */}
      {currentSection === 0 && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 5, duration: 0.6 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
