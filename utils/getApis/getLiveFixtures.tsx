import moment from "moment";
import getLiveMatchSample from "../sampleData/getLiveMatchesSample";
import { USE_SAMPLE } from "../sampleData/useSampleData";
import { AllFixtures, Fixture } from "../type";

const API_KEY = process.env.API_KEY as string;

const getLiveFixturesApi = async (): Promise<Fixture[]> => {
  const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
    next: {
      revalidate: 60 * 60 * 24, // validate data every 24 hours
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const fixtures: Fixture[] = data.response;
    return fixtures || [];
  } catch (err) {
    console.error(`Error fetching live fixtures: ${err}`);
    return [];
  }
};

export default async function getLiveFixtures(): Promise<AllFixtures[]> {
  if (USE_SAMPLE) {
    const sampleData = getLiveMatchSample();
    return sampleData;
  }

  try {
    const fixtures = await getLiveFixturesApi();
    const currentTime = moment();
    const startOfWeek = currentTime.clone().startOf('isoWeek');
    const endOfWeek = currentTime.clone().endOf('isoWeek');

    const filteredFixtures = fixtures.filter(fixture => {
      const fixtureTime = moment(fixture.fixture.date);
      return fixtureTime.isBetween(startOfWeek, endOfWeek, 'minute', '[]');
    });

    return [{ name: 'Live Matches This Week', fixtures: filteredFixtures }];
  } catch (error) {
    console.error("Error fetching live fixtures within a week", error);
    throw error;
  }
}
