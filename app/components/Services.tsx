"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "../services/data";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32 relative">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="accent-line" />
            <p className="text-red text-xs tracking-[0.3em] uppercase font-syne font-bold">
              What We Do
            </p>
            <span className="accent-line" />
          </div>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
            Full-Service Electrical Contracting
          </h2>
          <p className="mt-5 text-gray max-w-2xl mx-auto leading-relaxed font-source text-lg">
            Residential, commercial, and industrial — from panel replacements
            to outdoor pool wiring, Rob and his crew handle it all with
            35 years of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.08,
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="card-premium group bg-white border border-gray-lightest hover:border-red/30 block relative overflow-hidden"
              >
                {/* Number badge */}
                <div className="absolute top-0 right-0 w-14 h-14 flex items-center justify-center">
                  <span className="font-syne font-extrabold text-[11px] text-gray-lighter group-hover:text-red transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-8">
                  <div className="flex items-start gap-5">
                    {/* Icon container */}
                    <div className="w-14 h-14 bg-light-red border border-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red/10 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-red group-hover:text-red-dark transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={service.icon}
                        />
                      </svg>
                    </div>
                    <div className="flex-1 pr-8">
                      <h3 className="font-syne font-bold text-xl text-black mb-2 group-hover:text-red transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray leading-relaxed font-source">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom CTA bar */}
                  <div className="mt-6 pt-5 border-t border-gray-lightest flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-syne font-bold text-sm text-red group-hover:text-red-dark transition-colors">
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="flex gap-1.5">
                      {service.features.slice(0, 2).map((f) => (
                        <span key={f} className="hidden sm:inline-block text-[10px] font-source font-semibold text-gray-light bg-cream px-2 py-1">
                          {f.split(" ")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
