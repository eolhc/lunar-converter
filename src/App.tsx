import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import DatePicker, { Birthdate } from './components/datePicker';
import ChineseBirthday from './components/chineseBirthday';

const Wrapper = styled.div`
  font-size: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateWrapper = styled.div`
  height: 1em;
  display: flex;
  align-items: center;
`;

const App: React.FC = () => {
  const [westernBirthday, setWesternBirthday] = useState<Birthdate | null>(
    null
  );
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <div>
          <span>LUNAR BIRTHDAY FINDER</span>
          <span> WHEN IS YOUR BIRTHDAY?</span>
        </div>
        <DateWrapper>
          <TransitionGroup>
            {westernBirthday ? (
              <ChineseBirthday westernBirthday={westernBirthday} />
            ) : (
              <DatePicker onSubmit={setWesternBirthday} />
            )}
          </TransitionGroup>
        </DateWrapper>
      </Wrapper>
    </>
  );
};

export default App;
