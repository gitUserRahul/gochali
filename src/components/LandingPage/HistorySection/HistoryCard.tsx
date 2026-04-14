import Button from "@/shared/Button";
import EyeBrowSection from "@/shared/EyeBrowSection.tsx";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HistoryCard = ({
  historyClassName,
  historyTitle,
  historyDescription,
  historyButtonClass,
  historyEyebrowClass,
  historyImage,
  historyContentClass,
}) => {
  return (
    <div className={historyClassName}>
      <div className="basis-1/2 ">
        <Image
          src={historyImage}
          alt={historyTitle}
          width={0}
          height={0}
          // fill
          className="w-full h-112 object-cover"
        />
      </div>
      <div className={cn("basis-1/2  w-full", historyContentClass)}>
        <div className="flex flex-col gap-4 pb-7.5">
          <EyeBrowSection
            eyebrowTitle="Our Story"
            className={historyEyebrowClass}
          />
          <h3 className="text-4xl text-white">{historyTitle}</h3>
          <p className="text-[15px] leading-6.75 text-[#CACACA]">
            {historyDescription}
          </p>
        </div>
        <Button buttonText="LEARN MORE" className={historyButtonClass} />
      </div>
    </div>
  );
};

export default HistoryCard;
