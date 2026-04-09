import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ buttonText, className }) => {
  return (
    <Link
      className={`${className} flex items-center gap-2 justify-center rounded-[30px] text-white w-full h-13.5`}
      href=""
    >
      <span className="font-bold text-[12px] tracking-[1.5px] ps-5">
        {buttonText}
      </span>
      <span className="bg-white text-[#FF6F61] rounded-[25px] w-11 h-11 items-center justify-center flex ">
        <FaArrowRightLong className="w-4.25 h-2.5" />
      </span>
    </Link>
  );
};

export default Button;
