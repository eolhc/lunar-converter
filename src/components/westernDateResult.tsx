import React from 'react';
import { Instruction } from './styles';
import { DAYS, MONTHS } from '../config';

const WesternDateResult: React.FC<{ date: Date }> = ({ date }) => {
  return (
    <Instruction isValid>
      {DAYS[date.getDay()]} {date.getDate()} {MONTHS[date.getMonth()]}{' '}
      {date.getFullYear()}
    </Instruction>
  );
};

export default WesternDateResult;
