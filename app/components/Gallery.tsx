"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { alt: "Panel upgrade in Staten Island", label: "Panel Replacement", location: "Staten Island, NY", size: "large" },
  { alt: "Pool wiring installation", label: "Outdoor Wiring", location: "Staten Island, NY", size: "small" },
  { alt: "Commercial electrical work", label: "Commercial", location: "Brooklyn, NY", size: "small" },
  { alt: "Service upgrade project", label: "Service Upgrade", location: "Staten Island, NY", size: "large" },
  { alt: "Hot tub wiring installation", label: "Hot Tub Wiring", location: "Staten Island, NY", size: "small" },
  { alt: "Lighting installation", label: "Lighting", location: "Manhattan, NY", size: "small" },
  { alt: "Bucket truck overhead work", label: "Bucket Truck", location: "Queens, NY", size: "large" },
  { alt: "Outlet installation", label: "Outlet Repair", location: "Bronx, NY", size: "small" },
];

function GalleryCard({ alt, label, location, size }: { alt: string; label: string; location: string; size: string }) {
  const isLarge = size === "large";
  return (
    <div className={`flex-shrink-0 group ${isLarge ? "w-80" : "w-64"}`}>
      <div className={`relative overflow-hidden bg-white border border-gray-lightest ${isLarge ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
        {/* Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-red/8 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-red/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray text-xs font-source font-medium">{alt}</p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-end">
          <div className="p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <p className="font-syne font-bold text-brand-white text-sm">{label}</p>
            <p className="text-brand-white/60 text-xs font-source mt-1">{location}</p>
          </div>
        </div>

        {/* Red accent line on hover */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-red transition-all duration-500" />
      </div>
    </div>
  );
}

export default function Gallery() {
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section id="gallery" className="bg-white py-24 md:py-32 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="accent-line" />
              <p className="text-red text-xs tracking-[0.3em] uppercase font-syne font-bold">
                Our Work
              </p>
            </div>
            <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-black tracking-tight">
              NYC Electrical Projects
            </h2>
          </div>
          <p className="text-gray max-w-md leading-relaxed font-source">
            A look at recent electrical work across Staten Island, Brooklyn,
            Manhattan, Queens & the Bronx — residential, commercial & industrial.
          </p>
        </div>
      </motion.div>

      {/* Gallery conveyor */}
      <div className="relative">
        <div className="flex gap-5 animate-gallery-conveyor w-max">
          {duplicatedItems.map((item, i) => (
            <GalleryCard key={i} alt={item.alt} label={item.label} location={item.location} size={item.size} />
          ))}
        </div>
      </div>
    </section>
  );
}
