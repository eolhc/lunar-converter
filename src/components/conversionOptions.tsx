import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import usePositioner from '../hooks/usePositioner';

const OptionWrapper = styled.div<{ left: number; top: number }>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  text-align: center;
  opacity: ${props => (props.left === 0 && props.top === 0 ? 0 : 1)};
`;

export const invisibleButton = css`
  border: none;
  background-color: transparent;
  display: block;
  font-family: inherit;
  margin: 0 auto;

  &:focus,
  &:hover {
    outline: none;
    font-style: italic;
  }
`;

const Button = styled.button`
  font-size: inherit;
  margin-bottom: 2px;
  ${invisibleButton}
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
        <Button key={o.type} onClick={() => setType(o.type)}>
          {o.label}
        </Button>
      ))}
    </OptionWrapper>
  );
};

export default ConversionOptions;
