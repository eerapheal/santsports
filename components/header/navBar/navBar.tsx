import React from "react";

import Logo from "./logo";
import Link from "next/link";
import SearchForm from "../searchBar/searchForm";

const NavBar = () => {
  return (
    <div className="flex text-white justify-center items-center w-full p-3 bg-black/40">
      <div className="w-1/6 flex justify-center items-center">
        <Link href="/" className="flex justify-center items-center">
          <Logo />
          <span className="px-2 md:block hidden bold text-xl text-white">
            SantSport
          </span>
        </Link>
      </div>
      <div className="w-4/6 flex justify-center items-center">
        <SearchForm />
      </div>
      <div className="w-1/6">yes</div>
    </div>
  );
};

export default NavBar;
