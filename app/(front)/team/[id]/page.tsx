import React from "react";
import getTeamInfoByTeamId from '@/utils/getApis/getTeamInfoByTeamId';
import { Fixture, Team } from "@/utils/type";
import Image from "next/image";
import getFixtureByTeamId from "@/utils/getApis/getFixtureByTeamId";
import Fixtures from "./components/fixtures";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    process.env.NEXT_PUBLIC_APP_NAME ||
    "SantSport | Team Information ",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "All football team information ranging from EPL LA LIGA LEAGUE 1. get all the live scores, previous matches results, upcoming matches, team form, top scores, all league and countries  football games result and fixtures.",
};

type PageProps = {
  params: {
    id: string;
  };
};
const Page = async ({ params }: PageProps) => {
  let teamInfo: Team | undefined = await getTeamInfoByTeamId(parseInt(params.id));
  let fixturesByTeamId: Fixture[] = await getFixtureByTeamId(parseInt(params.id));
  
  if (!teamInfo) {
    return (
      <div className="flex justify-center items-center py-5">
        <div className="flex max-w-7xl p-5 w-full md:flex-row justify-center items-center bg-neutral-100">
          Team Info Not Available
        </div>
      </div>
    )
  };

  return (
    <div className="flex lg:gap-5 justify-center items-center text-neutral-100 bg-gradient-to-br from-blue-700">
      <div className="flex flex-col max-w-7xl p-5 w-full lg:flex-row">
        <div className="flex flex-col lg:w-1/3 justify-center items-center bg-gradient-to-br  from-blue-700/40 to-blue-400/100 h-[520px] p-10">
          <Image
            src={teamInfo.team.logo}
            alt="teamLogo"
            title={teamInfo.team.name}
            width={150}
            height={150}
            className="p-3"
          />
          <div className="text-2xl">{teamInfo.team.name}</div>
          <div className="flex justify-between items-center w-full">
            <div className="W-1/3 text-center text-2xl">#{teamInfo.rank}</div>
            <div className="W-1/3 text-center">{teamInfo.group}</div>
            <div className="W-1/3 text-center flex flex-col justify-center items-center">
              <div className="text-center">Form</div>
              <div className="flex justify-center items-center">
                {
                  teamInfo.form.split('').map((char, i) => (
                    <div
                      key={char + 1}
                      className={`opacity-80 w-3 h-3 m-1 rounded-full ${char === 'L' ? 'bg-red-500' : char === '0' ? 'bg-gray-500' : 'bg-green-500'}`}
                    >
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-2 mt-10">
            <ul className="flex w-full justify-center items-center text-xl">
              <li className="w-full text-center font-bold">P</li>
              <li className="w-full text-center">M</li>
              <li className="w-full text-center">W</li>
              <li className="w-full text-center">D</li>
              <li className="w-full text-center">L</li>
              <li className="w-full text-center">GF</li>
              <li className="w-full text-center">GA</li>
              <li className="w-full text-center">GD</li>
            </ul>
            <ul className="flex w-full justify-center items-center text-xl">
              <li className="w-full text-center font-bold">{teamInfo.points}</li>
              <li className="w-full text-center">{teamInfo.all.played}</li>
              <li className="w-full text-center">{teamInfo.all.win}</li>
              <li className="w-full text-center">{teamInfo.all.draw}</li>
              <li className="w-full text-center">{teamInfo.all.lose}</li>
              <li className="w-full text-center">{teamInfo.all.goals.for}</li>
              <li className="w-full text-center">{teamInfo.all.goals.against}</li>
              <li className="w-full text-center">{teamInfo.goalsDiff}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:w-2/3 justify-center items-center">
        <Fixtures fixturesByTeamId={fixturesByTeamId} teamId={parseInt(params.id)} />
        </div>
      </div>
    </div>
  )
};

export default Page;
