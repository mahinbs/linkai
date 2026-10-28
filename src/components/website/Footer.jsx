import React from "react";
import { companyDetails, logo } from "../../content/constant";
import { websiteLinks } from "./Header";
import { Link } from "react-router-dom";
import { IoLocation, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
  return (
    // Navy-teal like the rest of the dark sections; on phones extra room at the bottom so the floating WhatsApp button
    // never covers the address (Dilli, 28 Oct 2026 brief).
    <div className="bg-black border-t border-slate pt-12 pb-28 md:pb-12">
      <div className="wrapper flex md:flex-row flex-col flex-wrap justify-between gap-10 md:gap-7">
        {/* Logo and social icons are one block: on the left, with the icons centred under the logo. */}
        <div className="flex flex-col items-center gap-3 self-start">
          <img src={logo} alt="Logo" className="w-[12rem] object-contain" />
          <div className="flex gap-3 justify-center">
            <Link
              to={companyDetails.linkedin}
              className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
            >
              <SlSocialLinkedin size={18} strokeWidth={0.5} className="" />
            </Link>
            <Link
              to={companyDetails.instagram}
              className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
            >
              <SlSocialInstagram size={18} strokeWidth={0.5} className="" />
            </Link>
            <Link
              to={companyDetails.facebook}
              className="w-8 h-8 flex items-center justify-center bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 text-black"
            >
              <SlSocialFacebook size={18} strokeWidth={0.5} className="" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h6 className="text4">Quick Links</h6>
          <ul className="space-y-3">
            {websiteLinks.map((item) => (
              <li
                className="hover:text-primary cursor-pointer desc"
                key={item.id}
              >
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h6 className="text4">Contact Us</h6>
          <div className="space-y-4">
            <Link
              to={`mailto:${companyDetails.email}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <IoMail size={20} className="text-primary" />
              <p className="desc">{companyDetails.email}</p>
            </Link>
            <Link
              to={`tel:${companyDetails.phone}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <ImPhone size={20} className="text-primary" />
              <p className="desc">{companyDetails.phone.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2")}</p>
            </Link>
            <a
              href={companyDetails.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <BsWhatsapp size={19} className="text-primary" />
              <p className="desc">Chat on WhatsApp</p>
            </a>
            <div className="flex gap-2">
              <IoLocation size={23} className="text-primary" />
              <div className="space-y-1 flex flex-col gap-1">
                <p className="desc max-w-[16rem]">{companyDetails.location}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <IoLocation size={23} className="text-primary" />
              <div className="space-y-1 flex flex-col gap-1">
                <p className="desc max-w-[16rem]">{companyDetails.location2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
