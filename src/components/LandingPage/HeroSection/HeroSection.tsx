import React from "react";
import Button from "@/shared/Button";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div className="relative w-full h-217">
      {/* hero slider  */}
      <HeroSlider />
      <div className="absolute z-50 w-full h-full flex flex-col items-center justify-center gap-5 inset-0 bg-black/40 bg-gradient-to-b from-black/60 to-transparent">
        {/* hero content */}
        <div className="flex flex-col items-center gap-2 text-white max-w-185.25 w-full ">
          <span className="font-normal text-[15px]">
            Sacred prayers unite our faithful community in tradition
          </span>
          <h1 className="font-bold text-[70px] leading-21.5 text-center">
            Discover the Living Tharu Culture
          </h1>
        </div>

        {/* hero button */}
        <Button buttonText="EXPLORE NOW" className=" bg-[#FF6F61] max-w-47 " />
      </div>
    </div>
  );
};

export default HeroSection;
