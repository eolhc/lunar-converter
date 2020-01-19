import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import DatePicker from './components/DatePicker';
import { getDate } from './utils/calendarHelper';

const Wrapper = styled.div`
  font-size: 8em;
`;

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Wrapper>
      LUNAR BIRTHDAY FINDER WHEN IS YOUR BIRTHDAY?
      <DatePicker onSubmit={getDate} />
    </Wrapper>
  </>
);

export default App;
