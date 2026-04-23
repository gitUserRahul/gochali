import Image from "next/image";
import Link from "next/link";

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

        <div className="absolute z-50 max-w-80.5  w-full bg-white px-7.5 py-4 rounded-[12px] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-2.5">
            <Link href="" className="inline-flex">
              <span className="px-3 py-1 rounded bg-primary-color text-white font-medium text-[14px]">
                {category}
              </span>
            </Link>
            <p className="font-semibold text-lg text-[#292929]">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
