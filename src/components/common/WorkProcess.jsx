import React from "react";

const workProcess = [
  {
    id: 1,
    title: "Discover",
    desc: "We learn your projects, your sales process and where leads and time are lost, then agree what success looks like in your numbers.",
  },
  {
    id: 2,
    title: "Plan",
    desc: "You get a clear roadmap: what we build first, timelines, who does what, and what each release changes for your team.",
  },
  {
    id: 3,
    title: "Design",
    desc: "Screens and flows for your sales team, buyers and partners are shown early, so we refine them before building.",
  },
  {
    id: 4,
    title: "Build & Test",
    desc: "We build, connect your CRM, inventory and payment records, and test with your own team on real project data.",
  },
  {
    id: 5,
    title: "Launch & Grow",
    desc: "Launch with one project first, learn from real use, then extend to every project with support along the way.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <div className="wrapper space-y-3">
        <h3 className="text1 text-center">
          How We Work With
          <br />
          <span className="text-primary">Real Estate Teams</span>
        </h3>
        <p
         
          className="desc text-center max-w-4xl mx-auto text-[#FEFEFE]"
        >
          From first workshop to launch, we keep you in the loop at every
          step. Start with the problem that costs you most, see it fixed, then
          add the next.
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
