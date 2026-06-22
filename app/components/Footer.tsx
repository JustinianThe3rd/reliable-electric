"use client";

import { memo } from "react";

const footerLinks = {
  services: [
    "Panel Replacement",
    "Outlet Repair",
    "Wiring & Rewiring",
    "Outdoor Wiring",
    "Service Upgrades",
    "Lighting Installation",
    "Commercial & Industrial",
    "Bucket Truck Services",
  ],
  boroughs: [
    "Staten Island",
    "Brooklyn",
    "Manhattan",
    "Queens",
    "Bronx",
  ],
};

const socialLinks = [
  { label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "Google", icon: "M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.465 21.3 7.495 24 12.255 24z M5.525 14.29c-.25-.72-.39-1.49-.39-2.29s.14-1.57.39-2.29V6.62h-3.98a11.96 11.96 0 000 10.76l3.98-3.09z M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.445 0 12.255 0 7.495 0 3.465 2.7 1.445 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.83-4.96z" },
];

function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-gray-lightest">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#" className="inline-block mb-4">
              <h3 className="font-syne font-extrabold text-lg md:text-xl text-black uppercase tracking-tight">
                Reliable Electric <span className="text-red">of NYC</span>
              </h3>
            </a>
            <p className="text-xs md:text-sm text-gray leading-relaxed font-source max-w-xs">
              Serving Staten Island and all of NYC with professional electrical
              contracting since 1989. Residential, commercial & industrial.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <a
                href="tel:7182272008"
                className="inline-flex items-center gap-1.5 text-red font-syne font-bold text-sm hover:text-red-dark transition-colors duration-150"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (718) 227-2008
              </a>
            </div>
            <a href="mailto:Rob@reliableelectricofnyc.com" className="inline-block mt-1.5 text-xs text-gray hover:text-red transition-colors duration-150 font-source">
              Rob@reliableelectricofnyc.com
            </a>
            <p className="text-xs text-gray-light font-source mt-1.5">
              690 Gulf Avenue, Staten Island, NY 10314
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-4 md:pl-4">
            <h4 className="font-syne font-bold text-xs text-black uppercase tracking-[0.15em] mb-4">
              Our Services
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-xs text-gray hover:text-red transition-colors duration-150 font-source leading-relaxed">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div className="md:col-span-4">
            <h4 className="font-syne font-bold text-xs text-black uppercase tracking-[0.15em] mb-4">
              Service Area
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {footerLinks.boroughs.map((b) => (
                <span key={b} className="text-[10px] md:text-xs font-source font-semibold text-gray bg-cream border border-gray-lightest px-2.5 py-1">
                  {b}
                </span>
              ))}
            </div>

            <h4 className="font-syne font-bold text-xs text-black uppercase tracking-[0.15em] mb-3">
              Follow Us
            </h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 md:w-9 md:h-9 bg-cream border border-gray-lightest flex items-center justify-center hover:bg-red/5 hover:border-red/20 transition-all duration-150"
                >
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-lightest">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] md:text-xs text-gray-light font-source text-center sm:text-left">
            © {new Date().getFullYear()} Reliable Electric of NYC, Inc. All rights reserved.
          </p>
          <p className="text-[10px] md:text-xs text-gray-light font-source">
            Licensed & Insured Electrical Contractor — Staten Island, NY
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
