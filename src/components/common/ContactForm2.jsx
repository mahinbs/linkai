import { ImPhone } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { companyDetails } from "../../content/constant";
import { ctas } from "../../content/ctas";
import EnquiryForm from "./EnquiryForm";

/**
 * "Let's talk", at the foot of the home, about, blog and solution pages. Since Dilli's 28 Oct 2026 brief every page has
 * its own heading, line, dropdown options and button (content/ctas.js), and the left column lists three labelled ways to
 * reach the team: Email, Phone and WhatsApp. Two columns: contact channels left, the form right.
 */
const ContactForm2 = ({ isDark = true, cta = ctas.home, page = "" }) => {
  const phone = companyDetails.phone.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2");
  const channels = [
    { href: `mailto:${companyDetails.email}`, icon: <IoMail size={18} />, title: "Email", line: companyDetails.email },
    { href: `tel:${companyDetails.phone}`, icon: <ImPhone size={16} />, title: "Phone", line: phone },
    { href: companyDetails.whatsapp, icon: <BsWhatsapp size={17} />, title: "WhatsApp", line: "Chat with our team", more: "Start a conversation →", external: true },
  ];
  return (
    <section id="contact" className={`${isDark ? "bg-black" : "bg-mist"} py-16 relative overflow-hidden`}>
      <div className="wrapper">
        <div className="bg-panel text-white rounded-3xl border border-slate p-7 md:p-12 grid lg:grid-cols-[42%_1fr] gap-10 lg:gap-14">
          <div data-aos="fade-right" className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">{cta.kicker}</p>
            <h2 className="text2 !leading-tight">{cta.heading}</h2>
            <p className="desc text-silver">{cta.text}</p>
            <ul className="space-y-4 pt-3 border-t border-slate">
              {channels.map((c) => (
                <li key={c.title} className="pt-1">
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 w-fit"
                  >
                    <span className="mt-0.5 w-10 h-10 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center">{c.icon}</span>
                    <span>
                      <span className="block font-semibold">{c.title}</span>
                      <span className="block desc text-silver group-hover:text-primary">{c.line}</span>
                      {c.more && <span className="block text-sm text-[#25D366] pt-0.5">{c.more}</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-up">
            <EnquiryForm dark buttonLabel={cta.button} options={cta.options} page={page || cta.heading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm2;
