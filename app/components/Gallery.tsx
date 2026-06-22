"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  { alt: "Panel upgrade", label: "Panel Replacement", location: "Staten Island", size: "large" },
  { alt: "Pool wiring", label: "Outdoor Wiring", location: "Staten Island", size: "small" },
  { alt: "Commercial work", label: "Commercial", location: "Brooklyn", size: "small" },
  { alt: "Service upgrade", label: "Service Upgrade", location: "Staten Island", size: "large" },
  { alt: "Hot tub wiring", label: "Hot Tub Wiring", location: "Staten Island", size: "small" },
  { alt: "Lighting install", label: "Lighting", location: "Manhattan", size: "small" },
  { alt: "Bucket truck work", label: "Bucket Truck", location: "Queens", size: "large" },
  { alt: "Outlet install", label: "Outlet Repair", location: "Bronx", size: "small" },
];

function GalleryCard({ alt, label, location, size }: { alt: string; label: string; location: string; size: string }) {
  const isLarge = size === "large";
  return (
    <div className={`flex-shrink-0 group ${isLarge ? "w-64 md:w-72" : "w-48 md:w-56"}`}>
      <div className={`relative overflow-hidden bg-white border border-gray-lightest ${isLarge ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
          <div className="text-center p-3">
            <div className="w-10 h-10 bg-red/8 flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-red/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray text-[10px] md:text-xs font-source font-medium">{alt}</p>
          </div>
        </div>
        {/* Hover overlay — desktop only */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 hidden md:flex items-end">
          <div className="p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="font-syne font-bold text-brand-white text-sm">{label}</p>
            <p className="text-brand-white/60 text-xs font-source mt-0.5">{location}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-red transition-all duration-400" />
      </div>
    </div>
  );
}

function Gallery() {
  const duplicated = [...galleryItems, ...galleryItems];

  return (
    <section id="gallery" className="bg-white py-16 md:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-14"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="accent-line" />
              <p className="text-red text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-syne font-bold">
                Our Work
              </p>
            </div>
            <h2 className="font-syne font-extrabold text-2xl md:text-4xl text-black tracking-tight">
              NYC Electrical Projects
            </h2>
          </div>
          <p className="text-gray max-w-md leading-relaxed font-source text-sm md:text-base">
            Recent work across Staten Island, Brooklyn, Manhattan, Queens & the Bronx.
          </p>
        </div>
      </motion.div>

      <div className="relative">
        <div className="flex gap-3 md:gap-4 animate-gallery-conveyor w-max">
          {duplicated.map((item, i) => (
            <GalleryCard key={i} alt={item.alt} label={item.label} location={item.location} size={item.size} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Gallery);
