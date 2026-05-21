import Button from "../../components/common/Button";
import aboutImg from "../../assets/images/faq.jpeg";
import { Link } from "react-router-dom";
import IndustriesSection from "../../components/common/IndustriesSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import ContactForm2 from "../../components/common/ContactForm2";

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
      <section className="min-h-screen flex flex-col justify-center relative">
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            <h1 className="text1 font-montserrat max-w-[60rem]">
              Build Websites, Apps, and AI <br />
              <span className="text-primary font-montserrat">
                That Grow Your Business
              </span>
            </h1>
            <p className="desc max-w-2xl pb-3">
              <span className="font-bold">LinkAI</span> designs and ships
              website development, mobile applications, custom AI software, and
              intelligent chatbots—for real estate, education, e-commerce, and
              healthcare teams that need results, not jargon.
            </p>
            <Button to="/contact-us">Get Started</Button>
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
              <span className="text-primary1">LinkAI:</span> Technology
              Partners for Ambitious Teams
            </h3>
            <p className="desc hyphens-auto">
              We help companies launch and scale digital products with a focused
              stack of services: high-performance websites, native and
              cross-platform apps, production-ready AI software, and chatbots
              that automate support and sales. <br />
              Whether you are modernizing a property portal, launching an
              e-learning platform, growing an online store, or streamlining
              patient workflows, we combine clear communication, solid
              engineering, and practical AI to deliver on time and on target.
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
      <IndustriesSection />
      <ServicesSection />
      <WorkProcess />
      <ContactForm2 />
    </>
  );
}
