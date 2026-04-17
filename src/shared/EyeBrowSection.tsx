import React from "react";
import { cn } from "@/lib/utils";

const EyeBrowSection = ({ className, eyebrowTitle }) => {
  return (
    <span
      className={cn(
        "text-primary-color font-bold text-[20px] relative pb-[8px] before:absolute before:bottom-0 before:w-6.5 before:h-0.5 before:bg-primary-color ",
        className,
      )}
    >
      {eyebrowTitle}
    </span>
  );
};

export default EyeBrowSection;
