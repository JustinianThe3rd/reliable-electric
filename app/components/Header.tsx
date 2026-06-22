"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled || mobileOpen
          ? "bg-white/95 header-glass shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-red flex items-center justify-center group-hover:bg-red-dark transition-colors duration-300">
                <svg className="w-5 h-5 text-brand-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-syne font-extrabold text-base leading-none tracking-tight transition-colors ${
                  scrolled || mobileOpen ? "text-black" : "text-brand-white"
                }`}
              >
                RELIABLE
              </span>
              <span
                className={`text-[9px] leading-none tracking-[0.2em] uppercase font-semibold transition-colors ${
                  scrolled || mobileOpen ? "text-red" : "text-amber-light"
                }`}
              >
                Electric of NYC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className={`relative text-[13px] font-source font-semibold uppercase tracking-wider px-4 py-2 transition-colors duration-200 ${
                    scrolled || mobileOpen
                      ? "text-slate hover:text-black"
                      : "text-brand-white/70 hover:text-brand-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-amber scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:7182272008"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="btn-premium ml-3 bg-red hover:bg-red-dark text-brand-white font-syne font-bold text-sm px-6 py-2.5 uppercase tracking-wide"
            >
              (718) 227-2008
            </motion.a>
          </nav>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:7182272008"
              className={`font-syne font-bold text-sm transition-colors ${
                scrolled || mobileOpen ? "text-black" : "text-brand-white"
              }`}
            >
              (718) 227-2008
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 -mr-1 transition-colors duration-200 ${
                scrolled || mobileOpen
                  ? "text-black hover:bg-cream"
                  : "text-brand-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white border-t border-gray-lightest">
              <div className="max-w-6xl mx-auto px-4 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-slate font-syne font-semibold text-sm uppercase tracking-wider px-4 py-3.5 hover:text-black hover:bg-cream transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 bg-amber rounded-full" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-3 pb-1 px-1">
                  <a
                    href="tel:7182272008"
                    className="btn-premium block bg-red hover:bg-red-dark text-brand-white font-syne font-bold text-sm px-5 py-3.5 text-center uppercase tracking-wide"
                  >
                    Call Now — (718) 227-2008
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
