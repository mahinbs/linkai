import { Link } from "react-router-dom";
import banner from "../../assets/images/re/services-hero.jpg";
import Faqs from "../../components/common/Faqs";
import CTA from "../../components/common/CTA";
import { ourServices } from "../../content/ourServices";
import { createUrlParam } from "../../utils/helper";

const Services = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex flex-col h-full py-[6rem] md:pt-[8rem] pb-16 justify-center items-start">
          <p data-aos="fade-right" className="uppercase tracking-widest text-sm text-primary font-semibold">
            Solutions for Real Estate
          </p>
          <h1 data-aos="fade-right" className="text_xl max-w-4xl">
            The Right Technology for Every Real Estate Challenge
          </h1>
          <p data-aos="fade-up" className="desc max-w-2xl mt-4 text-white/90">
            From the first enquiry to handover, we combine websites, apps, AI
            and automation to solve the problems that slow developers and
            builders down.
          </p>
        </div>
      </section>
      <section className="py-14 bg-panel">
        <div className="wrapper grid lg:grid-cols-2 gap-10">
          {ourServices.map((item) => (
            <div data-aos="fade-up" key={item.id} className="mx-auto">
              <Link
                to={`/services/${createUrlParam(item.title)}`}
                className="group bg-white hover:bg-primary transition-all duration-300 text-black rounded-xl grid sm:grid-cols-2 overflow-hidden"
              >
                <div className="w-full overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="group-hover:scale-110 aspect-[16/11] sm:aspect-[4/3] lg:aspect-square transition-all duration-300 object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 space-y-4">
                  <h5 className="text2 capitalize">{item.title}</h5>
                  <p className="desc">{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Faqs />
      <CTA />
    </>
  );
};

export default Services;
