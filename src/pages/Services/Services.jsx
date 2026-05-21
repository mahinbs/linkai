import { Link } from "react-router-dom";
import banner from "../../assets/images/banners/services.jpg";
import Testimonials from "../../components/common/Testimonials";
import Faqs from "../../components/common/Faqs";
import CTA from "../../components/common/CTA";
import { ourServices } from "../../content/ourServices";
import { createUrlParam } from "../../utils/helper";

const Services = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/50 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-center justify-start">
          <h1 data-aos="fade-right" className="text_xl">
            Our Services
          </h1>
          <p data-aos="fade-up" className="desc max-w-2xl mt-4 text-white/90">
            Website development, application development, AI software, and
            chatbots—end to end, from strategy to launch.
          </p>
        </div>
      </section>
      <section className="py-14 bg-[#111111]">
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
      <Testimonials />
    </>
  );
};

export default Services;
