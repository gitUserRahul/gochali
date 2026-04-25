import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const buttonVariants = {
  red: {
    button: "bg-primary-color text-white",
    icon: "text-primary-color",
  },
  dark: {
    button: "bg-secondary-color text-white",
    icon: "text-secondary-color",
  },
  darkNoIcon: {
    button: "bg-secondary-color text-white",
    icon: null,
  },
  white: {
    button: "bg-white text-secondary-color",
    icon: "text-secondary-color",
  },
};

const Button = ({ buttonText, variant = "red", className }) => {
  const styles = buttonVariants[variant];

  return (
    <Link
      href=""
      className={cn(
        styles.button,
        "flex items-center gap-2 ps-5 justify-center rounded-[30px] w-full h-13.5",
        "transition-all duration-300 ease-in-out",
        "hover:opacity-80",
        className
      )}
    >
      <span className="font-bold text-[12px] tracking-[1.5px] uppercase">
        {buttonText}
      </span>

      {/* icon */}
      {styles.icon && (
        <span className="bg-white rounded-[25px] w-11 h-11 flex items-center justify-center overflow-hidden">
          <FaArrowRightLong
            className={cn(
              "w-4 h-4",
              styles.icon
            )}
          />
        </span>
      )}
    </Link>
  );
};

export default Button;