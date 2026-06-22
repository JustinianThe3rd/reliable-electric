"use client";

import { memo } from "react";
import { motion } from "framer-motion";

function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-red via-red-dark to-dark py-14 md:py-24">
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.05) 60%, transparent 60%)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-1/4 -left-20 md:-left-32 w-48 h-48 md:w-96 md:h-96 bg-black/20 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-amber/[0.06] rounded-full blur-[60px] md:blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-amber-light text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-syne font-bold mb-3">
            Call 24/7
          </p>
          <h2 className="font-syne font-extrabold text-2xl md:text-4xl lg:text-5xl text-brand-white tracking-tight">
            Schedule Your Electrical Service
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-brand-white/50 max-w-lg mx-auto leading-relaxed font-source">
            Free estimates. No job too big or too small. Rob and the crew are ready to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
          className="flex flex-col items-center gap-4 md:gap-5 mb-8 md:mb-12"
        >
          <a
            href="tel:7182272008"
            className="inline-flex items-center gap-3 bg-brand-white hover:bg-brand-white/95 text-black font-syne font-bold text-base md:text-xl px-7 md:px-10 py-3.5 md:py-4 uppercase tracking-wider shadow-xl w-full sm:w-auto justify-center transition-colors duration-150"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (718) 227-2008
          </a>
          <span className="text-brand-white/30 text-xs font-source">or</span>
          <a
            href="mailto:Rob@reliableelectricofnyc.com"
            className="inline-flex items-center gap-2 text-brand-white/65 hover:text-brand-white font-syne font-semibold text-sm md:text-base uppercase tracking-wider transition-colors duration-150 border-b border-brand-white/15 hover:border-brand-white/40 pb-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Rob@reliableelectricofnyc.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "35+", label: "Years" },
            { value: "24/7", label: "Available" },
            { value: "5", label: "Boroughs" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm px-2 md:px-6 py-3 md:py-5 text-center">
              <p className="font-syne font-extrabold text-xl md:text-3xl text-brand-white leading-none">{stat.value}</p>
              <p className="text-brand-white/35 text-[10px] md:text-xs font-source mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CallToAction);
