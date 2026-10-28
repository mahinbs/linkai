import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice2, HiOutlineUserGroup, HiOutlineChartBar } from "react-icons/hi2";
import { journey, audiences } from "../../content/realEstate";

const audienceIcons = [HiOutlineBuildingOffice2, HiOutlineUserGroup, HiOutlineChartBar];

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
              className="relative border border-black/15 rounded-2xl p-5 space-y-2 bg-mist"
            >
              <span className="absolute -top-4 left-5 w-8 h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center">
                {step.id}
              </span>
              <h3 className="text3 pt-2">{step.title}</h3>
              <p className="desc text-sm">{step.text}</p>
            </li>
          ))}
        </ol>
        {/* One coherent row with an icon each, then the button centred below (Dilli, 28 Oct 2026 brief). */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {audiences.map((a, i) => {
            const Icon = audienceIcons[i % audienceIcons.length];
            return (
              <div
                key={a.title}
                data-aos="fade-up"
                className="rounded-2xl p-6 bg-mist border border-black/10 flex gap-4 items-start transition-all duration-300 hover:border-primary hover:bg-primary/[0.06]"
              >
                <span className="shrink-0 w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <Icon size={24} />
                </span>
                <div className="space-y-1.5">
                  <h3 className="text4">{a.title}</h3>
                  <p className="desc text-black/75">{a.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center pt-2">
          <Link
            to="/contact-us"
            className="btn inline-block bg-primary text-black font-semibold px-8 hover:shadow-large hover:shadow-primary/40"
          >
            Talk to Our Real Estate Solutions Team →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectJourney;
