import { Link, Navigate, useParams } from "react-router-dom";
import ContactForm2 from "../../components/common/ContactForm2";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import OurExpertise from "./components/OurExpertise";
import SolutionUseCases from "./components/SolutionUseCases";
import { ourServices } from "../../content/ourServices";
import { ctas } from "../../content/ctas";
import Mockup from "../../components/mockups/Mockups";
import towers from "../../assets/images/re/intro-towers.jpg";
import { createUrlParam } from "../../utils/helper";

/**
 * On its own page each solution carries "Real Estate" in its heading (Dilli, 28 Oct 2026 brief); the services list and
 * the page addresses keep the broad titles. The hero shows the solution's own screen beside the headline.
 */
const PAGE = {
  "Project websites and virtual tours": { heading: "Real Estate Project Websites & Virtual Tours", screen: "Project Microsites" },
  "Buyer and channel partner apps": { heading: "Real Estate Buyer & Channel Partner Apps", screen: "Buyer App" },
  "AI for sales and operations": { heading: "AI for Real Estate Sales & Operations", screen: "Lead Scoring and Next Best Action", banner: towers },
  "WhatsApp and voice sales assistants": { heading: "Real Estate WhatsApp & Voice AI Assistants", screen: "Enquiry Response on WhatsApp and Web" },
};

const ServiceDetails = () => {
  const { param } = useParams();

  const data = ourServices.find((item) => createUrlParam(item.title) === param);

  if (!data) {
    return <Navigate to="/services" />;
  }

  const {
    serviceDetails: { whyChooseContent, ...serviceDetails },
    title,
  } = data;

  const page = PAGE[title] || { heading: title };

  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black via-black/85 to-black/40 z-[-1]"></div>
        <img
          src={page.banner || serviceDetails.banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt={page.heading}
        />
        <div className="wrapper w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center pt-28 pb-16">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <div className="flex gap-3 items-center text-sm text-silver">
              <Link to="/services" className="hover:text-primary">Services</Link> <span>/</span>
              <p className="text-white">{page.heading}</p>
            </div>
            <h1 className="text_xl !text-[2.3rem] sm:!text-[3.4rem]">{page.heading}</h1>
            {data.subHeading && <p className="text3 !font-medium max-w-2xl text-silver">{data.subHeading}</p>}
            <div className="pt-2">
              <a href="#contact" className="btn inline-block bg-primary text-black font-semibold px-7 hover:shadow-large hover:shadow-primary/40">
                {(ctas[title] || ctas.home).button} →
              </a>
            </div>
          </div>
          {page.screen && (
            <div data-aos="fade-left" className="hidden lg:block">
              <Mockup title={page.screen} />
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black">
        <div className="wrapper py-14">
          {/* Dilli, 24 Oct 2026 review: the problem and the benefit first, in short lines, then one clear next step. */}
          <div className="rounded-2xl border border-slate bg-panel p-7 md:p-10">
            <h2 data-aos="fade-up" className="text2 text-primary">
              {whyChooseContent.heading}
            </h2>
            {whyChooseContent.intro && (
              <p data-aos="fade-up" className="desc pt-3 text-white/85 max-w-3xl">
                {whyChooseContent.intro}
              </p>
            )}
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6 pt-7 mt-6 border-t border-white/10">
              {whyChooseContent.list.map((item) => (
                <li data-aos="fade-up" key={item.title} className="space-y-1">
                  <p className="text4 text-primary">✓ {item.title}</p>
                  <p className="desc text-white/80">{item.desc}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>
      <OurExpertise content={serviceDetails.ourExpertiseContent || null} />
      <DevelopmentProcess content={serviceDetails.developmentProcess || null} />
      <SolutionUseCases content={serviceDetails.solutionUseCases || null} />
      <ContactForm2 cta={ctas[title] || ctas.home} page={page.heading} />
    </>
  );
};

export default ServiceDetails;
