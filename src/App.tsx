import React, { useState, useRef } from 'react';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import DatePicker, { Birthdate } from './components/datePicker';
import ChineseBirthday from './components/chineseBirthday';
import Title from './components/title';
import ConversionOptions from './components/conversionOptions';
import usePositioner from './hooks/usePositioner';

const Wrapper = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  font-family: 'Forum';
  height: 100%;
  justify-content: center;
`;

const DateWrapper = styled.div<{ left: number; top: number }>`
  height: 1em;
  display: flex;
  align-items: center;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  opacity: ${props => (props.left === 0 && props.top === 0 ? 0 : 1)};
`;

const App: React.FC = () => {
  const dateWrapperRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<string | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState();

  const [westernBirthday, setWesternBirthday] = useState<Birthdate | null>(
    null
  );

  const positionDependents = [type, westernBirthday, shouldAnimate];

  const { left, top } = usePositioner(dateWrapperRef, positionDependents);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Title />
        {!type && <ConversionOptions setType={setType} />}
        {type === 'birthday' && (
          <DateWrapper ref={dateWrapperRef} left={left} top={top}>
            <TransitionGroup>
              {westernBirthday ? (
                <ChineseBirthday westernBirthday={westernBirthday} />
              ) : (
                <DatePicker
                  onSubmit={setWesternBirthday}
                  shouldAnimate={shouldAnimate}
                  setShouldAnimate={setShouldAnimate}
                />
              )}
            </TransitionGroup>
          </DateWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default App;
