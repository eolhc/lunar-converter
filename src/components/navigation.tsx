import React from 'react';
import styled from 'styled-components';
import { invisibleButton } from './styles';

const NavigationItem = styled.button`
  ${invisibleButton}
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  margin: 24px;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
`;

const Navigation: React.FC<{ onBack: () => void; title?: string }> = ({
  onBack,
  title
}) => (
  <NavigationWrapper>
    <NavigationItem onClick={onBack}>Back to menu</NavigationItem>
    <NavigationItem>{title}</NavigationItem>
  </NavigationWrapper>
);

export default Navigation;
