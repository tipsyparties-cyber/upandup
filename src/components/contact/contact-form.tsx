"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const initialState = { success: false, error: null as string | null };

const inputStyles = "mt-1 w-full rounded-lg border border-white/15 bg-white/8 backdrop-blur-xl px-3 py-2 text-xs text-white placeholder-white/30 outline-none transition-all focus:border-white/30 focus:bg-white/12";
const labelStyles = "block text-xs text-white/70 font-light";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-2xl p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)]">
        <h3 className="font-display text-3xl font-light">We&apos;ll be in touch soon.</h3>
        <p className="mt-4 text-white/50 font-light">Good things incoming.</p>
      </div>
    );
  }

  return (
    <form action={formAction}>
      {/* Honeypot */}
      <input type="text" name="website" className="absolute -left-[9999px] opacity-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-2xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)] space-y-4">

        {/* Basic info */}
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelStyles}>Your name <span className="text-white/30">*</span></label>
            <input id="name" name="name" type="text" required className={inputStyles} />
          </div>
          <div>
            <label htmlFor="email" className={labelStyles}>Your email <span className="text-white/30">*</span></label>
            <input id="email" name="email" type="email" required className={inputStyles} />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelStyles}>Your contact number</label>
            <p className="text-[10px] text-white/30 mt-0.5">Include your country code if outside the UK</p>
            <input id="phone" name="phone" type="tel" className={inputStyles} />
          </div>
          <div>
            <label htmlFor="location" className={labelStyles}>Your location</label>
            <p className="text-[10px] text-white/30 mt-0.5">City and country is fine</p>
            <input id="location" name="location" type="text" className={inputStyles} />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="business" className={labelStyles}>Your business name <span className="text-white/30">*</span></label>
            <input id="business" name="business" type="text" required className={inputStyles} />
          </div>
          <div>
            <label htmlFor="businessWebsite" className={labelStyles}>Your website</label>
            <input id="businessWebsite" name="businessWebsite" type="url" className={inputStyles} placeholder="https://" />
          </div>
        </div>

        {/* Socials */}
        <div>
          <p className={`${labelStyles} mb-3`}>Your socials <span className="text-white/30">— optional, share whatever you&apos;re active on</span></p>
          <div className="grid gap-2 md:grid-cols-5">
            <input name="instagram" type="text" className={inputStyles} placeholder="Instagram" />
            <input name="linkedin" type="text" className={inputStyles} placeholder="LinkedIn" />
            <input name="tiktok" type="text" className={inputStyles} placeholder="TikTok" />
            <input name="facebook" type="text" className={inputStyles} placeholder="Facebook" />
            <input name="twitter" type="text" className={inputStyles} placeholder="X / Twitter" />
          </div>
        </div>

        <hr className="border-white/10" />

        {/* About the business */}
        <div>
          <label htmlFor="whatDoYouDo" className={labelStyles}>What does your business do? <span className="text-white/30">*</span></label>
          <p className="text-[10px] text-white/30 mt-0.5">One or two sentences is plenty</p>
          <textarea id="whatDoYouDo" name="painPoints" required rows={2} className={`${inputStyles} resize-none`} />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="teamSize" className={labelStyles}>How big is your team?</label>
            <input id="teamSize" name="teamSize" type="text" className={inputStyles} />
          </div>
          <div>
            <label htmlFor="customers" className={labelStyles}>How many customers do you serve?</label>
            <input id="customers" name="customers" type="text" className={inputStyles} />
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Challenges */}
        <div>
          <p className={`${labelStyles} mb-1`}>What are your biggest challenges right now? <span className="text-white/30">*</span></p>
          <p className="text-[10px] text-white/30 mb-3">Just a few words for each — no need to write an essay</p>
          <div className="space-y-3">
            <input name="challenge1" type="text" required className={inputStyles} placeholder="Challenge one" />
            <input name="challenge2" type="text" className={inputStyles} placeholder="Challenge two" />
            <input name="challenge3" type="text" className={inputStyles} placeholder="Challenge three" />
          </div>
        </div>

        {/* Goals */}
        <div>
          <label htmlFor="goals" className={labelStyles}>What would you like to achieve?</label>
          <p className="text-[10px] text-white/30 mt-0.5">What would you like to improve, build or transform — a few words is fine</p>
          <textarea id="goals" name="goals" rows={3} className={`${inputStyles} resize-none`} />
        </div>

        {state.error && <p className="text-sm text-red-400">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className={`w-full rounded-full py-4 font-body text-sm font-medium tracking-wide uppercase glass text-white hover:bg-white/20 transition-all duration-300 ${pending ? "opacity-50" : ""}`}
        >
          {pending ? "Sending..." : "Send ^"}
        </button>
      </div>

      <p className="mt-8 text-center text-white/30 text-sm font-light">
        We&apos;ll be in touch soon. Good things incoming.
      </p>
    </form>
  );
}
