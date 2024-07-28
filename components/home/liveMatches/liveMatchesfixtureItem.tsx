"use client";

import LocalTime from "@/utils/localTime/localTime";
import { Fixture } from "@/utils/type";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  match: Fixture;
  index: number;
};

const LiveMatchesfixtureItem = ({ match, index }: PageProps) => {
  const today = moment();
  const matchDate = moment(match.fixture.date);
  return today.isBefore(matchDate) ? (
    <Link
      href={`/match/${match.fixture.id}`}
      key={match.fixture.id}
      className={`flex w-full p-2 justify-center logo-shadow items-center min-h-18 hover:bg-red-800/30 ${index % 2 === 0 ? "bg-black/40" : ""} animated-div`}
    >
      <div className="flex w-full flex-col justify-center items-center">
        <div className="h-1/3 text-xs text-center text-neutral-100">
          <LocalTime fixture={match} />
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-2/5 flex gap-2 text-xs md:text-sm text-neutral-100 justify-center items-center text-center">
            <Image
              src={match.teams.home.logo}
              alt="HomeLogo"
              width={25}
              height={25}
            />
            {match.teams.home.name}
          </div>
          <div className="w-1/5 flex flex-col justify-center items-center h-full">
            <div className="text-center text-neutral-100">{match.goals.home} vs {match.goals.away}</div>
          </div>
          <div className="w-2/5 flex gap-2 text-xs md:text-sm text-neutral-100 justify-center items-center">
            <Image
              src={match.teams.away.logo}
              alt="AwayLogo"
              width={25}
              height={25}
              title="match logo"
            />
            {match.teams.away.name}
          </div>
        </div>
      </div>
    </Link>
  ) : null;
};

export default LiveMatchesfixtureItem;
