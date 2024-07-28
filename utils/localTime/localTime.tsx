'use client'

import { Fixture } from "../type"
import { useEffect, useState } from "react"
import moment from 'moment';

type PageProps = {
  fixture: Fixture
}

const LocalTime = ({
  fixture
}: PageProps) => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    function formatToLocalTime(timeUTC: string): string {
      const newTime = moment(timeUTC);
      // const localDateString = newTime.format('dddd, LL');
      // const localTimeString = newTime.format('LT');
      const localDateString = newTime.format('ddd, MMM D');
      const localTimeString = newTime.format('HH:mm');
      return `${localDateString} ${localTimeString}`;
    }

    const fixtureTime = fixture.fixture.date;
    const formatted = formatToLocalTime(fixtureTime);
    setFormattedTime(formatted);
  }, []);

  return (
    <div className="flex justify-center items-center text-center">{formattedTime.substring(0,)}</div>
  )
};

export default LocalTime;
