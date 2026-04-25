import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, `max-w-[1280px] px-[20px] mx-auto w-full`)}>
      {children}
    </div>
  );
};

export default Container;
