import Button from "@/shared/Button";
import EyeBrowSection from "@/shared/EyeBrowSection";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HistoryCard = ({
  isReversed,
  theme,
  historyTitle,
  historyDescription,
  historyImage,
  frameImage,
}) => {
  // history card theme (NO button styles anymore)
  const HistoryTheme = {
    primary: {
      containerBG: "bg-secondary-color",
      eyebrow: "text-primary-color before:bg-primary-color",
      description: "text-[#CACACA]",
      container: "max-w-[610px] ps-[35px]",
      frameClass:
        "absolute top-0 max-w-[240px] w-full min-h-[185px] right-0",
      buttonVariant: "red",
    },
    secondary: {
      containerBG: "bg-primary-color",
      eyebrow: "text-secondary-color before:bg-secondary-color",
      description: "text-white",
      container: "max-w-[510px]",
      frameClass:
        "absolute top-[36%] max-w-[240px] w-full min-h-[141px] left-0",
      buttonVariant: "dark",
    },
  };

  const historyActive = HistoryTheme[theme] || HistoryTheme.primary;

  return (
    <div
      className={cn(
        "flex relative",
        historyActive.containerBG,
        isReversed ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* IMAGE SIDE */}
      <div className="basis-1/2 relative min-h-105">
        <Image
          src={historyImage}
          alt={historyTitle}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT SIDE */}
      <div
        className={cn(
          "basis-1/2 w-full",
          isReversed ? "ps-[calc((100vw_-_1240px)_/_2_)]" : ""
        )}
      >
        <div className={historyActive.container}>
          <div className="flex flex-col gap-4 pb-7.5 pt-12.5">
            <EyeBrowSection
              eyebrowTitle="Our Story"
              className={historyActive.eyebrow}
            />

            <h3 className="text-4xl text-white">{historyTitle}</h3>

            <p
              className={cn(
                "text-[15px] leading-6.75",
                historyActive.description
              )}
            >
              {historyDescription}
            </p>
          </div>

          {/* BUTTON (correct usage) */}
          <Button
            buttonText="LEARN MORE"
            variant={historyActive.buttonVariant}
            className="max-w-[176px]"
          />
        </div>

        {/* FRAME IMAGE */}
        <div className={historyActive.frameClass}>
          <Image
            src={frameImage}
            alt="history-frame"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;