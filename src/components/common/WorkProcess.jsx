import React from "react";
import { circleImg } from "../../content/constant";

const workProcess = [
  {
    id: 1,
    title: "Discover",
    desc: "We learn your goals, users, and constraints—then define scope, success metrics, and the right technical approach.",
  },
  {
    id: 2,
    title: "Plan",
    desc: "You get a clear roadmap: milestones, timelines, responsibilities, and what each release will deliver.",
  },
  {
    id: 3,
    title: "Design",
    desc: "Wireframes and prototypes bring the experience to life early, so we refine flows before writing production code.",
  },
  {
    id: 4,
    title: "Build & Test",
    desc: "We develop with modern stacks, integrate APIs and AI where needed, and test for performance, security, and reliability.",
  },
  {
    id: 5,
    title: "Launch & Grow",
    desc: "Smooth deployment, handover documentation, and ongoing support so your product keeps improving after go-live.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <img
        data-aos="fade-down-right"
        src={circleImg}
        className="z-[-1] absolute top-[2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
        loading="lazy"
      />
      <img
        data-aos="fade-up-right"
        src={circleImg}
        className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
        alt=""
        loading="lazy"
      />
      <div className="wrapper space-y-3">
        <h3 className="text1 text-center">
          How We Bring Your
          <br />
          <span className="text-primary">Idea to Reality</span>
        </h3>
        <p
         
          className="desc text-center max-w-4xl mx-auto text-[#FEFEFE]"
        >
          From first workshop to production launch, we keep you in the loop at
          every step—so there are no surprises, only steady progress toward a
          product you can rely on.
        </p>
        <div className="pt-5 flex flex-wrap justify-center gap-5 sm:gap-7 max-w-5xl mx-auto">
          {workProcess.map((item) => (
            <div
             
              key={item.id}
              className="group hover:bg-gradient-to-b from-primary/30 to-primary/10 
              flex flex-col gap-3 p-5 sm:p-8 rounded-2xl border-2 border-white/40 
              transition-colors duration-500 sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.5%-1.5rem)]"
            >
              <h4 className="text3 text-primary1 group-hover:text-white">
                {item.title}
              </h4>
              <p className="text-[#FEFEFE] group-hover:text-[#D6D6A6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
