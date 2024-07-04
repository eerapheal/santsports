import Image from "next/image";
import React from "react";

import LogoImage from "@/public/images/sant-sports-logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={LogoImage}
        alt="Sant-sport-logo"
        title="Sant-sport-logo"
        className="object-cover"
        width={50}
        height={50}
      />
      <span className="px-2 md:block hidden font-bold text-2xl text-white  hover:text-blue-400">
        SantSports
      </span>
    </div>
  );
};

export default Logo;
