import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';

const Wrapper = styled.div`
  font-size: 8em;
`;

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Wrapper>LUNAR BIRTHDAY FINDER WHEN IS YOUR BIRTHDAY?</Wrapper>
  </>
);

export default App;
