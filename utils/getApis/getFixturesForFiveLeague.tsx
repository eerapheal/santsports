import moment from "moment";
import { AllFixtures } from "../type";
import getFixtures from "./getFixtures";

export default async function getFixturesForFiveLeague(): Promise<AllFixtures[]> {
  try {
    const allFixturesByLeague = await getFixtures();

    const fixturesForFiveLeagues: AllFixtures[] = [];
    for (const league of allFixturesByLeague) {
      if (
        league.name === "EPL" ||
        league.name === "La Liga" ||
        league.name === "BundesLiga" ||
        league.name === "Serie a" ||
        league.name === "Ligue 1"
      ) {
        fixturesForFiveLeagues.push(league);
      }
    }

    const filteredFixtures: AllFixtures[] = fixturesForFiveLeagues.filter(
      (league) => {
        league.fixtures = league.fixtures
          .filter((fixture) =>
            moment(fixture.fixture.date).isAfter(moment().subtract(1, "day"))
          )
          .slice(0, 5);
        return league.fixtures.length > 0;
      }
    );
    return filteredFixtures;
  } catch (error) {
    console.error("An error occurred while fetching fixtures", error);
    throw error;
  }
}
