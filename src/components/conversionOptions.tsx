import React, { useRef } from 'react';
import styled from 'styled-components';
import usePositioner from '../hooks/usePositioner';

const OptionWrapper = styled.div<{ left: number; top: number }>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  text-align: center;
`;

const SneakyButton = styled.button`
  border: none;
  background-color: transparent;
  display: block;
  font-family: inherit;
  font-size: inherit;
  margin: 0 auto;
  margin-bottom: 2px;

  &:focus,
  &:hover {
    outline: none;
    font-style: italic;
  }
`;

const options = [
  {
    label: 'Chinese New Year',
    type: 'cny'
  },
  {
    label: 'Your Lunar Birthday',
    type: 'birthday'
  },
  {
    label: 'Qing Ming',
    type: 'qingMing'
  }
];

type Props = {
  setType: (type: string) => void;
};

const ConversionOptions: React.FC<Props> = ({ setType }) => {
  const optionWrapperRef = useRef<HTMLDivElement>(null);

  const { left, top } = usePositioner(optionWrapperRef);

  return (
    <OptionWrapper ref={optionWrapperRef} left={left} top={top}>
      {options.map(o => (
        <SneakyButton key={o.type} onClick={() => setType(o.type)}>
          {o.label}
        </SneakyButton>
      ))}
    </OptionWrapper>
  );
};

export default ConversionOptions;
