import banner from "../../assets/images/banners/aboutus.png";
import img1 from "../../assets/images/re/about-story.jpg";
import img2 from "../../assets/images/re/about-delivery.jpg";
// The stethoscope picture and the generic coding photo are replaced by real estate teams at work (Dilli, 28 Oct 2026 brief).
import img3 from "../../assets/images/re/about-model.jpg";
import img4 from "../../assets/images/re/about-team-plan.jpg";
import founder from "../../assets/images/founder-dilli.jpg";
import { futureGoals } from "../../content/constant";
import ContactForm2 from "../../components/common/ContactForm2";
import { ctas } from "../../content/ctas";

const AboutUs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-16 items-end">
          <h1 data-aos="fade-right" className="text_xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="py-14 bg-white text-black relative z-0">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-1 gap-8 pt-5">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-[16/5] object-cover"
                alt="Residential apartment buildings"
              />
            </div>
            <div data-aos="fade-up">
              <p className="desc">
                LinkAI Technologies was founded on a simple idea: technology
                should solve real problems, not add complexity. We focus on
                real estate because its challenges are clear and costly: leads
                that go cold, site visits that are missed, buyers who cannot get
                timely updates, and payments or complaints that slip through the
                cracks.
              </p>
              <p className="desc pt-4">
                We work with developers, builders, channel partners and sales
                teams to find where these problems start, then solve them with
                the right mix of AI, automation workflows, websites and apps,
                applied only where it makes a real difference to how they sell,
                operate and look after buyers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* The founder's note (Dilli, 28 Oct 2026 brief: a human touch on the About page), with his photo and his words. */}
      <section className="py-14 bg-mist text-black">
        <div className="wrapper">
          <div data-aos="fade-up" className="max-w-5xl mx-auto rounded-3xl bg-white border border-black/10 p-6 sm:p-8 grid sm:grid-cols-[13rem_1fr] gap-7 items-center shadow-[0_10px_30px_rgba(13,26,34,0.06)]">
            <img src={founder} alt="Dilli Babu, Founder of LinkAI Technologies" className="w-full max-w-[13rem] aspect-square object-cover rounded-2xl mx-auto" loading="lazy" />
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Founder's message</p>
              <h2 className="text2 !leading-snug">Technology should solve real business problems.</h2>
              <p className="desc text-black/75 italic">
                “At LinkAI, our approach starts with understanding how a business operates, where it faces challenges,
                and how technology can make a meaningful difference. We work to build practical solutions around real
                business needs.”
              </p>
              <div>
                <p className="font-semibold">Dilli Babu</p>
                <p className="text-sm text-black/60">Founder, LinkAI Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 relative bg-white text-black overflow-hidden z-0">
        <div
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-3"
        >
          <h2 className="text1 max-w-3xl text-center">
            By Your Side From Kickoff and Beyond
          </h2>
        </div>
        <div className="wrapper pt-12 grid md:grid-cols-2 lg:grid-cols-[40%_1fr] items-center gap-8">
          <div className="">
            <img
              data-aos="fade-right"
              loading="lazy"
              src={img2}
              className="object-cover w-full aspect-square max-h-[30rem] rounded-2xl"
              alt="Planning a project together"
            />
          </div>
          <div data-aos="fade-up" className="space-y-5">
            <h4 className="text2">Transparent, Collaborative Delivery</h4>
            <p className="desc">
              You always know where the project stands and what comes next.
              From the first workshop to launch, and long after, our team works
              as an extension of yours, not a black box.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4">Discovery workshops: </span>
                Align on goals, users, and success metrics before we build.
              </li>
              <li>
                <span className="text4">Sprint reviews: </span>
                See working progress on a regular cadence, not just at the end.
              </li>
              <li>
                <span className="text4">Open feedback loops: </span>
                Your input shapes design, scope, and priorities throughout.
              </li>
              <li>
                <span className="text4">Direct access: </span>
                Reach the people building your product when questions arise.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-14 relative">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Support After Go-Live</h3>
            <p className="desc">
              Launch day is a milestone, not the finish line. We help you keep
              products healthy as traffic, features, and expectations grow.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">
                  Maintenance & releases:{" "}
                </span>
                Security patches, OS updates, and planned feature drops.
              </li>
              <li>
                <span className="text4 text-primary2">Responsive support: </span>
                Fast help when something breaks or needs clarification.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Performance monitoring:{" "}
                </span>
                Watch uptime, speed, and errors before users feel them.
              </li>
              <li>
                <span className="text4 text-primary2">Flexible scaling: </span>
                Expand capacity and scope as your business evolves.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Proactive improvements:{" "}
                </span>
                Recommend fixes and optimizations before they become incidents.
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <img
              loading="lazy"
              src={img3}
              alt="A team working on a building model"
              className="object-cover rounded-2xl w-full h-full max-h-[28rem]"
            />
          </div>
        </div>
      </section>
      <section className="bg-mist text-black py-14 relative overflow-hidden">
        <div className="wrapper grid md:grid-cols-[40%_1fr] items-center gap-7">
          <div data-aos="fade-right" className="">
            <img
              loading="lazy"
              src={img4}
              alt="A real estate team reviewing a floor plan with a tablet"
              className="object-cover w-full aspect-[4/3] rounded-2xl"
            />
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">A Long-Term Technology Partner</h3>
            <p className="desc">
              We invest in relationships, not one-off tickets—so your digital
              stack keeps pace with your business strategy.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Roadmap planning: </span>
                Quarterly reviews to align tech with business goals.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Regular check-ins:{" "}
                </span>
                Stay aligned on priorities, risks, and opportunities.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Continuous enhancement:{" "}
                </span>
                Iterate features as markets and user needs shift.
              </li>
              <li>
                <span className="text4 text-primary2">Priority support: </span>
                Dedicated attention when uptime and speed matter most.
              </li>
              <li>
                <span className="text4 text-primary2">Industry guidance: </span>
                Practical advice grounded in sector experience.
              </li>
              <li>
                <span className="text4 text-primary2">Right-sized scaling: </span>
                Grow teams, infrastructure, and scope without waste.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white text-black relative overflow-hidden z-0">
        <div className="wrapper relative text-center space-y-3">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Vision
          </h2>
          <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
            To be the AI technology partner every real estate business can
            rely on: solving the problems that cost them buyers, time and
            money, from the first enquiry to handover. We start with the
            problem, apply technology with clarity, and stand behind what we
            deliver.
          </p>
        </div>
        <div className="wrapper py-16 text-center">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Future Goals
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <div className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full">
                  <div className="pb-7 text-primary group-hover:text-black">
                    {item.icon}
                  </div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm2 cta={ctas.about} page="About" />
    </>
  );
};

export default AboutUs;
