import img from "../../assets/images/cta-img.png";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="py-8">
      <div className="wrapper !px-0">
        <div className="grid md:grid-cols-[30%,1fr] bg-primary">
          <div data-aos="fade-right">
            <img
              src={img}
              alt="CTA"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div data-aos="fade-up" className="wrapper space-y-7 text-black px-[3rem] sm:px-[5rem] py-[3rem]">
            <h2 className="text1">Ready to start your Website at LinkAI?</h2>
            <div>
              <Link
                to="/contact-us"
                className="p-3 btn !rounded bg-black text-white hover:bg-black/80"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
