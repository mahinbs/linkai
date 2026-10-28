import img from "../../assets/images/cta-img.png";
import { Link } from "react-router-dom";

/**
 * The closing band on the services page. Dilli's copy from his 24 Oct 2026 review, with the picture put back beside it
 * (his 28 Oct brief: "update the content only, not the visual; visuals are so important to our website").
 */
const CTA = ({
  title = "Turn More Property Enquiries Into Site Visits",
  text = "Help your sales team respond faster, follow up consistently, and keep potential buyers moving toward their next step with smarter technology.",
  button = "Let's Talk",
}) => {
  return (
    <div className="py-12 bg-black">
      <div className="wrapper">
        <div data-aos="fade-up" className="grid md:grid-cols-[38%_1fr] rounded-3xl overflow-hidden bg-primary">
          <img src={img} alt="A sales team working on property enquiries" loading="lazy" className="w-full h-full min-h-[14rem] object-cover" />
          <div className="text-black px-7 sm:px-12 py-10 space-y-4 flex flex-col justify-center">
            <h2 className="text1 !leading-tight max-w-3xl">{title}</h2>
            <p className="desc max-w-3xl text-black/80">{text}</p>
            <div className="pt-2">
              <Link to="/contact-us" className="btn inline-block bg-black text-white font-semibold hover:bg-black/85 px-7">
                {button} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
