import Image from "next/image";
import React from "react";

import LogoImage from "@/public/images/sant-sport-logo.svg";

const Logo = () => {
  return (
    <div>
      <Image
        src={LogoImage}
        alt="Sant-sport-logo"
        title="Sant-sport-logo"
        className="object-cover"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Logo;
