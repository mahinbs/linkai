/**
 * Small product screens for "What We Deliver" (Dilli, 28 Oct 2026 brief: "use visuals directly related to the service:
 * project pages, app interfaces, buyer updates, partner lead management, site-sales workflows and AI-assisted enquiry
 * handling; avoid repeating generic stock imagery; use product/UI mockups"). Every feature has its own screen, drawn in
 * the site's palette, so all four solution pages share one visual system. Names and numbers are illustrative.
 */

const Window = ({ title, children, dark = false }) => (
  <div className={`w-full max-w-[19rem] rounded-xl shadow-[0_18px_50px_rgba(0,0,0,.35)] overflow-hidden ${dark ? "bg-panel text-white border border-slate" : "bg-white text-black"}`}>
    <div className={`flex items-center gap-1.5 px-3 py-2 ${dark ? "bg-black/60" : "bg-mist"}`}>
      <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
      <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
      <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      <span className={`ml-2 text-[10px] font-semibold truncate ${dark ? "text-silver" : "text-black/60"}`}>{title}</span>
    </div>
    <div className="p-3 text-[11px] leading-snug space-y-2">{children}</div>
  </div>
);

const Phone = ({ title, children, green = false }) => (
  <div className="w-[10.5rem] rounded-[1.6rem] border-[5px] border-[#1d2b33] bg-white text-black shadow-[0_18px_50px_rgba(0,0,0,.4)] overflow-hidden">
    <div className={`px-3 py-2 text-[10px] font-bold text-white ${green ? "bg-[#075E54]" : "bg-black"}`}>{title}</div>
    <div className={`p-2 text-[10px] leading-snug space-y-1.5 min-h-[9.5rem] ${green ? "bg-[#ECE5DD]" : "bg-white"}`}>{children}</div>
  </div>
);

const Bar = ({ pct, color = "bg-primary" }) => (
  <div className="h-1.5 rounded-full bg-black/10 overflow-hidden"><div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} /></div>
);
const Pill = ({ children, tone = "blue" }) => {
  const t = { blue: "bg-primary/15 text-[#13739a]", green: "bg-emerald-100 text-emerald-700", amber: "bg-amber-100 text-amber-700", red: "bg-rose-100 text-rose-700", gray: "bg-black/5 text-black/60" }[tone];
  return <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap ${t}`}>{children}</span>;
};
const Row = ({ a, b }) => <div className="flex items-center justify-between gap-2">{a}{b}</div>;
const Bubble = ({ me, children }) => (
  <div className={`max-w-[85%] rounded-lg px-2 py-1 shadow-sm ${me ? "ml-auto bg-[#DCF8C6]" : "bg-white"}`}>{children}</div>
);

const SCREENS = {
  "Project Microsites": () => (
    <Window title="skyline-residences.in">
      <div className="h-14 rounded-lg bg-gradient-to-br from-[#239FD2] to-[#0D1A22] p-2 text-white flex flex-col justify-end">
        <b className="text-[12px]">Skyline Residences</b><span className="text-[9px] opacity-80">2 and 3 BHK · Whitefield</span>
      </div>
      <div className="grid grid-cols-3 gap-1 text-center text-[9px]">{["Floor plans", "Amenities", "Location"].map((x) => <span key={x} className="rounded bg-mist py-1">{x}</span>)}</div>
      <div className="rounded-lg border border-black/10 p-2 space-y-1"><div className="h-2 rounded bg-black/10" /><div className="h-2 rounded bg-black/10 w-2/3" /><div className="rounded bg-primary text-white text-center font-semibold py-1">Get brochure and price</div></div>
    </Window>
  ),
  "Virtual Tours and 3D Walkthroughs": () => (
    <Window title="Virtual tour · Model flat" dark>
      <div className="relative h-24 rounded-lg bg-[radial-gradient(circle_at_30%_30%,#3d5866,#13242E)] flex items-center justify-center">
        <span className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold text-[12px]">360°</span>
        <span className="absolute bottom-1.5 left-2 text-[9px] text-silver">Living room · Drag to look around</span>
      </div>
      <div className="flex gap-1">{["Living", "Kitchen", "Bedroom", "Balcony"].map((r, i) => <span key={r} className={`flex-1 text-center rounded py-1 text-[9px] ${i === 0 ? "bg-primary text-black font-semibold" : "bg-white/10"}`}>{r}</span>)}</div>
    </Window>
  ),
  "Live Unit Availability": () => (
    <Window title="Tower B · Live availability">
      <div className="grid grid-cols-6 gap-1">
        {"aassahasasoassaahsasaaahs".split("").slice(0, 24).map((c, i) => <span key={i} className={`h-4 rounded ${c === "a" ? "bg-emerald-400" : c === "h" ? "bg-amber-300" : c === "s" ? "bg-rose-300" : "bg-black/10"}`} />)}
      </div>
      <div className="flex gap-2 text-[9px] text-black/60"><span>🟩 Open</span><span>🟨 On hold</span><span>🟥 Sold</span></div>
      <div className="flex gap-1"><Pill>Floor 8 to 12</Pill><Pill>East facing</Pill><Pill tone="gray">3 BHK</Pill></div>
    </Window>
  ),
  "Calculators and Comparison Tools": () => (
    <Window title="EMI calculator">
      <Row a={<span className="text-black/60">Loan amount</span>} b={<b>₹ 75,00,000</b>} /><Bar pct={60} />
      <Row a={<span className="text-black/60">Tenure</span>} b={<b>20 years</b>} /><Bar pct={66} />
      <Row a={<span className="text-black/60">Interest</span>} b={<b>8.5%</b>} /><Bar pct={45} />
      <div className="rounded-lg bg-black text-white p-2 flex justify-between items-center"><span className="text-silver text-[10px]">Monthly EMI</span><b className="text-[14px] text-primary">₹ 65,087</b></div>
    </Window>
  ),
  "Landing Pages for Campaigns": () => (
    <Window title="Launch offer · Campaign page">
      <div className="rounded-lg bg-mist p-2 space-y-1"><b className="text-[12px]">Launch price for the first 50 homes</b><div className="h-2 rounded bg-black/10 w-3/4" /><div className="rounded bg-primary text-white text-center font-semibold py-1">Book a site visit</div></div>
      <div className="grid grid-cols-3 gap-1 text-center">
        {[["Meta ads", "412"], ["Google", "268"], ["Portals", "91"]].map(([s, n]) => <div key={s} className="rounded border border-black/10 py-1"><b className="block text-[12px]">{n}</b><span className="text-[9px] text-black/60">{s} visits</span></div>)}
      </div>
    </Window>
  ),
  "Buyer App": () => (
    <Phone title="My Home · Tower A, 1204">
      <div className="rounded-lg bg-mist p-1.5 space-y-1"><b>Construction</b><Row a={<span>Slab, floor 14</span>} b={<Pill tone="green">Done</Pill>} /><Bar pct={72} /></div>
      <div className="rounded-lg bg-mist p-1.5 space-y-0.5"><b>Next payment</b><Row a={<span>₹ 4,85,000</span>} b={<Pill tone="amber">Due 15 Nov</Pill>} /></div>
      <div className="grid grid-cols-2 gap-1 text-center">{["Receipts", "Documents"].map((x) => <span key={x} className="rounded bg-primary/15 py-1 font-semibold">{x}</span>)}</div>
    </Phone>
  ),
  "Channel Partner App": () => (
    <Phone title="Partner · My leads">
      {[["Ravi K.", "Site visit done", "blue"], ["Meena S.", "Booked", "green"], ["Arjun P.", "Already registered", "red"]].map(([n, s, t]) => (
        <div key={n} className="rounded-lg bg-mist p-1.5"><Row a={<b>{n}</b>} b={<Pill tone={t}>{s}</Pill>} /></div>
      ))}
      <div className="rounded-lg bg-black text-white p-1.5"><Row a={<span className="text-silver">Commission due</span>} b={<b className="text-primary">₹ 1,20,000</b>} /></div>
    </Phone>
  ),
  "Site Sales App": () => (
    <Window title="Site sales · Cost sheet">
      <Row a={<b>Unit B-0905 · 3 BHK</b>} b={<Pill tone="green">Open</Pill>} />
      {[["Base price", "₹ 1.12 Cr"], ["Floor rise", "₹ 3.6 L"], ["Parking", "₹ 4 L"], ["GST and charges", "₹ 6.9 L"]].map(([a, b]) => <Row key={a} a={<span className="text-black/60">{a}</span>} b={<span>{b}</span>} />)}
      <div className="border-t border-black/10 pt-1"><Row a={<b>Total</b>} b={<b className="text-primary">₹ 1.27 Cr</b>} /></div>
      <div className="rounded bg-primary text-white text-center font-semibold py-1">Share with buyer</div>
    </Window>
  ),
  "Handover and After Sales": () => (
    <Window title="Handover · Snag list">
      {[["Bedroom door alignment", "Fixed", "green"], ["Kitchen tile chip", "In progress", "amber"], ["Balcony drain", "Assigned", "blue"]].map(([a, s, t]) => (
        <div key={a} className="rounded-lg bg-mist px-2 py-1.5"><Row a={<span>{a}</span>} b={<Pill tone={t}>{s}</Pill>} /></div>
      ))}
      <div className="text-[9px] text-black/60">Each request has an owner and a due date.</div>
    </Window>
  ),
  "Document Vault": () => (
    <Window title="Documents · Unit 1204">
      {[["Sale agreement.pdf", "Signed"], ["Payment receipt 06.pdf", "New"], ["Occupancy certificate.pdf", "Shared"]].map(([f, s]) => (
        <Row key={f} a={<span className="flex items-center gap-1.5"><span className="w-5 h-6 rounded-sm bg-rose-100 text-rose-600 text-[7px] font-bold flex items-center justify-center">PDF</span>{f}</span>} b={<Pill tone={s === "New" ? "blue" : "gray"}>{s}</Pill>} />
      ))}
      <div className="text-[9px] text-black/60">🔒 Opened by the buyer, 2 days ago</div>
    </Window>
  ),
  "Announcements and Notifications": () => (
    <Phone title="Notifications">
      {[["🏗️", "Tower A reached floor 14", "Today"], ["💳", "Payment reminder: 15 Nov", "Yesterday"], ["🎉", "Diwali event at the site", "Mon"]].map(([i, t, d]) => (
        <div key={t} className="rounded-lg bg-mist p-1.5 flex gap-1.5"><span>{i}</span><span className="flex-1"><b className="block">{t}</b><span className="text-black/50 text-[9px]">{d}</span></span></div>
      ))}
    </Phone>
  ),
  "Lead Scoring and Next Best Action": () => (
    <Window title="Today's call list · AI ranked">
      {[["Priya N.", 92, "Asked for 3 BHK price twice"], ["Rahul M.", 81, "Visited site, no follow up yet"], ["Anita K.", 64, "Opened brochure"]].map(([n, s, w]) => (
        <div key={n} className="rounded-lg bg-mist px-2 py-1.5 space-y-0.5"><Row a={<b>{n}</b>} b={<Pill tone={s > 80 ? "green" : "amber"}>Score {s}</Pill>} /><span className="text-black/60 text-[9px]">{w}</span></div>
      ))}
      <div className="rounded bg-primary/15 text-[#13739a] px-2 py-1 font-semibold">Next: call Priya, offer a Saturday visit</div>
    </Window>
  ),
  "Construction Progress From Site Photos": () => (
    <Window title="Progress from site photos" dark>
      <div className="grid grid-cols-3 gap-1">{[1, 2, 3].map((i) => <div key={i} className="h-10 rounded bg-[linear-gradient(135deg,#3d5866,#13242E)] relative"><span className="absolute bottom-0.5 left-1 text-[8px] text-silver">Oct {i * 7}</span></div>)}</div>
      {[["Tower A · Floor 14 slab", 92, "bg-primary"], ["Tower B · Brickwork", 58, "bg-amber-400"]].map(([a, p, c]) => <div key={a} className="space-y-0.5"><Row a={<span>{a}</span>} b={<b>{p}%</b>} /><Bar pct={p} color={c} /></div>)}
      <div className="rounded bg-amber-400/15 text-amber-300 px-2 py-1">⚠ Tower B is 9 days behind plan</div>
    </Window>
  ),
  "Document Reading": () => (
    <Window title="KYC check · AI reading">
      {[["PAN number", "Matches", "green"], ["Address proof", "Matches", "green"], ["Co-applicant ID", "Missing", "red"], ["Agreement date", "Check", "amber"]].map(([a, s, t]) => <Row key={a} a={<span>{a}</span>} b={<Pill tone={t}>{s}</Pill>} />)}
      <div className="text-[9px] text-black/60">2 items sent to a person to check.</div>
    </Window>
  ),
  "Collections and Payment Follow Up": () => (
    <Window title="Collections · Likely late">
      {[["Unit A-1204", "₹ 4.85 L", "High risk", "red"], ["Unit B-0905", "₹ 6.10 L", "Medium", "amber"], ["Unit A-0702", "₹ 3.20 L", "Low", "green"]].map(([u, a, r, t]) => (
        <div key={u} className="rounded-lg bg-mist px-2 py-1.5"><Row a={<span><b>{u}</b> · {a}</span>} b={<Pill tone={t}>{r}</Pill>} /></div>
      ))}
      <div className="rounded bg-primary text-white text-center font-semibold py-1">Send 3 reminders</div>
    </Window>
  ),
  "Call and Meeting Summaries": () => (
    <Window title="Call summary · Rahul M.">
      <div className="rounded-lg bg-mist p-2 flex items-center gap-1">{[4, 8, 5, 10, 6, 9, 3, 7, 5, 8, 4, 6].map((h, i) => <span key={i} className="w-1 rounded bg-primary" style={{ height: h * 2 }} />)}<span className="ml-auto text-black/50">6:42</span></div>
      <div><b>Wants:</b> 3 BHK, east facing, below ₹ 1.3 Cr</div>
      <div><b>Worry:</b> possession date</div>
      <div className="rounded bg-primary/15 text-[#13739a] px-2 py-1 font-semibold">Next step: site visit Saturday 11 AM</div>
    </Window>
  ),
  "Marketing and Source Insights": () => (
    <Window title="Which source brings bookings">
      {[["Meta ads", 78, "18 bookings"], ["Google search", 62, "14 bookings"], ["Property portals", 35, "6 bookings"], ["Referrals", 28, "5 bookings"]].map(([s, p, b]) => (
        <div key={s} className="space-y-0.5"><Row a={<span>{s}</span>} b={<span className="text-black/60">{b}</span>} /><Bar pct={p} /></div>
      ))}
    </Window>
  ),
  "Pricing and Demand Signals": () => (
    <Window title="Demand by configuration" dark>
      <div className="flex items-end gap-2 pt-1">
        {[["2 BHK", 55], ["3 BHK", 90], ["3.5 BHK", 40], ["4 BHK", 22]].map(([c, h]) => <div key={c} className="flex-1 flex flex-col items-center gap-1"><span className="w-full rounded-t bg-primary" style={{ height: `${Math.round(h * 0.7)}px` }} /><span className="text-[8px] text-silver">{c}</span></div>)}
      </div>
      <div className="rounded bg-primary/15 text-primary px-2 py-1">3 BHK enquiries up 24% this month</div>
    </Window>
  ),
  "Enquiry Response on WhatsApp and Web": () => (
    <Phone title="Skyline Residences" green>
      <Bubble>Hi, what is the price of a 3 BHK?</Bubble>
      <Bubble me>Hi Priya! 3 BHK homes start at ₹ 1.12 Cr, possession Dec 2027. Shall I send the floor plan?</Bubble>
      <Bubble>Yes please</Bubble>
      <Bubble me>📄 Floor plan sent. Would Saturday suit you for a site visit?</Bubble>
    </Phone>
  ),
  "Qualification and Site Visit Booking": () => (
    <Window title="Site visit booked · CRM">
      <Row a={<b>Priya N.</b>} b={<Pill tone="green">Visit booked</Pill>} />
      {[["Budget", "₹ 1.1 to 1.3 Cr"], ["Looking for", "3 BHK, east facing"], ["Moving in", "Within 12 months"]].map(([a, b]) => <Row key={a} a={<span className="text-black/60">{a}</span>} b={<span>{b}</span>} />)}
      <div className="rounded-lg bg-black text-white p-2 flex justify-between"><span>📅 Sat, 11:00 AM</span><span className="text-primary">Reminder set</span></div>
    </Window>
  ),
  "Voice Assistants": () => (
    <Window title="AI call · New enquiry" dark>
      <div className="flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">📞</span><span><b className="block">Calling Rahul M.</b><span className="text-silver text-[9px]">2 minutes after his enquiry</span></span></div>
      <div className="flex items-center gap-0.5 h-6">{[3, 6, 9, 5, 8, 4, 7, 10, 6, 3, 8, 5, 9, 4].map((h, i) => <span key={i} className="w-1 rounded bg-primary" style={{ height: h * 2 }} />)}</div>
      <div className="rounded bg-white/10 px-2 py-1">Interest confirmed · visit on Sunday · <span className="text-primary font-semibold">Hot buyer</span></div>
    </Window>
  ),
  "Buyer Helpdesk": () => (
    <Phone title="Buyer helpdesk" green>
      <Bubble>When is my next payment due?</Bubble>
      <Bubble me>Your next instalment of ₹ 4,85,000 is due on 15 Nov. Here is your demand letter 📄</Bubble>
      <Bubble>The balcony tap is leaking</Bubble>
      <Bubble me>Request #482 logged. Suresh from maintenance will visit tomorrow.</Bubble>
    </Phone>
  ),
};

/** The screen for a feature, on the navy stage every "What We Deliver" card uses. Null when there is no screen for it. */
export const hasMockup = (title) => Boolean(SCREENS[title]);
const Mockup = ({ title }) => {
  const S = SCREENS[title];
  if (!S) return null;
  return (
    <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[radial-gradient(circle_at_75%_15%,rgba(35,159,210,.35),transparent_55%),linear-gradient(160deg,#13242E,#0D1A22)] flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="relative w-full flex justify-center">
        <S />
      </div>
    </div>
  );
};

export default Mockup;
