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
  color: black;
`;

const Day = styled.span`
  font-size: 1em;
  color: black;
`;

const ChineseBirthdayWrapper = styled.span`
  font-family: 'Racing Sans One';
`;

const ChineseBirthday: React.FC<Props> = ({
  westernBirthday: { year, month, day }
}) => {
  const chineseBirthday = getChineseDate(year, month, day);

  console.log('chineseBirthday', chineseBirthday);
  const { month: lunarMonth, day: lunarDay } = chineseBirthday;
  const { year: convertedYear } = getWesternDate(chineseBirthday);
  return (
    <ChineseBirthdayWrapper>
      <CountUp start={day} end={lunarDay} duration={8} delay={0}>
        {({ countUpRef, start }) => <Day ref={countUpRef} />}
      </CountUp>{' '}
      <CountUp start={month} end={lunarMonth} duration={8} delay={0}>
        {({ countUpRef, start }) => <Month ref={countUpRef} />}
      </CountUp>{' '}
      <CountUp start={year} end={convertedYear} duration={8} delay={0}>
        {({ countUpRef, start }) => <Day ref={countUpRef} />}
      </CountUp>
    </ChineseBirthdayWrapper>
  );
};

export default ChineseBirthday;
