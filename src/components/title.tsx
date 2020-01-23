import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from '../utils';

const SMALL_DEVICE_DY = '14';
const BIGGER_DEVICE_DY = '8';

const CircleText = styled.svg`
  font-size: 14.5px;
  height: 100%;
`;

const Title: React.FC = ({ children }) => {
  const [dy, setDy] = useState(SMALL_DEVICE_DY);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleResize = debounce(() => {
    const isSmallDevice = window.innerWidth <= 480;
    setDy(isSmallDevice ? SMALL_DEVICE_DY : BIGGER_DEVICE_DY);
  }, 200);

  return (
    <CircleText viewBox="0 0 100 100">
      <title>LUNAR DATE CONVERTER</title>
      <defs>
        <path d="M25,50a25,25 0 1,0 50,0a25,25 0 1,0 -50,0" id="textcircle" />
      </defs>
      <text dy={dy}>
        <textPath xlinkHref="#textcircle">LUNAR DATE CONVERTER</textPath>
      </text>
      {children}
    </CircleText>
  );
};

export default Title;
