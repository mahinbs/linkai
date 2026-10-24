import banner from "../../assets/images/banners/contactus.png";
import { Link } from "react-router-dom";
import { IoLocation, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { companyDetails } from "../../content/constant";
import MapComponent from "../../components/website/MapComponent";
import EnquiryForm from "../../components/common/EnquiryForm";

const directions = (address) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

/**
 * Contact (Dilli, 24 Oct 2026 review): "Let's Talk" with his copy, the enquiry form first, then how to reach us and
 * where we are, with a short map and a "Get Directions" link. On a phone it reads in that order: the ask, the form, the
 * details, the map.
 */
const ContactUs = () => {
  const card = "flex gap-4 items-start rounded-2xl border border-white/15 bg-white/[0.04] p-4";
  const icon = "w-11 h-11 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center";
  return (
    <>
      <section className="relative w-full aspect-video min-h-[45vh] max-h-[60vh]">
        <div className="absolute inset-0 h-full w-full bg-black/40 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-12 items-end">
          <h1 data-aos="fade-right" className="text_xl text-white">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper grid lg:grid-cols-[1fr_42%] gap-10">
          <div data-aos="fade-up" className="space-y-6">
            <div className="space-y-3">
              <h2 className="text1 text-primary">Let's Talk</h2>
              <h3 className="text2">What's Holding Your Real Estate Business Back?</h3>
              <p className="desc text-white/80 max-w-2xl">
                Tell us about your business, your current challenges and what
                you'd like to improve. We'll explore how the right technology
                can help and recommend a practical next step.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-primary/30 bg-[#0d1a22] p-6 md:p-8">
              <EnquiryForm dark buttonLabel="Discuss Your Project" />
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-4">
            <Link to={`mailto:${companyDetails.email}`} className={`${card} hover:border-primary`}>
              <span className={icon}><IoMail size={20} /></span>
              <span>
                <span className="block font-semibold">Email</span>
                <span className="block text-sm text-white/70">We reply within one working day.</span>
                <span className="block text-primary">{companyDetails.email}</span>
              </span>
            </Link>
            <Link to={`tel:${companyDetails.phone}`} className={`${card} hover:border-primary`}>
              <span className={icon}><ImPhone size={18} /></span>
              <span>
                <span className="block font-semibold">Phone / WhatsApp</span>
                <span className="block text-sm text-white/70">Monday to Saturday, working hours.</span>
                <span className="block text-primary">{companyDetails.phone}</span>
              </span>
            </Link>
            {[companyDetails.location, companyDetails.location2].map((address, i) => (
              <div key={address} className={card}>
                <span className={icon}><IoLocation size={20} /></span>
                <span>
                  <span className="block font-semibold">{i === 0 ? "Office" : "Second office"}</span>
                  <span className="block text-sm text-white/70">{address}</span>
                  <a
                    href={directions(address)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block pt-1 text-primary text-sm font-semibold hover:underline"
                  >
                    Get Directions →
                  </a>
                </span>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-white/15">
              <MapComponent compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
