import React from 'react';
import styled from 'styled-components';

const CircleText = styled.svg`
  font-size: 14.5px;
  height: 100%;
`;

const Title: React.FC = ({ children }) => (
  <CircleText viewBox="0 0 100 100">
    <title>LUNAR DATE CONVERTER</title>
    <defs>
      <path d="M25,50a25,25 0 1,0 50,0a25,25 0 1,0 -50,0" id="textcircle" />
    </defs>
    <text dy="6">
      <textPath xlinkHref="#textcircle">LUNAR DATE CONVERTER</textPath>
    </text>
    {children}
  </CircleText>
);

export default Title;
