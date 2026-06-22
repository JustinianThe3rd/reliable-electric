"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [drawLine, setDrawLine] = useState<boolean>(false);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState<number>(600);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
    }
    const timer = setTimeout(() => setDrawLine(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden noise-overlay">
      {/* Layered background */}
      <div className="absolute inset-0 hero-pattern" />

      {/* Red radial glow — bottom left */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-red/[0.08] rounded-full blur-[120px]" />

      {/* Amber radial glow — top right */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-amber/[0.06] rounded-full blur-[140px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 left-[55%] w-[1px] h-full bg-gradient-to-b from-transparent via-amber/25 to-transparent z-[1]"
        style={{ transform: "skewX(-8deg)" }}
      />

      {/* Thin horizontal line */}
      <div className="hidden md:block absolute top-[42%] right-0 w-[15%] h-[1px] bg-gradient-to-l from-red/30 to-transparent z-[1]" />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 md:py-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

          {/* ─── LEFT: All copy ─── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 md:mb-10"
            >
              <span className="w-2 h-2 bg-red rounded-full pulse-dot flex-shrink-0" />
              <p className="text-amber-light text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.35em] uppercase font-syne font-bold">
                Staten Island&apos;s Trusted Electricians
              </p>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            >
              <h1 className="font-syne font-extrabold text-brand-white tracking-tight leading-[0.95] uppercase">
                <span className="block" style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}>
                  Power
                </span>
                <span className="block text-amber relative" style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}>
                  <span className="relative inline-block">
                    &amp; Electricity
                    <svg
                      className="absolute -bottom-2 md:-bottom-5 left-0 w-full overflow-visible"
                      viewBox="0 0 300 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        ref={pathRef}
                        d="M2 10C48 3 92 2 148 6C204 10 250 4 298 10"
                        stroke="var(--amber)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: pathLength,
                          strokeDashoffset: drawLine ? 0 : pathLength,
                          transition: drawLine
                            ? "stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1)"
                            : "none",
                        }}
                      />
                    </svg>
                  </span>
                </span>
                <span className="block text-brand-white/40" style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}>
                  Done Right.
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="mt-6 md:mt-10 text-sm md:text-xl text-brand-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed font-source"
            >
              35 years of experience. Available 24/7. Serving all of Staten Island,
              Brooklyn, Manhattan, Queens & the Bronx — because electrical
              emergencies don&apos;t wait for business hours.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
              className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center gap-4 md:gap-5 justify-center lg:justify-start"
            >
              <a
                href="tel:7182272008"
                className="btn-premium inline-flex items-center gap-3 bg-red hover:bg-red-dark text-brand-white font-syne font-bold text-base md:text-lg px-6 md:px-9 py-4 md:py-5 uppercase tracking-wider shadow-xl shadow-red/20"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (718) 227-2008
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-brand-white/50 hover:text-brand-white font-syne font-semibold text-sm uppercase tracking-wider transition-colors duration-300"
              >
                Our Services
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className="mt-8 md:mt-14 flex flex-wrap items-center gap-2 md:gap-3 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] px-3 md:px-4 py-2 md:py-2.5">
                <span className="text-amber text-xs md:text-sm tracking-tight">★★★★★</span>
                <span className="text-brand-white/50 text-[10px] md:text-xs font-source font-semibold">4.5 Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] px-3 md:px-4 py-2 md:py-2.5">
                <span className="w-2 h-2 bg-red rounded-full pulse-dot" />
                <span className="text-brand-white/50 text-[10px] md:text-xs font-source font-semibold">Open 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] px-3 md:px-4 py-2 md:py-2.5">
                <span className="text-brand-white/50 text-[10px] md:text-xs font-source font-semibold">📍 Staten Island, NY</span>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Visual stats panel — hidden on mobile ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="hidden lg:block w-full max-w-sm"
          >
            <div className="relative">
              {/* Main panel */}
              <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] p-10">

                {/* Top-left corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-amber/50" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-amber/50" />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-amber/50" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-amber/50" />
                </div>

                {/* Section label */}
                <p className="text-amber-light text-[10px] tracking-[0.3em] uppercase font-syne font-bold mb-8">
                  Why Reliable Electric
                </p>

                <div className="space-y-8">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-red/10 border border-red/15 flex items-center justify-center flex-shrink-0 group-hover:bg-red/15 transition-colors duration-300">
                      <svg className="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-syne font-extrabold text-3xl text-brand-white leading-none">24/7</p>
                      <p className="text-brand-white/35 text-xs font-source mt-1.5 tracking-wide">Emergency Service</p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/[0.06]" />

                  {/* Stat 2 */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-amber/10 border border-amber/15 flex items-center justify-center flex-shrink-0 group-hover:bg-amber/15 transition-colors duration-300">
                      <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-syne font-extrabold text-3xl text-brand-white leading-none">5</p>
                      <p className="text-brand-white/35 text-xs font-source mt-1.5 tracking-wide">NYC Boroughs Served</p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/[0.06]" />

                  {/* Stat 3 */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-red/10 border border-red/15 flex items-center justify-center flex-shrink-0 group-hover:bg-red/15 transition-colors duration-300">
                      <svg className="w-6 h-6 text-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-syne font-extrabold text-3xl text-brand-white leading-none">35+</p>
                      <p className="text-brand-white/35 text-xs font-source mt-1.5 tracking-wide">Years in Business</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-5 -left-5 bg-red text-brand-white font-syne font-bold text-xs uppercase tracking-widest px-5 py-2.5 shadow-xl shadow-red/30 animate-float z-10">
                Full Service
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-4 -right-4 bg-amber text-black font-syne font-bold text-[10px] uppercase tracking-widest px-4 py-2 shadow-xl shadow-amber/20 animate-float z-10" style={{ animationDelay: "1.5s" }}>
                Bucket Trucks
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-label="Scroll to services"
      >
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <span className="text-brand-white/20 text-[10px] uppercase tracking-[0.25em] font-syne font-bold group-hover:text-brand-white/40 transition-colors">Scroll</span>
          <div className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center p-1.5">
            <span className="w-1 h-2 bg-amber/60 rounded-full animate-bounce" />
          </div>
        </div>
      </motion.a>
    </section>
  );
}
