"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Rob and his crew are Top Notch, a true Gentleman and a man of his word. He replaced my circuit breaker panels, upgraded my wiring throughout my house, done the wiring for my ductless air conditioning, added Ring cameras. Simply the BEST",
    author: "Thomas Gerrish",
    initials: "TG",
  },
  {
    text: "We have used Reliable Electric on multiple occasions. On a remodel, our pool and garage after that, and finally on a sub panel with new lights and outlets. Rob is a true professional — no job too big or too small.",
    author: "Frank Casiano",
    initials: "FC",
  },
  {
    text: "Rob and his crew installed outdoor outlets for my backyard/pool area. When one wasn't working, Rob sent Brett out who replaced it and made sure everything was perfect. Great service.",
    author: "Katie Tan",
    initials: "KT",
  },
];

function ReviewCard({ text, author, initials }: { text: string; author: string; initials: string }) {
  return (
    <div className="bg-white w-72 md:w-80 flex-shrink-0 border border-gray-lightest p-5 md:p-6 relative group hover:border-red/20 transition-colors duration-200">
      <div className="absolute top-4 right-4 font-syne font-extrabold text-4xl text-red/[0.06] leading-none select-none">&ldquo;</div>

      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-xs md:text-sm text-gray leading-relaxed line-clamp-4 font-source relative z-10">{text}</p>

      <div className="mt-4 pt-3 border-t border-gray-lightest flex items-center gap-2.5">
        <div className="w-8 h-8 md:w-9 md:h-9 bg-red/10 border border-red/15 flex items-center justify-center flex-shrink-0">
          <span className="font-syne font-bold text-[10px] md:text-xs text-red">{initials}</span>
        </div>
        <p className="font-syne font-bold text-xs md:text-sm text-black">{author}</p>
      </div>
    </div>
  );
}

function ReviewsConveyor() {
  const duplicated = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-cream py-16 md:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 md:mb-14 text-center"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="accent-line" />
          <p className="text-red text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-syne font-bold">
            Testimonials
          </p>
          <span className="accent-line" />
        </div>
        <h2 className="font-syne font-extrabold text-2xl md:text-4xl lg:text-5xl text-black tracking-tight">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-gray max-w-lg mx-auto font-source text-sm md:text-lg">
          Hear from homeowners and businesses across Staten Island and all of NYC.
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex gap-3 md:gap-4 animate-conveyor w-max">
          {duplicated.map((review, i) => (
            <ReviewCard key={i} text={review.text} author={review.author} initials={review.initials} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ReviewsConveyor);
