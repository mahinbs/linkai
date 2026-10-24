// What LinkAI Technologies says about real estate (revamp, 18 Oct 2026). One place for the positioning, the industry's
// pain points and how our technology answers each. No client names, results or numbers are claimed here.

export const positioning = {
  line: "Your AI Technology Partner for Real Estate",
  sub: "LinkAI Technologies solves the problems that slow real estate businesses down, with the right mix of AI, automation, websites and apps, so developers and builders sell faster, operate smoother and give buyers a better experience.",
};

// Pain points, in the order a project meets them. `fix` is the solution area (a /services page title) that answers it.
// The home page shows only the problem (`short`) and links to its solution (Dilli, 24 Oct 2026 review: say the pain, let
// people click through to how LinkAI solves it). `pain` and `help` stay for longer pages.
export const painPoints = [
  {
    id: 1,
    image: require("../assets/images/re/pain-leads.jpg"),
    short: "Enquiries come in at all hours. By the time someone calls back, the buyer has spoken to a competitor.",
    stage: "Marketing",
    title: "Leads go cold before anyone calls",
    pain: "Enquiries arrive from ads, portals and walk ins at all hours. Replies come hours later, and by then the buyer has spoken to a competitor.",
    help: "AI assistants reply on WhatsApp and the web in seconds, qualify the buyer and book the site visit.",
    fix: "WhatsApp and voice sales assistants",
  },
  {
    id: 2,
    image: require("../assets/images/re/pain-spend.jpg"),
    short: "Campaigns look busy, but you cannot see which ones actually bring site visits and bookings.",
    stage: "Marketing",
    title: "You cannot tell which spend brings buyers",
    pain: "Campaigns are judged by enquiry counts, but only some enquiries ever visit or book. Money keeps going to sources that look busy.",
    help: "Every enquiry is tracked from the ad to the visit to the booking, so spend moves to what brings buyers.",
    fix: "AI for sales and operations",
  },
  {
    id: 3,
    image: require("../assets/images/re/pain-visits.jpg"),
    short: "Visits are fixed over calls, forgotten and missed, and the follow up depends on who remembers.",
    stage: "Sales",
    title: "Site visits that do not happen",
    pain: "Visits are fixed over calls, forgotten, and missed. After the visit, the follow up depends on who remembers.",
    help: "Booking, reminders, rescheduling and post visit follow ups run automatically, with the next step recorded for each buyer.",
    fix: "WhatsApp and voice sales assistants",
  },
  {
    id: 4,
    image: require("../assets/images/re/pain-partners.jpg"),
    short: "Two partners claim the same lead, commissions are disputed and nobody is sure who brought whom.",
    stage: "Sales",
    title: "Channel partner confusion",
    pain: "The same lead is claimed by two partners, commissions are argued over, and nobody is sure who brought whom.",
    help: "Partners register leads in an app that shows ownership and status, and commission follows the record.",
    fix: "Buyer and channel partner apps",
  },
  {
    id: 5,
    image: require("../assets/images/re/pain-prices.jpg"),
    short: "Price sheets live in spreadsheets, so a unit that is already sold, or an old rate, gets quoted.",
    stage: "Sales",
    title: "Wrong prices and unclear availability",
    pain: "Inventory and price sheets live in spreadsheets. A salesperson quotes a unit that is already sold, or an old rate.",
    help: "One live inventory with cost sheets and offers on the sales team's phones and on the project website.",
    fix: "Buyer and channel partner apps",
  },
  {
    id: 6,
    image: require("../assets/images/re/pain-updates.jpg"),
    short: "Your relations team spends the day answering the same question: how is my tower progressing?",
    stage: "Construction",
    title: "Buyers keep calling for updates",
    pain: "Buyers want to know how their tower is progressing. Your relations team spends the day answering the same calls.",
    help: "Dated site photos and milestone updates reach each buyer in an app, with no extra calls.",
    fix: "Buyer and channel partner apps",
  },
  {
    id: 7,
    image: require("../assets/images/re/pain-payments.jpg"),
    short: "Reminders go out by hand, and accounts finds out who is late only when the month closes.",
    stage: "Collections",
    title: "Milestone payments arrive late",
    pain: "Demand letters and reminders are sent by hand. Accounts finds out who is late only when the month closes.",
    help: "Automatic reminders and a ranked call list, so accounts chases the payments that matter first.",
    fix: "AI for sales and operations",
  },
  {
    id: 8,
    image: require("../assets/images/re/pain-handover.jpg"),
    short: "Snags and service requests arrive on calls and WhatsApp, with no owner and no due date.",
    stage: "Handover",
    title: "After sales complaints get lost",
    pain: "Snags and service requests arrive on WhatsApp and calls, with no owner and no due date. Unhappy owners talk to prospective buyers.",
    help: "Every request is logged with an owner and a status the buyer can follow, up to handover and after.",
    fix: "Buyer and channel partner apps",
  },
];

// The path of a project, and where technology helps most.
export const journey = [
  { id: 1, title: "Launch", text: "Project website, virtual tour and campaign pages that every ad points to." },
  { id: 2, title: "Sell", text: "Instant replies, site visit booking, lead scoring and a CRM your sales team actually uses." },
  { id: 3, title: "Build", text: "Progress from site photos, turned into updates for every buyer." },
  { id: 4, title: "Collect", text: "Milestone reminders and a ranked list of payments to chase." },
  { id: 5, title: "Hand over", text: "Snag lists, documents and service requests, with an owner for each." },
];

// Who it is for. Developers and builders first; the people who sell for them second.
export const audiences = [
  { title: "Real estate developers and builders", text: "Residential, commercial and plotted projects, from one project to a pipeline of many. This is who we build for first." },
  { title: "Channel partners and brokerages", text: "The partners who sell for developers get an app, a clear record of their leads and commissions, and faster answers." },
  { title: "Project marketing and sales teams", text: "The people running campaigns and sales floors get one view of leads, visits and bookings." },
];
