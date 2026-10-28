/**
 * "Proof and reassurance" (Dilli, 28 Oct 2026 brief, step 05 of the page flow): how developers use the solution, then
 * how an engagement runs. No invented client names or results; the use cases are examples and say so.
 */
const promises = [
  ["Your project first", "We start from how your sales and site teams work today."],
  ["Screens before code", "You see and approve the design before development starts."],
  ["Launch in stages", "Live in agreed steps, so your team adopts it without disruption."],
  ["Support after launch", "Changes and help as your project moves from launch to handover."],
];

const SolutionUseCases = ({ content }) => {
  return (
    <section className="py-16 bg-black">
      <div className="wrapper space-y-12">
        {content && (
          <div className="space-y-8">
            <div className="space-y-3 max-w-3xl">
              <p data-aos="fade-up" className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Examples</p>
              <h2 data-aos="fade-up" className="text1">{content.heading}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {content.contentArr.map((item, i, arr) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  className={`rounded-2xl border border-slate bg-panel p-6 space-y-3 ${arr.length % 2 && i === arr.length - 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
                >
                  <h3 className="text4 text-primary">{item.title.replace(/^Use Case \d+:\s*/, "")}</h3>
                  <ul className="space-y-2">
                    {item.list.map((text) => {
                      const [k, ...rest] = text.split(":");
                      return (
                        <li key={text} className="desc text-silver">
                          {rest.length ? (<><span className="text-white font-semibold">{k}:</span>{rest.join(":")}</>) : text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-6">
          <h2 data-aos="fade-up" className="text2">What You Can Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {promises.map(([t, d], i) => (
              <div key={t} data-aos="fade-up" className="rounded-2xl border border-slate p-5 space-y-2">
                <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text4">{t}</h3>
                <p className="desc text-silver text-[15px]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionUseCases;
