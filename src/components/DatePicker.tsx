import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import useValidation from '../hooks/useValidation';
import { Fade, Slide } from './animations';

export type Birthdate = {
  day: string;
  month: string;
  year: string;
};

type Props = {
  onSubmit: (days: Birthdate) => void;
};

const DatePickerInput = styled.input<{ shortInput: boolean }>`
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
`;

const DatePicker: React.FC<Props> = ({ onSubmit }) => {
  const [didSubmit, setDidSubmit] = useState(false);

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
      {didSubmit ? (
        <CSSTransition in={didSubmit} classNames="slide-left" timeout={2000}>
          <Slide>{day}</Slide>
        </CSSTransition>
      ) : (
        <DatePickerInput
          shortInput
          onChange={e => handleChange('day', e.currentTarget.value)}
          value={day}
          placeholder="DD"
        />
      )}
      {didSubmit ? (
        ' '
      ) : (
        <CSSTransition
          mountOnEnter
          in={!didSubmit}
          timeout={200}
          classNames="fade"
          unmountOnExit
        >
          <Fade>/</Fade>
        </CSSTransition>
      )}
      {didSubmit ? (
        month
      ) : (
        <DatePickerInput
          shortInput
          onChange={e => handleChange('month', e.currentTarget.value)}
          value={month}
          placeholder="MM"
        />
      )}
      {didSubmit ? (
        ' '
      ) : (
        <CSSTransition
          mountOnEnter
          in={!didSubmit}
          timeout={200}
          classNames="fade"
          unmountOnExit
        >
          <Fade>/</Fade>
        </CSSTransition>
      )}
      {didSubmit ? (
        <CSSTransition
          in={didSubmit}
          classNames="slide-right"
          timeout={2000}
          onEntered={() => {
            console.log('set western birthday');
            onSubmit({ day, month, year });
          }}
        >
          <Slide>{year}</Slide>
        </CSSTransition>
      ) : (
        <DatePickerInput
          onChange={e => handleChange('year', e.currentTarget.value)}
          value={year}
          placeholder="YYYY"
          shortInput={false}
        />
      )}
      {dayValidationText && <div>{dayValidationText}</div>}
      {monthValidationText && <div>{monthValidationText}</div>}
      {yearValidationText && <div>{yearValidationText}</div>}
      {!didSubmit && (
        <button disabled={!allValid} onClick={() => setDidSubmit(true)}>
          calculate
        </button>
      )}
    </div>
  );
};

export default DatePicker;
