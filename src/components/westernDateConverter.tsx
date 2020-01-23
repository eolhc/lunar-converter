import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Instruction, Calculator, Button } from './styles';
import useValidation from '../hooks/useValidation';
import { getConversionOptionsLabel } from '../utils';
import { getChineseNewYear, getQingMing } from '../utils/calendarHelper';
import WesternDateResult from './westernDateResult';
import { YearPicker } from './pickers';
import { Fade } from './animations';

const InputWrapper = styled.div`
  margin-bottom: 4px;
`;

const WesternDateConverter: React.FC<{
  conversionType: string;
}> = ({ conversionType }) => {
  const [year, setYear] = useState('');
  const [date, setDate] = useState<Date>();

  const validationText = useValidation({
    cny: year
  });

  const allValid = !validationText && !!year;
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
            <YearPicker
              year={year}
              onChange={(y: string) => setYear(y.slice(0, 4))}
            />
          </InputWrapper>
        </div>
        {!allValid ? (
          <Instruction isValid={!allValid}>
            ENTER A {validationText && year.length === 4 && 'VALID '}YEAR
          </Instruction>
        ) : (
          <Button onClick={submitYear}>Click for {label}</Button>
        )}
      </Calculator>
    </CSSTransition>
  );
};

export default WesternDateConverter;
