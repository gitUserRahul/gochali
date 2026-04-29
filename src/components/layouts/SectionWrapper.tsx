import React from "react";
import EyeBrowSection from "@/shared/EyeBrowSection";
import { cn } from "@/lib/utils";
import Button from "@/shared/Button";

const SectionWrapper = ({
  wrapperClassName,
  eyebrowTitle,
  className,
  contentClassName,
  heading,
  headingAs: Tag = "h2",
  headingClassName,
  paragraph,
  paragraphClassName,
  children,
  buttonText,
  variant,
  buttonClassName,
  buttonWrapperClassName,
  headerClassname,
}) => {
  return (
    <div className={cn(wrapperClassName)}>
      <div className={cn("flex flex-col gap-2", headerClassname)}>
        <EyeBrowSection eyebrowTitle={eyebrowTitle} className={className} />
        <div className={cn("flex flex-col gap-4", contentClassName)}>
          <Tag
            className={cn(
              " text-4xl text-white  text-nowrap",
              headingClassName,
            )}
          >
            {heading}
          </Tag>
          {paragraph && (
            <p className={cn("text-[15px] leading-6.75", paragraphClassName)}>
              {paragraph}
            </p>
          )}
        </div>
      </div>
      {children}
      <div className={buttonWrapperClassName}>
        {buttonText && (
          <Button
            buttonText={buttonText}
            variant={variant}
            className={cn("p-0", buttonClassName)}
          />
        )}
      </div>
    </div>
  );
};

export default SectionWrapper;
