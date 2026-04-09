import React from "react";
import Image from "next/image";

const Logo = ({ isLogoDark, logoSize }) => {
  return (
    <div>
      <Image
        src={
          isLogoDark
            ? "/assets/images/gochali-dark-logo.svg"
            : "/assets/images/gochali-light-logo.svg"
        }
        alt="Logo"
        width={logoSize}
        height={logoSize}
      />
    </div>
  );
};

export default Logo;
