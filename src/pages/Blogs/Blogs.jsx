import React from "react";
import banner from "../../assets/images/banners/blogs.jpg";
import { blogs } from "../../content/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-end">
          <h1 data-aos="fade-right" className="text_xl text-white">
            Blogs
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper space-y-[3rem]">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text2">Insights & Updates</h2>
            <p className="desc">
              Practical perspectives on websites, mobile apps, AI software, and
              chatbots—from the team building them every day at LinkAI.
            </p>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-7">
              {blogs.map((blog) => (
                <div className="p-3 border border-primary2 rounded-xl flex justify-between flex-col gap-6">
                  <div className="space-y-3">
                    <Link
                      to={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="overflow-hidden aspect-square rounded-xl">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="object-cover w-full aspect-square group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </Link>
                    <h3 className="text3 mt-2">{blog.title}</h3>
                  </div>
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
