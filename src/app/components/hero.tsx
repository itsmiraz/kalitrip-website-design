import CoverImage from "@/assets/images/hero-cover.webp";
import Logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Earth from "@/assets/icons/Earth.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";

const Hero = () => {
  const navLinks = [
    {
      label: "Welcome",
    },
    {
      label: "Features",
    },
    {
      label: "Testimonials",
    },
    {
      label: "Blogs",
    },
    {
      label: "Boutique",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${CoverImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[913px] px-10 pt-[20px]"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <Image src={Logo} alt="" className="max-w-[170]" />
        <ul className="flex gap-x-[40px] items-center">
          {navLinks.map((item, i) => (
            <li key={i}>
              {" "}
              <p className="text-[18px] cursor-pointer hover:text-[#14591D] hover:font-semibold text-[#FDF7FA]">
                {item.label}
              </p>{" "}
            </li>
          ))}
        </ul>
        <div className="flex gap-x-[20px]">
          <div className="flex bg-[#FDF7FA]/10  h-fit border border-[#FDF7FA]/40 rounded-full items-center gap-x-[15px] text-white px-[25px] py-4">
            <div className="flex gap-x-[7px] items-center">
              <Earth />
              <p className="text-[18px] font-medium text-[#FDF7FA]">En</p>
            </div>
            <ArrowDown />
          </div>
          <button className="px-[25px] border border-[#FDF7FA]/30 text-white text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
            Sign Up
          </button>
          <button className="px-[25px] bg-[#14591D]  text-white text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
            Login
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-[61px]">
        <h1 className="text-[68px] text-white text-center leading-[110%] font-semibold">
          ✈️ Why is it so absurd? <br /> to delight in many inanimate <br />{" "}
          <span className="text-[#14591D]">things 500€</span>
        </h1>
        <p className="text-[22px] text-white text-center font-medium pt-[20px]">
          KaliTrip allows you to organize your trips more efficiently,
          with personalized <br /> itineraries that adapt to your
          preferences and your budget .
        </p>
      </div>
    </div>
  );
};

export default Hero;
