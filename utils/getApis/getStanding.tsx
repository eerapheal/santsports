import "server-only";

import { Standing } from "../type";
import moment from "moment";

export default async function getStandings(): Promise<Standing[]> {
  const currentTime = moment();

  const month = currentTime.month();
  let year;

  if (month < 0) {
    year = currentTime.year() - 1;
  } else {
    year = currentTime.year();
  }

  const API_KEY: string = process.env.API_KEY as string;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  const standings: Standing[] = [];
  const leagues = [
    { name: "EPL", id: 39 },
    { name: "La Liga", id: 140 },
    { name: "BundesLiga", id: 78 },
    { name: "Serie A", id: 135 },
    { name: "Ligue1", id: 61 },
  ];

  for (const league of leagues) {
    let url = `https://api-football-v1.p.rapidapi.com/v3/standings?league=${league.id}&season=${year}`;
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        const standing = data.response[0];
        if (standing) {
          standings.push(standing);
        }
      })
      .catch((err) => {
        console.error(`Error fetching ${league.name} standings ${err}`);
      });
  }
  return standings;
}
