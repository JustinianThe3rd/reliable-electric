"use client";

import { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cubicEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicEase } },
};

const fadeUpSm = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: cubicEase } },
};

const scaleIn = {
  hidden: { opacity: 0, x: 30, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: cubicEase } },
};

function Hero() {
  const [drawLine, setDrawLine] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(600);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
    const timer = setTimeout(() => setDrawLine(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden noise-overlay">
      {/* Background layers */}
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-red/[0.07] rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute -top-20 -right-20 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-amber/[0.05] rounded-full blur-[100px] md:blur-[140px]" />

      {/* Grid overlay — hidden on mobile for perf */}
      <div
        className="absolute inset-0 opacity-[0.025] hidden md:block"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal accent — desktop only */}
      <div className="absolute top-0 left-[55%] w-[1px] h-full bg-gradient-to-b from-transparent via-amber/20 to-transparent z-[1] hidden md:block" style={{ transform: "skewX(-8deg)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-12 md:py-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

          {/* ─── LEFT: Copy ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUpSm} className="inline-flex items-center gap-2 mb-5 md:mb-8">
              <span className="w-2 h-2 bg-red rounded-full pulse-dot flex-shrink-0" />
              <p className="text-amber-light text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.3em] uppercase font-syne font-bold">
                Staten Island&apos;s Trusted Electricians
              </p>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="font-syne font-extrabold text-brand-white tracking-tight leading-[1.0] uppercase">
                <span className="block text-[clamp(2.2rem,9vw,5.5rem)]">Power</span>
                <span className="block text-amber relative text-[clamp(2.2rem,9vw,5.5rem)]">
                  <span className="relative inline-block">
                    &amp; Electricity
                    <svg className="absolute -bottom-1.5 md:-bottom-4 left-0 w-full overflow-visible" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                      <path
                        ref={pathRef}
                        d="M2 10C48 3 92 2 148 6C204 10 250 4 298 10"
                        stroke="var(--amber)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: pathLength,
                          strokeDashoffset: drawLine ? 0 : pathLength,
                          transition: drawLine ? "stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
                        }}
                      />
                    </svg>
                  </span>
                </span>
                <span className="block text-brand-white/35 text-[clamp(1.6rem,5.5vw,3.8rem)]">Done Right.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUpSm}
              transition={{ delay: 0.15 }}
              className="mt-5 md:mt-8 text-sm md:text-lg text-brand-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed font-source"
            >
              35 years of experience. Available 24/7. Serving Staten Island,
              Brooklyn, Manhattan, Queens & the Bronx.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUpSm}
              transition={{ delay: 0.25 }}
              className="mt-5 md:mt-8 flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <a
                href="tel:7182272008"
                className="btn-premium inline-flex items-center gap-2.5 bg-red hover:bg-red-dark text-brand-white font-syne font-bold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 uppercase tracking-wider shadow-lg shadow-red/20 w-full sm:w-auto justify-center"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (718) 227-2008
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-brand-white/50 hover:text-brand-white font-syne font-semibold text-sm uppercase tracking-wider transition-colors duration-200 min-h-[44px]"
              >
                Our Services
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              variants={fadeUpSm}
              transition={{ delay: 0.35 }}
              className="mt-6 md:mt-10 flex flex-wrap items-center gap-2 justify-center lg:justify-start"
            >
              {[
                { stars: true, text: "4.5 Google" },
                { dot: true, text: "Open 24/7" },
                { text: "📍 Staten Island" },
              ].map((chip) => (
                <div key={chip.text} className="flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] px-2.5 md:px-3.5 py-1.5 md:py-2">
                  {chip.stars && <span className="text-amber text-[10px] md:text-xs">★★★★★</span>}
                  {chip.dot && <span className="w-1.5 h-1.5 bg-red rounded-full pulse-dot" />}
                  <span className="text-brand-white/50 text-[9px] md:text-[11px] font-source font-semibold">{chip.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Stats panel — desktop only ─── */}
          <motion.div
            variants={scaleIn}
            transition={{ delay: 0.3 }}
            className="hidden lg:block w-full max-w-sm"
          >
            <div className="relative">
              <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] p-8">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-5 h-5">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-amber/50" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-amber/50" />
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-amber/50" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-amber/50" />
                </div>

                <p className="text-amber-light text-[10px] tracking-[0.3em] uppercase font-syne font-bold mb-6">
                  Why Reliable Electric
                </p>

                <div className="space-y-6">
                  {[
                    { icon: "clock", value: "24/7", label: "Emergency Service", color: "red" },
                    { icon: "location", value: "5", label: "NYC Boroughs Served", color: "amber" },
                    { icon: "badge", value: "35+", label: "Years in Business", color: "red" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      {stat.value !== "35+" && <div className="h-[1px] bg-white/[0.06] mb-6" />}
                      <div className="flex items-center gap-4 group">
                        <div className={`w-12 h-12 ${stat.color === "red" ? "bg-red/10 border-red/15" : "bg-amber/10 border-amber/15"} border flex items-center justify-center flex-shrink-0`}>
                          <svg className={`w-5 h-5 ${stat.color === "red" ? "text-red" : "text-amber"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {stat.icon === "clock" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            {stat.icon === "location" && <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>}
                            {stat.icon === "badge" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                          </svg>
                        </div>
                        <div>
                          <p className="font-syne font-extrabold text-2xl text-brand-white leading-none">{stat.value}</p>
                          <p className="text-brand-white/35 text-xs font-source mt-1 tracking-wide">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-red text-brand-white font-syne font-bold text-xs uppercase tracking-widest px-4 py-2 shadow-lg shadow-red/25 animate-float z-10">
                Full Service
              </div>
              <div className="absolute -top-3 -right-3 bg-amber text-black font-syne font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 shadow-lg shadow-amber/15 animate-float z-10" style={{ animationDelay: "1.5s" }}>
                Bucket Trucks
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-10"
        aria-label="Scroll to services"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-brand-white/20 text-[9px] uppercase tracking-[0.2em] font-syne font-bold">Scroll</span>
          <div className="w-4 h-7 border border-white/15 rounded-full flex items-start justify-center p-1">
            <span className="w-0.5 h-1.5 bg-amber/60 rounded-full animate-bounce" />
          </div>
        </div>
      </motion.a>
    </section>
  );
}

export default memo(Hero);
