import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { companyDetails, logo } from "../content/constant";

/**
 * After an enquiry (Dilli, 28 Oct 2026 brief): the logo centred above the heading, his wording, one button home and
 * clickable email, phone and WhatsApp for anyone who needs us sooner. Nothing else on the page.
 */
const ThankYou = () => {
  const phone = companyDetails.phone.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2");
  const contacts = [
    { href: `mailto:${companyDetails.email}`, icon: <IoMail size={18} />, label: companyDetails.email },
    { href: `tel:${companyDetails.phone}`, icon: <ImPhone size={16} />, label: phone },
    { href: companyDetails.whatsapp, icon: <BsWhatsapp size={17} />, label: "Chat on WhatsApp", external: true },
  ];
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-5 py-16">
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        <Link to="/" aria-label="LinkAI home">
          <img src={logo} alt="LinkAI Technologies" className="w-[11rem] sm:w-[13rem] object-contain" />
        </Link>
        <h1 className="text1 text-primary mt-8">Thank You for Reaching Out!</h1>
        <p className="text3 mt-4">Your enquiry has been received.</p>
        <p className="desc text-silver mt-3 max-w-xl">
          Thank you for considering LinkAI Technologies. Our team will review your requirements and get in touch to
          discuss the next steps.
        </p>
        <Link to="/" className="btn bg-primary text-black font-semibold px-8 mt-8 hover:shadow-large hover:shadow-primary/40">
          Back to Home →
        </Link>
        <div className="w-full mt-12">
          <div className="flex items-center gap-4 text-sm text-silver">
            <span className="flex-1 h-px bg-slate" />
            Need to reach us sooner?
            <span className="flex-1 h-px bg-slate" />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-3 hover:text-primary"
              >
                <span className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">{c.icon}</span>
                <span className="desc">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
