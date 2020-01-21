import styled, { css } from 'styled-components';

export const DatePickerInput = styled.input<{ shortInput: boolean }>`
  background-color: transparent;
  border: none;
  font-size: 1em;
  width: ${props => (props.shortInput ? '1.8em' : '2.5em')};
  /* padding: 0 8px; */
  text-align: center;
  border: none;
  font-family: 'Racing Sans One';
  height: 0.75em;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fabc3c;
  }
`;

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
