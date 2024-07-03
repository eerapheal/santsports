import { Metadata } from "next";
import { Suspense } from "react";

import Loading from "./loading";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "SantSport live sports scores like never before",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "Experience the latest live sports scores like never before with Sant Sport. We are committed to providing you with all the trending sports news and real-time scores on the go.",
};

const HomePage = () => {
  return (
    <div className="">
      <Suspense fallback={<Loading />}></Suspense>
      home
    </div>
  );
};

export default HomePage;
