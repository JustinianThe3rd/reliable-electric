export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: ServiceData[] = [
  {
    slug: "panel-replacement",
    title: "Panel Replacement",
    description:
      "Full electrical panel upgrades and replacements for homes and businesses. From 100A to 200A+ service upgrades — done safely and up to code.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    features: ["100A to 200A upgrades", "Federal Pacific / Zinsco replacement", "Permit & inspection included"],
  },
  {
    slug: "outlet-repair",
    title: "Outlet Repair",
    description:
      "Expert outlet repair, replacement, and installation. GFCI, AFCI, USB outlets, and 240V outlets for appliances — indoor and outdoor.",
    icon: "M12 2v6m0 0a4 4 0 100 8 4 4 0 000-8z",
    features: ["GFCI / AFCI outlets", "USB outlet installation", "240V appliance outlets"],
  },
  {
    slug: "wiring-rewiring",
    title: "Wiring & Rewiring",
    description:
      "Complete home rewiring, new construction wiring, and circuit additions. Knob & tube replacement, aluminum-to-copper upgrades.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    features: ["Whole-house rewiring", "Knob & tube replacement", "New construction wiring"],
  },
  {
    slug: "outdoor-wiring",
    title: "Outdoor Wiring",
    description:
      "Specialized outdoor wiring for pools, hot tubs, landscape lighting, and exterior outlets. Weatherproof installations that last.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    features: ["Pool & hot tub wiring", "Landscape lighting", "Exterior outlets"],
  },
  {
    slug: "service-upgrades",
    title: "Service Upgrades",
    description:
      "Electrical service upgrades for growing homes and businesses. Main breaker upgrades, sub-panels, and load calculations.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    features: ["Main breaker upgrades", "Sub-panel installation", "Load calculations"],
  },
  {
    slug: "lighting",
    title: "Lighting Installation",
    description:
      "Interior and exterior lighting installation. Recessed lighting, chandeliers, LED upgrades, smart lighting, and security lighting.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    features: ["Recessed & LED lighting", "Smart lighting systems", "Security lighting"],
  },
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    description:
      "Full-service commercial and industrial electrical contracting. Retail buildouts, office fit-outs, warehouse lighting, and three-phase power.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    features: ["Retail buildouts", "Three-phase power", "Warehouse lighting"],
  },
  {
    slug: "bucket-truck",
    title: "Bucket Truck Services",
    description:
      "Professional bucket truck services for overhead electrical work, signage installation, tree trimming near power lines, and exterior building maintenance.",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    features: ["Overhead electrical", "Signage installation", "Line clearance work"],
  },
];
