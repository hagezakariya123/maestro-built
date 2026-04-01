export type HomeService = {
  kicker: string;
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  image: string;
};

export const homeServices: HomeService[] = [
  {
    kicker: "Residential",
    title: "Custom Homes",
    description: "Bespoke homes delivered with careful planning, precise detailing, and a strong finish standard.",
  },
  {
    kicker: "Transformation",
    title: "Renovations",
    description: "Considered upgrades that improve flow, material quality, and long-term value without compromising character.",
  },
  {
    kicker: "Expansion",
    title: "Extensions",
    description: "Integrated additions designed to feel resolved, practical, and consistent with the existing property.",
  },
  {
    kicker: "Commercial",
    title: "Commercial Construction",
    description: "Professional delivery for workplace, retail, and hospitality environments with clear coordination throughout.",
  },
  {
    kicker: "Oversight",
    title: "Project Management",
    description: "Structured programme oversight covering sequencing, trades, reporting, and site quality control.",
  },
  {
    kicker: "Refinement",
    title: "Interior & Exterior Upgrades",
    description: "Focused improvements that elevate performance, presentation, and the day-to-day experience of a space.",
  },
];

export const homeFeaturedProjects: Project[] = [
  {
    slug: "harbour-view-residence",
    title: "Harbour View Residence",
    type: "Custom Home",
    summary: "A calm, light-filled family home with refined joinery, restrained materiality, and carefully framed outdoor connections.",
    image: "/projects/project-01.svg",
  },
  {
    slug: "claremont-house-renovation",
    title: "Claremont House Renovation",
    type: "Renovation",
    summary: "A full internal reworking that improved circulation, storage, and natural light while preserving the home’s original character.",
    image: "/projects/project-02.svg",
  },
  {
    slug: "northbridge-studio-fitout",
    title: "Northbridge Studio Fit-Out",
    type: "Commercial Fit-Out",
    summary: "A compact commercial interior delivered with disciplined scheduling, custom detailing, and durable premium finishes.",
    image: "/projects/project-03.svg",
  },
];

export const allProjects: Project[] = [
  ...homeFeaturedProjects,
  {
    slug: "courtyard-extension",
    title: "Courtyard Extension",
    type: "Extension",
    summary: "A rear addition opening the home to a landscaped courtyard, with clean lines and understated internal detailing.",
    image: "/projects/project-04.svg",
  },
  {
    slug: "eastern-suburbs-office",
    title: "Eastern Suburbs Office",
    type: "Commercial",
    summary: "A boutique office build balancing quiet material selections, acoustic performance, and efficient programme delivery.",
    image: "/projects/project-05.svg",
  },
  {
    slug: "willow-lane-upgrade",
    title: "Willow Lane Upgrade",
    type: "Interiors",
    summary: "A whole-home upgrade focused on kitchen, bathrooms, and exterior interfaces for a cleaner, more durable result.",
    image: "/projects/project-06.svg",
  },
];

export const differentiators = [
  {
    title: "Quality workmanship",
    description: "We maintain disciplined site standards and a finish-first mindset to ensure built outcomes feel cohesive and resolved.",
  },
  {
    title: "Reliable delivery",
    description: "Programmes are managed with practical sequencing, dependable trade coordination, and realistic expectations from the outset.",
  },
  {
    title: "Detail-driven execution",
    description: "Critical junctions, material transitions, and finishing details are handled with the level of care premium projects require.",
  },
  {
    title: "Transparent communication",
    description: "Clients stay informed through clear updates, visible decision points, and straightforward discussion around scope and timing.",
  },
];

export const companyPrinciples = [
  {
    title: "Craftsmanship",
    description: "Every scope is approached with care for detail, finish quality, and enduring performance.",
  },
  {
    title: "Professionalism",
    description: "We run projects with discipline, reliable communication, and respect for programme and budget.",
  },
  {
    title: "Trust",
    description: "Clear expectations, consistent follow-through, and transparent reporting build confidence through the life of a project.",
  },
];

export const companyStats = [
  {
    value: "12+",
    label: "Years of Experience",
    note: "Premium residential and commercial delivery across new builds, upgrades, and fit-outs.",
  },
  {
    value: "90%",
    label: "Referral-Led Enquiries",
    note: "A placeholder metric reflecting the trust-based nature of the brand and client relationships.",
  },
  {
    value: "End-to-End",
    label: "Project Oversight",
    note: "From initial scope alignment through handover, with a measured and detail-conscious process.",
  },
];

export const detailedServices = [
  {
    kicker: "01",
    title: "New Builds",
    description: "Custom residential construction with a focus on strong planning, material quality, and finish execution from the ground up.",
    includes: ["Site preparation and staged delivery", "Consultant and trade coordination", "Premium finish management"],
  },
  {
    kicker: "02",
    title: "Renovations",
    description: "Whole-home and partial renovations that improve spatial flow, performance, and presentation while respecting the existing structure.",
    includes: ["Internal reconfiguration", "Kitchen and bathroom upgrades", "Structural and finish integration"],
  },
  {
    kicker: "03",
    title: "Extensions",
    description: "Designed additions that feel architecturally aligned with the original property and support better day-to-day living.",
    includes: ["Rear and upper-level additions", "Indoor-outdoor connection works", "Facade and junction refinement"],
  },
  {
    kicker: "04",
    title: "Commercial Projects",
    description: "Construction for workplaces, retail spaces, and hospitality environments with practical programming and site discipline.",
    includes: ["Base-build delivery", "Tenancy improvements", "Operational handover readiness"],
  },
  {
    kicker: "05",
    title: "Fit-Outs",
    description: "Premium interior fit-outs executed with attention to durability, joinery detailing, and user experience.",
    includes: ["Joinery and finish packages", "Lighting and services coordination", "Branded spatial detailing"],
  },
  {
    kicker: "06",
    title: "Project Coordination",
    description: "A structured management layer that keeps stakeholders aligned on scope, decisions, sequencing, and quality expectations.",
    includes: ["Programme and procurement oversight", "Site reporting and communication", "Defect management and handover"],
  },
];
