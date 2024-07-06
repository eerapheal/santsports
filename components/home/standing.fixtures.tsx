"use client";
import { Standing } from "@/utils/type";
import React from "react";

const StandingFixtures = ({ standingData }: { standingData: Standing[] }) => {
  return (
    <div className="flex flex-col w-full max-w-7xl bg-gradient-to-br from-blue-700/40 lg:flex-row rounded-xl">
      <div className="flex justify-center items-center lg:w-3/5 md:p-10 py-5">
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-black/40 w-full text-neutral-100 rounded-xl">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="p-2 font-bold capitalize">Sanding</div>
          </div>
        </div>
      </div>
      <div className="flex text-neutral-100 font-bold justify-center items-center lg:w-2/5 p-10 lg:pr-5 pb-10 lg:p-0">
        Fixtures
      </div>
    </div>
  );
};

export default StandingFixtures;
