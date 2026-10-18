import { Link } from "react-router-dom";
import { circleImg, moonShapeImg } from "../../content/constant";
import { painPoints } from "../../content/realEstate";
import { createUrlParam } from "../../utils/helper";
import useScrollTriggerAnimations from "../../hooks/useScrollTriggerAnimations";

/**
 * The real estate industry's everyday problems, each with how our technology answers it (Dilli, 18 Oct 2026: visitors
 * should immediately see the industry we serve, the challenges, and how technology helps).
 */
const PainPoints = ({ id = "challenges" }) => {
  const scrollRef = useScrollTriggerAnimations();
  return (
    <section
      id={id}
      ref={scrollRef}
      className="max-h-fit bg-[#242424] relative overflow-hidden"
    >
      <div className="pt-14 wrapper">
        <img
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="toTopLeft object-contain absolute w-[28rem] h-[20rem] top-[-7.5rem] left-[-10rem] -z-0"
          alt=""
        />
        <img
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="toBottomRight object-contain absolute w-[28rem] h-[20rem] bottom-[-7.5rem] right-[-9rem] scale-x-[-1] scale-y-[-1] -z-0"
          alt=""
        />
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          width={150}
          height={150}
          className="fromLeftToTopRight object-contain absolute w-[10rem] h-[10rem] top-[2rem] right-[-2rem] -z-0"
          alt=""
        />
        <h2 data-aos="fade-up" className="text1 text-center relative z-10">
          The Problems Real Estate Teams{" "}
          <span className="text-primary">Live With Every Day</span>
        </h2>
        <p
          data-aos="fade-up"
          className="desc text-center max-w-3xl mx-auto pt-4 text-[#A4B4C3] relative z-10"
        >
          From the first enquiry to the last snag, the same gaps cost developers
          sales, time and goodwill. Here is where it goes wrong, and how our
          technology fixes it.
        </p>
      </div>
      <div className="relative h-full pb-10 xl:pb-16">
        <div className="z-0 absolute top-0 h-1/2 w-full"></div>
        <div className="z-0 absolute top-1/2 h-1/2 w-full bg-black"></div>
        <div className="wrapper grid md:grid-cols-2 xl:grid-cols-4 gap-6 pt-10 relative z-10">
          {painPoints.map((item) => (
            <div key={item.id} data-aos="fade-up" className="h-full">
              <div className="relative group backdrop-blur-lg space-y-3 border border-white/20 p-5 rounded-[1rem] shadow-large shadow-black/20 hover:bg-primary hover:text-black transition-all duration-500 h-full flex flex-col">
                <p className="text-xs uppercase tracking-widest text-primary group-hover:text-black">
                  {item.stage}
                </p>
                <h3 className="text4">{item.title}</h3>
                <p className="desc text-[#A4B4C3] group-hover:text-black">
                  {item.pain}
                </p>
                <div className="border-t border-white/20 group-hover:border-black/30 pt-3 mt-auto space-y-2">
                  <p className="text-sm font-semibold text-primary group-hover:text-black">
                    How technology helps
                  </p>
                  <p className="text-sm">{item.help}</p>
                  <Link
                    to={`/services/${createUrlParam(item.fix)}`}
                    className="inline-block text-sm underline underline-offset-4 hover:text-black"
                  >
                    See the solution
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
