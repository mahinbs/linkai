import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { companyDetails } from "../../content/constant";
import EnquiryForm from "./EnquiryForm";

/**
 * "Let's talk", at the foot of the home, about and solution pages. Redone after Dilli's 24 Oct 2026 review: one dark
 * panel with a clear headline, a short line, email and phone, and the enquiry form beside it. The addresses live in the
 * footer and on the contact page only, so they are not repeated here.
 */
const ContactForm2 = ({ isDark, buttonLabel = "Send Your Enquiry" }) => {
  return (
    <section
      id="contact"
      className={`${isDark ? "bg-black" : "bg-white"} py-14 relative overflow-hidden`}
    >
      <div className="wrapper">
        <div className="bg-[#0d1a22] text-white rounded-[2rem] border border-primary/30 p-7 md:p-12 grid lg:grid-cols-[42%_1fr] gap-10">
          <div data-aos="fade-right" className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Let's talk
            </p>
            <h2 className="text1 !leading-tight">
              Have a process <span className="text-primary">worth improving?</span>
            </h2>
            <p className="desc text-white/80">
              Tell us what is slowing your team down. We will bring the right
              questions and a clear next step.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                to={`mailto:${companyDetails.email}`}
                className="flex items-center gap-3 hover:text-primary w-fit"
              >
                <span className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                  <IoMail size={18} />
                </span>
                <span className="desc">{companyDetails.email}</span>
              </Link>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="flex items-center gap-3 hover:text-primary w-fit"
              >
                <span className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                  <ImPhone size={16} />
                </span>
                <span className="desc">{companyDetails.phone}</span>
              </Link>
            </div>
          </div>
          <div data-aos="fade-up">
            <EnquiryForm dark buttonLabel={buttonLabel} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm2;
