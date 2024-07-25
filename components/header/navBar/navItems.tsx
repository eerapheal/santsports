import Link from "next/link";
import React from "react";

const navItems = () => {
  return (
    <div>
      {/* desktop */}
      <li className="hidden md:flex px-2 justify-center items-center md:gap-5 font-semibold text-xl">
        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/news" className="hover:text-blue-400">
          News
        </Link>
      </li>
      {/* mobile */}
      <li className="px-2 hidden justify-between items-center font-semibold text-xl">
        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/news" className="hover:text-blue-400">
          News
        </Link>
      </li>
    </div>
  );
};

export default navItems;
