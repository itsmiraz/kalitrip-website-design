import Image from "next/image";
import React from "react";
import CTA from "@/assets/images/ctaImage.png";
import Logo from "@/assets/images/logo.webp";

import XICon from "@/assets/icons/social/Xicon.svg";
import Facebook from "@/assets/icons/social/Facebook.svg";
import Insta from "@/assets/icons/social/Insta.svg";
import Youtube from "@/assets/icons/social/Youtube.svg";
import Tiktok from "@/assets/icons/social/Tiktok.svg";
import Discord from "@/assets/icons/social/Discord.svg";

const Footer = () => {
  const socialLinks = [
    {
      link: "/",
      icon: <XICon />,
    },
    {
      link: "/",
      icon: <Facebook />,
    },
    {
      link: "/",
      icon: <Insta />,
    },
    {
      link: "/",
      icon: <Youtube />,
    },
    {
      link: "/",
      icon: <Tiktok />,
    },
    {
      link: "/",
      icon: <Discord />,
    },
  ];

  return (
    <div className="mt-[120px]">
      <div className="max-w-[1240px] gap-x-[128px] items-center flex justify-between py-[30px] px-[80px] rounded-[30px] bg-[#945600] mx-auto">
        <Image src={CTA} alt="" />

        <div>
          <h2 className="text-[48px] pb-[15px] font-semibold  leading-[110%] text-[#FDF7FA]">
            Subscribe To The <br /> Newsletter
          </h2>
          <p className="text-[#D8D8D8] pb-[50px] text-[18px] font-medium leading-[140%] ">
            Surround yourself with the community and resources to help bring
            your vision to life.
          </p>
          <div className="bg-white pl-4 flex items-center h-[60px] p-[5px] relative rounded-[12px] ">
            <input
              placeholder="info@twintone.ai"
              type="text"
              className="placeholder:text-[#767676] border-none focus:outline-none "
            />
            <button className="absolute leading-[100%] font-bold text-[18px] px-[36px] rounded-[10px] bg-[#14591D] h-[50px] text-white right-1 top-1 ">
              Get Notified
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#040F16] pt-[200px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[192px]">
            <Image src={Logo} alt="" />
            <div className="flex mt-[40px] flex-wrap gap-[16px]">
              {socialLinks.map((item, i) => (
                <div
                  className="bg-[#FDF7FA]/10 text-[#FDF7FA]/30 hover:text-[#FDF7FA] flex justify-center items-center hover:bg-[#14591D] w-[36px] h-[36px]  cursor-pointer rounded-full  border border-[#FDF7FA]/20 backdrop-blur"
                  key={i}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>
            Ease of use
            </h3>
            <ul>
                <li>
                    <p>Welcome</p>
                </li>
                <p>
                Features
                </p>
                <p>
                Testimonials
                </p>
                <p>
                Blog
                </p>
                <p>
                Boutique
                </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
