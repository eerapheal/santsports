
import { Fixture } from '../type';
import getFixtures from './getFixtures';

export default async function GetFixtureByFixtureId(id: number): Promise<Fixture | undefined> {
  try {
    const allFixturesByLeague = await getFixtures();

    for (const league of allFixturesByLeague) {

      for (const fixture of league.fixtures) {
        if (fixture.fixture.id === id) {
          return fixture;
        }
      }
    }
  } catch (error) {
    console.error('Error occured while fetching fixture by fixture id: ', error)
  }
}
