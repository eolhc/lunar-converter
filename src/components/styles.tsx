import styled, { css } from 'styled-components';

export const invisibleButton = css`
  border: none;
  background-color: transparent;
  display: block;
  font-family: inherit;
  margin: 0 auto;

  &:focus,
  &:hover {
    outline: none;
    font-style: italic;
  }
`;

export const instructionText = css`
  text-transform: uppercase;
  font-size: 0.5em;
`;

export const Instruction = styled.div<{ isValid: boolean }>`
  width: 160px;
  margin: 0 auto;
  color: ${props => (props.isValid ? '#fabc3c' : 'black')};
  ${instructionText};
  text-align: center;
`;

export const Calculator = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  ${instructionText}
  ${invisibleButton}
  border-bottom: 1px solid black;
  padding-bottom: 2px;
`;

export const ValidationText = styled.div`
  position: absolute;
  top: -28px;
  font-size: 14px;
  text-transform: uppercase;
  color: #fabc3c;
`;

export const ResultWrapper = styled.span`
  font-family: 'Racing Sans One';
  text-align: center;
`;

export const ResultText = styled.span`
  font-size: 14px;
  font-family: 'Forum', sans-serif;
  margin: 0 8px 0 4px;
  text-transform: uppercase;
`;
