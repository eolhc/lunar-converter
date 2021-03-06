import styled, { css } from 'styled-components';

export const invisibleButton = css`
  border: none;
  background-color: transparent;
  display: block;
  font-family: inherit;

  &:focus,
  &:hover {
    outline: none;
    font-style: italic;
  }
`;

export const instructionText = css`
  text-transform: uppercase;
  font-size: 0.8em;
`;

export const Instruction = styled.div<{ isValid: boolean }>`
  width: 200px;
  margin: 0 auto;
  color: ${props => (props.isValid ? 'black' : '#fabc3c')};
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
  margin: 0 4px;
`;

export const ValidationText = styled.div`
  position: absolute;
  top: -42px;
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
