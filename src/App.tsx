import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import ChineseBirthdayConverter from './components/chineseBirthdayConverter';
import Title from './components/title';
import ConversionOptions from './components/conversionOptions';
import Navigation from './components/navigation';
import WesternDateConverter from './components/westernDateConverter';
import { getConversionOptionsLabel } from './utils';

const Wrapper = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: 'Forum';
  height: 100%;
  justify-content: center;

  @media (min-width: 480px) {
    font-size: 24px;
  }
`;

const Converter = styled.div`
  height: 1em;
  display: flex;
  align-items: center;
  position: absolute;
`;

const App: React.FC = () => {
  const converterRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<string | null>(null);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Title />
        {type ? (
          <Navigation
            onBack={() => setType(null)}
            title={type && getConversionOptionsLabel(type)}
          />
        ) : (
          <ConversionOptions setType={setType} />
        )}
        <Converter ref={converterRef}>
          {type === 'birthday' && <ChineseBirthdayConverter />}
          {(type === 'cny' || type === 'qingMing') && (
            <WesternDateConverter conversionType={type} />
          )}
        </Converter>
      </Wrapper>
    </>
  );
};

export default App;
