import React from 'react';
import styled from 'styled-components';
import { invisibleButton } from './styles';

const NavigationWrapper = styled.button`
  ${invisibleButton}
  position: absolute;
  position: absolute;
  left: 24px;
  top: 24px;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const Navigation: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <NavigationWrapper onClick={onBack}>Back to menu</NavigationWrapper>
);

export default Navigation;
