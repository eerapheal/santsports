import { Metadata } from "next";
import { Suspense } from "react";

import { AllFixtures, Standing } from "@/utils/type";
import getStandings from "@/utils/getApis/getStanding";
import Loading from "./loading";
import getFixturesForFiveLeague from "@/utils/getApis/getFixturesForFiveLeague";
import StandingFixtures from "@/components/home/standing.fixtures"
import LiveMatches from "@/components/home/liveMatches/liveMatches";

export const metadata: Metadata = {
  title:
    process.env.NEXT_PUBLIC_APP_NAME ||
    "SantSport | Sports live scores, standing tables and upcoming fixtures and match",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "Experience the latest live sports scores like never before with Sant Sport. We are committed to providing you with all the trending sports news and real-time scores, tables, standing, upcoming matches, results and  form on the go.",
};

const HomePage = async () => {
  const standingData: Standing[] = await getStandings();
  const filteredFixtures: AllFixtures[] = await getFixturesForFiveLeague();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <LiveMatches />
      <Suspense fallback={<Loading />}>
        <StandingFixtures
          standingData={standingData}
          filteredFixtures={filteredFixtures}
        />
      </Suspense>
    </div>
  );
};

export default HomePage;
