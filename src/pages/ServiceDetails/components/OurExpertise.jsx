import Mockup, { hasMockup } from "../../../components/mockups/Mockups";

/**
 * "What We Deliver" (Dilli, 28 Oct 2026 brief): one card per feature, each with a small product screen for that feature
 * instead of stock photos, same proportions and corners everywhere, on a white section between the navy ones.
 */
const OurExpertise = ({ content }) => {
  if (!content) return null;
  return (
    <section className="py-16 bg-white text-black">
      <div className="wrapper space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <p data-aos="fade-up" className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What we deliver</p>
          <h2 data-aos="fade-up" className="text1">What You Get</h2>
          <p data-aos="fade-up" className="desc text-black/70">The parts we build for you, each shown as the screen your buyers or team would use.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, i) => (
            <article
              key={item.title}
              data-aos="fade-up"
              // A lone card on the last row sits in the middle column.
              className={`rounded-2xl border border-black/10 bg-mist overflow-hidden flex flex-col ${i === content.length - 1 && content.length % 3 === 1 ? "lg:col-start-2" : ""}`}
            >
              {hasMockup(item.title) ? (
                <Mockup title={item.title} />
              ) : (
                <img src={item.img} className="aspect-[16/11] w-full object-cover" alt={item.title} loading="lazy" />
              )}
              <div className="p-5 space-y-2.5">
                <h3 className="text3">{item.title}</h3>
                <ul className="space-y-1.5">
                  {item.list.map((text) => (
                    <li key={text} className="flex gap-2 text-[15px] text-black/75">
                      <span className="text-primary font-bold">✓</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-black/50">Screens are illustrative. Every solution is designed around your project and your team.</p>
      </div>
    </section>
  );
};

export default OurExpertise;
