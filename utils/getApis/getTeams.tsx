import "server-only";
import { Standing, Team } from "../type";
import getStandings from "./getStanding";

export default async function getTeams(): Promise<Team[]> {
  try {
    const standings: Standing[] = await getStandings();
    const teams: Team[] = [];
    for (const league of standings) {
      for (const standing of league.league.standings) {
        if (Array.isArray(standing)) {
          for (const team of standing) {
            teams.push(team);
          }
        } else {
          throw new Error("Invalid standing data");
        }
      }
    }
    return teams;
  } catch (error) {
    console.error("Error while fetching team", error);
    throw error;
  }
}
