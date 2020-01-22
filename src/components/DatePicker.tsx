import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import SlashSeparator from './slashSeparator';
import useValidation from '../hooks/useValidation';
import { Slide } from './animations';
import { DatePickerInput, Instruction, Button, ValidationText } from './styles';

export type Birthdate = {
  day: number;
  month: number;
  year: number;
};

type Props = {
  onSubmit: (days: Birthdate) => void;
  setShouldAnimate: (shouldAnimate: boolean) => void;
  shouldAnimate: boolean;
};

const DateWrapper = styled.span`
  font-family: 'Racing Sans One';
`;

const Calculator = styled.div`
  text-align: center;
`;

const DatePicker: React.FC<Props> = ({
  onSubmit,
  setShouldAnimate,
  shouldAnimate
}) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const validationText = useValidation({
    day,
    month,
    year
  });

  const allValid = !validationText && day && month && year;

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
    <Calculator>
      <div>
        {!!validationText && <ValidationText>{validationText}</ValidationText>}
        {shouldAnimate ? (
          <>
            <CSSTransition in classNames="slide-left" timeout={2000}>
              <Slide>
                <DateWrapper>{day}</DateWrapper>
              </Slide>
            </CSSTransition>{' '}
            <DateWrapper>{month}</DateWrapper>{' '}
            <CSSTransition
              in
              classNames="slide-right"
              timeout={2000}
              onEntered={() => {
                onSubmit({
                  day: parseInt(day, 10),
                  month: parseInt(month, 10),
                  year: parseInt(year, 10)
                });
                setShouldAnimate(false);
              }}
            >
              <Slide>
                <DateWrapper>{year}</DateWrapper>
              </Slide>
            </CSSTransition>
          </>
        ) : (
          <>
            <DatePickerInput
              shortInput
              onChange={e => handleChange('day', e.currentTarget.value)}
              value={day}
              placeholder="DD"
            />
            <SlashSeparator />
            <DatePickerInput
              shortInput
              onChange={e => handleChange('month', e.currentTarget.value)}
              value={month}
              placeholder="MM"
            />
            <SlashSeparator />
            <DatePickerInput
              onChange={e => handleChange('year', e.currentTarget.value)}
              value={year}
              placeholder="YYYY"
              shortInput={false}
            />
          </>
        )}
      </div>
      {!shouldAnimate && !allValid && (
        <Instruction isValid>ENTER YOUR BIRTHDAY</Instruction>
      )}
      {!shouldAnimate && allValid && (
        <Button onClick={() => setShouldAnimate(true)}>
          CLICK FOR your lunar birthday
        </Button>
      )}
    </Calculator>
  );
};

export default DatePicker;
