/**
 * The "Let's talk" section is different on every page (Dilli, 28 Oct 2026 brief: no generic CTA repeated across the
 * site; a heading, a line, dropdown options and a button that fit the page). The four solution pages use his wording.
 * Keyed by page; the solution pages are keyed by their title in ourServices.js.
 */
export const ctas = {
  home: {
    kicker: "Let's talk",
    heading: "Where is your project losing buyers today?",
    text: "Tell us about your project and how your sales team works. We will show you where technology could bring more site visits and fewer lost enquiries.",
    options: ["Project website or virtual tour", "Buyer or channel partner app", "AI for sales and operations", "WhatsApp or voice AI assistant", "Other / Not sure yet"],
    button: "Talk to Our Real Estate Team",
  },
  about: {
    kicker: "Work with us",
    heading: "Let's understand your business first.",
    text: "Tell us how your projects, sales and operations run today. We will start with your challenges, then suggest what is worth building.",
    options: ["Project website or virtual tour", "Buyer or channel partner app", "AI for sales and operations", "WhatsApp or voice AI assistant", "Other / Not sure yet"],
    button: "Start a Conversation",
  },
  blog: {
    kicker: "Let's talk",
    heading: "Want this working for your project?",
    text: "Tell us about your project and what you would like to improve. We will come back with practical next steps.",
    options: ["Project website or virtual tour", "Buyer or channel partner app", "AI for sales and operations", "WhatsApp or voice AI assistant", "Other / Not sure yet"],
    button: "Discuss Your Project",
  },
  landingWeb: {
    kicker: "Let's talk",
    heading: "Planning a website for your next real estate project?",
    text: "Tell us about your project, launch plans or current website. We will discuss the right website experience to attract enquiries and turn more property seekers into site visits.",
    options: ["Project website or microsite", "Virtual tours and 3D walkthroughs", "Live unit availability and inventory", "Landing pages for marketing campaigns", "Website redesign or performance improvement", "Multiple projects under one website", "Other / Not sure yet"],
    button: "Discuss Your Website Project",
  },
  landingApp: {
    kicker: "Let's discuss your requirements",
    heading: "Let's build an app around your real estate business.",
    text: "Tell us how you manage buyers, channel partners or sales operations today. We will help identify where a custom app could make the biggest difference.",
    options: ["Buyer app", "Channel partner app", "Site sales app", "Handover and after-sales app", "Document management", "Multiple connected apps", "Not sure yet, need guidance"],
    button: "Discuss Your Real Estate App",
  },
  "Project websites and virtual tours": {
    kicker: "Let's talk",
    heading: "Planning a website for your next real estate project?",
    text: "Tell us about your project, launch plans or current website. We will discuss the right website experience to attract enquiries and turn more property seekers into site visits.",
    options: ["Project website or microsite", "Virtual tours and 3D walkthroughs", "Live unit availability and inventory", "Landing pages for marketing campaigns", "Website redesign or performance improvement", "Multiple projects under one website", "Other / Not sure yet"],
    button: "Discuss Your Website Project",
  },
  "Buyer and channel partner apps": {
    kicker: "Let's discuss your requirements",
    heading: "Let's build an app around your real estate business.",
    text: "Tell us how you manage buyers, channel partners or sales operations today. We will help identify where a custom app could make the biggest difference.",
    options: ["Buyer app", "Channel partner app", "Site sales app", "Handover and after-sales app", "Document management", "Multiple connected apps", "Not sure yet, need guidance"],
    button: "Discuss Your Real Estate App",
  },
  "AI for sales and operations": {
    kicker: "Let's talk",
    heading: "Where could AI make a difference in your real estate business?",
    text: "Tell us how your sales or operations team works today. We will discuss the bottleneck, the data you have, and whether an AI solution is a practical fit.",
    options: ["Lead follow-up and sales prioritization", "Construction progress monitoring", "Collections and payment follow-up", "Document processing", "Marketing and demand insights", "Multiple workflows / Not sure yet"],
    button: "Discuss an AI Use Case",
  },
  "WhatsApp and voice sales assistants": {
    kicker: "Let's talk",
    heading: "Where could an AI assistant help your sales team?",
    text: "Tell us how your team handles enquiries today. We will discuss your challenges and explore whether a WhatsApp or voice AI assistant is the right fit.",
    options: ["Lead response and follow-up", "AI qualification and lead prioritization", "Site visit booking and reminders", "AI voice calling", "Existing buyer helpdesk", "CRM integration", "Multiple workflows / Not sure yet"],
    button: "Discuss Your AI Assistant",
  },
};
