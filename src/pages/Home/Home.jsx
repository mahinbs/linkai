import Button from "../../components/common/Button";
import aboutImg from "../../assets/images/faq.jpeg";
import { Link } from "react-router-dom";
import PainPoints from "../../components/common/PainPoints";
import ProjectJourney from "../../components/common/ProjectJourney";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import ContactForm2 from "../../components/common/ContactForm2";
import HeroBannerVideo from "../../components/common/HeroBannerVideo";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
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
        <div className="wrapper relative z-10 flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            <p className="uppercase tracking-widest text-sm text-primary font-semibold">
              LinkAI Technologies · Real Estate Technology
            </p>
            <h1 className="text1 font-montserrat max-w-[60rem]">
              Technology That Helps Real Estate Developers{" "}
              <span className="text-primary font-montserrat">
                Sell Faster and Build Smoother
              </span>
            </h1>
            <p className="desc max-w-2xl pb-3">
              <span className="font-bold">LinkAI Technologies</span> builds
              websites, apps, AI and automation for the real estate industry.
              We fix what slows developers and builders down: leads that go
              cold, site visits that do not happen, buyers who keep calling for
              updates, and payments that arrive late.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact-us">Talk to Our Team</Button>
              <Button scrollTo="challenges" offset={80}>
                See the Problems We Solve
              </Button>
            </div>
          </div>

          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-2/3 lg:translate-y-0">
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcSet={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="robot"
              width="600"
              height="400"
              className="h-[32vh] lg:h-[40vh] w-fit object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4">
            <h3 className="text2">
              <span className="text-primary1">LinkAI:</span> The Technology
              Partner for Real Estate
            </h3>
            <p className="desc hyphens-auto">
              Real estate is one industry with one set of problems: getting
              enquiries answered, turning them into site visits and bookings,
              keeping buyers informed through construction, collecting on time
              and handing over without complaints. We build technology for
              exactly that, so you do not have to explain your business to a
              general software vendor. <br />
              We start with developers and builders, and we also serve the
              channel partners and sales teams who work with them.
            </p>
            <div className="flex gap-10 pt-4">
              <Link
                to="/about-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Quick Inquiry
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
              alt=""
              className="max-w-[20rem] md:max-w-max mx-auto w-full h-full object-cover aspect-square"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <PainPoints />
      <ProjectJourney />
      <ServicesSection />
      <WorkProcess />
      <ContactForm2 />
    </>
  );
}
