import Button from "../../components/common/Button";
import webAboutImg from "../../assets/images/landing page/web-about.jpg";
import appAboutImg from "../../assets/images/landing page/app-about.png";
import PainPoints from "../../components/common/PainPoints";
import { Link } from "react-scroll";
import ContactForm2 from "../../components/common/ContactForm2";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import { ourServices } from "../../content/ourServices";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import ServicesSlider from "../../components/landingpage/ServicesSlider";
import ClientLogos from "../../components/common/ClientLogos";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import HeroBannerVideo from "../../components/common/HeroBannerVideo";

export default function LandingPage({ page }) {
  const isWeb = page === "web";

  // The web page shows the project websites solution, the app page the buyer and partner apps (by id; the old lookup always took the first).
  const data = ourServices.find((service) => service.id === (isWeb ? 1 : 2)).serviceDetails;

  const portfolio = isWeb ? webDevelopmentPortfolio : appDevelopmentPortfolio;

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
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <HeroBannerVideo />
        <div className="wrapper relative z-10 flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            {isWeb ? (
              <h1 className="text1 font-montserrat max-w-[60rem]">
                Project Websites That Turn Property Seekers{" "}
                <span className="text-primary font-montserrat">
                  Into Site Visits
                </span>
              </h1>
            ) : (
              <h1 className="text1 font-montserrat max-w-[55rem]">
                Apps for Your Buyers and{" "}
                <span className="text-primary font-montserrat">
                  Channel Partners
                </span>
              </h1>
            )}
            <p className="desc max-w-2xl pb-3">
              {isWeb
                ? "For a real estate developer, the project website is the first sales call. We build fast project sites, virtual tours and campaign pages that answer buyers' first questions and send every enquiry straight to your sales team."
                : "Buyers want construction updates and payment details. Channel partners want clear lead ownership and commissions. We build the apps that give them both, connected to your CRM and accounts."}
            </p>
            <Button scrollTo="contact" offset={100}>
              Get Started
            </Button>
          </div>

          {/* <div className="h-[50vh] translate-y-[5rem] lg:h-full w-full lg:w-2/3 lg:absolute -right-[10%] top-1/2 lg:-translate-y-1/2 z-10">
            <Spline
              className=""
              scene="https://prod.spline.design/4q-1rQRL9NalrNPY/scene.splinecode"
            />
          </div> */}
          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-2/3 lg:translate-y-0">
            {/* translate-y-[5rem] lg:h-full w-full lg:w-2/3 lg:absolute -right-[10%] top-1/2 lg:-translate-y-1/2 */}
            {/* <Spline
              className=""
              scene="https://prod.spline.design/4q-1rQRL9NalrNPY/scene.splinecode"
            /> */}
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
      <section id="about" className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4 w-full">
            <h3 className="text2">
              <span className="text-primary1">LinkAI</span>{" "}
              {isWeb ? "Project Websites for Real Estate" : "Apps for Real Estate"}
            </h3>
            <h3 className="text2">
              Built for{" "}
              <span className="text-primary1">
                {isWeb
                  ? "Visits, Not Just Page Views"
                  : "Buyers, Partners and Site Teams"}
              </span>
            </h3>
            <p
              className="desc hyphens-auto w-full"
              dangerouslySetInnerHTML={{
                __html: isWeb
                  ? `We build project microsites, 360 degree virtual tours, live unit availability and landing pages for your ad campaigns. Every page leads to one action: book a site visit. <br/> Enquiries from your site and your ads go into one place with the source attached, so you can see which campaign brings visits and which only brings clicks. <br/> We work with your marketing and sales teams so the launch date holds and the pages say what your buyers need to hear.`
                  : `We build buyer apps with construction progress, payment schedules and documents, channel partner apps for lead registration and commissions, and site sales apps for inventory and cost sheets. <br/> They connect to the CRM, accounts and inventory sheets you already use, so there is one source of truth. <br/> We start with the app that fixes your most painful gap, test it with your team, and add the next once it works.`,
              }}
            ></p>
            <h5 className="text4">
              <span className="text-primary">LinkAI:</span>{" "}
              {isWeb
                ? "A launch page for every project, built to bring visits."
                : "Fewer calls to your team, clearer records for everyone."}
            </h5>
            <div className="flex gap-10 pt-4">
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
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
              src={isWeb ? webAboutImg : appAboutImg}
              width={500}
              height={600}
              alt=""
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <ServicesSlider
        service={isWeb ? "Web" : "App"}
        data={data.ourExpertiseContent}
      />
      <PainPoints id="challenges" />
      <DevelopmentProcess content={data.developmentProcess} />
      <section id="works" className="py-14">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center text-primary">
            Selected Work
          </h2>
          <div className="flex flex-wrap justify-center gap-7 pt-8">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="group relative aspect-square sm:w-[calc(100%/2-1.75rem)] lg:w-[calc(100%/3-1.75rem)] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-110 transition-all duration-500"
                />
                <h5 className="text3 absolute w-full bottom-0 left-0 py-3 bg-primary text-black text-center">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientLogos />
      <ContactForm2 />
    </>
  );
}
