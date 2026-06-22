"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const trustItems = [
  { label: "4.5★ GOOGLE", icon: "star" },
  { label: "OPEN 24/7", icon: "clock" },
  { label: "STATEN ISLAND", icon: "location" },
  { label: "35+ YEARS", icon: "badge" },
];

const icons: Record<string, string> = {
  star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  location: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  badge: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border-b border-gray-lightest sticky top-16 md:top-20 z-40"
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 md:py-3">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2 md:gap-3">
              {i > 0 && <span className="hidden md:block text-gray-lightest">|</span>}
              <span className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.15em] text-gray font-syne font-bold uppercase">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[item.icon]} />
                </svg>
                {item.label}
              </span>
            </div>
          ))}
          <a href="tel:7182272008" className="text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.15em] text-amber-dark font-syne font-bold uppercase hover:text-amber transition-colors">
            (718) 227-2008
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(TrustBar);
