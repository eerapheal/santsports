"use client";
import { Standing } from "@/utils/type";
import React, { useEffect, useRef, useState } from "react";

const StandingFixtures = ({ standingData }: { standingData: Standing[] }) => {
  const menuItems = ["EPL", "La Liga", "Bundesliga", "Serie A", "Ligue 1"];
  const [activeTab, setActiveTab] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToTab = (index: number) => {
    const container = menuRef.current;
    if (container) {
      const tab = container.children[index] as HTMLElement;
      tab?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    scrollToTab(index);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col w-full max-w-7xl bg-gradient-to-br from-blue-700 lg:flex-row">
      <div className="flex justify-center items-center lg:w-3/5 md:p-10 py-5">
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-black/40 w-full text-neutral-100 rounded-xl">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="p-2 font-bold capitalize">Sanding</div>
            <div className="flex justify-center w-full">
              {menuItems.map((items, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`w-full p-4 rounded md:text-base text-xs font-bold ${
                    i === activeTab
                      ? "text-neutral-100"
                      : "text-gray-300 bg-black/10"
                  }`}
                >
                  {items}
                </button>
              ))}
            </div>
            <div className="w-full flex overflow-x-hidden snap-x scrollbar-none scroll-smooth text-xs md:text-sm">
              Sanding
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-neutral-100 font-bold justify-center items-center lg:w-2/5 p-10 lg:pr-5 pb-10 lg:p-0 ">
        Fixtures
      </div>
    </div>
  );
};

export default StandingFixtures;
