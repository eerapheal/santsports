"use client"
import getLiveFixtures from "@/utils/getApis/getLiveFixtures";
import { AllFixtures } from "@/utils/type";
import { useEffect, useState } from "react"
import LiveMatchesfixtureItem from "./liveMatchesfixtureItem";

const LiveMatches = () => {
  const [fixtures, setFixtures] = useState<AllFixtures[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const data = await getLiveFixtures();
        setFixtures(data);
      } catch (error) {
        console.error("Error fetching live fixtures:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  if (loading) {
    return <div className="flex text-green-700 justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {fixtures.length === 0 ? (
        <div className="text-center text-neutral-100">No live matches available within the next 7 days.</div>
      ) : (
        fixtures.map((fixtureGroup, index) => (
          <div key={index} className="my-4">
            <h2 className="text-2xl text-neutral-100 font-bold mb-2 text-center">{fixtureGroup.name}</h2>
            {fixtureGroup.fixtures.map((match, idx) => (
              <LiveMatchesfixtureItem key={match.fixture.id} match={match} index={idx} />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default LiveMatches;