import { Link } from "react-router-dom";
import { painPoints } from "../../content/realEstate";
import { createUrlParam } from "../../utils/helper";
import useScrollTriggerAnimations from "../../hooks/useScrollTriggerAnimations";

/**
 * The real estate industry's everyday problems (Dilli, 18 Oct 2026). Since his 24 Oct review each card says only the
 * problem, with a picture people recognise, and links to the solution page that answers it.
 */
const PainPoints = ({ id = "challenges" }) => {
  const scrollRef = useScrollTriggerAnimations();
  return (
    <section
      id={id}
      ref={scrollRef}
      className="max-h-fit bg-panel relative overflow-hidden"
    >
      <div className="pt-14 wrapper">
        <h2 data-aos="fade-up" className="text1 text-center relative z-10">
          The Problems Real Estate Teams{" "}
          <span className="text-primary">Live With Every Day</span>
        </h2>
        <p
          data-aos="fade-up"
          className="desc text-center max-w-3xl mx-auto pt-4 text-[#A4B4C3] relative z-10"
        >
          Find the one that sounds like your week, and see how LinkAI solves
          it.
        </p>
      </div>
      <div className="relative h-full pb-10 xl:pb-16">
        <div className="z-0 absolute top-0 h-1/2 w-full"></div>
        <div className="z-0 absolute top-1/2 h-1/2 w-full bg-black"></div>
        <div className="wrapper grid sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-10 relative z-10">
          {painPoints.map((item) => (
            <Link
              key={item.id}
              data-aos="fade-up"
              to={`/services/${createUrlParam(item.fix)}`}
              className="group block h-full"
            >
              <div className="relative backdrop-blur-lg border border-white/20 rounded-[1rem] overflow-hidden shadow-large shadow-black/20 bg-panel group-hover:border-primary transition-all duration-500 h-full flex flex-col">
                <div className="overflow-hidden aspect-[16/9]">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5 space-y-2 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-widest text-primary">
                    {item.stage}
                  </p>
                  <h3 className="text4">{item.title}</h3>
                  <p className="text-sm text-[#A4B4C3]">{item.short}</p>
                  <p className="mt-auto pt-3 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                    See how LinkAI solves it →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="wrapper text-center pt-10 relative z-10">
          <Link
            to="/contact-us"
            className="btn inline-block bg-primary text-black uppercase min-w-[12rem] hover:shadow-large hover:shadow-primary/60"
          >
            Let's Solve Your Business Challenge
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
