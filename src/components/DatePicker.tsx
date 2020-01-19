import React, { useState } from 'react';
import styled from 'styled-components';
import useValidation from '../hooks/useValidation';

type Props = {
  onSubmit: (year: string, month: string, day: string) => void;
};
const DatePickerInput = styled.input<{ shortInput: boolean }>`
  background-color: transparent;
  border: none;
  font-size: 1em;
  width: ${props => (props.shortInput ? `2em` : `3em`)};
  padding: 0 8px;
  text-align: center;
`;

const DatePicker: React.FC<Props> = ({ onSubmit }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dayValidationText = useValidation('Day', day);
  const monthValidationText = useValidation('Month', month);
  const yearValidationText = useValidation('Year', year);

  const allValid =
    !dayValidationText &&
    !monthValidationText &&
    !yearValidationText &&
    day &&
    month &&
    year;

  const handleChange = (type: string, value: string) => {
    switch (type) {
      case 'day':
        setDay(value.slice(0, 2));
        return;
      case 'month':
        setMonth(value.slice(0, 2));
        return;
      case 'year':
        setYear(value.slice(0, 4));
        return;
      default:
        return;
    }
  };

  return (
    <div>
      <DatePickerInput
        shortInput
        onChange={e => handleChange('day', e.currentTarget.value)}
        value={day}
        placeholder="DD"
      />
      /
      <DatePickerInput
        shortInput
        onChange={e => handleChange('month', e.currentTarget.value)}
        value={month}
        placeholder="MM"
      />
      /
      <DatePickerInput
        onChange={e => handleChange('year', e.currentTarget.value)}
        value={year}
        placeholder="YYYY"
        shortInput={false}
      />
      {dayValidationText && <div>{dayValidationText}</div>}
      {monthValidationText && <div>{monthValidationText}</div>}
      {yearValidationText && <div>{yearValidationText}</div>}
      {
        <button disabled={!allValid} onClick={() => onSubmit(year, month, day)}>
          calculate
        </button>
      }
    </div>
  );
};

export default DatePicker;
