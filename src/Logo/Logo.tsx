import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Logo"
        width={logoSize}
        height={logoSize}
        // className={cn()}
      />
    </div>
  );
};

export default Logo;
