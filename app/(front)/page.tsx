import { Metadata } from "next";
import { Suspense } from "react";

import { AllFixtures, Standing } from "@/utils/type";
import getStandings from "@/utils/getApis/getStanding";
import Loading from "./loading";
import getFixturesForFiveLeague from "@/utils/getApis/getFixturesForFiveLeague";
import  StandingFixtures from "@/components/home/standing.fixtures"


export const metadata: Metadata = {
  title:
    process.env.NEXT_PUBLIC_APP_NAME ||
    "SantSport live sports scores like never before",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "Experience the latest live sports scores like never before with Sant Sport. We are committed to providing you with all the trending sports news and real-time scores on the go.",
};

const HomePage = async () => {
  const standingData: Standing[] = await getStandings();
  const filteredFixtures: AllFixtures[] = await getFixturesForFiveLeague();
  console.log(filteredFixtures);

  return (
    <div className="flex flex-col justify-center items-center w-full md:p-10">
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
