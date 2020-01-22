import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { DatePickerInput, Instruction, Calculator, Button } from './styles';
import useValidation from '../hooks/useValidation';
import { getConversionOptionsLabel } from '../utils';
import { getChineseNewYear, getQingMing } from '../utils/calendarHelper';
import WesternDateResult from './westernDateResult';
import { Fade } from './animations';

const InputWrapper = styled.div`
  margin-bottom: 4px;
`;

const WesternDateConverter: React.FC<{
  conversionType: string;
  setUpdateValue: (updateValue: number) => void;
}> = ({ conversionType, setUpdateValue }) => {
  const [year, setYear] = useState('');
  const [date, setDate] = useState<Date>();

  const validationText = useValidation({
    cny: year
  });

  useEffect(() => {
    setUpdateValue(Math.random());
  }, [year, date]);

  const allValid = !validationText && year;
  const label = getConversionOptionsLabel(conversionType);

  const submitYear = () => {
    if (conversionType === 'cny') {
      const cny = getChineseNewYear(parseInt(year, 10));
      setDate(cny);
    }
    if (conversionType === 'qingMing') {
      const qingMing = getQingMing(parseInt(year, 10));
      setDate(qingMing);
    }
  };

  return date ? (
    <CSSTransition in={!!date} timeout={1000} classNames="fade" unmountOnExit>
      <Fade>
        <WesternDateResult date={date} />
      </Fade>
    </CSSTransition>
  ) : (
    <CSSTransition in={!!date} timeout={1000} classNames="fade">
      <Calculator>
        <div>
          <InputWrapper>
            <DatePickerInput
              onChange={e => setYear(e.currentTarget.value.slice(0, 4))}
              value={year}
              placeholder="YYYY"
              shortInput={false}
            />
          </InputWrapper>
        </div>
        {!allValid ? (
          <Instruction isValid={!!validationText}>
            ENTER A {validationText && 'VALID '}YEAR
          </Instruction>
        ) : (
          <Button onClick={submitYear}>Click for {label}</Button>
        )}
      </Calculator>
    </CSSTransition>
  );
};

export default WesternDateConverter;
