// The blog. To publish a new post, copy one block below, give it a new id and slug, and fill in the fields:
//   slug      the web address: linkai.in/blogs/<slug> (small letters and dashes only)
//   title     the headline
//   date      the publishing date, YYYY-MM-DD
//   category  one word or two, shown above the title (e.g. "Websites", "AI", "Sales")
//   tags      a few words people might search for
//   image     the featured picture: put the file in src/assets/images/re/ (or blogs/) and point to it like the ones below
//   excerpt   one or two sentences for the blog list
//   body      the article: each "p" is a paragraph, each "h" a sub heading, each "list" a set of bullet points
// Newest posts go at the top.
export const blogs = [
  {
    id: 1,
    slug: "why-every-real-estate-brand-needs-a-lead-ready-website",
    title: "Why Every Real-Estate Brand Needs a Lead-Ready Website in 2026",
    date: "2026-10-20",
    category: "Websites",
    tags: ["project website", "lead capture", "site visits"],
    image: require("../assets/images/re/web-card.jpg"),
    excerpt:
      "A good-looking project site is not enough. Buyers decide in seconds whether to enquire, and every enquiry has to reach your sales team at once.",
    body: [
      { p: "Most property buyers meet your project for the first time on a phone, usually from an ad or a link a friend shared. In those first seconds they decide whether to enquire or move on. A website that only looks good, without guiding them to a next step, loses many of them." },
      { h: "What a lead-ready website does differently" },
      { list: [
        "It leads every visitor to one clear action: book a site visit, call, or message the sales team on WhatsApp.",
        "It answers the first questions buyers ask: configurations, price range, location advantages, possession timeline.",
        "It sends every enquiry straight to your sales team, with the campaign or source it came from.",
        "It loads quickly on a phone, because that is where most buyers are.",
      ] },
      { h: "Why it matters for your sales team" },
      { p: "When enquiries arrive in one place with their source attached, your team can reply faster and you can see which campaigns bring real site visits, not just clicks. Spend can then move to what works." },
      { p: "If your current website is beautiful but quiet, the fix is rarely a full redesign. Often it is a clearer enquiry journey, faster pages and a proper connection to your sales process." },
    ],
  },
  {
    id: 2,
    slug: "ways-whatsapp-ai-helps-developers-book-more-site-visits",
    title: "5 Ways WhatsApp AI Helps Developers Book More Site Visits",
    date: "2026-10-18",
    category: "AI",
    tags: ["WhatsApp", "AI assistant", "site visits"],
    image: require("../assets/images/re/d-whatsapp.jpg"),
    excerpt:
      "Buyers enquire at night, on Sundays and in the middle of other site visits. An AI assistant on WhatsApp makes sure none of them waits.",
    body: [
      { p: "WhatsApp is where most Indian property buyers prefer to talk. The challenge is that enquiries arrive at all hours, and a buyer who waits for a reply often speaks to another builder first. An AI assistant on WhatsApp helps in five practical ways." },
      { h: "1. It replies at once" },
      { p: "Every enquiry gets a friendly answer within moments, at any hour, in your brand's tone." },
      { h: "2. It asks the right questions" },
      { p: "Budget, configuration, preferred location and timeline, asked naturally in conversation, so your team knows who is ready to talk." },
      { h: "3. It books the site visit" },
      { p: "It offers available slots, confirms the visit by message and tells the salesperson who is coming." },
      { h: "4. It reminds and reschedules" },
      { p: "A reminder the day before reduces missed visits, and a buyer who cannot come can pick a new time in the same chat." },
      { h: "5. It follows up after the visit" },
      { p: "The next step is recorded for every buyer, so follow up no longer depends on who remembers. A person from your team is always one tap away." },
    ],
  },
  {
    id: 3,
    slug: "what-buyers-expect-from-a-real-estate-app-after-they-book",
    title: "What Buyers Expect From a Real Estate App After They Book",
    date: "2026-10-15",
    category: "Apps",
    tags: ["buyer app", "construction updates", "payments"],
    image: require("../assets/images/re/d-buyer-app.jpg"),
    excerpt:
      "After booking, buyers want three things: to see progress, to know what to pay and when, and to reach someone when something goes wrong.",
    body: [
      { p: "The relationship with a buyer does not end at booking. For the months or years until handover, they want to feel informed and in control. When they are not, they call your team, again and again." },
      { h: "Progress they can see" },
      { p: "Dated photos and milestone updates for their own tower and unit build confidence and cut down the 'how is it going?' calls." },
      { h: "Payments without surprises" },
      { p: "A clear payment schedule, demand letters, receipts and a simple way to pay, all in one place." },
      { h: "Documents in one place" },
      { p: "Agreements, receipts and approvals that buyers can open whenever they need them, instead of asking for copies." },
      { h: "A way to raise issues" },
      { p: "From snags to service requests, every issue logged with an owner and a status the buyer can follow. Happy owners are your best referrals for the next project." },
    ],
  },
];
