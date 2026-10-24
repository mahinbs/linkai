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
              Practical ideas for real estate developers and builders: how to
              answer every enquiry, book more site visits and keep buyers
              informed, from the LinkAI team.
            </p>
          </div>
          {/* One post per row on a phone, two on a tablet, three on a laptop (Dilli, 24 Oct 2026: they were squeezed side by side). */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.slug}`}
                className="group p-3 border border-primary2/60 rounded-xl flex flex-col gap-4 hover:border-primary transition-all duration-300"
              >
                <div className="overflow-hidden aspect-video rounded-lg">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 px-1 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-widest text-primary">
                    {blog.category} · {new Date(blog.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                  <h3 className="text3 !leading-snug">{blog.title}</h3>
                  <p className="desc text-white/75">{blog.excerpt}</p>
                  <p className="mt-auto pt-2 font-semibold text-primary group-hover:underline underline-offset-4">
                    Read More →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper space-y-[3rem]">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text2">Insights & Updates</h2>
            <p className="desc">
              Practical ideas for real estate developers and builders: how to
              answer every enquiry, book more site visits and keep buyers
              informed, from the LinkAI team.
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
