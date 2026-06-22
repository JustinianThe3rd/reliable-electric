"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black pt-16 pb-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand — spans 4 cols */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-red flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <span className="font-syne font-extrabold text-sm text-brand-white tracking-tight">RELIABLE</span>
                <span className="text-amber-light text-[9px] tracking-[0.2em] uppercase font-syne font-bold ml-2">Electric of NYC</span>
              </div>
            </div>
            <p className="text-brand-white/35 text-sm leading-relaxed font-source max-w-xs">
              Full-service electrical contracting serving Staten Island and all
              of NYC. Residential, commercial & industrial. Licensed, insured,
              and available 24/7.
            </p>
          </div>

          {/* Contact — spans 3 cols */}
          <div className="md:col-span-3">
            <h4 className="font-syne font-bold text-xs text-brand-white mb-5 tracking-[0.15em] uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="tel:7182272008" className="flex items-center gap-3 text-brand-white/45 hover:text-brand-white transition-colors text-sm font-source group">
                <span className="w-8 h-8 bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-red/10 group-hover:border-red/20 transition-colors">
                  <svg className="w-3.5 h-3.5 text-red-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                (718) 227-2008
              </a>
              <a href="mailto:Rob@reliableelectricofnyc.com" className="flex items-center gap-3 text-brand-white/45 hover:text-brand-white transition-colors text-sm font-source group">
                <span className="w-8 h-8 bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-amber/10 group-hover:border-amber/20 transition-colors">
                  <svg className="w-3.5 h-3.5 text-amber-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Rob@reliableelectricofnyc.com
              </a>
              <div className="flex items-center gap-3 text-brand-white/45 text-sm font-source">
                <span className="w-8 h-8 bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-amber-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                690 Gulf Avenue, Staten Island, NY 10314
              </div>
              <div className="flex items-center gap-3 text-brand-white/45 text-sm font-source">
                <span className="w-8 h-8 bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <span className="w-2 h-2 bg-red rounded-full pulse-dot" />
                </span>
                Open 24 Hours — 7 Days a Week
              </div>
            </div>
          </div>

          {/* Service Area — spans 5 cols */}
          <div className="md:col-span-5">
            <h4 className="font-syne font-bold text-xs text-brand-white mb-5 tracking-[0.15em] uppercase">
              Service Area
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Staten Island", "Brooklyn", "Manhattan", "Queens", "Bronx", "New Jersey"].map(
                (area) => (
                  <span
                    key={area}
                    className="text-[11px] font-source font-semibold text-brand-white/35 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1.5 hover:text-amber-light hover:border-amber/20 transition-colors cursor-default"
                  >
                    {area}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/20 text-xs font-source">
            © {new Date().getFullYear()} Reliable Electric of NYC, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-brand-white/10 text-xs font-source">Serving all of NYC 24/7</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
