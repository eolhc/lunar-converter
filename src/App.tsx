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
  flex-direction: column;
  align-items: center;
  font-family: 'Forum';
  height: 100%;
  justify-content: 100%;
`;

const DateWrapper = styled.div<{ left: number; top: number }>`
  height: 1em;
  display: flex;
  align-items: center;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`;

const App: React.FC = () => {
  const dateWrapperRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<string | null>(null);

  const [westernBirthday, setWesternBirthday] = useState<Birthdate | null>(
    null
  );

  const { left, top } = usePositioner(dateWrapperRef, type);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Title />
        {!type && <ConversionOptions setType={setType} />}
        {type === 'cny' && (
          <DateWrapper ref={dateWrapperRef} left={left} top={top}>
            <TransitionGroup>
              {westernBirthday ? (
                <ChineseBirthday westernBirthday={westernBirthday} />
              ) : (
                <DatePicker onSubmit={setWesternBirthday} />
              )}
            </TransitionGroup>
          </DateWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default App;
