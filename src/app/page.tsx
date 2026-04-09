import Image from "next/image";
import Button from "@/shared/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  bg-banner-one bg-cover bg-no-repeat bg-center  gap-5">
      <div className="absolute bg-hero-overlay w-full h-full z-40"></div>
      <div className="flex flex-col items-center gap-2 text-white max-w-185.25 w-full z-50">
        <span className="font-normal text-[15px]">
          Sacred prayers unite our faithful community in tradition
        </span>
        <h1 className="font-bold text-[70px] leading-21.5 text-center">
          Discover the Living Tharu Culture
        </h1>
      </div>
      <Button
        buttonText="EXPLORE NOW"
        className=" z-50 bg-[#FF6F61] max-w-47 "
      />
    </div>
  );
}
