import { Link, Navigate, useParams } from "react-router-dom";
import { blogs } from "../../content/blogs";
import ContactForm2 from "../../components/common/ContactForm2";

/** One blog post at /blogs/<slug>, written in src/content/blogs.js. */
const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return <Navigate to="/blogs" />;
  return (
    <>
      <section className="pt-[8rem] pb-10">
        <div className="wrapper max-w-3xl space-y-4">
          <Link to="/blogs" className="text-sm text-primary hover:underline">← All posts</Link>
          <p className="text-xs uppercase tracking-widest text-primary">
            {post.category} · {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <h1 className="text1 !leading-tight">{post.title}</h1>
          <img src={post.image} alt={post.title} className="w-full aspect-video object-cover rounded-2xl" />
        </div>
      </section>
      <article className="pb-14">
        <div className="wrapper max-w-3xl space-y-5">
          {post.body.map((block, i) =>
            block.h ? (
              <h2 key={i} className="text3 text-primary pt-3">{block.h}</h2>
            ) : block.list ? (
              <ul key={i} className="list-disc pl-6 space-y-2 desc text-white/85">
                {block.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : (
              <p key={i} className="desc text-white/85">{block.p}</p>
            )
          )}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((t) => (
                <span key={t} className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/70">#{t}</span>
              ))}
            </div>
          )}
        </div>
      </article>
      <ContactForm2 isDark />
    </>
  );
};

export default BlogPost;
