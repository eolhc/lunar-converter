import React, { useRef } from 'react';
import styled from 'styled-components';
import usePositioner from '../hooks/usePositioner';
import { CONVERSION_OPTIONS } from '../config';
import { invisibleButton } from './styles';

const OptionWrapper = styled.div<{ left: number; top: number }>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  text-align: center;
  opacity: ${props => (props.left === 0 && props.top === 0 ? 0 : 1)};
`;

const Button = styled.button`
  font-size: inherit;
  margin-bottom: 2px;
  ${invisibleButton};
`;

type Props = {
  setType: (type: string) => void;
};

const ConversionOptions: React.FC<Props> = ({ setType }) => {
  const optionWrapperRef = useRef<HTMLDivElement>(null);

  const { left, top } = usePositioner(optionWrapperRef);

  return (
    <OptionWrapper ref={optionWrapperRef} left={left} top={top}>
      {CONVERSION_OPTIONS.map(o => (
        <Button key={o.type} onClick={() => setType(o.type)}>
          {o.label}
        </Button>
      ))}
    </OptionWrapper>
  );
};

export default ConversionOptions;
