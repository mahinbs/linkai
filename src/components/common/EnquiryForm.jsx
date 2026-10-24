import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../../content/constant";

/** What a visitor can pick under "How can we help?" (Dilli, 24 Oct 2026 review). */
export const helpOptions = [
  "Website Development",
  "AI & Automation",
  "Business Applications",
  "System Integration",
  "Other",
];

/**
 * The one enquiry form, on the contact page and at the foot of other pages (Dilli, 24 Oct 2026: qualify the visitor
 * without making it a long questionnaire). Only name, email, what they need and the message are required; the phone is
 * optional and any email address is accepted, not only a work one.
 */
const EnquiryForm = ({ dark = true, buttonLabel = "Send Your Enquiry" }) => {
  const { setLoading } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { fullName: "", company: "", email: "", phone: "", help: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const body =
        `Full Name : ${values.fullName}\n\n` +
        `Company : ${values.company || "-"}\n\n` +
        `Email : ${values.email}\n\n` +
        `Phone / WhatsApp : ${values.phone || "-"}\n\n` +
        `How can we help : ${values.help}\n\n` +
        `Message : ${values.message}\n\n`;
      const res = await axios.post("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
        body,
        name: "LinkAI",
        subject: `Website enquiry: ${values.help}`,
        to: companyDetails.email,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const field = dark
    ? "w-full bg-transparent border-b border-white/30 focus:border-primary outline-none py-2.5 placeholder:text-white/40"
    : "w-full bg-transparent border-b border-black/30 focus:border-primary1 outline-none py-2.5 placeholder:text-black/40";
  const label = `text-xs uppercase tracking-widest ${dark ? "text-white/60" : "text-black/60"}`;
  const err = (e) => (e ? <small className="text-red-400">{e.message}</small> : null);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block space-y-1">
          <span className={label}>Full Name</span>
          <input
            type="text"
            className={field}
            placeholder="Your name"
            {...register("fullName", { validate: (v) => v.trim() !== "" || "Please tell us your name" })}
          />
          {err(errors.fullName)}
        </label>
        <label className="block space-y-1">
          <span className={label}>Company Name</span>
          <input type="text" className={field} placeholder="Your company" {...register("company")} />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block space-y-1">
          <span className={label}>Work Email</span>
          <input
            type="email"
            className={field}
            placeholder="you@company.com"
            {...register("email", {
              required: "Please add your email",
              pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Please check the email address" },
            })}
          />
          {err(errors.email)}
        </label>
        <label className="block space-y-1">
          <span className={label}>Phone / WhatsApp (optional)</span>
          <input
            type="tel"
            className={field}
            placeholder="+91"
            {...register("phone", {
              validate: (v) => v.trim() === "" || /^\+?[\d\s\-()]{6,14}\d$/.test(v.trim()) || "Please check the number",
            })}
          />
          {err(errors.phone)}
        </label>
      </div>
      <label className="block space-y-1">
        <span className={label}>How Can We Help?</span>
        <select
          className={`${field} ${dark ? "[&>option]:text-black" : ""}`}
          {...register("help", { required: "Please choose one" })}
        >
          <option value="">Choose one</option>
          {helpOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {err(errors.help)}
      </label>
      <label className="block space-y-1">
        <span className={label}>Your Challenge</span>
        <textarea
          rows={3}
          className={`${field} resize-none`}
          placeholder="Tell us about your business challenge or what you'd like to improve..."
          {...register("message", { validate: (v) => v.trim() !== "" || "Please tell us a little about it" })}
        />
        {err(errors.message)}
      </label>
      <button
        type="submit"
        className="btn bg-primary text-black uppercase tracking-wider hover:shadow-large hover:shadow-primary/50 w-full sm:w-auto px-8"
      >
        {buttonLabel} →
      </button>
    </form>
  );
};

export default EnquiryForm;
