import Image from "next/image";

type BlogItem = {
  authorImage: string;
  authorName: string;
  image: string;
  date: string;
  title: string;
  description: string;
};

const BlogCard = ({ blogItem }: { blogItem: BlogItem }) => {
  const { authorImage, authorName, image, date, title, description } = blogItem;
  return (
    <>
      {/* blog image and  date */}

      {/* blog content */}
      <div className="border rounded-[12px] border-[#CFDDE2]">
        <div className="relative ">
          <div className="rounded-t-[12px] overflow-hidden ">
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>
          <span className="font-medium text-[18px] leading-4.5 text-white absolute z-50 top-0 right-0 bg-primary-color max-w-20 min-h-20 flex items-center justify-center rounded-[12px] p-3.5 text-center">
            {date}
          </span>
        </div>
        <div className="flex flex-col gap-2 px-7.5 py-4 mb-4">
          <div className="flex  items-center gap-4">
            <Image
              src={authorImage}
              alt={authorName}
              // fill
              width={36}
              height={36}
              className="object-cover"
            />

            <div className="text-[15px] ">
              {"By"} <span className="text-[#292929]">{authorName}</span>
            </div>
          </div>
          {/* <div> */}
          <h4 className="text-[18px] text-[#292929] font-semibold">{title}</h4>
          <p className="text-[#8B8B8B] text-[15px]">{description}</p>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
