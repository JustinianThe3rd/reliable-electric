"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Rob and his crew are Top Notch, a true Gentleman and a man of his word. He replaced my circuit breaker panels, upgraded my wiring throughout my house, done the wiring for my ductless air conditioning, added Ring cameras. I cannot thank him enough for the great job. Simply the BEST",
    author: "Thomas Gerrish",
    location: "Staten Island, NY",
    initials: "TG",
  },
  {
    text: "We have used Reliable Electric on multiple occasions. On a remodel a few years ago, our pool and garage after that and finally on the installation of a sub panel with new lights and outlets recently. Rob is a true professional. There's no job too big or too small — they do it all and do it right.",
    author: "Frank Casiano",
    location: "Staten Island, NY",
    initials: "FC",
  },
  {
    text: "I had Rob and his crew install some outdoor outlets for my backyard/pool area last summer. They were great during the installation and this year, when one of the outlets was not working, Rob sent Brett out who replaced the outlet, replaced the cover and made sure everything was working perfectly.",
    author: "Katie Tan",
    location: "Staten Island, NY",
    initials: "KT",
  },
];

function ReviewCard({ text, author, location, initials }: { text: string; author: string; location: string; initials: string }) {
  return (
    <div className="bg-white w-80 flex-shrink-0 border border-gray-lightest p-7 relative group hover:border-red/20 transition-colors duration-300">
      {/* Large quote mark */}
      <div className="absolute top-6 right-6 font-syne font-extrabold text-5xl text-red/[0.07] leading-none select-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm text-gray leading-relaxed line-clamp-4 font-source relative z-10">
        {text}
      </p>

      {/* Author */}
      <div className="mt-6 pt-5 border-t border-gray-lightest flex items-center gap-3">
        <div className="w-10 h-10 bg-red/10 border border-red/15 flex items-center justify-center flex-shrink-0">
          <span className="font-syne font-bold text-xs text-red">{initials}</span>
        </div>
        <div>
          <p className="font-syne font-bold text-sm text-black">{author}</p>
          <p className="text-xs text-gray-light font-source">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsConveyor() {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-cream py-24 md:py-32 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-4 mb-16 text-center"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="accent-line" />
          <p className="text-red text-xs tracking-[0.3em] uppercase font-syne font-bold">
            Testimonials
          </p>
          <span className="accent-line" />
        </div>
        <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">
          What Our Customers Say
        </h2>
        <p className="mt-5 text-gray max-w-lg mx-auto font-source text-lg">
          Don&apos;t just take our word for it — hear from homeowners and
          businesses across Staten Island and all of NYC.
        </p>
      </motion.div>

      {/* Conveyor belt — pauses on hover */}
      <div className="relative">
        <div className="flex gap-5 animate-conveyor w-max">
          {duplicatedReviews.map((review, i) => (
            <ReviewCard
              key={i}
              text={review.text}
              author={review.author}
              location={review.location}
              initials={review.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
