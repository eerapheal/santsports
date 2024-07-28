import { AllFixtures } from "../type";

export default function getLiveMatchSample(): AllFixtures[] {
  // Sample JSON data as a string
  const fixturesSample = `[
    {
  "name": "Live Matches",
            "fixtures":
                [{
      "fixture": {
        "id": 883747,
        "referee": null,
        "timezone": "UTC",
        "date": "2024-07-31T10:40:00+00:00",
        "timestamp": 1679745600,
        "periods": {
          "first": 1679745600,
          "second": null
        },
        "venue": {
          "id": 4474,
          "name": "Dalum - Kunstgræsbane",
          "city": "Odense"
        },
        "status": {
          "long": "First Half",
          "short": "1H",
          "elapsed": 9
        }
      },
      "league": {
        "id": 862,
        "name": "3. Division",
        "country": "Denmark",
        "logo": "https://media-3.api-sports.io/football/leagues/862.png",
        "flag": "https://media-3.api-sports.io/flags/dk.svg",
        "season": 2022,
        "round": "Regular Season - 19"
      },
      "teams": {
        "home": {
          "id": 6013,
          "name": "Dalum",
          "logo": "https://media-1.api-sports.io/football/teams/6013.png",
          "winner": false
        },
        "away": {
          "id": 8635,
          "name": "Næsby",
          "logo": "https://media-1.api-sports.io/football/teams/8635.png",
          "winner": true
        }
      },
      "goals": {
        "home": 0,
        "away": 1
      },
      "score": {
        "halftime": {
          "home": 0,
          "away": 1
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      },
      "events": [  
        {
          "time": {
            "elapsed": 4,
            "extra": null
          },
          "team": {
            "id": 8635,
            "name": "Næsby",
            "logo": "https://media-3.api-sports.io/football/teams/8635.png"
          },
          "player": {
            "id": null,
            "name": null
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        }
      ]
    },
    {
      "fixture": {
        "id": 1014217,
        "referee": null,
        "timezone": "UTC",
        "date": "2024-07-30T13:04:59+00:00",
        "timestamp": 1679742000,
        "periods": {
          "first": 1679742000,
          "second": 1679745600
        },
        "venue": {
          "id": null,
          "name": "Veritas Stadion",
          "city": "Åbo"
        },
        "status": {
          "long": "Second Half",
          "short": "2H",
          "elapsed": 66
        }
      },
      "league": {
        "id": 667,
        "name": "Friendlies Clubs",
        "country": "World",
        "logo": "https://media-1.api-sports.io/football/leagues/667.png",
        "flag": null,
        "season": 2023,
        "round": "Club Friendlies 3"
      },
      "teams": {
        "home": {
          "id": 1164,
          "name": "Inter Turku",
          "logo": "https://media-1.api-sports.io/football/teams/1164.png",
          "winner": true
        },
        "away": {
          "id": 2082,
          "name": "IF Gnistan",
          "logo": "https://media-1.api-sports.io/football/teams/2082.png",
          "winner": false
        }
      },
      "goals": {
        "home": 4,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 3,
          "away": 0
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      },
      "events": [
        {
          "time": {
            "elapsed": 28,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 30,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-1.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": null,
            "name": "B. Ampofo"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 33,
            "extra": null
          },
          "team": {
            "id": 2082,
            "name": "IF Gnistan",
            "logo": "https://media-3.api-sports.io/football/teams/2082.png"
          },
          "player": {
            "id": null,
            "name": null
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Card",
          "detail": "Yellow Card",
          "comments": null
        },
        {
          "time": {
            "elapsed": 37,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 55,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 55533,
            "name": "T. Stavitski"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        }
      ]
    },
    {
      "fixture": {
        "id": 1014217,
        "referee": null,
        "timezone": "UTC",
        "date": "2024-08-28T13:04:59+00:00",
        "timestamp": 1679742000,
        "periods": {
          "first": 1679742000,
          "second": 1679745600
        },
        "venue": {
          "id": null,
          "name": "Veritas Stadion",
          "city": "Åbo"
        },
        "status": {
          "long": "Second Half",
          "short": "2H",
          "elapsed": 66
        }
      },
      "league": {
        "id": 667,
        "name": "Friendlies Clubs",
        "country": "World",
        "logo": "https://media-1.api-sports.io/football/leagues/667.png",
        "flag": null,
        "season": 2023,
        "round": "Club Friendlies 3"
      },
      "teams": {
        "home": {
          "id": 1164,
          "name": "Inter Turku",
          "logo": "https://media-1.api-sports.io/football/teams/1164.png",
          "winner": true
        },
        "away": {
          "id": 2082,
          "name": "IF Gnistan",
          "logo": "https://media-1.api-sports.io/football/teams/2082.png",
          "winner": false
        }
      },
      "goals": {
        "home": 4,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 3,
          "away": 0
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      },
      "events": [
        {
          "time": {
            "elapsed": 28,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 30,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-1.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": null,
            "name": "B. Ampofo"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 33,
            "extra": null
          },
          "team": {
            "id": 2082,
            "name": "IF Gnistan",
            "logo": "https://media-3.api-sports.io/football/teams/2082.png"
          },
          "player": {
            "id": null,
            "name": null
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Card",
          "detail": "Yellow Card",
          "comments": null
        },
        {
          "time": {
            "elapsed": 37,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 55,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 55533,
            "name": "T. Stavitski"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        }
      ]
    },
    {
      "fixture": {
        "id": 1014217,
        "referee": null,
        "timezone": "UTC",
        "date": "2024-07-28T13:04:59+00:00",
        "timestamp": 1679742000,
        "periods": {
          "first": 1679742000,
          "second": 1679745600
        },
        "venue": {
          "id": null,
          "name": "Veritas Stadion",
          "city": "Åbo"
        },
        "status": {
          "long": "Second Half",
          "short": "2H",
          "elapsed": 66
        }
      },
      "league": {
        "id": 667,
        "name": "Friendlies Clubs",
        "country": "World",
        "logo": "https://media-1.api-sports.io/football/leagues/667.png",
        "flag": null,
        "season": 2023,
        "round": "Club Friendlies 3"
      },
      "teams": {
        "home": {
          "id": 1164,
          "name": "Inter Turku",
          "logo": "https://media-1.api-sports.io/football/teams/1164.png",
          "winner": true
        },
        "away": {
          "id": 2082,
          "name": "IF Gnistan",
          "logo": "https://media-1.api-sports.io/football/teams/2082.png",
          "winner": false
        }
      },
      "goals": {
        "home": 4,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 3,
          "away": 0
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      },
      "events": [
        {
          "time": {
            "elapsed": 28,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 30,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-1.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": null,
            "name": "B. Ampofo"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 33,
            "extra": null
          },
          "team": {
            "id": 2082,
            "name": "IF Gnistan",
            "logo": "https://media-3.api-sports.io/football/teams/2082.png"
          },
          "player": {
            "id": null,
            "name": null
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Card",
          "detail": "Yellow Card",
          "comments": null
        },
        {
          "time": {
            "elapsed": 37,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 55,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 55533,
            "name": "T. Stavitski"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        }
      ]
    },
    {
      "fixture": {
        "id": 1014217,
        "referee": null,
        "timezone": "UTC",
        "date": "2024-07-28T13:04:59+00:00",
        "timestamp": 1679742000,
        "periods": {
          "first": 1679742000,
          "second": 1679745600
        },
        "venue": {
          "id": null,
          "name": "Veritas Stadion",
          "city": "Åbo"
        },
        "status": {
          "long": "Second Half",
          "short": "2H",
          "elapsed": 66
        }
      },
      "league": {
        "id": 667,
        "name": "Friendlies Clubs",
        "country": "World",
        "logo": "https://media-1.api-sports.io/football/leagues/667.png",
        "flag": null,
        "season": 2023,
        "round": "Club Friendlies 3"
      },
      "teams": {
        "home": {
          "id": 1164,
          "name": "Inter Turku",
          "logo": "https://media-1.api-sports.io/football/teams/1164.png",
          "winner": true
        },
        "away": {
          "id": 2082,
          "name": "IF Gnistan",
          "logo": "https://media-1.api-sports.io/football/teams/2082.png",
          "winner": false
        }
      },
      "goals": {
        "home": 4,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 3,
          "away": 0
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      },
      "events": [
        {
          "time": {
            "elapsed": 28,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 30,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-1.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": null,
            "name": "B. Ampofo"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 33,
            "extra": null
          },
          "team": {
            "id": 2082,
            "name": "IF Gnistan",
            "logo": "https://media-3.api-sports.io/football/teams/2082.png"
          },
          "player": {
            "id": null,
            "name": null
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Card",
          "detail": "Yellow Card",
          "comments": null
        },
        {
          "time": {
            "elapsed": 37,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 40259,
            "name": "P. Forsell"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 55,
            "extra": null
          },
          "team": {
            "id": 1164,
            "name": "Inter Turku",
            "logo": "https://media-3.api-sports.io/football/teams/1164.png"
          },
          "player": {
            "id": 55533,
            "name": "T. Stavitski"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        }
      ]
    },
    {
      "fixture": {
        "id": 1017740,
        "referee": null,
        "timezone": "UTC",
        "date": "2024-08-20T13:10:00+00:00",
        "timestamp": 1679742000,
        "periods": {
          "first": 1679742000,
          "second": 1679745600
        },
        "venue": {
          "id": null,
          "name": "TBC",
          "city": "TBC"
        },
        "status": {
          "long": "Second Half",
          "short": "2H",
          "elapsed": 60
        }
      },
      "league": {
        "id": 667,
        "name": "Friendlies Clubs",
        "country": "World",
        "logo": "https://media-1.api-sports.io/football/leagues/667.png",
        "flag": null,
        "season": 2023,
        "round": "Club Friendlies 3"
      },
      "teams": {
        "home": {
          "id": 349,
          "name": "Piast Gliwice",
          "logo": "https://media-1.api-sports.io/football/teams/349.png",
          "winner": false
        },
        "away": {
          "id": 3426,
          "name": "Podbeskidzie",
          "logo": "https://media-1.api-sports.io/football/teams/3426.png",
          "winner": true
        }
      },
      "goals": {
        "home": 1,
        "away": 2
      },
      "score": {
        "halftime": {
          "home": 1,
          "away": 1
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      },
      "events": [
        {
          "time": {
            "elapsed": 23,
            "extra": null
          },
          "team": {
            "id": 349,
            "name": "Piast Gliwice",
            "logo": "https://media-1.api-sports.io/football/teams/349.png"
          },
          "player": {
            "id": null,
            "name": "M. Tamas"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        },
        {
          "time": {
            "elapsed": 55,
            "extra": null
          },
          "team": {
            "id": 3489,
            "name": "Podbeskidzie",
            "logo": "https://media-1.api-sports.io/football/teams/3489.png"
          },
          "player": {
            "id": null,
            "name": "M. Furtado"
          },
          "assist": {
            "id": null,
            "name": null
          },
          "type": "Goal",
          "detail": "Normal Goal",
          "comments": null
        }
      ]
}]}
  ]`;

  let liveMatchSampleJson: AllFixtures[] = [];

  try {
    const jsonData = JSON.parse(fixturesSample);
    liveMatchSampleJson = jsonData;
    console.log(liveMatchSampleJson)
  } catch (error) {
    console.log("Error parsing JSON: ", error);
  }

  return liveMatchSampleJson;
}
