import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import usePositioner from './hooks/usePositioner';
import ChineseBirthdayConverter from './components/ChineseBirthdayConverter';
import Title from './components/title';
import ConversionOptions from './components/conversionOptions';
import Navigation from './components/navigation';
import WesternDateConverter from './components/westernDateConverter';
import { getConversionOptionsLabel } from './utils';

const Wrapper = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  font-family: 'Forum';
  height: 100%;
  justify-content: center;
`;

const Converter = styled.div<{ left: number; top: number }>`
  height: 1em;
  display: flex;
  align-items: center;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  opacity: ${props => (props.left === 0 && props.top === 0 ? 0 : 1)};
`;

const App: React.FC = () => {
  const converterRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<string | null>(null);
  const [updateValue, setUpdateValue] = useState<number>(0);

  const { left, top } = usePositioner(converterRef, updateValue);

  useEffect(() => {
    setUpdateValue(Math.random());
  }, [type]);

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
        <Converter ref={converterRef} left={left} top={top}>
          {type === 'birthday' && (
            <ChineseBirthdayConverter setUpdateValue={setUpdateValue} />
          )}
          {(type === 'cny' || type === 'qingMing') && (
            <WesternDateConverter
              conversionType={type}
              setUpdateValue={setUpdateValue}
            />
          )}
        </Converter>
      </Wrapper>
    </>
  );
};

export default App;
