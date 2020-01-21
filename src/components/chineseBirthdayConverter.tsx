import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import usePositioner from '../hooks/usePositioner';
import ChineseBirthdayResult from './chineseBirthdayResult';
import DatePicker, { Birthdate } from './datePicker';

const DateWrapper = styled.div<{ left: number; top: number }>`
  height: 1em;
  display: flex;
  align-items: center;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  opacity: ${props => (props.left === 0 && props.top === 0 ? 0 : 1)};
`;

const ChineseBirthdayConverter: React.FC<{ conversionType: string | null }> = ({
  conversionType
}) => {
  const dateWrapperRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState();
  const [westernBirthday, setWesternBirthday] = useState<Birthdate | null>(
    null
  );

  const positionDependents = [conversionType, westernBirthday, shouldAnimate];
  const { left, top } = usePositioner(dateWrapperRef, positionDependents);

  return (
    <DateWrapper ref={dateWrapperRef} left={left} top={top}>
      <TransitionGroup style={{ textAlign: 'center' }}>
        {westernBirthday ? (
          <ChineseBirthdayResult westernBirthday={westernBirthday} />
        ) : (
          <DatePicker
            onSubmit={setWesternBirthday}
            shouldAnimate={shouldAnimate}
            setShouldAnimate={setShouldAnimate}
          />
        )}
      </TransitionGroup>
    </DateWrapper>
  );
};

export default ChineseBirthdayConverter;
