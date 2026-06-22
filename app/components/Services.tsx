"use client";

import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { services } from "../services/data";

const cubicEase = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: cubicEase } },
};

function Services() {
  return (
    <section id="services" className="bg-cream py-16 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, ease: cubicEase }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="accent-line" />
            <p className="text-red text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-syne font-bold">
              What We Do
            </p>
            <span className="accent-line" />
          </div>
          <h2 className="font-syne font-extrabold text-2xl md:text-4xl lg:text-5xl text-black tracking-tight">
            Full-Service Electrical Contracting
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto leading-relaxed font-source text-sm md:text-lg">
            Residential, commercial, and industrial — from panel replacements
            to outdoor pool wiring, Rob and his crew handle it all with
            35 years of expertise.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 reveal-stagger"
        >
          {services.map((service, idx) => (
            <motion.div key={service.slug} variants={item}>
              <Link
                href={`/services/${service.slug}`}
                className="card-premium group bg-white border border-gray-lightest hover:border-red/30 block relative overflow-hidden"
              >
                {/* Number badge */}
                <div className="absolute top-0 right-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <span className="font-syne font-extrabold text-[10px] md:text-[11px] text-gray-lighter group-hover:text-red transition-colors duration-200">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-5 md:p-7">
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Icon */}
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-light-red border border-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red/10 transition-colors duration-200">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0 pr-6 md:pr-8">
                      <h3 className="font-syne font-bold text-base md:text-lg text-black mb-1 group-hover:text-red transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray leading-relaxed font-source line-clamp-2 md:line-clamp-none">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="mt-4 pt-3 border-t border-gray-lightest flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-syne font-bold text-xs md:text-sm text-red group-hover:text-dark">
                      Learn More
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="flex gap-1">
                      {service.features.slice(0, 2).map((f) => (
                        <span key={f} className="hidden sm:inline-block text-[9px] md:text-[10px] font-source font-semibold text-gray-light bg-cream px-1.5 md:px-2 py-0.5 md:py-1">
                          {f.split(" ")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Services);
