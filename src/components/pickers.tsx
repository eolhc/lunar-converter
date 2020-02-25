import React from 'react';
import styled from 'styled-components';

export const DatePickerInput = styled.input<{ shortInput: boolean }>`
  background-color: transparent;
  border: none;
  font-size: 1em;
  width: ${props => (props.shortInput ? '1.8em' : '3em')};
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

const DayPicker: React.FC<{
  day: string;
  onChange: (day: string) => void;
}> = ({ day, onChange }) => (
  <DatePickerInput
    shortInput
    onChange={e => onChange(e.currentTarget.value)}
    value={day}
    placeholder="DD"
  />
);

const MonthPicker: React.FC<{
  month: string;
  onChange: (month: string) => void;
}> = ({ month, onChange }) => (
  <DatePickerInput
    shortInput
    onChange={e => onChange(e.currentTarget.value)}
    value={month}
    placeholder="MM"
  />
);

const YearPicker: React.FC<{
  year: string;
  onChange: (year: string) => void;
}> = ({ year, onChange }) => (
  <DatePickerInput
    onChange={e => onChange(e.currentTarget.value)}
    value={year}
    placeholder="YYYY"
    shortInput={false}
  />
);

export { DayPicker, MonthPicker, YearPicker };
