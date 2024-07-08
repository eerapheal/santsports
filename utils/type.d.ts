type Standing = {
  league: league;
};

type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: string;
  standings: [Team[]];
};

type Team = {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: Games;
  home: Games;
  away: Games;
  update: string;
};

type Games = {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
};

type FixtureInfo = {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number;
    second: number;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number;
  };
};

type LeagueFixtures = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
};

type Teams = {
  home: {
    id: number;
    name: strung;
    logo: sting;
    winner: boolean;
  };
  away: {
    id: number;
    name: strung;
    logo: sting;
    winner: boolean;
  };
};

type Gaols = {
  home: number;
  away: number;
};

type Score = {
  halftime: Gaols;
  fulltime: Gaols;
  teams: Teams;
  goals: Gaols;
  score: Score;
};

type Fixture = {
  fixture: FixtureInfo;
  league: LeagueFixtures;
  teams: Teams;
  goals: Gaols;
  score: Score;
};

type AllFixtures = {
  name: string,
  fixtures: Fixture[]
}

export {
  Standing,
  Team,
  League,
  Fixture,
  AllFixtures
};
