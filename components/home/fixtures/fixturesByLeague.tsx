import { Fixture } from "@/utils/type";
import FixtureItem from "./fixtureItem";

type PageProps = {
  fixturesData: Fixture[];
};

const FixturesByLeague = ({ fixturesData }: PageProps) => {
  if (fixturesData.length > 0) {
    return (
      <>
        {fixturesData.slice(0, 4).map((match, i) => (
          <FixtureItem match={match} index={i} key={match.fixture.id} />
        ))}
      </>
    );
  }

  return null;
};

export default FixturesByLeague;
