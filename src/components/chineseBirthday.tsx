import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Birthdate } from './datePicker';
import { getChineseDate, getWesternDate } from '../utils/calendarHelper';

type Props = {
  westernBirthday: Birthdate;
};

const Month = styled.span`
  font-size: 1em;
  color: blue;
`;

const Day = styled.span`
  font-size: 1em;
  color: black;
`;

const ChineseBirthday: React.FC<Props> = ({
  westernBirthday: { year, month, day }
}) => {
  const chineseBirthday = getChineseDate(year, month, day);

  console.log('chineseBirthday', chineseBirthday);
  const { month: lunarMonth, day: lunarDay } = chineseBirthday;
  const { year: convertedYear } = getWesternDate(chineseBirthday);
  return (
    <span>
      <CountUp
        prefix={day.length === 1 ? '0' : ''}
        start={parseInt(day, 10)}
        end={lunarDay}
        duration={8}
        delay={0}
      >
        {({ countUpRef, start }) => <Day ref={countUpRef} />}
      </CountUp>
      <CountUp
        prefix={month.length === 1 ? '0' : ''}
        start={parseInt(month, 10)}
        end={lunarMonth}
        duration={8}
        delay={0}
      >
        {({ countUpRef, start }) => <Month ref={countUpRef} />}
      </CountUp>
      <CountUp
        start={parseInt(year, 10)}
        end={convertedYear}
        duration={8}
        delay={0}
      >
        {({ countUpRef, start }) => <Day ref={countUpRef} />}
      </CountUp>
    </span>
  );
};

export default ChineseBirthday;
