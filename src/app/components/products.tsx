import React from "react";
import Tshirt from "@/assets/images/products/t-shirt.png";
import CartIcon from "@/assets/icons/CartIcon.svg";
import Image from "next/image";
import Colors from "@/assets/icons/Colors.svg";
import LeftArrow from "@/assets/icons/LeftArrow.svg";

const Products = () => {
  const data = [
    {
      img: Tshirt,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
    {
      img: Tshirt,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
    {
      img: Tshirt,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
    {
      img: Tshirt,
      title: "Pippi Tee White T-Shirt",
      desc: "The Pippi Tee White T-Shirt is a perfect blend of simplicity and style, making it an essential addition to any wardrobe.",
      price: "$35.05",
    },
  ];

  return (
    <div className="pt-[120px]">
      <h2 className="text-[#040F16] font-montserrat pb-[40px] text-[48px] text-center  font-semibold">
        Trending products
      </h2>
      <div className="p-[5px] gap-x-[40px] font-inter bg-[#14591D]/10 flex rounded-[25px] max-w-[484px]  mx-auto  border border-[#CECECE]">
        <button className="text-white bg-[#14591D] px-[25px] py-[13px] rounded-full font-semibold">
          All
        </button>
        <button className="text-[#14591D]">T-shirt</button>
        <button className="text-[#14591D]">Shoes</button>
        <button className="text-[#14591D]">Sun glass</button>
        <button className="text-[#14591D]">Shirts</button>
      </div>
      <div className="flex pt-[60px] gap-[20px] justify-center items-center">
        {data.map((item, i) => (
          <div
            className="max-w-[295px] border-[#CECECE] border bg-white rounded-[20px] p-[10px]"
            key={i}
          >
            <div className="relative">
              <Image src={item.img} alt=" " className="w-full" />
              <div className="absolute top-4 right-4">
                <CartIcon />
              </div>
            </div>
            <div className="pt-[30px] px-[5px]">
              <Colors />
              <h3 className="text-[20px] font-montserrat pt-[20px] font-semibold text-heading-color">{item.title}</h3>
              <p className="text-[12px] leading-[140%] font-inter text-[#767676]">{item.desc}</p>
            </div>
            <div className="flex pt-[25px] gap-x-[10px] items-center">
                <p className="bg-black  whitespace-nowrap  font-montserrat h-fit text-white text-[14px] font-semibold px-[16px] py-[10px] rounded-full">{item.price}</p>
                <button className="py-[8px] font-montserrat h-[40px]  w-full ease-in-out duration-300 transition-all rounded-full font-medium hover:font-bold hover:text-white hover:border-none border gap-x-[5px] border-[#14591D]/15 flex justify-center items-center text-center bg-white hover:bg-[#14591D] text-heading-color ">
                Buy Now <LeftArrow />{" "}
            </button>
            </div>
          </div>
        ))}
      </div>
      <div>
      <button className="px-[25px] font-montserrat flex justify-center mt-[60px] items-center mx-auto gap-x-2  bg-[#14591D]  text-white text-[18px] py-[16px] rounded-[15px] rounded-tl-[0px]">
          See More <span className="text-white"><LeftArrow/></span>
          </button> 
      </div>
    </div>
  );
};

export default Products;
