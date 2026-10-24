import { Link, Navigate, useParams } from "react-router-dom";
import ContactForm2 from "../../components/common/ContactForm2";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import OurExpertise from "./components/OurExpertise";
import SolutionUseCases from "./components/SolutionUseCases";
import { ourServices } from "../../content/ourServices";
import { createUrlParam } from "../../utils/helper";

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

  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/80 via-black/55 to-black/20 z-[-1]"></div>
        <img
          src={serviceDetails.banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt={title}
        />
        <div
          data-aos="fade-right"
          className="wrapper flex flex-col gap-3 h-full py-16 justify-center translate-y-[2rem]"
        >
          <div className="flex gap-4 items-center text4 !font-normal">
            <Link to="/services">Services</Link> <span>|</span>
            <p>{title}</p>
          </div>
          <h1 className="text_xl capitalize">{title}</h1>
          {data.subHeading && <p className="desc max-w-2xl text-white/90">{data.subHeading}</p>}
        </div>
        {/* <div className="wrapper flex justify-end -translate-y-1/2">
          <img
            data-aos="fade-up-right"
            src={serviceDetails.img1}
            className="hidden lg:block object-cover aspect-[3/4] h-fit overflow-hidden rounded-xl max-w-[17rem] -rotate-[4deg]"
            alt=""
          />
        </div> */}
      </section>

      <section className="relative overflow-hidden">
        {/* <img
          data-aos="fade-up"
          src={circleImg}
          width={150}
          height={150}
          className="object-contain absolute w-[17rem] h-[17rem] top-[-1rem] left-[-2rem] -z-[1]"
          alt=""
        /> */}
        <div className="wrapper py-14">
          {/* Dilli, 24 Oct 2026 review: the problem and the benefit first, in short lines, then one clear next step. */}
          <div className="rounded-2xl border border-white/15 bg-[#0d1117] p-7 md:p-10 max-w-5xl">
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
            {data.cta && (
              <div className="pt-8">
                <Link
                  to="/contact-us"
                  className="btn inline-block bg-primary text-black uppercase hover:shadow-large hover:shadow-primary/50"
                >
                  {data.cta}
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <OurExpertise content={serviceDetails.ourExpertiseContent || null} />
      <DevelopmentProcess content={serviceDetails.developmentProcess || null} />
      <SolutionUseCases content={serviceDetails.solutionUseCases || null} />
      <ContactForm2 isDark={Boolean(!serviceDetails.solutionUseCases)} buttonLabel={data.cta || "Send Your Enquiry"} />
    </>
  );
};

export default ServiceDetails;
