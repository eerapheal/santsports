"use client";
import { Standing } from "@/utils/type";
import Link from "next/link";
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

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.shiftKey) {
        event.preventDefault();
      }
    };
    const container = menuRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

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
                  className={`w-full p-4 rounded md:text-base font-bold ${
                    i === activeTab
                      ? "text-neutral-100"
                      : "text-gray-300 bg-black/10"
                  }`}
                >
                  {items}
                </button>
              ))}
            </div>
            <div
              ref={menuRef}
              className="w-full flex overflow-x-hidden snap-x scrollbar-none scroll-smooth text-xs md:text-sm"
            >
              {standingData.map((responseData, i) => (
                <div
                  key={responseData.league.id}
                  className="flex-shrink-0 w-full snap-center flex justify-center items-center"
                >
                  <div className="flex flex-col justify-between p-2 w-full">
                    <div className="flex w-full p-1">
                      <div className="w-1/12">Rank</div>
                      <div className="w-3/12">Team</div>
                      <ul className="w-6/12 flex text-sm justify-evenly">
                        <li className="w-full text-center">M</li>
                        <li className="w-full text-center">W</li>
                        <li className="w-full text-center">D</li>
                        <li className="w-full text-center">L</li>
                        <li className="w-full text-center font-bold">P</li>
                        <li className="w-full text-center">GF</li>
                        <li className="w-full text-center">GA</li>
                        <li className="w-full text-center">GD</li>
                      </ul>
                      <div className="w-2/12 text-center">Form</div>
                    </div>
                    {responseData.league.standings[0].map((team, j) => (
                      <Link
                        href={`/team/${team.team.id}`}
                        key={j + team.team.name}
                        className={`flex w-full p-1 hover:bg-blue-400/40 ${
                          j % 2 === 0 ? "bg-black/40" : ""
                        }`}
                      >
                        <div className="w-1/12 text-xs flex px-2 justify-center items-center">
                          {j + 1}
                        </div>
                        <div className="w-3/12 text-xs flex items-center">
                          <img
                            src={team.team.logo}
                            alt={team.team.name}
                            className="h-4 w-4 mr-2"
                          />
                          {team.team.name}
                        </div>
                        <ul className="w-6/12 flex text-xs justify-center items-center">
                          <li className="w-full text-center">
                            {team.all.played}
                          </li>
                          <li className="w-full text-center">{team.all.win}</li>
                          <li className="w-full text-center">
                            {team.all.draw}
                          </li>
                          <li className="w-full text-center">
                            {team.all.lose}
                          </li>
                          <li className="w-full text-center font-bold">
                            {team.points}
                          </li>
                          <li className="w-full text-center">
                            {team.all.goals.for}
                          </li>
                          <li className="w-full text-center">
                            {team.all.goals.against}
                          </li>
                          <li className="w-full text-center">
                            {team.goalsDiff}
                          </li>
                        </ul>
                        <div className="w-2/12 flex justify-center items-center">
                          {team.form?.split("").map((char, i) => (
                            <div
                              key={char + i}
                              className={`opacity-80 w-3 h-3 m-[1px] rounded-full
                                                                        ${
                                                                          char ===
                                                                          "L"
                                                                            ? "bg-red-500"
                                                                            : char ===
                                                                              "D"
                                                                            ? "bg-gray-500"
                                                                            : "bg-green-500"
                                                                        }`}
                            ></div>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-2/5 p-10 lg:pr-10 pb-10 lg:pt-10 ">
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-black/40 w-full  text-neutral-100 rounded-xl h-full">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="p-2 font-bold">
            Upcoming Matches
          </div>
          <div className="flex flex-col w-full justify-center items-center pb-5 overflow-hidden">
            {/* fixtures */}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StandingFixtures;
