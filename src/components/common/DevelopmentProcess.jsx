/**
 * "How We Build" (Dilli, 28 Oct 2026 brief): three clean, numbered process cards with the same height, spacing and corners,
 * no overlapping photos, no decorative spheres and no black half moons, on a light gray section.
 */
const DevelopmentProcess = ({ content }) => {
  if (!content) return null;
  return (
    <section className="py-16 bg-mist text-black">
      <div className="wrapper space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <p data-aos="fade-up" className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">How we build</p>
          <h2 data-aos="fade-up" className="text1">From First Conversation to Launch</h2>
          <p data-aos="fade-up" className="desc text-black/70">
            Three clear steps. You see and agree each one before we move to the next.
          </p>
        </div>
        <ol className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.map((item, i) => (
            <li key={item.title} data-aos="fade-up" className="relative rounded-2xl bg-white border border-black/10 p-7 flex flex-col gap-4 shadow-[0_10px_30px_rgba(13,26,34,0.06)]">
              <div className="flex items-center justify-between">
                <span className="text-[2.6rem] font-extrabold leading-none text-primary/25" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-primary">Step {i + 1}</span>
              </div>
              <h3 className="text3">{item.title}</h3>
              <ul className="space-y-2">
                {item.list.map((text) => (
                  <li key={text} className="flex gap-2 text-[15px] text-black/75">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
