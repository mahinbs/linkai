import { Link } from "react-router-dom";

/**
 * The closing band on the services page (Dilli, 24 Oct 2026 review: solution-led, not sales-led). His suggested copy,
 * one button, no picture.
 */
const CTA = ({
  title = "Turn More Property Enquiries Into Site Visits",
  text = "Help your sales team respond faster, follow up consistently, and keep potential buyers moving toward their next step with smarter technology.",
  button = "Let's Talk",
}) => {
  return (
    <div className="py-10">
      <div className="wrapper">
        <div data-aos="fade-up" className="bg-primary text-black rounded-2xl px-7 sm:px-12 py-10 space-y-4">
          <h2 className="text1 !leading-tight max-w-3xl">{title}</h2>
          <p className="desc max-w-3xl text-black/80">{text}</p>
          <div className="pt-2">
            <Link to="/contact-us" className="btn inline-block bg-black text-white hover:bg-black/80 px-7">
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
