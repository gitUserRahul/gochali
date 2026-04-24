import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type GalleryCardProps ={
  category: string;
  title: string;
  image: string;

}

const GalleryCard = ({ category, title, image }: GalleryCardProps ) => {
  return (
    <div className=" basis-1/3 ">
      <div className="relative">
        <div className="h-104.5 relative rounded-[12px] overflow-hidden">
          <Image src={image} alt={title} fill className=" object-cover" />
        </div>

        <Link href="" className="group absolute z-50 max-w-80.5 w-full bg-white px-[23px] py-[16px] rounded-[12px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between items-end">
          <div className="flex flex-col gap-2.5">
              <span className="px-3 py-1 rounded bg-primary-color text-white font-medium text-[14px] w-fit">
                {category}
              </span>
            <p className="font-semibold text-lg text-[#292929]">{title}</p>
          </div>
          <div className="bg-[#FFE1DE] w-11 h-11 flex items-center justify-center rounded-[30px] transition-all duration-300 ease-in-out  group-hover:translate-x-2">
          <FaArrowRightLong
              className="w-4 h-4 text-primary-color"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GalleryCard;
