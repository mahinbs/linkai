import { Link } from "react-router-dom";
import { journey, audiences } from "../../content/realEstate";

/** The life of a project, with where technology helps at each step, and who we build for. */
const ProjectJourney = () => {
  return (
    <section className="py-14 bg-white text-black">
      <div className="wrapper space-y-12">
        <div className="space-y-3 text-center">
          <h2 data-aos="fade-up" className="text1">
            Help at Every Step of{" "}
            <span className="text-primary1">a Project</span>
          </h2>
          <p data-aos="fade-up" className="desc max-w-3xl mx-auto">
            A real estate project is won or lost across five stages. At each
            one we solve a different problem, so your sales, site and accounts
            teams work from the same facts.
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {journey.map((step) => (
            <li
              key={step.id}
              data-aos="fade-up"
              className="relative border border-black/15 rounded-2xl p-5 space-y-2 bg-[#f5f6f6]"
            >
              <span className="absolute -top-4 left-5 w-8 h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center">
                {step.id}
              </span>
              <h3 className="text3 pt-2">{step.title}</h3>
              <p className="desc text-sm">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              data-aos="fade-up"
              className={`rounded-2xl p-6 space-y-2 border ${
                // White, black, white: the middle card carries the dark tone (Dilli, 24 Oct 2026 review).
                i % 2 === 1
                  ? "bg-black text-white border-black"
                  : "bg-[#f5f6f6] border-black/15"
              }`}
            >
              <h3 className="text3">{a.title}</h3>
              <p className="desc">{a.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/contact-us"
            className="btn inline-block bg-primary text-black uppercase min-w-[12rem] hover:shadow-large hover:shadow-primary/60"
          >
            Talk to Our AI Solutions Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectJourney;
