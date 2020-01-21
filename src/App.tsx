import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import ChineseBirthdayConverter from './components/ChineseBirthdayConverter';
import Title from './components/title';
import ConversionOptions from './components/conversionOptions';
import Navigation from './components/navigation';
import WesternDateConverter from './components/westernDateConverter';

const Wrapper = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  font-family: 'Forum';
  height: 100%;
  justify-content: center;
`;

const App: React.FC = () => {
  const [type, setType] = useState<string | null>(null);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Title />
        {type ? (
          <Navigation onBack={() => setType(null)} />
        ) : (
          <ConversionOptions setType={setType} />
        )}
        {type === 'birthday' ? (
          <ChineseBirthdayConverter conversionType={type} />
        ) : (
          <WesternDateConverter conversionType={type} />
        )}
      </Wrapper>
    </>
  );
};

export default App;
