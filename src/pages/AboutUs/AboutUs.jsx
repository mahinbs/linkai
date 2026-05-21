import banner from "../../assets/images/banners/aboutus.png";
import img1 from "../../assets/images/our-story.png";
import img2 from "../../assets/images/client-engagement-and-support.png";
import img3 from "../../assets/images/ongoing-support.png";
import img4 from "../../assets/images/Partnership Beyond Projects.png";
import { circleImg, futureGoals } from "../../content/constant";
import Testimonials from "../../components/common/Testimonials";
import ContactForm2 from "../../components/common/ContactForm2";

const AboutUs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-16 items-end">
          <h1 data-aos="fade-right" className="text_xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="py-14 bg-white text-black relative z-0">
        <div
          data-aos="fade-up"
          className="bg-primary absolute z-[-1] right-0 top-14 w-[6rem] h-[20rem]"
        ></div>
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-1 gap-8 pt-5">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-[16/5] object-cover"
                alt=""
              />
            </div>
            <div data-aos="fade-up">
              <p className="desc">
                LinkAI was founded on a simple idea: technology should solve
                real problems, not add complexity. Today we partner with
                businesses in real estate, education, e-commerce, and healthcare
                to deliver websites, mobile apps, AI software, and chatbots that
                are reliable, measurable, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 relative bg-white text-black overflow-hidden z-0">
        <div className="absolute z-[-1] top-[-3rem] left-[-3rem] h-[18rem] w-[12rem] bg-primary rounded-ee-full"></div>
        <div
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-3"
        >
          <h2 className="text1 max-w-3xl text-center">
            We Stay Close From Kickoff to Launch
          </h2>
          <div className="h-2 w-[18rem] bg-white"></div>
        </div>
        <div className="wrapper pt-12 grid md:grid-cols-2 lg:grid-cols-[40%_1fr] items-center gap-8">
          <div className="">
            <img
              data-aos="fade-right"
              loading="lazy"
              src={img2}
              className="object-contain w-full aspect-square max-h-[30rem]"
              alt="Client Engagement & Support"
            />
          </div>
          <div data-aos="fade-up" className="space-y-5">
            <h4 className="text2">Transparent, Collaborative Delivery</h4>
            <p className="desc">
              You always know where the project stands and what comes next. Our
              team works as an extension of yours—not a black box offshore.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4">Discovery workshops: </span>
                Align on goals, users, and success metrics before we build.
              </li>
              <li>
                <span className="text4">Sprint reviews: </span>
                See working progress on a regular cadence, not just at the end.
              </li>
              <li>
                <span className="text4">Open feedback loops: </span>
                Your input shapes design, scope, and priorities throughout.
              </li>
              <li>
                <span className="text4">Direct access: </span>
                Reach the people building your product when questions arise.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-14 relative">
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
          alt=""
        />
        <img
          data-aos="fade-up-right"
          loading="lazy"
          src={circleImg}
          className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
          alt=""
        />
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Support After Go-Live</h3>
            <p className="desc">
              Launch day is a milestone, not the finish line. We help you keep
              products healthy as traffic, features, and expectations grow.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">
                  Maintenance & releases:{" "}
                </span>
                Security patches, OS updates, and planned feature drops.
              </li>
              <li>
                <span className="text4 text-primary2">Responsive support: </span>
                Fast help when something breaks or needs clarification.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Performance monitoring:{" "}
                </span>
                Watch uptime, speed, and errors before users feel them.
              </li>
              <li>
                <span className="text4 text-primary2">Flexible scaling: </span>
                Expand capacity and scope as your business evolves.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Proactive improvements:{" "}
                </span>
                Recommend fixes and optimizations before they become incidents.
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <img
              loading="lazy"
              src={img3}
              alt="Ongoing Support"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="z-[-2] bg-white text-black py-14 relative overflow-hidden">
        <div
          data-aos="fade-down-right"
          className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#239FD2)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
        ></div>
        <div
          data-aos="fade-up-right"
          className="z-[-1] w-[15rem] h-[20rem] rounded-t-[6rem] bg-gradient-to-b from-primary to-transparent absolute bottom-[-2rem] right-[-2rem] drop-shadow-2xl"
        ></div>
        <div className="wrapper grid md:grid-cols-[40%_1fr] items-center gap-7">
          <div data-aos="fade-right" className="">
            <img
              loading="lazy"
              src={img4}
              alt="Partnership Beyond Projects"
              className="object-contain w-full"
            />
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">A Long-Term Technology Partner</h3>
            <p className="desc">
              We invest in relationships, not one-off tickets—so your digital
              stack keeps pace with your business strategy.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Roadmap planning: </span>
                Quarterly reviews to align tech with business goals.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Regular check-ins:{" "}
                </span>
                Stay aligned on priorities, risks, and opportunities.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Continuous enhancement:{" "}
                </span>
                Iterate features as markets and user needs shift.
              </li>
              <li>
                <span className="text4 text-primary2">Priority support: </span>
                Dedicated attention when uptime and speed matter most.
              </li>
              <li>
                <span className="text4 text-primary2">Industry guidance: </span>
                Practical advice grounded in sector experience.
              </li>
              <li>
                <span className="text4 text-primary2">Right-sized scaling: </span>
                Grow teams, infrastructure, and scope without waste.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="py-14 bg-white text-black relative overflow-hidden z-0">
        <div
          data-aos="fade-down"
          className="absolute z-[-1] top-[-3rem] lef-[-3rem] h-[18rem] w-[8rem] bg-primary rounded-ee-[8rem]"
        />
        <div className="wrapper relative text-center space-y-3">
          <div
            data-aos="fade-up-right"
            className="z-[-1] w-[6rem] h-[6rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#239FD2)] absolute top-full right-[15%] drop-shadow-2xl"
          ></div>
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Vision
          </h2>
          <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
            To make advanced technology approachable for every ambitious
            business—websites that perform, apps people rely on, AI that saves
            time, and chatbots that strengthen customer relationships. We build
            with clarity, ship with discipline, and stand behind what we deliver.
          </p>
        </div>
        <div className="wrapper py-16 text-center">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Future Goals
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <div className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full">
                  <div className="pb-7 text-primary group-hover:text-black">
                    {item.icon}
                  </div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm2 isDark={true} />
    </>
  );
};

export default AboutUs;
