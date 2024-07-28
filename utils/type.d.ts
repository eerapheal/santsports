type Standing = {
  league: League;
};

type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: string;
  standings: Team[][];
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
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number;
    second: number | null;
  };
  venue: {
    id: number | null;
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
  flag: string | null;
  season: number;
  round: string;
};

type Teams = {
  home: {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  };
  away: {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  };
};

type Goals = {
  home: number;
  away: number;
};

type Score = {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
};

type Times = {
  elapsed: number;
  extra: number | null;
};

type Players = {
  id: number | null;
  name: string | null;
};

type Assists = {
  id: number | null;
  name: string | null;
};

type Events = {
  time: Times;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  player: Players;
  assist: Assists;
  type: string;
  detail?: string;
  comments?: string;
};

type Fixture = {
  fixture: FixtureInfo;
  league: LeagueFixtures;
  teams: Teams;
  goals: Goals;
  score: Score;
  events: Events[];
};

type AllFixtures = {
  name: string;
  fixtures: Fixture[];
};

export {
  Standing,
  Team,
  League,
  Fixture,
  AllFixtures,
  FixtureInfo,
  LeagueFixtures,
  Games,
  Goals,
  Score,
  Events,
  Times,
  Players,
  Assists,
  Teams
};