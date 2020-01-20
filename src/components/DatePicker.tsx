import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import useValidation from '../hooks/useValidation';
import { Fade, Slide } from './animations';
import { invisibleButton } from './conversionOptions';

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

const instructionText = css`
  text-transform: uppercase;
  font-size: 0.5em;
`;

const Instruction = styled.div`
  width: 160px;
  margin: 0 auto;
  ${instructionText}
`;

const Button = styled.button`
  ${instructionText}
  ${invisibleButton}
  border-bottom: 1px solid black;
  padding-bottom: 2px;
`;

const ValidationText = styled.div`
  position: absolute;
  top: -28px;
  font-size: 14px;
  text-transform: uppercase;
  color: #fabc3c;
`;

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

  &::placeholder {
    color: #fabc3c;
  }
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

  const allValid = !!validationText && day && month && year;

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
          <CSSTransition
            in={shouldAnimate}
            classNames="slide-left"
            timeout={2000}
          >
            <Slide>
              <DateWrapper>{day}</DateWrapper>
            </Slide>
          </CSSTransition>
        ) : (
          <DatePickerInput
            shortInput
            onChange={e => handleChange('day', e.currentTarget.value)}
            value={day}
            placeholder="DD"
          />
        )}
        {shouldAnimate ? (
          ' '
        ) : (
          <CSSTransition
            mountOnEnter
            in={!shouldAnimate}
            timeout={200}
            classNames="fade"
            unmountOnExit
          >
            <Fade>/</Fade>
          </CSSTransition>
        )}
        {shouldAnimate ? (
          <DateWrapper>{month}</DateWrapper>
        ) : (
          <DatePickerInput
            shortInput
            onChange={e => handleChange('month', e.currentTarget.value)}
            value={month}
            placeholder="MM"
          />
        )}
        {shouldAnimate ? (
          ' '
        ) : (
          <CSSTransition
            mountOnEnter
            in={!shouldAnimate}
            timeout={200}
            classNames="fade"
            unmountOnExit
          >
            <Fade>/</Fade>
          </CSSTransition>
        )}
        {shouldAnimate ? (
          <CSSTransition
            in={shouldAnimate}
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
        ) : (
          <DatePickerInput
            onChange={e => handleChange('year', e.currentTarget.value)}
            value={year}
            placeholder="YYYY"
            shortInput={false}
          />
        )}
      </div>
      {!shouldAnimate && !allValid && (
        <Instruction>ENTER YOUR BIRTHDAY</Instruction>
      )}
      {!shouldAnimate && allValid && (
        <Button
          onClick={() => {
            setShouldAnimate(true);
          }}
        >
          CLICK FOR your lunar birthday
        </Button>
      )}
    </Calculator>
  );
};

export default DatePicker;
