/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {  useEffect, useRef, useState } from "react";
import { Swiper,  SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Star from "@/assets/icons/star.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "@/assets/images/profile.png";
import QuoteIcon from "@/assets/icons/QuoteIcon.svg";
import Image from "next/image";
import RightArrow from "@/assets/icons/LargeRightArrow.svg";
const Testimonials = () => {
  const Data = [
    {
      desc: "Welcome to your premier destination for high-quality windows and doors that blend style, security, and energy efficiency. your premier destination for high-quality.",
      profile: Profile,
      name: "Phillip Lipshutz",
      role: "Ui-Ux Designer",
    },
    {
      desc: "Welcome to your premier destination for high-quality windows and doors that blend style, security, and energy efficiency. your premier destination for high-quality.",
      profile: Profile,
      name: "Phillip Lipshutz",
      role: "Ui-Ux Designer",
    },
    {
      desc: "Welcome to your premier destination for high-quality windows and doors that blend style, security, and energy efficiency. your premier destination for high-quality.",
      profile: Profile,
      name: "Phillip Lipshutz",
      role: "Ui-Ux Designer",
    },
  ];

  const swiperRef = useRef<any>(null);

  const handleLeftClick = () => {
    if (swiperRef.current) {
      swiperRef?.current?.swiper?.slidePrev();
    }
  };

  const handleRightClick = () => {
    if (swiperRef.current) {
      swiperRef?.current?.swiper?.slideNext();
    }
  };

  const [sectionRef, inView] = useInView({
    triggerOnce: true, // Trigger animation once when it enters the viewport
    threshold: 0.2, // Adjust this threshold as needed
  });

  // State to control whether animations should play
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  return (
    <div ref={sectionRef} id="testimonials" className="py-[40px] mx-auto max-w-[1500px] mx-a md:py-[93px]">
      {" "}
      <div className="flex md:flex-row flex-col md:mb-[57px]  justify-center gap-[34px] md:justify-between md:px-20 items-center">
        <h2 className="text-[24px] leading-[110%] md:text-[48px] font-bold text-heading-color">
          What our <br /> customers say <br />
          <span className="text-[#14591D]">KaliTrip</span>
        </h2>
        <div className="gap-x-[21px] md:flex hidden items-center">
          <button
            className="text-center flex justify-center items-center text-[#14591D] hover:text-[white] rounded-full bg-[#F1F4F1]  size-[50px] hover:bg-[#14591D]"
            onClick={handleLeftClick}
          >
            <div>
              <RightArrow />
            </div>
          </button>

          <button
            className="text-center flex  rotate-180  justify-center items-center size-[50px] rounded-full text-[#14591D] hover:text-[white]  bg-[#F1F4F1] hover:bg-[#14591D] "
            onClick={handleRightClick}
          >
            <div>
              <RightArrow />
            </div>
          </button>
        </div>
      </div>
      <div className="pl-10">
        <Swiper
          ref={swiperRef}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          navigation={{
            nextEl: ".right-arrow",
            prevEl: ".left-arrow",
          }}
          modules={[Pagination, Navigation]}
          //   loop={true}
          breakpoints={{
            200: {
              slidesPerView: 0.7,
              spaceBetween: 20,
            },
            300: {
              slidesPerView: 0.9,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1500: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >
          {Data.map((item, key) => (
            <SwiperSlide key={key}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -100 }}
                transition={{ duration: 0.3, delay: 0.3 * key }}
              >
                <TestimonialCard data={item} key={key} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = ({
  data,
}: {
  data: { profile: any; name: string; role: string; desc: string };
}) => {
  return (
    <div className="bg-white w-[605px] rounded-[20px] py-[40px] px-[30px]">
      <div>
        <QuoteIcon />
        <p className="text-[#4A4A4A] py-[40px] font-medium text-[18px]">
          {data.desc}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex  gap-x-[20px]">
            <Image src={data.profile} alt="" />
            <div>
              <h3 className="text-[24px] font-semibold text-heading-color ">
                {data.name}
              </h3>
              <p className="text-[#4A4A4A] text-[16px]">{data.role}</p>
            </div>
          </div>
          <div className="flex gap-x-[10px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};
