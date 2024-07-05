import React from "react";

import Logo from "./logo";
import NavItems from "./navItems";
import Link from "next/link";
import SearchForm from "../searchBar/searchForm";
import { Team } from "@/utils/type";
import getTeams from "@/utils/getApis/getTeams";

const NavBar = async () => {
  let teamData: Team[] = await getTeams();
  return (
    <div className="flex text-white justify-center items-center w-full p-3 bg-black/40">
      <div className="w-1/6 flex justify-center items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="w-4/6 flex justify-center items-center">
        <SearchForm teamData={teamData} />
      </div>
      <div className="w-1/6">
        <NavItems />
      </div>
    </div>
  );
};

export default NavBar;
