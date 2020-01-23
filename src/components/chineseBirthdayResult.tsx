import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Birthdate } from './birthdayPicker';
import {
  getChineseDate,
  getCurrentYearConversion
} from '../utils/calendarHelper';
import { MONTHS } from '../config';
import { ResultWrapper, ResultText } from './styles';

type Props = {
  westernBirthday: Birthdate;
};

const BirthdayDescription = styled.div<{
  left: number;
  shouldDisplay: boolean;
}>`
  font-size: 11px;
  font-family: 'Forum', sans-serif;
  text-align: center;
  text-transform: uppercase;
  width: 200px;
  position: absolute;
  left: -${props => 100 - props.left}px;
  opacity: ${props => (props.shouldDisplay ? 1 : 0)};
  transform: opacity 3s linear;

  @media (min-width: 480px) {
    width: 320px;
    left: -${props => 160 - props.left}px;
    font-size: 14px;
  }
`;

const Month = styled.span`
  font-size: 1em;
  color: black;
`;

const Day = styled.span`
  font-size: 1em;
  color: black;
`;

const ChineseBirthday: React.FC<Props> = ({
  westernBirthday: { year, month, day }
}) => {
  const dateCounterRef = useRef<HTMLDivElement>(null);
  const chineseBirthday = getChineseDate(year, month, day);

  const [displayDescription, setDisplayDescription] = useState(false);
  const [leftAdjustment, setLeftAdjustment] = useState(0);

  useEffect(() => {
    if (!dateCounterRef || !dateCounterRef.current) return;
    const dateCounter = dateCounterRef.current;
    const dateCounterBounds = dateCounter.getBoundingClientRect();
    const { width } = dateCounterBounds;
    setLeftAdjustment(width / 2);
  }, [dateCounterRef]);

  const {
    month: lunarMonth,
    day: lunarDay,
    cycle,
    leap,
    year: lunarYear
  } = chineseBirthday;

  const {
    year: convertedYear,
    month: convertedMonth,
    day: convertedDay
  } = getCurrentYearConversion(chineseBirthday);
  return (
    <ResultWrapper>
      <div ref={dateCounterRef}>
        <CountUp start={day} end={lunarDay} duration={4} delay={0}>
          {({ countUpRef }) => <Day ref={countUpRef} />}
        </CountUp>
        <ResultText>Day</ResultText>
        <CountUp
          start={month}
          end={lunarMonth}
          duration={4}
          delay={0}
          onEnd={() => setDisplayDescription(true)}
        >
          {({ countUpRef }) => <Month ref={countUpRef} />}
        </CountUp>
        <ResultText>Month</ResultText>
      </div>

      <BirthdayDescription
        left={leftAdjustment}
        shouldDisplay={displayDescription}
      >
        YEAR: {lunarYear} | CYCLE: {cycle} | LEAP: {leap ? 'Yes' : 'No'}
        <div>
          This lunar year, your lunar birthday falls on <br />
          {convertedDay} {MONTHS[convertedMonth - 1]} {convertedYear} in the
          Gregorian calendar
        </div>
      </BirthdayDescription>
    </ResultWrapper>
  );
};

export default ChineseBirthday;
