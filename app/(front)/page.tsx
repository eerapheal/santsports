import { Metadata } from "next";
import React, { Suspense } from "react";

import { Standing } from "@/utils/type";
import getStandings from "@/utils/getApis/getStanding";
import Loading from "./loading";
const StandingFixtures = React.lazy(
  () => import("@/components/home/standing.fixtures")
);

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
  return (
    <div className="flex flex-col justify-center items-center w-full md:p-10">
      <Suspense fallback={<Loading />}>
        <StandingFixtures standingData={standingData} />
      </Suspense>
    </div>
  );
};

export default HomePage;
