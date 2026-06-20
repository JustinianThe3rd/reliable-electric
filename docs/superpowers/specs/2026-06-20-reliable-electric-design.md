# Reliable Electric of NYC — Website Design Spec

**Date:** 2026-06-20  
**Status:** Approved

---

## Overview

A premium single-page website for Reliable Electric of NYC, modeled after the Kymer Heating & Air Conditioning site structure (kymerheating). The site uses a **red and black lightning theme** — replacing Kymer's green/copper palette with electric reds, amber/yellows, and deep blacks.

---

## Business Information

- **Name:** Reliable Electric of NYC, Inc.
- **Phone:** (718) 227-2008
- **Email:** Rob@reliableelectricofnyc.com
- **Address:** 690 Gulf Avenue, Staten Island, NY 10314
- **Website:** reliableelectricofnyc.com
- **Annual Revenue:** $3.9M
- **In Business:** 35 years
- **Services:** Full-service electrical contracting — bucket trucks, commercial, residential, industrial, outdoor wiring for pools/hot tubs, service upgrades, anything electrical
- **Hours:** Open 24/7, every day
- **Rating:** 4.5 stars (22 Google reviews)

---

## Site Structure

Single-page with sections:
1. Header (sticky nav)
2. Hero (dark, bold, with stats panel)
3. Trust Bar (sticky)
4. Services (card grid)
5. Gallery (horizontal conveyor)
6. Reviews Conveyor (testimonials)
7. Call to Action (dark gradient)
8. Footer

---

## Theme & Design System

### Colors
| Role | Hex | Usage |
|------|-----|-------|
| **Red (Primary)** | `#DC2626` | Brand color, CTAs, accents, icons |
| **Red Dark** | `#B91C1C` | Hover states |
| **Red Light** | `#EF4444` | Lighter accents |
| **Red Subtle** | `#FEE2E2` | Light backgrounds |
| **Amber (Lightning)** | `#F59E0B` | Accent, stars, highlights |
| **Amber Light** | `#FBBF24` | Glows, badges |
| **Amber Dark** | `#D97706` | Hover states |
| **Black** | `#0A0A0A` | Dark backgrounds |
| **Black Light** | `#141414` | Secondary dark |
| **Black Mid** | `#1F1F1F` | Tertiary dark |
| **White** | `#FAFAF9` | Text on dark, light backgrounds |
| **Cream** | `#F5F5F5` | Section backgrounds |
| **Gray** | `#6B7280` | Body text |
| **Gray Light** | `#9CA3AF` | Secondary text |
| **Gray Lighter** | `#D1D5DB` | Borders |

### Fonts
- **Headings:** Syne (400, 500, 600, 700, 800) — `--font-syne`
- **Body:** Source Sans 3 (300, 400, 500, 600, 700) — `--font-source`

### Visual Motifs
- **Lightning bolt** as logo mark and recurring accent
- **Electric glow effects** — radial red/amber glows on dark backgrounds
- **Circuit-style grid overlay** — subtle geometric pattern on hero
- **Diagonal accent lines** — red/amber gradients

---

## Section-by-Section Spec

### 1. Header
- Fixed, transparent on top → white/glass on scroll
- Logo: Lightning bolt icon in red box + "RELIABLE" / "Electric of NYC" text
- Nav links: Services, Gallery, Reviews, Contact
- Phone CTA button: red background
- Mobile: hamburger menu with dropdown

### 2. Hero
- Full viewport height, dark background (`#0A0A0A` → `#141414` gradient)
- Radial red glow bottom-left, radial amber glow top-right
- Subtle grid overlay
- Left side:
  - Eyebrow badge: pulsing red dot + "Staten Island's Trusted Electricians"
  - Headline: "Power" / "& Electricity" (amber accent) / "Done Right." (faded)
  - Subheadline about 35 years, 24/7, full-service
  - CTA: Red phone button + "Our Services" link
  - Trust chips: 4.5★ Google, Open 24/7, Staten Island, NY
- Right side: Stats panel with corner brackets
  - 24/7 Emergency Service
  - 35+ Years in Business
  - $3.9M Annual Revenue
  - Floating badges: "Full Service", "Bucket Trucks"
- Scroll indicator at bottom

### 3. Trust Bar
- Sticky below header, white background
- Items: 4.5★ Google, OPEN 24/7, STATEN ISLAND, 35+ YEARS
- Phone number in amber

### 4. Services
- Cream background
- Section header: "What We Do" / "Full-Service Electrical Contracting"
- 2-column grid of service cards:
  1. Panel Replacement
  2. Outlet Repair
  3. Wiring & Rewiring
  4. Outdoor Wiring (Pools & Hot Tubs)
  5. Service Upgrades
  6. Lighting Installation
  7. Commercial & Industrial
  8. Bucket Truck Services
- Each card: number badge, icon, title, description, feature tags, "Learn More" link

### 5. Gallery
- White background
- Horizontal conveyor of project cards
- Placeholder images with labels (Panel Upgrade, Outdoor Wiring, Pool Installation, etc.)
- Hover overlay with project info
- Red accent line on hover

### 6. Reviews Conveyor
- Cream background
- 3 Google reviews (Thomas Gerrish, Frank Casiano, Katie Tan)
- Horizontal scrolling conveyor, pauses on hover
- Quote cards with stars, text, author initials

### 7. Call to Action
- Dark gradient background (red → black)
- "Need Electrical Help?" headline
- Phone CTA button
- Info card: 24/7 Emergency, Staten Island, 35+ Years

### 8. Footer
- Black background
- Brand column with logo and description
- Contact column: phone, email, address, hours
- Service Area column: Staten Island, Brooklyn, Manhattan, Queens, Bronx, NJ
- Bottom bar: copyright, social links

---

## Technical Spec

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 with custom CSS variables
- **Fonts:** Google Fonts via `next/font/google`
- **Deployment:** Vercel-ready
- **Responsive:** Mobile-first, breakpoints at md (768px), lg (1024px)
- **Animations:** CSS keyframes + IntersectionObserver for scroll reveals
- **SEO:** Meta tags, Open Graph, JSON-LD schema (ElectricalBusiness)

---

## Key Differences from Kymer

| Element | Kymer (HVAC) | Reliable Electric |
|---------|-------------|-------------------|
| Brand Color | Green `#1B8C4E` | Red `#DC2626` |
| Accent Color | Copper `#C87941` | Amber `#F59E0B` |
| Logo Mark | House icon | Lightning bolt |
| Industry | HVAC (heating/cooling) | Electrical |
| Location | Vernon, NJ | Staten Island, NY |
| Experience | 7+ years | 35 years |
| Stats | 15+ towns, 4.0★ | 22 reviews, 4.5★ |
