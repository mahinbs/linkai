import Button from "../../components/common/Button";
import aboutImg from "../../assets/images/re/intro-towers.jpg";
import { Link } from "react-router-dom";
import PainPoints from "../../components/common/PainPoints";
import ProjectJourney from "../../components/common/ProjectJourney";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import { useEffect } from "react";
import gsap from "gsap";
import ContactForm2 from "../../components/common/ContactForm2";
import { ctas } from "../../content/ctas";
import HeroBannerVideo from "../../components/common/HeroBannerVideo";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -14,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <HeroBannerVideo />
        <div className="wrapper relative z-10 flex flex-col lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5 pb-16 lg:pb-0">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              LinkAI Technologies · AI Technology Partner for Real Estate
            </p>
            <h1 className="text1 font-montserrat max-w-[60rem]">
              Build a Smarter Real Estate Business:{" "}
              <span className="text-primary font-montserrat">
                Sell Faster, Operate Smoother
              </span>
            </h1>
            <p className="desc max-w-2xl pb-3">
              AI automation and custom software that help developers and
              builders answer every enquiry, turn more of them into site
              visits, and give buyers a better experience from booking to
              handover.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact-us">Discuss Your Requirements</Button>
              <Button scrollTo="challenges" offset={80}>
                See the Challenges We Solve
              </Button>
            </div>
          </div>

          {/* Dilli's review (26 Oct 2026): the floating robot did not say "real estate"; this panel shows what LinkAI does
              for a sales team, in the same spot and with the same gentle float. */}
          <div className="w-full lg:h-[50vh] flex justify-center lg:justify-start items-end lg:pb-[6rem]">
            <div
              id="robot"
              aria-label="What LinkAI does for a real estate sales team"
              className="w-full max-w-sm rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 space-y-3 shadow-2xl"
            >
              <p className="text-xs uppercase tracking-widest text-white/60">
                Today, on autopilot
              </p>
              {[
                ["WhatsApp enquiry", "2 BHK, Whitefield", "Answered in 20 seconds"],
                ["Site visit", "Saturday, 11:00 AM", "Booked and reminded"],
                ["Buyer update", "Tower B, floor 9 slab", "Sent to 140 buyers"],
              ].map(([title, detail, done]) => (
                <div key={title} className="flex items-start gap-3 rounded-xl bg-black/40 p-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-white/70 truncate">{detail}</p>
                    <p className="text-xs text-primary mt-0.5">{done}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4">
            <p className="uppercase tracking-widest text-sm text-primary1 font-semibold">
              Why LinkAI
            </p>
            <h3 className="text2">
              Your Business Is Unique.{" "}
              <span className="text-primary1">
                Your Technology Should Be Too.
              </span>
            </h3>
            <p className="desc">
              Real estate does not run on a single playbook. Every project,
              team and buyer journey has its own moving parts, and a generic
              software vendor rarely understands them.
            </p>
            <p className="desc">
              LinkAI is your AI technology partner for real estate. We start
              with where your business gets stuck, then bring the right
              combination of AI, automation, websites and apps to fix it, so
              you get practical systems that create momentum, not another tool
              to manage.
            </p>
            <ul className="grid gap-3 sm:grid-cols-3 pt-2">
              {[
                ["Enquiries", "answered in seconds"],
                ["Site visits", "booked and followed up"],
                ["Buyers", "kept informed to handover"],
              ].map(([title, text]) => (
                <li
                  key={title}
                  className="border border-black/20 rounded-xl p-4"
                >
                  <p className="font-semibold text-lg">{title}</p>
                  <p className="text-sm text-black/70">{text}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 sm:gap-10 pt-4">
              <Link
                to="/about-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                About LinkAI
              </Link>
              <Link
                to="/contact-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Tell Us Where It Gets Stuck
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <img
              data-aos="fade-up"
              loading="lazy"
              src={aboutImg}
              width={500}
              height={600}
              alt="Residential towers in an Indian city"
              className="max-w-[20rem] md:max-w-max mx-auto w-full h-full object-cover aspect-square rounded-2xl"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <PainPoints />
      <ProjectJourney />
      <ServicesSection />
      <WorkProcess />
      <ContactForm2 cta={ctas.home} page="Home" />
    </>
  );
}
