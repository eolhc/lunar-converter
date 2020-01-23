import React, { useRef } from 'react';
import styled from 'styled-components';
import { CONVERSION_OPTIONS } from '../config';
import { invisibleButton } from './styles';

const OptionWrapper = styled.div`
  position: absolute;
  text-align: center;
`;

const Button = styled.button`
  font-size: inherit;
  margin-bottom: 2px;
  margin: 0 auto;
  ${invisibleButton};
`;

type Props = {
  setType: (type: string) => void;
};

const ConversionOptions: React.FC<Props> = ({ setType }) => {
  const optionWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <OptionWrapper ref={optionWrapperRef}>
      {CONVERSION_OPTIONS.map(o => (
        <Button key={o.type} onClick={() => setType(o.type)}>
          {o.label}
        </Button>
      ))}
    </OptionWrapper>
  );
};

export default ConversionOptions;
