import Button from "../../components/common/Button";
import webAboutImg from "../../assets/images/landing page/web-about.jpg";
import appAboutImg from "../../assets/images/landing page/app-about.png";
import IndustriesSection from "../../components/common/IndustriesSection";
import { Link } from "react-scroll";
import ContactForm2 from "../../components/common/ContactForm2";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import { ourServices } from "../../content/ourServices";
import Testimonials from "../../components/common/Testimonials";
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

  const data = ourServices.find((service) =>
    service.title === isWeb ? "Website development" : "Application development"
  ).serviceDetails;

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
                Websites That Convert Visitors{" "}
                <span className="text-primary font-montserrat">
                  Into Customers
                </span>
              </h1>
            ) : (
              <h1 className="text1 font-montserrat max-w-[55rem]">
                Mobile Apps Built for{" "}
                <span className="text-primary font-montserrat">
                  Growth and Retention
                </span>
              </h1>
            )}
            <p className="desc max-w-2xl pb-3">
              {isWeb
                ? "Your website is often the first impression—and the hardest working salesperson you have. We design and build fast, secure sites that reflect your brand, rank well, and turn traffic into leads and sales."
                : "Whether you need iOS, Android, or one codebase for both, we build apps that feel native, perform under load, and integrate cleanly with your backend, payments, and analytics."}
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
              {isWeb ? "Website Development" : "Application Development"}
            </h3>
            <h3 className="text2">
              Built for{" "}
              <span className="text-primary1">
                {isWeb
                  ? "Speed, SEO, and Conversions"
                  : "iOS, Android, and Beyond"}
              </span>
            </h3>
            <p
              className="desc hyphens-auto w-full"
              dangerouslySetInnerHTML={{
                __html: isWeb
                  ? `We build marketing sites, e-commerce stores, and custom web applications using modern stacks—React, Next.js, and proven CMS platforms. Every project balances design, performance, and maintainability. <br/> From information architecture to launch, you get responsive layouts, clean code, analytics setup, and integrations with CRMs, payments, and third-party APIs. <br/> We work closely with your team so timelines stay realistic, feedback is incorporated early, and the final product supports your business goals—not just a pretty homepage.`
                  : `We deliver native and cross-platform apps with Flutter and React Native, plus backend APIs and cloud hosting when you need them. Features like push notifications, offline mode, and secure authentication are planned from day one. <br/> Our process covers UX flows, prototyping, development, testing on real devices, and store submission support. Post-launch, we help with updates, monitoring, and new feature roadmaps. <br/> Whether you are launching an MVP or scaling an existing product, we focus on stability, speed, and a user experience that earns retention.`,
              }}
            ></p>
            <h5 className="text4">
              <span className="text-primary">LinkAI:</span>{" "}
              {isWeb
                ? "From landing pages to full platforms—we ship web that works."
                : "Apps your users open again and again."}
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
      <IndustriesSection />
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
      <Testimonials />
      <ContactForm2 />
    </>
  );
}
