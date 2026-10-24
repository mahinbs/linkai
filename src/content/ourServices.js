// LinkAI Technologies: technology for real estate, starting with developers and builders (revamp, 18 Oct 2026).
// Four solution areas, each a page at /services/<title>. Pictures, headings and CTAs from Dilli's 24 Oct 2026 review:
// each section names the buyer or team problem first, then the benefit. The shapes are the same as before:
// ServiceDetails, OurExpertise, DevelopmentProcess and SolutionUseCases read them.
export const ourServices = [
  {
    id: 1,
    title: "Project websites and virtual tours",
    subHeading: "A launch page that turns property seekers into site visits.",
    image: require("../assets/images/re/web-card.jpg"),
    cta: "Discuss Your Website Project",
    desc: "Project microsites, 360 degree tours, live unit availability and enquiry forms that drop straight into your sales CRM, so every campaign has a page built to convert.",
    serviceDetails: {
      banner: require("../assets/images/re/web-banner.jpg"),
      img1: require("../assets/images/services/web-dev/1.jpeg"),
      img2: require("../assets/images/services/web-dev/2.jpeg"),
      whyChooseContent: {
        heading: "Websites Built to Drive Real Estate Enquiries",
        intro: "Designed around property buyers, connected to your sales process, and ready to support your marketing campaigns.",
        list: [
          { title: "Built Around the Site Visit", desc: "Guide buyers toward booking a visit, calling, or contacting your sales team, with answers to their first questions already on the page." },
          { title: "Lead Capture That Reaches Sales", desc: "Bring enquiries from your website and campaigns into one organised process, with the source of each one attached." },
          { title: "Fast on a Phone", desc: "Give property buyers a smooth experience on the mobile screens where most of them first see your project." },
          { title: "Ready for Your Ads", desc: "Support campaigns with dedicated landing pages and enquiry tracking, so you can see which campaign brings visits." },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/re/d-microsites.jpg"),
          title: "Project Microsites",
          list: [
            "One page per project: configurations, amenities, location advantages, floor plans and a clear enquiry form.",
            "Brochure and price details shared after the buyer leaves their number, so every download is a lead.",
          ],
        },
        {
          img: require("../assets/images/re/d-tours.jpg"),
          title: "Virtual Tours and 3D Walkthroughs",
          list: [
            "360 degree views of model flats and the site, viewable on any phone.",
            "Lets out of town and overseas buyers shortlist without travelling first.",
          ],
        },
        {
          img: require("../assets/images/re/d-availability.jpg"),
          title: "Live Unit Availability",
          list: [
            "Show which units are open, on hold or sold, with floor and facing filters.",
            "Connected to your inventory so the website never promises a unit that is gone.",
          ],
        },
        {
          img: require("../assets/images/re/d-calculators.jpg"),
          title: "Calculators and Comparison Tools",
          list: [
            "EMI, total cost and payment plan calculators buyers can try themselves.",
            "Fewer basic calls to your team, and a better informed buyer when they do call.",
          ],
        },
        {
          img: require("../assets/images/re/d-landing.jpg"),
          title: "Landing Pages for Campaigns",
          list: [
            "A separate page for each ad campaign, launch offer or project phase.",
            "Tracking for ads and enquiries, so spend can move to what brings visits.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/web-dev/process1.jpeg"),
          title: "Understand the Project",
          list: [
            "Your buyers, price band, location story and launch plan.",
            "What your sales team asks and hears most often.",
            "The one action every page should drive.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/process2.jpeg"),
          title: "Design and Review",
          list: [
            "Page layouts and the enquiry journey, shown to you before building.",
            "Content and imagery that matches your brand and the project.",
            "Changes agreed before development starts.",
          ],
        },
        {
          img: require("../assets/images/services/web-dev/process3.jpeg"),
          title: "Build, Connect and Launch",
          list: [
            "Mobile first build, tested on common devices.",
            "Forms connected to your CRM and ad tracking switched on.",
            "Launch support and changes as the project moves.",
          ],
        },
      ],
      solutionUseCases: {
        heading: "How Developers Use It",
        contentArr: [
          {
            title: "Use Case 1: A New Project Launch",
            list: [
              "Example: A residential tower going on sale next month.",
              "Features: Microsite, tour, brochure on request and a launch enquiry form.",
              "Impact: A ready destination for every ad and every referral on day one.",
            ],
          },
          {
            title: "Use Case 2: Selling the Last Units",
            list: [
              "Example: A ready to move project with remaining inventory.",
              "Features: Live availability and a site visit booking page.",
              "Impact: Buyers see exactly what is left and can book a visit at once.",
            ],
          },
          {
            title: "Use Case 3: Overseas Buyers",
            list: [
              "Example: Non resident buyers shortlisting from another country.",
              "Features: 360 degree tours and WhatsApp contact in their time zone.",
              "Impact: Serious buyers can decide on a visit before they fly in.",
            ],
          },
          {
            title: "Use Case 4: Many Projects, One Brand",
            list: [
              "Example: A builder with several ongoing and completed projects.",
              "Features: A company site that lists every project and routes enquiries to the right team.",
              "Impact: One consistent brand with every project easy to find.",
            ],
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Buyer and channel partner apps",
    subHeading: "One app for buyers, one for the people who sell for you.",
    image: require("../assets/images/re/apps-card.jpg"),
    cta: "Discuss Your Software Project",
    desc: "Buyer apps with construction updates, payment schedules and documents, and partner and site sales apps for inventory, lead registration and commissions.",
    serviceDetails: {
      banner: require("../assets/images/re/apps-banner.jpg"),
      img1: require("../assets/images/services/app-dev/1.jpeg"),
      img2: require("../assets/images/services/app-dev/2.jpeg"),
      whyChooseContent: {
        heading: "Real Estate Apps That Simplify Every Step",
        intro: "Buyers want updates, partners want clarity and your team wants fewer calls. Practical apps connect all three around your real estate workflows.",
        list: [
          { title: "Fewer Calls to Your Team", desc: "Give buyers convenient access to construction updates, payment details and documents, without calling your relations team." },
          { title: "Clear Records for Every Partner", desc: "Help channel partners track registered leads, status updates and commissions, so ownership disputes stop." },
          { title: "Designed for Your Team's Workflow", desc: "Make essential information available to sales teams and site office staff on their phones." },
          { title: "Connected to Your Existing Systems", desc: "Integrate with your CRM and other business systems, so information is entered once and stays in sync." },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/re/d-buyer-app.jpg"),
          title: "Buyer App",
          list: [
            "Construction progress with dated photos and milestone status for the buyer's own unit and tower.",
            "Payment schedule, demand letters, receipts and a simple way to pay.",
          ],
        },
        {
          img: require("../assets/images/re/d-partner-app.jpg"),
          title: "Channel Partner App",
          list: [
            "Register a lead, see if it is already taken, and follow it through to booking.",
            "Brochures, price sheets and offers always current, with commission status visible to the partner.",
          ],
        },
        {
          img: require("../assets/images/re/d-site-sales.jpg"),
          title: "Site Sales App",
          list: [
            "Inventory, cost sheets and offers on a tablet or phone, so quotes are right the first time.",
            "Site visit check in, notes after the visit and the next step for every visitor.",
          ],
        },
        {
          img: require("../assets/images/re/d-handover.jpg"),
          title: "Handover and After Sales",
          list: [
            "Snag lists, possession checklists and service requests with status the buyer can follow.",
            "Every request has an owner and a due date instead of sitting in a WhatsApp chat.",
          ],
        },
        {
          img: require("../assets/images/re/d-documents.jpg"),
          title: "Document Vault",
          list: [
            "Agreements, receipts, approvals and certificates in one place for each buyer.",
            "Access for the right people only, with a record of who opened what.",
          ],
        },
        {
          img: require("../assets/images/re/d-notifications.jpg"),
          title: "Announcements and Notifications",
          list: [
            "Project updates, payment reminders and event invites sent to the right buyers.",
            "A record of what was sent and to whom.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/app-dev/process1.jpeg"),
          title: "Map Your Workflow",
          list: [
            "Who uses the app: buyers, partners, sales, site and accounts teams.",
            "What they ask and do today, and where it breaks.",
            "A first version that fixes the most painful part.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/process2.jpeg"),
          title: "Design and Prototype",
          list: [
            "Simple clickable screens shown to your team and a few real users.",
            "Changes before any code is written.",
            "A release plan in clear steps.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/process3.jpeg"),
          title: "Build, Connect and Release",
          list: [
            "Connection to your CRM, accounts and inventory.",
            "Testing with your team on real project data.",
            "Store release and support for the first months.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "AI for sales and operations",
    subHeading: "Know which buyer to call next and which project is slipping.",
    image: require("../assets/images/re/ai-card.jpg"),
    cta: "Explore Automation for Your Business",
    desc: "AI that scores leads, reads documents, tracks progress from site photos and predicts collection delays, with your team always making the final call.",
    serviceDetails: {
      banner: require("../assets/images/re/ai-banner.jpg"),
      img1: require("../assets/images/services/ai/1.png"),
      img2: require("../assets/images/services/ai/2.jpeg"),
      whyChooseContent: {
        heading: "AI That Solves Real Estate Business Challenges",
        intro: "From lead follow up to collections and project operations, we apply AI to real business problems, with your data, your team's oversight and measurable outcomes.",
        list: [
          { title: "Start With a Business Problem", desc: "Identify a costly bottleneck, such as slow lead follow up or late collections, before deciding where AI can help." },
          { title: "Works With Your Data", desc: "Connect AI workflows to your CRM, inventory, payment and site records, so its answers are based on your own projects." },
          { title: "People Stay in Control", desc: "The AI suggests and prepares. Your team approves the important decisions, and every action is logged." },
          { title: "Private and Secure", desc: "Apply the right access controls to buyer details and financial records. Your data stays yours." },
          { title: "Measured Against Your Numbers", desc: "Track site visits, bookings, collection days and complaint closing time, so you can see whether it is improving performance." },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/re/d-lead-scoring.jpg"),
          title: "Lead Scoring and Next Best Action",
          list: [
            "Ranks new and old leads by how likely they are to visit and book.",
            "Tells each salesperson who to call next and what to say.",
          ],
        },
        {
          img: require("../assets/images/re/d-site-photos.jpg"),
          title: "Construction Progress From Site Photos",
          list: [
            "Reads dated site photos to track progress against plan.",
            "Flags slipping milestones early and builds buyer updates automatically.",
          ],
        },
        {
          img: require("../assets/images/re/d-doc-reading.jpg"),
          title: "Document Reading",
          list: [
            "Extracts key details from KYC, agreements and approvals.",
            "Flags missing or mismatched items for a person to check.",
          ],
        },
        {
          img: require("../assets/images/re/d-collections.jpg"),
          title: "Collections and Payment Follow Up",
          list: [
            "Predicts which milestone payments may be late and prepares reminders.",
            "Gives accounts a short list to call, in order of impact.",
          ],
        },
        {
          img: require("../assets/images/re/d-call-summaries.jpg"),
          title: "Call and Meeting Summaries",
          list: [
            "Turns sales calls and site visit notes into a clear summary and next step in the CRM.",
            "Managers see what buyers are asking without listening to every call.",
          ],
        },
        {
          img: require("../assets/images/re/d-source-insights.jpg"),
          title: "Marketing and Source Insights",
          list: [
            "Shows which campaigns and portals bring site visits and bookings, not just enquiries.",
            "Helps move budget to what works.",
          ],
        },
        {
          img: require("../assets/images/re/d-pricing.jpg"),
          title: "Pricing and Demand Signals",
          list: [
            "Reads enquiry patterns by configuration, floor and budget.",
            "Supports pricing and launch decisions with data your team already has.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/ai/process1.jpeg"),
          title: "Pick the Problem",
          list: [
            "Find the one issue costing the most time or money.",
            "Check what data exists and how clean it is.",
            "Agree how success will be measured.",
          ],
        },
        {
          img: require("../assets/images/services/ai/process2.jpeg"),
          title: "Prepare and Train",
          list: [
            "Connect your CRM, inventory and payment records.",
            "Build and test on your own past data.",
            "Review results with your team before it goes live.",
          ],
        },
        {
          img: require("../assets/images/services/ai/process3.jpeg"),
          title: "Integrate and Improve",
          list: [
            "Put it inside the tools your team already uses.",
            "Track results and fix what is off.",
            "Add the next use once the first one works.",
          ],
        },
      ],
      solutionUseCases: {
        heading: "AI in a Developer's Day",
        contentArr: [
          {
            title: "Use Case 1: Monday Morning Call List",
            list: [
              "Example: 400 enquiries from the weekend campaign.",
              "Features: Scoring by budget, timeline and engagement.",
              "Impact: Sales starts with the buyers most likely to visit.",
            ],
          },
          {
            title: "Use Case 2: Progress Updates Without the Chase",
            list: [
              "Example: Monthly construction updates for 300 buyers.",
              "Features: Site photos turned into milestone updates per tower.",
              "Impact: Buyers stay informed and your relations team gets fewer calls.",
            ],
          },
          {
            title: "Use Case 3: Paperwork Checks",
            list: [
              "Example: KYC and booking forms for new bookings.",
              "Features: Extraction and a list of missing items.",
              "Impact: Fewer returned forms and a faster path to agreement.",
            ],
          },
        ],
      },
    },
  },
  {
    id: 4,
    title: "WhatsApp and voice sales assistants",
    subHeading: "Every enquiry answered in seconds, day and night.",
    image: require("../assets/images/re/assist-card.jpg"),
    cta: "Discuss Your Requirements on WhatsApp",
    desc: "AI assistants that reply to every enquiry on WhatsApp and your website, qualify the buyer, book the site visit and follow up until they decide.",
    serviceDetails: {
      banner: require("../assets/images/re/assist-banner.jpg"),
      img1: require("../assets/images/services/ai/1.png"),
      img2: require("../assets/images/services/ai/2.jpeg"),
      whyChooseContent: {
        heading: "Assistants That Answer Every Buyer, Day and Night",
        intro: "Buyers enquire at night, on Sundays and in the middle of a site visit. An assistant on WhatsApp and your website answers them at once and moves them to the next step.",
        list: [
          { title: "The First Reply Wins", desc: "A buyer who enquires at night or on a Sunday gets an answer at once, before another builder replies." },
          { title: "Qualifies Like Your Best Salesperson", desc: "Asks budget, configuration, location and timeline in a friendly way, and hands over the buyers who are ready to talk." },
          { title: "Books Site Visits", desc: "Offers slots, confirms by message, reminds the buyer the day before and tells the salesperson who is coming." },
          { title: "Speaks Your Buyers' Languages", desc: "Replies in English, Hindi and regional languages, in your brand's tone, with a person always one tap away." },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/re/d-whatsapp.jpg"),
          title: "Enquiry Response on WhatsApp and Web",
          list: [
            "Answers questions on price range, configuration, possession and location instantly.",
            "Hands over to a salesperson with the full conversation, not a bare phone number.",
          ],
        },
        {
          img: require("../assets/images/re/d-visit-booking.jpg"),
          title: "Qualification and Site Visit Booking",
          list: [
            "Collects budget, timeline and preferences and records them in your CRM.",
            "Books and reminds for site visits, and follows up after the visit.",
          ],
        },
        {
          img: require("../assets/images/re/d-voice.jpg"),
          title: "Voice Assistants",
          list: [
            "Calls new enquiries within minutes to confirm interest and fix a visit.",
            "Summarises each call and flags the hot buyers for a human call back.",
          ],
        },
        {
          img: require("../assets/images/re/d-helpdesk.jpg"),
          title: "Buyer Helpdesk",
          list: [
            "Answers payment, document and construction questions from existing buyers.",
            "Logs service requests and tells the buyer who is handling them.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/ai/process1.jpeg"),
          title: "Learn Your Projects",
          list: [
            "Project facts, price ranges, offers and the questions buyers ask.",
            "How your best salespeople qualify and close.",
            "Rules for when a person must take over.",
          ],
        },
        {
          img: require("../assets/images/services/ai/process2.jpeg"),
          title: "Build and Practice",
          list: [
            "Connect WhatsApp, your forms and your CRM.",
            "Practise on real past conversations with your team reviewing.",
            "Set limits so it never promises what you have not approved.",
          ],
        },
        {
          img: require("../assets/images/services/ai/process3.jpeg"),
          title: "Go Live and Tune",
          list: [
            "Start with one project or one campaign.",
            "Review conversations weekly and improve the answers.",
            "Extend to every project once it performs.",
          ],
        },
      ],
      solutionUseCases: {
        heading: "Assistants in Action",
        contentArr: [
          {
            title: "Use Case 1: Campaign Leads at 11 PM",
            list: [
              "Example: A Meta ad enquiry arriving after office hours.",
              "Features: Instant reply, qualification and a proposed site visit slot.",
              "Impact: The buyer is engaged while interest is high, and sales sees a booked visit in the morning.",
            ],
          },
          {
            title: "Use Case 2: Site Visit No Shows",
            list: [
              "Example: Weekend site visits that often go empty.",
              "Features: Confirmation, reminders and easy rescheduling.",
              "Impact: More booked visits actually happen.",
            ],
          },
          {
            title: "Use Case 3: Old Leads Revived",
            list: [
              "Example: Thousands of leads from earlier launches.",
              "Features: A polite check in by message or call asking if they still want a home.",
              "Impact: Interested buyers surface again without adding to the sales team's workload.",
            ],
          },
        ],
      },
    },
  },
];
