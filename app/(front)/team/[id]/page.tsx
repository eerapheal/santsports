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
    id: string
  }
}

const Page = async ({
  params
}: PageProps) => {

  let teamInfo: Team | undefined = await getTeamInfoByTeamId(parseInt(params.id));
  let fixturesByTeamId: Fixture[] = await getFixtureByTeamId(parseInt(params.id));

  if (!teamInfo) {
    return (
      <div className="flex w-full justify-center items-center py-5">
        <div className="flex max-w-7xl p-5 w-full md:flex-row justify-center items-center text-neutral-100">
          Team Info Not Available
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center text-neutral-100 py-5">
      <div className="flex flex-col max-w-7xl md:gap-10 p-5 w-full md:flex-row">
        <div className="flex flex-col md:w-1/3 justify-center items-center
              rounded logo-shadow bg-gradient-to-br from-blue-400/100 to-blue-700/40 h-[500px]">
          <Image
            src={teamInfo.team.logo}
            alt="TeamLogo"
            width={150}
            height={150}
            className="p-3 logo-shadow"
          />
          <div className="text-2xl">{teamInfo.team.name}</div>
          <div className="flex justify-center items-center w-full">
            <div className="w-1/3 text-center text-2xl">#{teamInfo.rank}</div>
            <div className="w-1/3 text-center">{teamInfo.group}</div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <div className="text-center">Form</div>
              <div className="flex justify-center items-center">
                {
                  teamInfo.form?.split('').map((char, i) => (
                    <div
                      key={char + i}
                      className={`opacity-80 w-3 h-3 m-1 rounded-full
                                          ${char === 'L' ? 'bg-red-500' : char === 'D' ?
                          'bg-gray-500' : 'bg-green-500'}`}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-2 mt-10">
            <div className="flex w-full justify-center items-center text-xl">
              <div className="w-full text-center font-bold">P</div>
              <div className="w-full text-center">M</div>
              <div className="w-full text-center">W</div>
              <div className="w-full text-center">D</div>
              <div className="w-full text-center">L</div>
              <div className="w-full text-center">GF</div>
              <div className="w-full text-center">GA</div>
              <div className="w-full text-center">GD</div>
            </div>
            <div className="flex w-full justify-center items-center text-xl">
              <div className="w-full text-center font-bold">{teamInfo.points}</div>
              <div className="w-full text-center">{teamInfo.all.played}</div>
              <div className="w-full text-center">{teamInfo.all.win}</div>
              <div className="w-full text-center">{teamInfo.all.draw}</div>
              <div className="w-full text-center">{teamInfo.all.lose}</div>
              <div className="w-full text-center">{teamInfo.all.goals.for}</div>
              <div className="w-full text-center">{teamInfo.all.goals.against}</div>
              <div className="w-full text-center">{teamInfo.goalsDiff}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-2/3 justify-center items-center logo-shadow">
          <Fixtures fixturesByTeamId={fixturesByTeamId} teamId={parseInt(params.id)} />
        </div>
      </div>
    </div>
  )
};

export default Page;
