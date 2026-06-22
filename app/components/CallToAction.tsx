"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background — diagonal split */}
      <div className="absolute inset-0 bg-gradient-to-br from-red via-red-dark to-black" />

      {/* Decorative diagonal line */}
      <div className="absolute top-0 right-[40%] w-[2px] h-full bg-white/[0.06]" style={{ transform: "skewX(-15deg)" }} />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber/[0.05] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-amber rounded-full pulse-dot" />
              <p className="text-amber-light text-xs tracking-[0.3em] uppercase font-syne font-bold">
                Available 24/7
              </p>
            </div>

            <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-white leading-[1.1] tracking-tight">
              Need Electrical
              <br />
              <span className="text-amber-light">Help?</span>
            </h2>

            <p className="mt-6 text-brand-white/60 text-lg max-w-md font-source leading-relaxed">
              Call Rob anytime, day or night. Serving Staten Island, Brooklyn,
              Manhattan, Queens, the Bronx & all of NYC.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="tel:7182272008"
                className="btn-premium inline-flex items-center gap-3 bg-black hover:bg-black-light text-brand-white font-syne font-bold text-lg md:text-xl px-8 py-4 uppercase tracking-wide shadow-xl shadow-black/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (718) 227-2008
              </a>
              <a
                href="mailto:Rob@reliableelectricofnyc.com"
                className="text-brand-white/50 hover:text-brand-white font-syne font-semibold text-sm uppercase tracking-wider transition-colors duration-300"
              >
                Rob@reliableelectricofnyc.com
              </a>
            </div>
          </motion.div>

          {/* Right: Quick info card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full max-w-xs"
          >
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red/15 border border-red/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-syne font-bold text-brand-white text-sm">24/7 Emergency</p>
                  <p className="text-brand-white/40 text-xs font-source">No overtime charges</p>
                </div>
              </div>
              <div className="h-[1px] bg-white/[0.06]" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber/15 border border-amber/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-syne font-bold text-brand-white text-sm">All 5 Boroughs</p>
                  <p className="text-brand-white/40 text-xs font-source">Staten Island & all of NYC</p>
                </div>
              </div>
              <div className="h-[1px] bg-white/[0.06]" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red/15 border border-red/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-syne font-bold text-brand-white text-sm">35+ Years</p>
                  <p className="text-brand-white/40 text-xs font-source">Licensed & insured</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
